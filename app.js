(() => {
'use strict';

/* ============================================================
   Estado y utilidades
   ============================================================ */
const LS_KEY = 'mapa-aprendizaje-nivel1-v3';
const SEED_VERSION = window.SEED_VERSION || 1;
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const clone = o => JSON.parse(JSON.stringify(o));

const STATUS = {
  pendiente:  { label:'Pendiente',  color:'#41566e' },
  estudiando: { label:'Estudiando', color:'#4da3ff' },
  dominado:   { label:'Dominado',   color:'#35d07f' },
  repasar:    { label:'Repasar',    color:'#f5b942' }
};
const PALETTE = ['#4da3ff','#6ee7b7','#f5b942','#f472b6','#a78bfa','#38bdf8','#34d399','#fb923c','#e879f9','#facc15','#22d3ee','#a3e635','#fb7185','#c084fc'];

let DATA = loadData();
let GLOSSARY = [];
const UI = {
  view: 'route',
  open: null,
  history: [],
  q: '',
  filter: 'all',
  mapModule: null,
  vt: { x: 0, y: 0, k: 1 },
  fitNext: true,
  newReq: [],
  editing: null,
  editTitle: null,
  editDesc: null,
  editReq: null
};

function refreshSeedContent(d) {
  const seed = window.SEED;
  const seedTopicIds = new Set(seed.topics.map(t => t.id));
  const seedModuleIds = new Set(seed.modules.map(m => m.id));
  const topics = seed.topics.map(t => clone(t));
  d.topics.forEach(t => { if (!seedTopicIds.has(t.id)) topics.push(t); });
  const modules = seed.modules.map(m => clone(m));
  d.modules.forEach(m => { if (!seedModuleIds.has(m.id)) modules.push(m); });
  return { modules, topics, status: d.status, v: SEED_VERSION };
}

function loadData() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      let d = JSON.parse(raw);
      if (d && Array.isArray(d.modules) && Array.isArray(d.topics)) {
        if (!d.status || typeof d.status !== 'object') d.status = {};
        if ((d.v || 1) < SEED_VERSION) {
          d = refreshSeedContent(d);
          try { localStorage.setItem(LS_KEY, JSON.stringify(d)); } catch (e) {}
        }
        return d;
      }
    }
  } catch (e) { console.warn('Datos guardados ilegibles, se usa el contenido original.', e); }
  const seed = clone(window.SEED);
  seed.v = SEED_VERSION;
  return seed;
}
function save() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(DATA)); }
  catch (e) { toast('No se pudo guardar en el navegador'); }
}

/* ---------- consultas ---------- */
const moduleById = id => DATA.modules.find(m => m.id === id) || null;
const topicById  = id => DATA.topics.find(t => t.id === id) || null;
const nodeById   = id => topicById(id) || moduleById(id);
const topicsOf   = mid => DATA.topics.filter(t => t.m === mid).sort((a, b) => a.order - b.order);
function colorOf(mid) {
  const m = moduleById(mid);
  const i = m ? DATA.modules.indexOf(m) : 0;
  return PALETTE[i % PALETTE.length];
}
const statusOf = id => (DATA.status[id] && DATA.status[id].s) || 'pendiente';
const noteOf   = id => (DATA.status[id] && DATA.status[id].n) || '';
function setStatus(id, s) {
  DATA.status[id] = Object.assign({}, DATA.status[id], { s });
  save();
}
function setNote(id, n) {
  DATA.status[id] = Object.assign({}, DATA.status[id], { n });
  save();
}
const prereqsOf = t => (t.req || []).map(topicById).filter(Boolean);
const unmetPrereqs = t => prereqsOf(t).filter(p => statusOf(p.id) !== 'dominado');
const dependentsOf = id => DATA.topics.filter(t => (t.req || []).includes(id));
function cmpTopics(a, b) {
  const ma = moduleById(a.m), mb = moduleById(b.m);
  return ((ma ? ma.order : 99) - (mb ? mb.order : 99)) || (a.order - b.order);
}
function modulePrereqs(mid) {
  const out = new Set();
  topicsOf(mid).forEach(t => prereqsOf(t).forEach(p => { if (p.m !== mid) out.add(p.m); }));
  return Array.from(out);
}
function recommendedTopic() {
  const cands = DATA.topics.filter(t => statusOf(t.id) !== 'dominado' && unmetPrereqs(t).length === 0);
  return cands.find(t => statusOf(t.id) === 'estudiando')
    || cands.find(t => statusOf(t.id) === 'repasar')
    || cands.slice().sort(cmpTopics)[0] || null;
}
function dependsOn(id, target, seen) {
  if (id === target) return true;
  const t = topicById(id);
  if (!t) return false;
  seen = seen || new Set();
  if (seen.has(id)) return false;
  seen.add(id);
  return (t.req || []).some(r => dependsOn(r, target, seen));
}
function moduleProgress(mid) {
  const ts = topicsOf(mid);
  const done = ts.filter(t => statusOf(t.id) === 'dominado').length;
  return { done, total: ts.length, pct: ts.length ? Math.round(done / ts.length * 100) : 0 };
}

/* ============================================================
   Glosario + enlaces automáticos entre conceptos
   ============================================================ */
const ALIASES = {
  't1-2': ['Internet'], 't1-3': ['WWW'], 't1-5': ['aplicación web', 'aplicaciones web'],
  't1-6': ['página web', 'sitio web'], 't1-7': ['SPA', 'MPA'],
  't1-8': ['TCP/IP', 'TCP', 'protocolo TCP'],
  't1-9': ['UDP', 'TCP vs. UDP', 'TCP vs UDP'],
  't1-10': ['paquete', 'paquetes', 'paquete de datos', 'paquetes de datos'],
  't2-1': ['Frontend', 'front-end', 'frontends'], 't2-2': ['Backend', 'back-end', 'backends'],
  't2-6': ['Full Stack'], 't2-8': ['Node.js', 'PHP', 'Python', 'tecnologías web'],
  't2-9': ['lógica de negocio'],
  't3-1': ['cliente', 'clientes'], 't3-2': ['servidor', 'servidores'],
  't3-5': ['servidor web', 'servidor de aplicaciones'], 't3-6': ['hosting'],
  't3-7': ['servidor local', 'servidor remoto'],
  't4-4': ['tres capas', '3 capas'], 't4-8': ['API', 'APIs'],
  't4-9': ['API REST', 'APIs REST', 'REST'], 't4-10': ['base de datos'],
  't5-1': ['HTTP'], 't5-2': ['HTTPS'], 't5-4': ['SSL', 'TLS'], 't5-5': ['certificado digital'],
  't5-8': ['puerto', 'puertos'], 't5-9': ['headers', 'cabeceras', 'cabecera'], 't5-10': ['body', 'cuerpo'],
  't6-1': ['solicitud', 'solicitudes', 'petición', 'peticiones'], 't6-2': ['respuesta', 'respuestas'],
  't6-3': ['request', 'requests'], 't6-4': ['response', 'responses'],
  't6-5': ['Content-Type'], 't6-6': ['Accept'], 't6-7': ['Authorization'],
  't6-8': ['User-Agent'], 't6-9': ['JSON'], 't6-10': ['XML'], 't6-12': ['DevTools', 'Postman'],
  't7-1': ['método HTTP', 'métodos HTTP'],
  't7-2': ['GET'], 't7-3': ['POST'], 't7-4': ['PUT'], 't7-5': ['PATCH'], 't7-6': ['DELETE'],
  't7-9': ['método seguro', 'métodos seguros'], 't7-10': ['idempotencia', 'idempotente', 'idempotentes'],
  't8-1': ['código de estado', 'códigos de estado'], 't8-4': ['redirección', 'redirecciones'],
  't8-7': ['401', '403'], 't8-8': ['400', '422'],
  't9-1': ['URL', 'URLs'], 't9-2': ['URI'], 't9-4': ['estructura de una URL'],
  't9-5': ['dominio', 'dominios'], 't9-6': ['DNS'], 't9-7': ['dirección IP', 'direcciones IP', 'IP'],
  't9-8': ['path parameters', 'parámetros de ruta'], 't9-9': ['query parameters', 'parámetros de consulta'],
  't9-11': ['URL encoding', 'codificación URL'],
  't10-1': ['resolución DNS'], 't10-3': ['registro A', 'registros DNS', 'CNAME', 'MX'],
  't11-1': ['navegador', 'navegadores'], 't11-2': ['motor de renderizado'],
  't11-3': ['HTML', 'CSS', 'JavaScript'],
  't11-4': ['DOM'], 't11-5': ['BOM'],
  't12-1': ['stateless', 'sin estado'], 't12-2': ['cookies', 'cookie'],
  't12-3': ['sesión', 'sesiones'], 't12-4': ['localStorage'], 't12-5': ['sessionStorage'],
  't13-1': ['JSON'], 't13-3': ['JSON.stringify', 'JSON.parse'],
  't13-4': ['MIME', 'MIME Types', 'tipos de contenido'],
  't14-1': ['autenticación', 'autenticado', 'autenticada'],
  't14-2': ['autorización'], 't14-4': ['token', 'tokens'], 't14-5': ['JWT'],
  't14-6': ['CORS'], 't14-7': ['CSRF'], 't14-8': ['XSS'], 't14-9': ['validación']
};

function cleanPart(s) {
  return s.replace(/^(el|la|los|las|un|una)\s+/i, '').replace(/\s*\([^)]*\)\s*$/, '').trim();
}
function buildGlossary() {
  const map = new Map();
  const add = (term, id) => {
    term = String(term || '').trim();
    if (term.length < 2) return;
    const k = term.toLowerCase();
    if (!map.has(k)) map.set(k, { term, id });
  };
  DATA.topics.forEach(t => {
    (ALIASES[t.id] || []).forEach(a => add(a, t.id));
    const title = t.title.replace(/[¿?]/g, '').trim();
    const base = title.replace(/^Qué (es|son)\s+/i, '').replace(/^(el|la|los|las|un|una)\s+/i, '').trim();
    if (base.length <= 28 && !/^(Qué|Cómo|Cuándo|Cuáles|Diferencias|Métodos|Cuál)\b/i.test(base)) {
      add(cleanPart(base), t.id);
    }
  });
  return Array.from(map.values()).sort((a, b) => b.term.length - a.term.length);
}
function linkify(text, selfId) {
  const raw = String(text || '');
  if (!GLOSSARY.length) GLOSSARY = buildGlossary();
  const hits = [];
  for (const g of GLOSSARY) {
    let re;
    try {
      re = new RegExp('(?<![\\p{L}\\p{N}])(' + g.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?![\\p{L}\\p{N}])', 'giu');
    } catch (e) { continue; }
    let m;
    while ((m = re.exec(raw))) {
      hits.push({ start: m.index, end: m.index + m[0].length, id: g.id, text: m[0] });
    }
  }
  hits.sort((a, b) => (a.start - b.start) || ((b.end - b.start) - (a.end - a.start)));
  const out = [];
  let cursor = 0;
  for (const h of hits) {
    if (h.start < cursor) continue;
    if (h.id === selfId) {
      out.push(esc(raw.slice(cursor, h.end)));
      cursor = h.end;
      continue;
    }
    out.push(esc(raw.slice(cursor, h.start)));
    out.push('<button type="button" class="term" data-jump="' + h.id + '" title="Ir a: ' + esc((topicById(h.id) || {}).title || '') + '">' + esc(h.text) + '</button>');
    cursor = h.end;
  }
  out.push(esc(raw.slice(cursor)));
  return out.join('');
}

/* ============================================================
   Cabecera, vistas y navegación
   ============================================================ */
function renderHeader() {
  const total = DATA.topics.length;
  const done = DATA.topics.filter(t => statusOf(t.id) === 'dominado').length;
  const pct = total ? Math.round(done / total * 100) : 0;
  const C = 2 * Math.PI * 15;
  $('#ring-fg').setAttribute('stroke-dashoffset', String(C * (1 - pct / 100)));
  $('#progress-pct').textContent = pct + '%';
  $('#progress-text').textContent = done + '/' + total;
  $$('.views button').forEach(b => {
    const on = b.dataset.view === UI.view;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on ? 'true' : 'false');
  });
}
function legendHTML() {
  return '<div class="legend">' + Object.entries(STATUS).map(([k, v]) =>
    '<span class="lg"><i style="background:' + v.color + '"></i>' + v.label + '</span>').join('') +
    '<span class="lg"><i style="background:#f5b942;opacity:.5"></i>Faltan requisitos</span></div>';
}
function renderStageHead() {
  const head = $('#stage-head');
  if (UI.view === 'route') {
    const back = UI.history.length
      ? '<button class="link" id="go-back">↩ Volver a ' + esc((nodeById(UI.history[UI.history.length - 1]) || {}).title || '') + '</button>'
      : '';
    head.innerHTML = '<div class="crumb"><span class="crumb-title">Ruta principal</span>' +
      '<span class="crumb-sub">' + DATA.modules.length + ' módulos · ' + DATA.topics.length + ' conceptos</span>' + back + '</div>' + legendHTML();
  } else if (UI.view === 'review') {
    head.innerHTML = '<div class="crumb"><span class="crumb-title">Repaso y desbloqueo</span>' +
      '<span class="crumb-sub">Qué puedes estudiar ahora y a dónde volver</span></div>';
  } else {
    const m = UI.mapModule ? moduleById(UI.mapModule) : null;
    head.innerHTML = '<div class="crumb">' +
      (m ? '<button class="link" id="map-back">← Módulos</button>' : '<span class="crumb-title">Mapa de dependencias</span>') +
      '<span class="crumb-sub">' + (m ? 'M' + m.order + ' · ' + esc(m.title) + ' · clic en un concepto para abrirlo'
        : 'Cada flecha indica “necesitas antes” · haz clic en un módulo para ver sus conceptos') + '</span>' +
      '</div>' + legendHTML();
  }
}
function setView(v) {
  UI.view = v;
  UI.fitNext = true;
  if (v !== 'map') UI.mapModule = null;
  renderAll();
}
function renderAll() {
  renderHeader();
  $('#routeview').hidden = UI.view !== 'route';
  $('#pathview').hidden = UI.view !== 'review';
  $('#canvas-wrap').hidden = UI.view !== 'map';
  renderStageHead();
  if (UI.view === 'route') renderRoute();
  else if (UI.view === 'review') renderReview();
  else renderMap();
  syncFormOptions();
}
function openConcept(id, push) {
  const t = topicById(id);
  if (!t) return;
  if (UI.editing && UI.editing !== id) clearEdit();
  if (push !== false && UI.open && UI.open !== id) UI.history.push(UI.open);
  UI.open = id;
  UI.view = 'route';
  if (!matchesFilter(t)) {
    UI.q = '';
    UI.filter = 'all';
    $('#search').value = '';
    $('#status-filter').value = 'all';
  }
  renderAll();
  focusCard(id);
}
function focusCard(id) {
  requestAnimationFrame(() => {
    const card = document.getElementById('card-' + id);
    if (!card) return;
    card.scrollIntoView({ block: 'center', behavior: 'smooth' });
    card.classList.add('flash');
    setTimeout(() => card.classList.remove('flash'), 1500);
  });
}
function goBack() {
  const prev = UI.history.pop();
  if (!prev) return;
  UI.open = prev;
  renderAll();
  focusCard(prev);
}

/* ============================================================
   Toast y menú
   ============================================================ */
let toastTimer = null;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3400);
}
function closeMenu() { $('#menu').hidden = true; }

/* ============================================================
   Formulario de alta
   ============================================================ */
function syncFormOptions() {
  const modSel = $('#add-module');
  const prev = modSel.value;
  modSel.innerHTML = DATA.modules.slice().sort((a, b) => a.order - b.order)
    .map(m => '<option value="' + m.id + '">M' + m.order + ' · ' + esc(m.title) + '</option>').join('') +
    '<option value="__new">＋ Nuevo módulo…</option>';
  if (DATA.modules.some(m => m.id === prev) || prev === '__new') modSel.value = prev;
  else if (DATA.modules[0]) modSel.value = DATA.modules[0].id;

  const reqSel = $('#add-req');
  reqSel.innerHTML = '<option value="">+ Añadir requisito…</option>' +
    DATA.modules.slice().sort((a, b) => a.order - b.order).map(m => {
      const opts = topicsOf(m.id).filter(t => !UI.newReq.includes(t.id) && t.id !== UI.pendingId)
        .map(t => '<option value="' + t.id + '">' + esc(t.title) + '</option>').join('');
      return opts ? '<optgroup label="M' + m.order + ' · ' + esc(m.title) + '">' + opts + '</optgroup>' : '';
    }).join('');
  reqSel.value = '';
  renderNewReqChips();
}
function renderNewReqChips() {
  const box = $('#req-chips');
  if (!UI.newReq.length) { box.innerHTML = '<span class="chip" style="opacity:.6">Sin requisitos</span>'; return; }
  box.innerHTML = UI.newReq.map(id => {
    const t = topicById(id);
    return '<span class="chip">' + esc(t ? t.title : id) + '<button type="button" data-unreq="' + id + '" aria-label="Quitar">×</button></span>';
  }).join('');
}
function resetAddForm() {
  $('#add-title').value = '';
  $('#add-desc').value = '';
  UI.newReq = [];
  $('#add-newmodule').hidden = true;
  $('#add-newmodule').value = '';
  syncFormOptions();
}
function handleAdd(ev) {
  ev.preventDefault();
  const title = $('#add-title').value.trim();
  if (!title) { $('#add-title').focus(); return; }
  let mid = $('#add-module').value;
  if (mid === '__new') {
    const name = $('#add-newmodule').value.trim() || 'Módulo sin título';
    mid = 'm' + Date.now();
    DATA.modules.push({
      id: mid, order: DATA.modules.length + 1, title: name, priority: 'media',
      desc: 'Módulo creado por ti.'
    });
  }
  const m = moduleById(mid);
  if (!m) return;
  const id = 't' + Date.now();
  const order = topicsOf(mid).reduce((mx, t) => Math.max(mx, t.order), 0) + 1;
  DATA.topics.push({
    id, m: mid, order, title,
    desc: $('#add-desc').value.trim() || 'Sin explicación todavía. Edita el concepto para añadirla.',
    req: UI.newReq.slice()
  });
  DATA.status[id] = { s: 'pendiente' };
  GLOSSARY = [];
  save();
  UI.open = id;
  UI.history = [];
  UI.view = 'route';
  resetAddForm();
  $('#add-module').value = mid;
  renderAll();
  focusCard(id);
  toast('Concepto añadido a la ruta');
}
function wireForm() {
  $('#add-form').addEventListener('submit', handleAdd);
  $('#add-req').addEventListener('change', e => {
    const id = e.target.value;
    if (id && !UI.newReq.includes(id)) { UI.newReq.push(id); renderNewReqChips(); }
    e.target.value = '';
  });
  $('#req-chips').addEventListener('click', e => {
    const b = e.target.closest('[data-unreq]');
    if (!b) return;
    UI.newReq = UI.newReq.filter(x => x !== b.dataset.unreq);
    renderNewReqChips();
    syncFormOptions();
  });
  $('#add-module').addEventListener('change', e => {
    const isNew = e.target.value === '__new';
    const inp = $('#add-newmodule');
    inp.hidden = !isNew;
    if (isNew) inp.focus();
  });
}

/* ============================================================
   Vista RUTA (principal)
   ============================================================ */
function matchesFilter(t) {
  if (UI.filter !== 'all' && statusOf(t.id) !== UI.filter) return false;
  const q = UI.q.trim().toLowerCase();
  if (!q) return true;
  return (t.title + ' ' + (t.desc || '')).toLowerCase().includes(q);
}
function relChip(t) {
  return '<button type="button" class="rel-chip" data-jump="' + t.id + '"><span class="dot ' + statusOf(t.id) +
    '"></span>' + esc(t.title) + '</button>';
}
function reqOptionsHTML(excludeIds, selfId) {
  const skip = new Set(excludeIds || []);
  if (selfId) skip.add(selfId);
  return '<option value="">+ Añadir requisito…</option>' +
    DATA.modules.slice().sort((a, b) => a.order - b.order).map(m => {
      const opts = topicsOf(m.id)
        .filter(t => !skip.has(t.id) && !dependsOn(t.id, selfId))
        .map(t => '<option value="' + t.id + '">' + esc(t.title) + '</option>').join('');
      return opts ? '<optgroup label="M' + m.order + ' · ' + esc(m.title) + '">' + opts + '</optgroup>' : '';
    }).join('');
}
function renderRoute() {
  const view = $('#routeview');
  const scroll = view.scrollTop;
  const inner = $('#route-inner');
  const total = DATA.topics.length;
  const done = DATA.topics.filter(t => statusOf(t.id) === 'dominado').length;
  const rep = DATA.topics.filter(t => statusOf(t.id) === 'repasar').length;
  const rec = recommendedTopic();
  const pct = total ? Math.round(done / total * 100) : 0;

  let html = '<section class="route-hero">' +
    '<h2>Tu ruta de aprendizaje</h2>' +
    '<p>Avanza concepto a concepto. Las palabras subrayadas dentro de cada explicación son enlaces: si no entiendes un término, ábrelo, resuélvelo y vuelve al punto donde estabas.</p>' +
    '<div class="mini-stats">' +
      '<div class="mini-stat"><b>' + done + '</b><span>Dominados</span></div>' +
      '<div class="mini-stat"><b>' + (total - done) + '</b><span>Pendientes</span></div>' +
      '<div class="mini-stat"><b>' + rep + '</b><span>Para repasar</span></div>' +
      '<div class="mini-stat"><b>' + pct + '%</b><span>Progreso</span></div>' +
    '</div>' +
    (rec ? '<div class="hero-actions"><button class="primary" type="button" data-jump="' + rec.id + '">' +
      (statusOf(rec.id) === 'repasar' ? 'Repasar: ' : statusOf(rec.id) === 'estudiando' ? 'Continuar: ' : 'Empezar: ') +
      esc(rec.title) + '</button></div>' : '') +
    '</section>';

  let shown = 0;
  DATA.modules.slice().sort((a, b) => a.order - b.order).forEach(m => {
    const all = topicsOf(m.id);
    const ts = all.filter(matchesFilter);
    if (!ts.length) return;
    shown += ts.length;
    const p = moduleProgress(m.id);
    html += '<section class="module-section" id="mod-' + m.id + '" style="--c:' + colorOf(m.id) + '">' +
      '<div class="module-head">' +
        '<span class="module-tag">M' + m.order + '</span>' +
        '<h3 class="module-title">' + esc(m.title) + '</h3>' +
        '<span class="module-bar"><i style="width:' + p.pct + '%"></i></span>' +
        '<span class="module-count">' + p.done + '/' + p.total + '</span>' +
        (m.priority ? '<span class="module-prio">' + esc(m.priority) + '</span>' : '') +
      '</div>' +
      '<div class="topic-list">' + ts.map(topicCardHTML).join('') + '</div>' +
    '</section>';
  });

  if (!shown) {
    html += '<div class="empty-state" style="position:static;padding:60px 0"><h3>Sin resultados</h3>' +
      '<p>Prueba con otra búsqueda o cambia el filtro de estado.</p></div>';
  }
  inner.innerHTML = html;
  view.scrollTop = scroll;
}
function topicCardHTML(t) {
  const st = statusOf(t.id);
  const open = UI.open === t.id;
  return '<article class="topic-card st-' + st + (open ? ' open' : '') + '" id="card-' + t.id + '" data-id="' + t.id +
    '" style="--c:' + colorOf(t.m) + '">' +
    '<button class="topic-head" type="button" data-toggle="' + t.id + '" aria-expanded="' + open + '">' +
      '<span class="topic-num">' + String(t.order).padStart(2, '0') + '</span>' +
      '<span class="topic-title">' + esc(t.title) + '</span>' +
      '<span class="dot ' + st + '" title="' + STATUS[st].label + '"></span>' +
      '<span class="chev">▾</span>' +
    '</button>' +
    '<div class="topic-body">' + (open ? topicBodyHTML(t) : '') + '</div>' +
  '</article>';
}
function topicBodyHTML(t) {
  let html = '';
  const unmet = unmetPrereqs(t);
  const reqs = prereqsOf(t);
  const deps = dependentsOf(t.id);
  const st = statusOf(t.id);

  if (UI.history.length) {
    const prev = nodeById(UI.history[UI.history.length - 1]);
    if (prev) html += '<button type="button" class="back-link" data-back="1">↩ Volver a ' + esc(prev.title) + '</button>';
  }
  if (unmet.length) {
    html += '<div class="warn"><div><b>Antes de continuar, vuelve a esto:</b>' +
      '<div class="rel-row">' + unmet.map(relChip).join('') + '</div></div></div>';
  }
  if (UI.editing === t.id) {
    const draftTitle = UI.editTitle == null ? t.title : UI.editTitle;
    const draftDesc = UI.editDesc == null ? (t.desc || '') : UI.editDesc;
    const draftReq = (UI.editReq || []).map(topicById).filter(Boolean);
    return html + '<div class="edit-box">' +
      '<label class="field-label">Título</label>' +
      '<input data-edit-title value="' + esc(draftTitle) + '"/>' +
      '<label class="field-label">Explicación</label>' +
      '<textarea data-edit-desc rows="4">' + esc(draftDesc) + '</textarea>' +
      '<label class="field-label" style="margin-top:12px">Necesitas antes</label>' +
      '<div class="chips">' + (draftReq.length
        ? draftReq.map(r => '<span class="chip">' + esc(r.title) +
            '<button type="button" data-edit-unreq="' + r.id + '" aria-label="Quitar">×</button></span>').join('')
        : '<span class="chip" style="opacity:.6">Sin requisitos</span>') + '</div>' +
      '<select data-edit-addreq>' + reqOptionsHTML(UI.editReq || [], t.id) + '</select>' +
      '<div class="actions" style="margin-top:10px">' +
        '<button type="button" class="primary" data-save-edit="1">Guardar</button>' +
        '<button type="button" class="ghost" data-cancel-edit="1">Cancelar</button>' +
        '<span class="spacer"></span>' +
        '<button type="button" class="tiny-btn" data-delete="' + t.id + '" style="color:#ff8f8f">Eliminar</button>' +
      '</div></div>';
  }

  const descHtml = linkify(t.desc || '', t.id);
  html += '<p class="desc">' + descHtml + '</p>';
  if (descHtml.indexOf('class="term"') !== -1) {
    html += '<div class="term-hint"><i></i>Las palabras subrayadas abren otro concepto sin perder tu sitio.</div>';
  }
  html += '<div class="related"><div class="rel-label">Necesitas antes</div><div class="rel-row">' +
    (reqs.length ? reqs.map(relChip).join('') : '<span class="chip">Nada: puedes empezar aquí</span>') +
    '</div></div>';
  if (deps.length) {
    html += '<div class="related"><div class="rel-label">Esto te desbloquea</div><div class="rel-row">' +
      deps.map(relChip).join('') + '</div></div>';
  }
  html += '<div class="actions">' +
    '<div class="seg" data-seg="' + t.id + '">' +
      Object.entries(STATUS).map(([k, v]) =>
        '<button type="button" data-set="' + k + '" class="' + (st === k ? 'on' : '') + '" style="--c:' + v.color + '">' + v.label + '</button>'
      ).join('') +
    '</div>' +
    '<span class="spacer"></span>' +
    '<button type="button" class="tiny-btn" data-edit="' + t.id + '">Editar</button>' +
  '</div>' +
  '<div class="note-box"><textarea data-note="' + t.id + '" rows="2" placeholder="Tus dudas, ejemplos o enlaces para este concepto…">' +
    esc(noteOf(t.id)) + '</textarea></div>';
  return html;
}
function applyStatus(id, s) {
  const prev = statusOf(id);
  setStatus(id, s);
  if (s === 'dominado' && prev !== 'dominado') {
    const unlocked = dependentsOf(id).filter(d => statusOf(d.id) !== 'dominado' && unmetPrereqs(d).length === 0);
    if (unlocked.length) {
      toast('Desbloqueado: ' + unlocked.slice(0, 3).map(d => d.title).join(' · ') +
        (unlocked.length > 3 ? ' y ' + (unlocked.length - 3) + ' más' : ''));
    } else {
      toast('Concepto dominado');
    }
  } else if (s === 'repasar') {
    toast('Lo hemos puesto en Repaso: la app te dirá a dónde volver.');
  }
  renderAll();
}
function saveEdit() {
  const t = topicById(UI.editing);
  if (!t) { clearEdit(); renderAll(); return; }
  const title = (UI.editTitle == null ? '' : UI.editTitle).trim();
  const desc = (UI.editDesc == null ? '' : UI.editDesc).trim();
  if (title) t.title = title;
  if (desc) t.desc = desc;
  if (UI.editReq) t.req = UI.editReq.filter(id => id !== t.id && topicById(id));
  clearEdit();
  GLOSSARY = [];
  save();
  renderAll();
  toast('Concepto actualizado');
}
function clearEdit() {
  UI.editing = null;
  UI.editTitle = null;
  UI.editDesc = null;
  UI.editReq = null;
}
function deleteTopic(id) {
  const t = topicById(id);
  if (!t) return;
  if (!confirm('¿Eliminar «' + t.title + '»? Se quitará también de los requisitos de otros conceptos.')) return;
  DATA.topics = DATA.topics.filter(x => x.id !== id);
  DATA.topics.forEach(x => { if (x.req) x.req = x.req.filter(r => r !== id); });
  delete DATA.status[id];
  if (UI.open === id) { UI.open = null; UI.history = []; }
  if (UI.editing === id) clearEdit();
  GLOSSARY = [];
  save();
  renderAll();
  toast('Concepto eliminado');
}

let noteTimer = null;
function wireRoute() {
  const root = $('#route-inner');
  root.addEventListener('click', e => {
    const jump = e.target.closest('[data-jump]');
    if (jump) { openConcept(jump.dataset.jump); return; }
    const toggle = e.target.closest('[data-toggle]');
    if (toggle) {
      const id = toggle.dataset.toggle;
      if (UI.open === id) { UI.open = null; UI.history = []; renderAll(); }
      else openConcept(id);
      return;
    }
    const set = e.target.closest('[data-set]');
    if (set) {
      const seg = set.closest('[data-seg]');
      if (seg) applyStatus(seg.dataset.seg, set.dataset.set);
      return;
    }
    if (e.target.closest('[data-back]')) { goBack(); return; }
    const edit = e.target.closest('[data-edit]');
    if (edit) {
      const t = topicById(edit.dataset.edit);
      if (!t) return;
      UI.editing = t.id;
      UI.open = t.id;
      UI.editTitle = t.title;
      UI.editDesc = t.desc || '';
      UI.editReq = (t.req || []).slice();
      renderAll();
      return;
    }
    if (e.target.closest('[data-cancel-edit]')) { clearEdit(); renderAll(); return; }
    if (e.target.closest('[data-save-edit]')) { saveEdit(); return; }
    const unreq = e.target.closest('[data-edit-unreq]');
    if (unreq) {
      UI.editReq = (UI.editReq || []).filter(id => id !== unreq.dataset.editUnreq);
      renderAll();
      return;
    }
    const del = e.target.closest('[data-delete]');
    if (del) { deleteTopic(del.dataset.delete); return; }
  });
  root.addEventListener('change', e => {
    const addReq = e.target.closest('[data-edit-addreq]');
    if (!addReq) return;
    const id = addReq.value;
    if (id && !(UI.editReq || []).includes(id)) {
      UI.editReq = (UI.editReq || []).concat(id);
      renderAll();
    } else {
      addReq.value = '';
    }
  });
  root.addEventListener('input', e => {
    if (e.target.matches('[data-edit-title]')) { UI.editTitle = e.target.value; return; }
    if (e.target.matches('[data-edit-desc]')) { UI.editDesc = e.target.value; return; }
    const ta = e.target.closest('[data-note]');
    if (!ta) return;
    const id = ta.dataset.note, val = ta.value;
    clearTimeout(noteTimer);
    noteTimer = setTimeout(() => setNote(id, val), 350);
  });
}

/* ============================================================
   Vista REPASO
   ============================================================ */
function pathCard(t, meta) {
  const m = moduleById(t.m);
  return '<button type="button" class="path-card" data-jump="' + t.id + '" style="--c:' + colorOf(t.m) + '">' +
    '<span class="pc-top">M' + (m ? m.order : '?') + ' · ' + STATUS[statusOf(t.id)].label + '</span>' +
    '<span class="pc-title">' + esc(t.title) + '</span>' +
    (meta ? '<span class="pc-meta">' + meta + '</span>' : '') +
  '</button>';
}
function renderReview() {
  const inner = $('#path-inner');
  const total = DATA.topics.length;
  const done = DATA.topics.filter(t => statusOf(t.id) === 'dominado').length;
  const rec = recommendedTopic();
  const avail = [], review = [], locked = [];
  DATA.topics.forEach(t => {
    const st = statusOf(t.id);
    const un = unmetPrereqs(t);
    if (st === 'dominado') return;
    if (st === 'repasar') review.push({ t, un });
    else if (un.length === 0) avail.push({ t, un });
    else locked.push({ t, un });
  });
  avail.sort((a, b) => cmpTopics(a.t, b.t));
  review.sort((a, b) => cmpTopics(a.t, b.t));
  locked.sort((a, b) => cmpTopics(a.t, b.t));

  let html = '<section class="route-hero">' +
    '<h2>¿Qué toca ahora?</h2>' +
    '<p>' + (done === total && total
      ? 'Has dominado todos los conceptos del Nivel 1. Repasa lo que hayas marcado en ámbar y comprueba que puedes explicar el flujo completo sin ayuda.'
      : 'La app calcula qué puedes estudiar sin bloqueos y qué conviene repasar antes de seguir. Si un concepto te cuesta, márcalo como <em>Repasar</em> y vuelve aquí.') + '</p>' +
    (rec ? '<div class="hero-actions"><button type="button" class="primary" data-jump="' + rec.id + '">' +
      (statusOf(rec.id) === 'repasar' ? 'Repasar: ' : 'Estudiar: ') + esc(rec.title) + '</button></div>' : '') +
    '<div class="mini-stats">' +
      '<div class="mini-stat"><b>' + avail.length + '</b><span>Disponibles</span></div>' +
      '<div class="mini-stat"><b>' + review.length + '</b><span>Para repasar</span></div>' +
      '<div class="mini-stat"><b>' + locked.length + '</b><span>Bloqueados</span></div>' +
      '<div class="mini-stat"><b>' + done + '/' + total + '</b><span>Dominados</span></div>' +
    '</div></section>';

  /* Repasos */
  html += '<h3 class="section-title amber">Vuelve atrás <span class="badge">' + review.length + '</span></h3>';
  if (!review.length) {
    html += '<p class="pc-meta" style="padding:2px 2px 8px">Nada marcado para repasar. Si algo se te complica, ábrelo y usa el botón <b style="color:#f5b942">Repasar</b>.</p>';
  } else {
    html += review.map(({ t, un }) => {
      const deps = dependentsOf(t.id);
      const reason = un.length
        ? 'Le faltan requisitos: ' + un.map(u => esc(u.title)).join(', ')
        : (deps.length ? 'Bloquea: ' + deps.slice(0, 3).map(d => esc(d.title)).join(', ') + (deps.length > 3 ? '…' : '') : 'Sin dependencias directas.');
      return '<div class="review-item"><div class="ri-body"><h4>' + esc(t.title) + '</h4><p>' + reason + '</p></div>' +
        '<button type="button" class="ghost" data-jump="' + t.id + '">Abrir</button></div>';
    }).join('');
  }

  /* Disponibles */
  html += '<h3 class="section-title blue">Puedes estudiarlo ahora <span class="badge">' + avail.length + '</span></h3>';
  if (!avail.length) {
    html += '<p class="pc-meta">No hay conceptos nuevos disponibles: termina o repasa los que están en curso.</p>';
  } else {
    html += '<div class="card-grid">' + avail.map(({ t, un }) =>
      pathCard(t, un.length ? '' : 'Todos sus requisitos están dominados.'))
      .join('') + '</div>';
  }

  /* Bloqueados */
  if (locked.length) {
    html += '<h3 class="section-title">Bloqueados por requisitos <span class="badge">' + locked.length + '</span></h3>';
    html += '<div class="card-grid">' + locked.map(({ t, un }) =>
      pathCard(t, 'Necesitas: <b>' + un.slice(0, 2).map(u => esc(u.title)).join('</b>, <b>') + '</b>' +
        (un.length > 2 ? ' y ' + (un.length - 2) + ' más' : '')))
      .join('') + '</div>';
  }

  /* Progreso por módulo */
  html += '<h3 class="section-title green">Progreso por módulo</h3>';
  html += DATA.modules.slice().sort((a, b) => a.order - b.order).map(m => {
    const p = moduleProgress(m.id);
    return '<div class="module-progress-row" style="--c:' + colorOf(m.id) + '">' +
      '<span class="mpr-name">M' + m.order + ' · ' + esc(m.title) + '</span>' +
      '<span class="mpr-bar"><i style="width:' + p.pct + '%"></i></span>' +
      '<span class="mpr-num">' + p.done + '/' + p.total + '</span></div>';
  }).join('');

  inner.innerHTML = html;
}

/* ============================================================
   Vista MAPA (SVG con dependencias)
   ============================================================ */
const NODE_W = 224, NODE_H = 92, GAP_X = 30, GAP_Y = 56;
const measureCtx = document.createElement('canvas').getContext('2d');

function wrapText(text, maxW, maxLines) {
  measureCtx.font = '600 12.5px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';
  const words = String(text || '').split(/\s+/);
  const all = [];
  let cur = '';
  for (const w of words) {
    const test = cur ? cur + ' ' + w : w;
    if (!cur || measureCtx.measureText(test).width <= maxW) cur = test;
    else { all.push(cur); cur = w; }
  }
  if (cur) all.push(cur);
  if (all.length <= maxLines) return all;
  const out = all.slice(0, maxLines);
  let last = out[maxLines - 1];
  while (last.length > 1 && measureCtx.measureText(last + '…').width > maxW) last = last.slice(0, -1);
  out[maxLines - 1] = last.replace(/[\s,.;:]$/, '') + '…';
  return out;
}
function computeRanks(nodes, reqFn) {
  const ranks = new Map(nodes.map(n => [n.id, 0]));
  let changed = true, guard = 0;
  while (changed && guard++ < 60) {
    changed = false;
    for (const n of nodes) {
      for (const r of reqFn(n)) {
        if (!ranks.has(r)) continue;
        const cand = ranks.get(r) + 1;
        if (cand > ranks.get(n.id)) { ranks.set(n.id, cand); changed = true; }
      }
    }
  }
  return ranks;
}
function layoutNodes(nodes, ranks) {
  const rows = new Map();
  nodes.forEach(n => {
    const r = ranks.get(n.id) || 0;
    if (!rows.has(r)) rows.set(r, []);
    rows.get(r).push(n);
  });
  let maxCols = 1;
  rows.forEach(c => { maxCols = Math.max(maxCols, c.length); });
  const totalW = maxCols * NODE_W + (maxCols - 1) * GAP_X;
  const pos = new Map();
  Array.from(rows.keys()).sort((a, b) => a - b).forEach(r => {
    const row = rows.get(r).sort((a, b) => (a.order || 0) - (b.order || 0));
    const w = row.length * NODE_W + (row.length - 1) * GAP_X;
    const startX = (totalW - w) / 2;
    row.forEach((n, i) => pos.set(n.id, { x: startX + i * (NODE_W + GAP_X), y: r * (NODE_H + GAP_Y) }));
  });
  return pos;
}
function relationsFor(edges, id) {
  const out = new Map(), inc = new Map();
  edges.forEach(e => {
    if (!out.has(e.from)) out.set(e.from, []);
    out.get(e.from).push(e.to);
    if (!inc.has(e.to)) inc.set(e.to, []);
    inc.get(e.to).push(e.from);
  });
  const anc = new Set(), desc = new Set();
  (function up(x, g) { if (g > 300) return; (inc.get(x) || []).forEach(p => { if (!anc.has(p)) { anc.add(p); up(p, g + 1); } }); })(id, 0);
  (function down(x, g) { if (g > 300) return; (out.get(x) || []).forEach(c => { if (!desc.has(c)) { desc.add(c); down(c, g + 1); } }); })(id, 0);
  return { anc, desc };
}
function badgeHTML(status, blocked, x, y) {
  const t = 'transform="translate(' + x + ' ' + y + ')"';
  if (blocked && status !== 'dominado') {
    return '<g class="badge" ' + t + '><circle r="9" fill="rgba(245,185,66,.14)" stroke="rgba(245,185,66,.55)"/>' +
      '<path d="M-3.2 -1.4v-2.2a3.2 3.2 0 0 1 6.4 0v2.2" fill="none" stroke="#f5b942" stroke-width="1.5"/>' +
      '<rect x="-4.2" y="-1.4" width="8.4" height="6" rx="1.4" fill="#f5b942"/></g>';
  }
  if (status === 'dominado') {
    return '<g class="badge" ' + t + '><circle r="9" fill="#35d07f"/>' +
      '<path d="M-4 0.2l2.8 3.2 5.2-6.4" fill="none" stroke="#07130c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></g>';
  }
  if (status === 'repasar') {
    return '<g class="badge" ' + t + '><circle r="9" fill="#f5b942"/>' +
      '<path d="M0 -4.2v4.8" stroke="#1a1206" stroke-width="2" stroke-linecap="round"/>' +
      '<circle cx="0" cy="3.6" r="1.2" fill="#1a1206"/></g>';
  }
  if (status === 'estudiando') {
    return '<g class="badge" ' + t + '><circle r="9" fill="#4da3ff"/><circle r="3" fill="#06121f"/></g>';
  }
  return '<g class="badge" ' + t + '><circle r="9" class="badge-empty"/></g>';
}
function nodeHTML(n, p, rel) {
  const lines = wrapText(n.title, NODE_W - 44, 3);
  const tspans = lines.map((l, i) => '<tspan x="20" y="' + (34 + i * 16) + '">' + esc(l) + '</tspan>').join('');
  const cls = ['node', 'st-' + n.status];
  if (n.blocked) cls.push('blocked');
  if (UI.open === n.id) cls.push('sel');
  if (rel) {
    if (rel.anc.has(n.id)) cls.push('anc');
    else if (rel.desc.has(n.id)) cls.push('desc');
    else if (UI.open !== n.id) cls.push('dim');
  }
  if (n.next) cls.push('next');
  const q = UI.q.trim().toLowerCase();
  if (q && !n.title.toLowerCase().includes(q)) cls.push('dim');
  if (UI.filter !== 'all' && n.status !== UI.filter) cls.push('dim');
  return '<g class="' + cls.join(' ') + '" data-id="' + n.id + '" transform="translate(' + p.x + ' ' + p.y + ')">' +
    '<rect class="node-bg" width="' + NODE_W + '" height="' + NODE_H + '" rx="14"/>' +
    '<rect class="node-bar" x="0" y="16" width="4" height="' + (NODE_H - 32) + '" rx="2" fill="' + n.color + '"/>' +
    '<text class="node-title">' + tspans + '</text>' +
    '<text class="node-sub" x="20" y="' + (NODE_H - 14) + '">' + esc(n.sub) + '</text>' +
    badgeHTML(n.status, n.blocked, NODE_W - 22, 19) +
    '<title>' + esc(n.title) + '</title></g>';
}
function edgeHTML(e, pos, rel) {
  const a = pos.get(e.from), b = pos.get(e.to);
  if (!a || !b) return '';
  const x1 = a.x + NODE_W / 2, y1 = a.y + NODE_H;
  const x2 = b.x + NODE_W / 2, y2 = b.y;
  const dy = Math.max(34, (y2 - y1) * 0.5);
  const d = 'M' + x1 + ' ' + y1 + ' C' + x1 + ' ' + (y1 + dy) + ' ' + x2 + ' ' + (y2 - dy) + ' ' + x2 + ' ' + y2;
  let cls = 'edge', marker = 'arrow';
  if (rel) {
    if (rel.anc.has(e.from) && rel.anc.has(e.to)) { cls += ' hi-anc'; marker = 'arrow-anc'; }
    else if (rel.desc.has(e.from) && rel.desc.has(e.to)) { cls += ' hi-desc'; marker = 'arrow-desc'; }
    else cls += ' dim';
  }
  return '<path class="' + cls + '" d="' + d + '" marker-end="url(#' + marker + ')"/>';
}
function moduleNodeData(m) {
  const p = moduleProgress(m.id);
  const st = p.total && p.done === p.total ? 'dominado' : (p.done ? 'estudiando' : 'pendiente');
  return { id: m.id, title: m.title, sub: p.done + '/' + p.total + ' conceptos', color: colorOf(m.id), status: st, blocked: false };
}
function topicNodeData(t) {
  const st = statusOf(t.id);
  const un = unmetPrereqs(t);
  return {
    id: t.id, title: t.title, color: colorOf(t.m), status: st,
    blocked: un.length > 0 && st !== 'dominado',
    sub: un.length > 0 && st !== 'dominado'
      ? 'faltan ' + un.length + ' requisito' + (un.length > 1 ? 's' : '')
      : STATUS[st].label
  };
}
function renderMap() {
  const viewport = $('#viewport');
  const empty = $('#empty-state');
  const isModuleLevel = !UI.mapModule;
  const nodes = isModuleLevel
    ? DATA.modules.slice().sort((a, b) => a.order - b.order)
    : topicsOf(UI.mapModule);

  if (!nodes.length) {
    viewport.innerHTML = '';
    empty.hidden = false;
    empty.innerHTML = '<h3>Este módulo está vacío</h3><p>Añade un concepto desde el panel izquierdo.</p>';
    return;
  }
  empty.hidden = true;

  const reqFn = isModuleLevel ? (n => modulePrereqs(n.id)) : (n => n.req || []);
  const ranks = computeRanks(nodes, reqFn);
  const pos = layoutNodes(nodes, ranks);
  const edges = [];
  const seen = new Set();
  nodes.forEach(n => {
    reqFn(n).forEach(r => {
      const key = r + '>' + n.id;
      if (pos.has(r) && !seen.has(key)) { seen.add(key); edges.push({ from: r, to: n.id }); }
    });
  });

  const focusId = !isModuleLevel && UI.open && pos.has(UI.open) ? UI.open : null;
  const rel = focusId ? relationsFor(edges, focusId) : null;
  const rec = recommendedTopic();

  let html = edges.map(e => edgeHTML(e, pos, rel)).join('');
  html += nodes.map(n => {
    const d = isModuleLevel ? moduleNodeData(n) : topicNodeData(n);
    d.next = !isModuleLevel && rec && rec.id === n.id;
    return nodeHTML(d, pos.get(n.id), rel);
  }).join('');
  viewport.innerHTML = html;

  if (UI.fitNext) {
    UI.fitNext = false;
    fit();
  } else {
    applyTransform();
  }
}
function applyTransform() {
  const g = $('#viewport');
  if (!g) return;
  g.setAttribute('transform', 'translate(' + UI.vt.x + ' ' + UI.vt.y + ') scale(' + UI.vt.k + ')');
}
function fit() {
  const g = $('#viewport'), wrap = $('#canvas-wrap');
  if (!g || wrap.hidden) return;
  const bbox = g.getBBox();
  if (!bbox.width || !bbox.height) return;
  const W = wrap.clientWidth, H = wrap.clientHeight, pad = 48;
  const k = clamp(Math.min((W - pad * 2) / bbox.width, (H - pad * 2) / bbox.height), 0.12, 1.25);
  UI.vt.k = k;
  UI.vt.x = (W - bbox.width * k) / 2 - bbox.x * k;
  UI.vt.y = (H - bbox.height * k) / 2 - bbox.y * k;
  applyTransform();
}
function zoomBy(f) {
  const wrap = $('#canvas-wrap');
  const mx = wrap.clientWidth / 2, my = wrap.clientHeight / 2;
  const k2 = clamp(UI.vt.k * f, 0.12, 2.6);
  UI.vt.x = mx - (mx - UI.vt.x) * (k2 / UI.vt.k);
  UI.vt.y = my - (my - UI.vt.y) * (k2 / UI.vt.k);
  UI.vt.k = k2;
  applyTransform();
}
function wireMap() {
  const canvas = $('#canvas');
  const viewport = $('#viewport');
  let pan = null, lastDrag = 0;

  const isMapView = () => UI.view === 'map' && !$('#canvas-wrap').hidden;

  canvas.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (!e.isPrimary) return;
    pan = { id: e.pointerId, x: e.clientX, y: e.clientY, vx: UI.vt.x, vy: UI.vt.y, moved: false };
    try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
    canvas.classList.add('grabbing');
    try { canvas.focus({ preventScroll: true }); } catch (err) { canvas.focus(); }
  });
  canvas.addEventListener('pointermove', e => {
    if (!pan || e.pointerId !== pan.id) return;
    const dx = e.clientX - pan.x, dy = e.clientY - pan.y;
    if (!pan.moved && Math.hypot(dx, dy) > 3) pan.moved = true;
    if (!pan.moved) return;
    UI.vt.x = pan.vx + dx;
    UI.vt.y = pan.vy + dy;
    applyTransform();
  });
  const endPan = e => {
    if (!pan) return;
    if (e.pointerId != null && e.pointerId !== pan.id) return;
    if (pan.moved) lastDrag = Date.now();
    pan = null;
    canvas.classList.remove('grabbing');
    try { canvas.releasePointerCapture(e.pointerId); } catch (err) {}
  };
  canvas.addEventListener('pointerup', endPan);
  canvas.addEventListener('pointercancel', endPan);
  canvas.addEventListener('lostpointercapture', endPan);

  canvas.addEventListener('wheel', e => {
    if (!isMapView()) return;
    e.preventDefault();
    if (e.ctrlKey || e.metaKey) {
      const r = canvas.getBoundingClientRect();
      const mx = e.clientX - r.left, my = e.clientY - r.top;
      const k2 = clamp(UI.vt.k * Math.exp(-e.deltaY * 0.0018), 0.12, 3);
      UI.vt.x = mx - (mx - UI.vt.x) * (k2 / UI.vt.k);
      UI.vt.y = my - (my - UI.vt.y) * (k2 / UI.vt.k);
      UI.vt.k = k2;
      applyTransform();
      return;
    }
    let dx = e.deltaX, dy = e.deltaY;
    if (e.shiftKey && !dx) { dx = dy; dy = 0; }
    UI.vt.x -= dx;
    UI.vt.y -= dy;
    applyTransform();
  }, { passive: false });

  canvas.addEventListener('keydown', e => {
    if (!isMapView()) return;
    const step = e.shiftKey ? 180 : 70;
    let handled = true;
    switch (e.key) {
      case 'ArrowLeft': UI.vt.x += step; break;
      case 'ArrowRight': UI.vt.x -= step; break;
      case 'ArrowUp': UI.vt.y += step; break;
      case 'ArrowDown': UI.vt.y -= step; break;
      case '+': case '=': zoomBy(1.2); break;
      case '-': case '_': zoomBy(0.8); break;
      case '0': fit(); break;
      default: handled = false;
    }
    if (handled) {
      e.preventDefault();
      applyTransform();
    }
  });

  viewport.addEventListener('click', e => {
    if (Date.now() - lastDrag < 250) return;
    const g = e.target.closest('g.node');
    if (!g) return;
    const id = g.dataset.id;
    if (!UI.mapModule) {
      UI.mapModule = id;
      UI.fitNext = true;
      renderAll();
    } else {
      openConcept(id);
    }
  });

  $('#zoom-in').addEventListener('click', () => zoomBy(1.25));
  $('#zoom-out').addEventListener('click', () => zoomBy(0.8));
  $('#zoom-fit').addEventListener('click', fit);
}

/* ============================================================
   Datos: exportar, importar, reiniciar
   ============================================================ */
function exportData() {
  const blob = new Blob([JSON.stringify(DATA, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'mapa-aprendizaje-nivel1.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1200);
  toast('Datos exportados a JSON');
}
function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const d = JSON.parse(String(reader.result));
      if (!d || !Array.isArray(d.modules) || !Array.isArray(d.topics)) throw new Error('Formato inesperado');
      if (!confirm('Se reemplazarán tus datos actuales por los del archivo. ¿Continuar?')) return;
      DATA = d;
      if (!DATA.status || typeof DATA.status !== 'object') DATA.status = {};
      GLOSSARY = [];
      UI.open = null;
      UI.history = [];
      UI.mapModule = null;
      clearEdit();
      save();
      renderAll();
      toast('Datos importados correctamente');
    } catch (err) {
      toast('El archivo no tiene un formato válido');
    }
  };
  reader.readAsText(file);
}

/* ============================================================
   Eventos globales e inicio
   ============================================================ */
function wireGlobal() {
  $$('.views button').forEach(b => b.addEventListener('click', () => setView(b.dataset.view)));

  const menuBtn = $('#btn-menu'), menu = $('#menu');
  menuBtn.addEventListener('click', e => { e.stopPropagation(); menu.hidden = !menu.hidden; });
  document.addEventListener('click', e => {
    if (!menu.hidden && !menu.contains(e.target) && e.target !== menuBtn) closeMenu();
  });
  menu.addEventListener('click', e => {
    const act = e.target.closest('[data-act]');
    if (!act) return;
    closeMenu();
    const a = act.dataset.act;
    if (a === 'export') exportData();
    else if (a === 'import') $('#file-import').click();
    else if (a === 'reset-progress') {
      if (confirm('¿Borrar el estado de todos los conceptos? El contenido se mantiene.')) {
        DATA.status = {};
        save();
        renderAll();
        toast('Progreso reiniciado');
      }
    } else if (a === 'reset-all') {
      if (confirm('¿Restaurar el contenido original? Se perderán tus cambios y tu progreso.')) {
        DATA = clone(window.SEED);
        GLOSSARY = [];
        UI.open = null;
        UI.history = [];
        UI.mapModule = null;
        clearEdit();
        save();
        renderAll();
        toast('Contenido original restaurado');
      }
    }
  });

  $('#file-import').addEventListener('change', e => {
    const f = e.target.files && e.target.files[0];
    if (f) importData(f);
    e.target.value = '';
  });

  $('#stage-head').addEventListener('click', e => {
    if (e.target.closest('#go-back')) goBack();
    if (e.target.closest('#map-back')) {
      UI.mapModule = null;
      UI.fitNext = true;
      renderAll();
    }
  });

  let searchTimer = null;
  $('#search').addEventListener('input', e => {
    const v = e.target.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      UI.q = v;
      renderAll();
      if (UI.view === 'route') $('#routeview').scrollTop = 0;
    }, 160);
  });
  $('#status-filter').addEventListener('change', e => {
    UI.filter = e.target.value;
    renderAll();
    if (UI.view === 'route') $('#routeview').scrollTop = 0;
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!$('#menu').hidden) closeMenu();
    else if (UI.editing) { clearEdit(); renderAll(); }
    else if (UI.open) { UI.open = null; UI.history = []; renderAll(); }
  });

  window.addEventListener('resize', () => {
    if (UI.view === 'map') applyTransform();
  });
}

function init() {
  clearEdit();
  GLOSSARY = buildGlossary();
  wireForm();
  wireRoute();
  wireMap();
  wireGlobal();
  renderAll();
}
init();
})();

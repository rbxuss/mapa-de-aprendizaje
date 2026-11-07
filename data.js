/* Contenido inicial: Nivel 1 · Fundamentos de desarrollo web.
   La app guarda tus cambios en localStorage; este archivo solo es la semilla. */
window.SEED_VERSION = 6;
window.SEED = {
  "version": 1,
  "modules": [
    {
      "id": "m1",
      "order": 1,
      "title": "Introducción al desarrollo web",
      "priority": "alta",
      "desc": "El entorno donde vive la web: qué es Internet, cómo viajan los datos con TCP/IP y qué tipos de aplicaciones existen."
    },
    {
      "id": "m15",
      "order": 2,
      "title": "HTML y estructura del contenido",
      "priority": "alta",
      "desc": "El lenguaje de marcado que da forma a todo lo que ves en una página: etiquetas, semántica, enlaces, formularios y accesibilidad."
    },
    {
      "id": "m16",
      "order": 3,
      "title": "CSS y diseño visual",
      "priority": "alta",
      "desc": "Cómo se presenta el contenido: selectores, caja, Flexbox, Grid, responsive, variables y animaciones."
    },
    {
      "id": "m17",
      "order": 4,
      "title": "JavaScript esencial",
      "priority": "alta",
      "desc": "El lenguaje que da vida a la interfaz: tipos, funciones, DOM, eventos, asincronía, promesas y consumo de APIs."
    },
    {
      "id": "m2",
      "order": 5,
      "title": "Frontend y Backend",
      "priority": "alta",
      "desc": "Las dos mitades de una aplicación: lo que ve el usuario y lo que ocurre en el servidor."
    },
    {
      "id": "m3",
      "order": 6,
      "title": "Cliente y servidor",
      "priority": "alta",
      "desc": "Quién pide y quién responde, y en qué se diferencian los tipos de cada lado."
    },
    {
      "id": "m4",
      "order": 7,
      "title": "Arquitectura cliente-servidor",
      "priority": "alta",
      "desc": "Cómo se organizan las capas, qué es una API y cómo se conecta todo con la base de datos."
    },
    {
      "id": "m5",
      "order": 8,
      "title": "HTTP y HTTPS",
      "priority": "alta",
      "desc": "El protocolo que hace posible la Web y cómo se protege con cifrado."
    },
    {
      "id": "m6",
      "order": 9,
      "title": "Request y Response",
      "priority": "alta",
      "desc": "La anatomía de una petición y de una respuesta: headers, body y formatos."
    },
    {
      "id": "m7",
      "order": 10,
      "title": "Métodos HTTP",
      "priority": "alta",
      "desc": "GET, POST, PUT, PATCH y DELETE: la intención de cada petición."
    },
    {
      "id": "m8",
      "order": 11,
      "title": "Códigos de estado HTTP",
      "priority": "alta",
      "desc": "Qué significa cada familia de códigos y cuándo usar cada uno."
    },
    {
      "id": "m9",
      "order": 12,
      "title": "URL, URI y parámetros",
      "priority": "alta",
      "desc": "Cómo se identifica un recurso y cómo se le pasan datos."
    },
    {
      "id": "m10",
      "order": 13,
      "title": "DNS y dominios",
      "priority": "media",
      "desc": "Cómo un nombre legible se convierte en la dirección IP de un servidor."
    },
    {
      "id": "m11",
      "order": 14,
      "title": "Navegadores y DOM",
      "priority": "alta",
      "desc": "Cómo el navegador interpreta HTML, CSS y JavaScript, y qué es el DOM."
    },
    {
      "id": "m12",
      "order": 15,
      "title": "Cookies, sesiones y almacenamiento",
      "priority": "alta",
      "desc": "Cómo se conserva el estado en un protocolo que no recuerda nada."
    },
    {
      "id": "m13",
      "order": 16,
      "title": "JSON e intercambio de información",
      "priority": "alta",
      "desc": "El formato que domina el intercambio de datos y cómo se envía y recibe."
    },
    {
      "id": "m19",
      "order": 17,
      "title": "Bases de datos y SQL",
      "priority": "alta",
      "desc": "Cómo se guardan y consultan los datos: tablas, relaciones, SQL, índices, transacciones y ORM."
    },
    {
      "id": "m20",
      "order": 18,
      "title": "APIs modernas y tiempo real",
      "priority": "media",
      "desc": "Patrones actuales para comunicar cliente y servidor: paginación, versionado, webhooks, WebSockets, SSE y GraphQL."
    },
    {
      "id": "m18",
      "order": 19,
      "title": "Git y control de versiones",
      "priority": "alta",
      "desc": "Cómo registrar, compartir y colaborar en el código sin perder cambios: commits, ramas, merges y pull requests."
    },
    {
      "id": "m21",
      "order": 20,
      "title": "Rendimiento y caché web",
      "priority": "media",
      "desc": "Cómo hacer que la aplicación cargue rápido: caché, CDN, compresión, lazy loading, imágenes y Core Web Vitals."
    },
    {
      "id": "m22",
      "order": 21,
      "title": "Testing y calidad",
      "priority": "media",
      "desc": "Cómo comprobar que el código funciona y sigue funcionando: pruebas unitarias, integración, E2E, TDD y depuración."
    },
    {
      "id": "m23",
      "order": 22,
      "title": "Despliegue y DevOps básico",
      "priority": "media",
      "desc": "Cómo llevar la aplicación a producción: build, variables de entorno, CI/CD, contenedores, logs y rollback."
    },
    {
      "id": "m14",
      "order": 23,
      "title": "Seguridad web básica",
      "priority": "alta",
      "desc": "Autenticación, autorización, tokens y los ataques más comunes."
    },
    {
      "id": "m24",
      "order": 24,
      "title": "Conceptos clave para entrevistas",
      "priority": "alta",
      "desc": "Preguntas que aparecen una y otra vez en entrevistas de desarrollo web, con la respuesta corta y los enlaces para profundizar."
    }
  ],
  "topics": [
    {
      "id": "t1-1",
      "m": "m1",
      "order": 1,
      "title": "¿Qué es el desarrollo web?",
      "desc": "El desarrollo web es el conjunto de tareas necesarias para crear y mantener sitios y aplicaciones que funcionan en la Web. Incluye el diseño de la interfaz, la programación del cliente y del servidor, la gestión de datos y el despliegue. No es solo escribir código: también implica entender cómo se comunica el navegador con el servidor, cómo se estructura la información y cómo se protege.",
      "req": []
    },
    {
      "id": "t1-2",
      "m": "m1",
      "order": 2,
      "title": "¿Cómo funciona Internet?",
      "desc": "Internet es una red mundial de computadoras conectadas que intercambian datos mediante protocolos comunes, principalmente TCP/IP. Cada dispositivo tiene una dirección IP y los datos viajan en paquetes que se enrutan hasta su destino. La Web es uno de los servicios que usa Internet: el navegador pide recursos a un servidor y este responde.",
      "req": []
    },
    {
      "id": "t1-8",
      "m": "m1",
      "order": 3,
      "title": "¿Qué es TCP/IP?",
      "desc": "TCP/IP es la familia de protocolos que hace funcionar Internet. IP se encarga de direccionar y encaminar los paquetes entre dispositivos; TCP se coloca encima para ordenarlos, comprobar que llegan completos y reenviar lo que se pierde. Juntos permiten que dos máquinas intercambien datos de forma fiable aunque la red no lo sea. La Web, el correo o las descargas se apoyan en esta base.",
      "req": [
        "t1-2"
      ]
    },
    {
      "id": "t1-9",
      "m": "m1",
      "order": 4,
      "title": "TCP vs. UDP",
      "desc": "TCP y UDP son dos formas de transportar datos sobre IP. TCP abre una conexión, numera los paquetes, confirma la recepción y reenvía lo perdido: es fiable pero más lento. UDP no establece conexión ni garantiza la entrega: es más rápido y ligero, ideal para vídeo en vivo, voz o juegos donde llegar tarde es peor que perder un paquete. HTTP usa TCP; DNS y el streaming suelen usar UDP.",
      "req": [
        "t1-8"
      ]
    },
    {
      "id": "t1-10",
      "m": "m1",
      "order": 5,
      "title": "¿Qué es un paquete de datos?",
      "desc": "Un paquete es una unidad pequeña de información que viaja por la red. Los datos se dividen en paquetes, y cada uno lleva la dirección IP de origen y destino y un número de secuencia. Los routers los envían por caminos distintos, así que pueden llegar desordenados o perderse; TCP los reordena y recupera, mientras que IP solo se encarga de encaminarlos y UDP no comprueba si llegan. Así muchas comunicaciones comparten la misma red.",
      "req": [
        "t1-2",
        "t1-8"
      ]
    },
    {
      "id": "t1-3",
      "m": "m1",
      "order": 6,
      "title": "Internet vs. la Web (WWW)",
      "desc": "Internet es la infraestructura de red; la Web (WWW) es un servicio que funciona sobre ella. La Web usa HTTP, URL y navegadores para acceder a documentos enlazados. Puedes tener Internet sin Web (correo, juegos en línea, FTP) y la Web no existiría sin Internet. Es la diferencia entre la carretera y los vehículos que circulan por ella.",
      "req": [
        "t1-2"
      ]
    },
    {
      "id": "t1-4",
      "m": "m1",
      "order": 7,
      "title": "¿Qué es un sitio web?",
      "desc": "Un sitio web es un conjunto de páginas y recursos relacionados que se identifican con un mismo dominio y suelen compartir diseño y navegación. Puede ser estático, si entrega archivos tal cual, o dinámico, si genera el contenido en el servidor o en el navegador. Ejemplos: una web corporativa, un blog o una tienda en línea.",
      "req": [
        "t1-3"
      ]
    },
    {
      "id": "t1-5",
      "m": "m1",
      "order": 8,
      "title": "¿Qué es una aplicación web?",
      "desc": "Una aplicación web es un programa que se ejecuta en el navegador y se comunica con un servidor para leer o modificar datos. A diferencia de una página informativa, permite acciones: iniciar sesión, comprar, publicar o filtrar. El navegador actúa como cliente y el servidor expone una API que la aplicación consume.",
      "req": [
        "t1-4"
      ]
    },
    {
      "id": "t1-6",
      "m": "m1",
      "order": 9,
      "title": "Página, sitio y aplicación web",
      "desc": "Una página web es un documento individual; un sitio web es el conjunto de páginas bajo un mismo dominio; una aplicación web es un sitio con lógica interactiva que procesa datos. La frontera no siempre es estricta: una tienda puede ser un sitio con muchas páginas y a la vez una aplicación. Lo importante es si el usuario solo lee o también opera.",
      "req": [
        "t1-4",
        "t1-5"
      ]
    },
    {
      "id": "t1-7",
      "m": "m1",
      "order": 10,
      "title": "Tipos de aplicaciones web",
      "desc": "Las aplicaciones web pueden ser estáticas (HTML y CSS sin lógica), dinámicas (el servidor genera cada página), SPA (una sola página que actualiza el contenido con JavaScript) o MPA (varias páginas que recargan el navegador). Cada modelo cambia la velocidad, el SEO y la complejidad. Hoy lo común es combinar renderizado en servidor con interactividad en el cliente.",
      "req": [
        "t1-5"
      ]
    },
    {
      "id": "t15-1",
      "m": "m15",
      "order": 1,
      "title": "¿Qué es HTML?",
      "desc": "HTML (HyperText Markup Language) es el lenguaje de marcado con el que se estructura el contenido de una página: títulos, párrafos, enlaces, imágenes y formularios. No es un lenguaje de programación: describe qué es cada parte para que el navegador construya el DOM. Sobre esa estructura actúan CSS para el estilo y JavaScript para el comportamiento.",
      "req": [
        "t1-5"
      ]
    },
    {
      "id": "t15-2",
      "m": "m15",
      "order": 2,
      "title": "Etiquetas, elementos y atributos",
      "desc": "Una etiqueta es la marca que abre o cierra un fragmento, como <p> y </p>. El elemento es el conjunto formado por la etiqueta de apertura, su contenido y la de cierre. Los atributos añaden información dentro de la apertura, por ejemplo href en un enlace o src en una imagen. Algunos elementos son vacíos y no tienen cierre.",
      "req": [
        "t15-1"
      ]
    },
    {
      "id": "t15-3",
      "m": "m15",
      "order": 3,
      "title": "Estructura de un documento HTML",
      "desc": "Todo documento HTML empieza con <!DOCTYPE html> y se organiza en dos zonas: head, con metadatos, título y enlaces a CSS, y body, con el contenido visible. El atributo lang declara el idioma y la etiqueta meta viewport adapta la página a móviles. Una estructura ordenada facilita el renderizado, el SEO y la accesibilidad.",
      "req": [
        "t15-2"
      ]
    },
    {
      "id": "t15-4",
      "m": "m15",
      "order": 4,
      "title": "HTML semántico",
      "desc": "El HTML semántico usa etiquetas que describen el significado del contenido: header, nav, main, section, article, aside y footer, en lugar de div para todo. Ayuda a los lectores de pantalla, a los buscadores y al propio equipo a entender la página. Mejora la accesibilidad y el SEO sin cambiar el aspecto visual.",
      "req": [
        "t15-3"
      ]
    },
    {
      "id": "t15-5",
      "m": "m15",
      "order": 5,
      "title": "Enlaces e imágenes",
      "desc": "Los enlaces se crean con la etiqueta a y su atributo href, que puede apuntar a otra página, a una sección con #id o a un correo. Las imágenes usan img con src y alt; el texto alternativo describe la imagen para quien no puede verla y es obligatorio para la accesibilidad. Los enlaces construyen la Web y las imágenes deben optimizarse.",
      "req": [
        "t15-2"
      ]
    },
    {
      "id": "t15-6",
      "m": "m15",
      "order": 6,
      "title": "Listas y tablas",
      "desc": "Las listas ordenadas (ol) y no ordenadas (ul) agrupan elementos li; son ideales para menús y pasos. Las tablas (table, tr, th, td) sirven para datos tabulares, no para maquetar. Usa thead, tbody y caption para que sean comprensibles. Una tabla mal usada rompe la semántica y la accesibilidad.",
      "req": [
        "t15-4"
      ]
    },
    {
      "id": "t15-7",
      "m": "m15",
      "order": 7,
      "title": "Formularios HTML",
      "desc": "Un formulario agrupa campos que el usuario rellena y los envía al servidor mediante action y method. Cada control debe tener un label asociado y un name, porque ese nombre es la clave con la que llegan los datos. Los formularios son la principal vía de entrada de información y deben validarse en cliente y servidor.",
      "req": [
        "t15-5"
      ]
    },
    {
      "id": "t15-8",
      "m": "m15",
      "order": 8,
      "title": "Tipos de input",
      "desc": "El elemento input cambia de comportamiento según su atributo type: text, email, password, number, date, checkbox, radio, file o submit. Elegir el tipo correcto activa teclados y validaciones del navegador, y mejora la experiencia en móvil. No sustituye la validación del servidor, pero reduce errores.",
      "req": [
        "t15-7"
      ]
    },
    {
      "id": "t15-9",
      "m": "m15",
      "order": 9,
      "title": "Validación HTML nativa",
      "desc": "El navegador puede validar campos con required, minlength, maxlength, pattern, min, max y type. Muestra mensajes sin JavaScript y bloquea el envío si algo no cumple. Es una primera barrera cómoda, pero el usuario puede saltarla; por eso el servidor debe repetir todas las comprobaciones importantes.",
      "req": [
        "t15-8"
      ]
    },
    {
      "id": "t15-10",
      "m": "m15",
      "order": 10,
      "title": "Accesibilidad básica (a11y)",
      "desc": "La accesibilidad busca que cualquier persona pueda usar la web, incluidas las que usan lector de pantalla, teclado o tienen baja visión. Implica HTML semántico, texto alternativo, contraste suficiente, foco visible, etiquetas en formularios y navegación con teclado. No es un extra: es parte de hacer bien la interfaz.",
      "req": [
        "t15-4",
        "t15-7"
      ]
    },
    {
      "id": "t16-1",
      "m": "m16",
      "order": 1,
      "title": "¿Qué es CSS?",
      "desc": "CSS (Cascading Style Sheets) es el lenguaje que define la presentación de un documento HTML: colores, tipografías, tamaños, espacios y disposición. Separa el contenido de su aspecto y permite adaptar la misma página a móvil, tableta o escritorio. Se aplica mediante reglas con selectores, propiedades y valores.",
      "req": [
        "t15-1"
      ]
    },
    {
      "id": "t16-2",
      "m": "m16",
      "order": 2,
      "title": "Selectores y especificidad",
      "desc": "Un selector indica a qué elementos se aplica una regla: por etiqueta, clase, id, atributo o relación. Cuando varias reglas compiten, gana la de mayor especificidad; si empatan, la que aparece después. Entender la cascada y la especificidad evita usar !important y facilita mantener el CSS.",
      "req": [
        "t16-1"
      ]
    },
    {
      "id": "t16-3",
      "m": "m16",
      "order": 3,
      "title": "Modelo de caja (box model)",
      "desc": "En CSS, cada elemento ocupa una caja formada por contenido, padding, borde y margin. El tamaño total depende de box-sizing: con border-box, width incluye padding y borde, lo que hace el diseño mucho más predecible. El modelo de caja explica por qué un elemento se desborda o deja espacios inesperados.",
      "req": [
        "t16-2"
      ]
    },
    {
      "id": "t16-4",
      "m": "m16",
      "order": 4,
      "title": "Unidades, colores y tipografía",
      "desc": "CSS admite unidades absolutas como px y relativas como rem, em, %, vw y vh. Para accesibilidad conviene usar rem en textos y evitar fijar alturas. Los colores se escriben en hexadecimal, rgb, hsl o variables, y la tipografía se controla con font-family, size, weight y line-height. La legibilidad importa más que la decoración.",
      "req": [
        "t16-3"
      ]
    },
    {
      "id": "t16-5",
      "m": "m16",
      "order": 5,
      "title": "Flexbox",
      "desc": "Flexbox organiza elementos en una fila o columna y reparte el espacio con justify-content, align-items y gap. Es ideal para menús, barras, tarjetas y centrar contenido. Los hijos se adaptan al tamaño disponible y pueden crecer o encogerse. Resuelve muchos problemas que antes exigían floats o posicionamiento manual.",
      "req": [
        "t16-3"
      ]
    },
    {
      "id": "t16-6",
      "m": "m16",
      "order": 6,
      "title": "CSS Grid",
      "desc": "Grid divide el espacio en filas y columnas explícitas y coloca los elementos en celdas. Es la herramienta adecuada para maquetar páginas completas y galerías, combinando fr, repeat y minmax. Puede convivir con Flexbox: Grid para la estructura y Flexbox para el contenido de cada zona. Facilita diseños responsive sin media queries complejas.",
      "req": [
        "t16-5"
      ]
    },
    {
      "id": "t16-7",
      "m": "m16",
      "order": 7,
      "title": "Posicionamiento CSS",
      "desc": "position controla cómo se ubica un elemento: static sigue el flujo normal; relative se desplaza sin sacarlo; absolute se posiciona respecto a un ancestro posicionado; fixed respecto a la ventana; sticky se pega al hacer scroll. Se combinan con top, right, bottom y left y con z-index. Abusar de absolute complica el diseño responsive.",
      "req": [
        "t16-3"
      ]
    },
    {
      "id": "t16-8",
      "m": "m16",
      "order": 8,
      "title": "Diseño responsive y media queries",
      "desc": "El diseño responsive adapta la interfaz al tamaño de pantalla con layouts fluidos, imágenes flexibles y media queries que aplican reglas según el ancho. Conviene diseñar primero para móvil y ampliar con min-width. También cuentan el tamaño táctil de los botones y la legibilidad. No es solo encoger: es reorganizar el contenido.",
      "req": [
        "t16-6"
      ]
    },
    {
      "id": "t16-9",
      "m": "m16",
      "order": 9,
      "title": "Variables CSS",
      "desc": "Las variables CSS, o custom properties, guardan valores reutilizables como colores, espacios o radios. Se declaran en :root y se usan con var(--nombre); pueden cambiar por tema o contexto. Reducen la repetición y facilitan mantener un sistema de diseño coherente. Son distintas de las variables de JavaScript.",
      "req": [
        "t16-1"
      ]
    },
    {
      "id": "t16-10",
      "m": "m16",
      "order": 10,
      "title": "Transiciones y animaciones",
      "desc": "En CSS, las transiciones suavizan cambios de propiedades con transition; las animaciones con @keyframes permiten secuencias más complejas. Deben ser rápidas y sutiles para no distraer, y respetar prefers-reduced-motion. Animar transform y opacity es más eficiente que animar width o top. El movimiento debe comunicar, no decorar sin sentido.",
      "req": [
        "t16-4"
      ]
    },
    {
      "id": "t16-11",
      "m": "m16",
      "order": 11,
      "title": "Frameworks y metodologías CSS",
      "desc": "Existen frameworks como Tailwind, Bootstrap o Bulma, y metodologías como BEM para nombrar clases. Tailwind prioriza utilidades en el HTML; Bootstrap ofrece componentes listos. También hay CSS Modules y CSS-in-JS para aislar estilos. La elección depende del equipo, el proyecto y cuánto control visual necesites.",
      "req": [
        "t16-2"
      ]
    },
    {
      "id": "t17-1",
      "m": "m17",
      "order": 1,
      "title": "¿Qué es JavaScript?",
      "desc": "JavaScript es el lenguaje de programación de la Web. Se ejecuta en el navegador, manipula el DOM, responde a eventos y hace peticiones al servidor; con Node.js también corre fuera del navegador. Es dinámico, interpretado y basado en prototipos. Es la pieza que convierte una página estática en una aplicación interactiva.",
      "req": [
        "t15-1"
      ]
    },
    {
      "id": "t17-2",
      "m": "m17",
      "order": 2,
      "title": "Variables y tipos de datos",
      "desc": "JavaScript declara variables con let y const; var quedó desaconsejado por su alcance confuso. Los tipos primitivos son string, number, boolean, null, undefined, symbol y bigint; además existen objetos y arreglos. const impide reasignar la variable, no modificar el contenido de un objeto. Conocer los tipos evita errores sutiles.",
      "req": [
        "t17-1"
      ]
    },
    {
      "id": "t17-3",
      "m": "m17",
      "order": 3,
      "title": "Operadores y condicionales",
      "desc": "En JavaScript, los operadores permiten comparar, sumar o combinar valores: === compara valor y tipo, && y || combinan condiciones. if, else y switch toman decisiones; el operador ternario resume una elección simple. Conviene usar === en lugar de == y comprobar null y undefined con cuidado. La lógica clara vale más que la sintaxis compacta.",
      "req": [
        "t17-2"
      ]
    },
    {
      "id": "t17-4",
      "m": "m17",
      "order": 4,
      "title": "Funciones",
      "desc": "Una función agrupa código reutilizable, recibe parámetros y puede devolver un valor. Se declaran con function o como funciones flecha, que además conservan el this del contexto. Los parámetros pueden tener valores por defecto y el operador rest agrupa argumentos. Dividir la lógica en funciones pequeñas facilita probar y mantener.",
      "req": [
        "t17-3"
      ]
    },
    {
      "id": "t17-5",
      "m": "m17",
      "order": 5,
      "title": "Objetos y arreglos",
      "desc": "Un objeto agrupa pares clave-valor y modela entidades como un usuario; un arreglo es una lista ordenada de valores. Se accede con punto o corchetes y se recorren con for, for...of o métodos. Se pueden anidar y desestructurar para extraer datos. Son las estructuras básicas para trabajar con JSON y APIs.",
      "req": [
        "t17-4"
      ]
    },
    {
      "id": "t17-6",
      "m": "m17",
      "order": 6,
      "title": "Métodos de arreglos",
      "desc": "map transforma cada elemento, filter selecciona los que cumplen una condición, reduce acumula un resultado y find busca el primero que coincide. forEach recorre sin devolver nada y some/every responden preguntas booleanas. Estos métodos evitan bucles manuales y hacen el código más expresivo. No mutan el arreglo original salvo sort, splice o push.",
      "req": [
        "t17-5"
      ]
    },
    {
      "id": "t17-7",
      "m": "m17",
      "order": 7,
      "title": "DOM y eventos",
      "desc": "El DOM permite seleccionar elementos con querySelector y cambiarlos con textContent, classList o setAttribute. Los eventos, como click, submit o input, se escuchan con addEventListener y permiten reaccionar a la interacción. Conviene delegar eventos en un contenedor y evitar innerHTML con datos externos. Así el JavaScript conecta la lógica con la interfaz.",
      "req": [
        "t11-4",
        "t17-5"
      ]
    },
    {
      "id": "t17-8",
      "m": "m17",
      "order": 8,
      "title": "Asincronía y callbacks",
      "desc": "JavaScript ejecuta una tarea a la vez, pero puede lanzar operaciones que terminan después, como una petición HTTP o un temporizador. Un callback es una función que se ejecuta al terminar. Encadenarlos en exceso crea el llamado callback hell. Las promesas y async/await resuelven ese problema con un código más legible.",
      "req": [
        "t17-4"
      ]
    },
    {
      "id": "t17-9",
      "m": "m17",
      "order": 9,
      "title": "Promesas",
      "desc": "En JavaScript, una promesa representa un valor que estará disponible ahora, más tarde o nunca. Tiene tres estados: pendiente, cumplida y rechazada. Se consume con then para el éxito y catch para el error, y se combina con Promise.all o Promise.race. Una promesa no se cancela sola y un error no capturado puede romper el flujo.",
      "req": [
        "t17-8"
      ]
    },
    {
      "id": "t17-10",
      "m": "m17",
      "order": 10,
      "title": "async/await",
      "desc": "async convierte una función en una promesa; await pausa su ejecución hasta que otra promesa se resuelve, sin bloquear el navegador. El código asíncrono se lee como secuencial y los errores se capturan con try/catch. No elimina la asincronía: solo la hace más clara. Conviene no abusar de await secuencial cuando las tareas son independientes.",
      "req": [
        "t17-9"
      ]
    },
    {
      "id": "t17-11",
      "m": "m17",
      "order": 11,
      "title": "fetch y consumo de APIs",
      "desc": "fetch permite hacer peticiones HTTP desde el navegador y devuelve una promesa con la respuesta. Hay que comprobar response.ok antes de parsear el JSON, porque fetch no rechaza por un 404 o un 500. Se configuran método, headers y body. Para APIs protegidas se envía el token en Authorization y se manejan los errores de red.",
      "req": [
        "t17-10",
        "t13-5"
      ]
    },
    {
      "id": "t17-12",
      "m": "m17",
      "order": 12,
      "title": "Módulos JavaScript",
      "desc": "Los módulos dividen el código en archivos con export e import. Cada módulo tiene su propio alcance y solo expone lo que decide. Facilitan la organización, las pruebas y el trabajo en equipo. En el navegador se cargan con type=\"module\"; en Node.js se usan ESM o CommonJS. Evitan depender de variables globales.",
      "req": [
        "t17-4"
      ]
    },
    {
      "id": "t2-1",
      "m": "m2",
      "order": 1,
      "title": "¿Qué es el Frontend?",
      "desc": "El frontend es la parte de la aplicación que se ejecuta en el navegador y con la que interactúa el usuario. Se construye con HTML, CSS y JavaScript, y se encarga de la estructura, el estilo, la accesibilidad y la respuesta a eventos. Consume datos del backend mediante peticiones HTTP y los presenta de forma comprensible.",
      "req": [
        "t1-5"
      ]
    },
    {
      "id": "t2-2",
      "m": "m2",
      "order": 2,
      "title": "¿Qué es el Backend?",
      "desc": "El backend es la parte que se ejecuta en el servidor: recibe peticiones, aplica reglas, consulta la base de datos y devuelve respuestas. No lo ve el usuario directamente, pero sostiene la lógica y la seguridad. Se implementa con lenguajes como Node.js, Python, PHP, Java o Go, y suele exponer una API.",
      "req": [
        "t1-5"
      ]
    },
    {
      "id": "t2-3",
      "m": "m2",
      "order": 3,
      "title": "Responsabilidades del Frontend",
      "desc": "El frontend valida datos antes de enviarlos, gestiona el estado de la interfaz, muestra errores y estados de carga, y cuida la accesibilidad y el rendimiento. También decide cómo navegar entre vistas y cómo cachear respuestas. No debe ser la única defensa: la validación importante se repite en el servidor.",
      "req": [
        "t2-1"
      ]
    },
    {
      "id": "t2-4",
      "m": "m2",
      "order": 4,
      "title": "Responsabilidades del Backend",
      "desc": "El backend autentica usuarios, autoriza acciones, valida y transforma datos, aplica la lógica de negocio y persiste información. También gestiona transacciones, registros, colas y tareas programadas. Debe asumir que cualquier petición puede ser maliciosa o incorrecta, por eso nunca confía ciegamente en el cliente.",
      "req": [
        "t2-2"
      ]
    },
    {
      "id": "t2-5",
      "m": "m2",
      "order": 5,
      "title": "Frontend vs. Backend",
      "desc": "El frontend ocurre en el dispositivo del usuario y el backend en el servidor. El primero se centra en la experiencia y el segundo en las reglas y los datos. La frontera está en la API: todo lo que el frontend necesita del servidor pasa por ella. Separarlos permite cambiar la interfaz sin reescribir la lógica y escalar cada parte por separado.",
      "req": [
        "t2-3",
        "t2-4"
      ]
    },
    {
      "id": "t2-6",
      "m": "m2",
      "order": 6,
      "title": "¿Qué es Full Stack?",
      "desc": "Un desarrollador Full Stack conoce ambas mitades: puede construir la interfaz, diseñar la API, modelar datos y desplegar la aplicación. No significa ser experto en todo, sino entender cómo encajan las piezas y poder moverse entre ellas. Es un perfil muy útil en equipos pequeños y proyectos personales.",
      "req": [
        "t2-5"
      ]
    },
    {
      "id": "t2-7",
      "m": "m2",
      "order": 7,
      "title": "¿Cómo se comunican Frontend y Backend?",
      "desc": "Se comunican mediante peticiones HTTP: el frontend envía una solicitud a una URL con un método y, si hace falta, datos en el body; el backend responde con un código de estado y un cuerpo, normalmente JSON. La API define ese contrato: rutas, formatos, errores y reglas de autenticación. Si el contrato cambia sin avisar, la interfaz se rompe.",
      "req": [
        "t2-5"
      ]
    },
    {
      "id": "t2-8",
      "m": "m2",
      "order": 8,
      "title": "Tecnologías de cada parte",
      "desc": "En el frontend dominan HTML, CSS y JavaScript, con frameworks como React, Vue o Angular. En el backend hay más variedad: Node.js, Python con Django o FastAPI, PHP con Laravel, Java con Spring, Go o .NET. La base de datos puede ser relacional (PostgreSQL, MySQL) o NoSQL (MongoDB). La elección depende del equipo, el problema y el ecosistema.",
      "req": [
        "t2-5"
      ]
    },
    {
      "id": "t2-9",
      "m": "m2",
      "order": 9,
      "title": "¿Qué es la lógica de negocio?",
      "desc": "La lógica de negocio son las reglas que definen qué puede hacer la aplicación: quién puede comprar, cuándo se aplica un descuento, qué estados puede tener un pedido. Vive en el backend para que no pueda saltarse desde el navegador y para reutilizarse desde otras interfaces. Debe estar separada de la presentación y del acceso a datos.",
      "req": [
        "t2-4"
      ]
    },
    {
      "id": "t2-10",
      "m": "m2",
      "order": 10,
      "title": "¿Qué procesa el cliente y qué el servidor?",
      "desc": "El cliente procesa la interacción, el renderizado y validaciones rápidas; el servidor procesa la lógica confiable, la persistencia y la seguridad. El cliente puede calcular un total para mostrarlo, pero el servidor debe recalcularlo antes de cobrar. Esa división evita fraudes y mantiene la aplicación coherente aunque el usuario modifique el código en su navegador.",
      "req": [
        "t2-7",
        "t2-9"
      ]
    },
    {
      "id": "t3-1",
      "m": "m3",
      "order": 1,
      "title": "¿Qué es un cliente?",
      "desc": "Un cliente es el programa que solicita un recurso o servicio a otro programa. En la Web suele ser el navegador, pero también una app móvil, una aplicación de escritorio o un script. El cliente inicia la comunicación, envía la petición y espera la respuesta del servidor.",
      "req": [
        "t2-7"
      ]
    },
    {
      "id": "t3-2",
      "m": "m3",
      "order": 2,
      "title": "¿Qué es un servidor?",
      "desc": "Un servidor es el programa que escucha peticiones en un puerto, las procesa y devuelve una respuesta. Puede servir archivos, ejecutar lógica o actuar como intermediario. No es necesariamente una máquina enorme: tu propia computadora puede ejecutar un servidor local para desarrollo.",
      "req": [
        "t2-7"
      ]
    },
    {
      "id": "t3-3",
      "m": "m3",
      "order": 3,
      "title": "Cliente vs. servidor",
      "desc": "Cliente y servidor son roles, no tipos de máquina. Un mismo equipo puede actuar como cliente al pedir datos y como servidor al atender peticiones. Lo que define el rol es quién inicia la comunicación y quién responde. En una arquitectura distribuida, esos roles pueden cambiar según la tarea.",
      "req": [
        "t3-1",
        "t3-2"
      ]
    },
    {
      "id": "t3-4",
      "m": "m3",
      "order": 4,
      "title": "Tipos de clientes",
      "desc": "Hay clientes navegador (Chrome, Firefox, Safari), clientes móviles (apps nativas o híbridas), clientes de escritorio (programas instalados), clientes de línea de comandos (curl, scripts) y otros servidores que consumen una API. Cada uno tiene capacidades distintas de renderizado, almacenamiento y red, pero todos hablan HTTP si consumen la Web.",
      "req": [
        "t3-1"
      ]
    },
    {
      "id": "t3-5",
      "m": "m3",
      "order": 5,
      "title": "Tipos de servidores",
      "desc": "Existen servidores web (Nginx, Apache) que entregan archivos y actúan como proxy, servidores de aplicaciones (Node.js, Gunicorn) que ejecutan la lógica, servidores de base de datos (PostgreSQL, MySQL) y servidores de correo o archivos. En producción suelen combinarse: un proxy recibe la petición y la deriva al servicio correspondiente.",
      "req": [
        "t3-2"
      ]
    },
    {
      "id": "t3-6",
      "m": "m3",
      "order": 6,
      "title": "¿Qué es el hosting?",
      "desc": "El hosting es el servicio que aloja tu aplicación en servidores conectados a Internet. Puede ser compartido, un servidor virtual (VPS), dedicado o en la nube. Incluye energía, red, sistema operativo y herramientas de despliegue. Elegir hosting implica decidir cuánto control, escalabilidad y soporte necesitas.",
      "req": [
        "t3-5"
      ]
    },
    {
      "id": "t3-7",
      "m": "m3",
      "order": 7,
      "title": "Servidor local vs. remoto",
      "desc": "Un servidor local se ejecuta en tu computadora y solo es accesible desde tu red o desde la propia máquina; se usa para desarrollar y probar. Un servidor remoto está en otro equipo accesible por Internet y suele tener un dominio y una dirección IP pública. Pasar de local a remoto exige configurar despliegue, variables de entorno, HTTPS y respaldos.",
      "req": [
        "t3-5"
      ]
    },
    {
      "id": "t3-8",
      "m": "m3",
      "order": 8,
      "title": "Desarrollo vs. producción",
      "desc": "El entorno de desarrollo es donde pruebas con datos falsos y errores visibles; el de producción es donde usan la aplicación personas reales. Producción debe tener HTTPS, registros, monitoreo, copias de seguridad y configuraciones seguras. Nunca conviene probar cambios directamente en producción sin un entorno intermedio.",
      "req": [
        "t3-7"
      ]
    },
    {
      "id": "t4-1",
      "m": "m4",
      "order": 1,
      "title": "¿Qué es la arquitectura cliente-servidor?",
      "desc": "Es un modelo en el que las tareas se reparten entre clientes que piden servicios y servidores que los proporcionan. El cliente no necesita conocer cómo se almacenan los datos; solo el contrato de la API. Esta separación permite escalar, actualizar y proteger cada parte de forma independiente.",
      "req": [
        "t3-3"
      ]
    },
    {
      "id": "t4-2",
      "m": "m4",
      "order": 2,
      "title": "Cómo funciona el modelo cliente-servidor",
      "desc": "El cliente envía una petición a una URL; el servidor la recibe, identifica la ruta y el método, ejecuta la lógica y responde. Si hay una base de datos, el servidor consulta o modifica datos antes de contestar. El cliente recibe el resultado y actualiza la interfaz. Todo el ciclo ocurre en milisegundos y puede repetirse muchas veces por página.",
      "req": [
        "t4-1"
      ]
    },
    {
      "id": "t4-3",
      "m": "m4",
      "order": 3,
      "title": "Arquitectura de dos capas (2-Tier)",
      "desc": "En dos capas, el cliente se comunica directamente con el servidor de datos o de aplicación. Es simple y rápida para aplicaciones pequeñas, pero mezcla presentación y acceso a datos. Si cambia la base de datos, puede afectar al cliente, y la seguridad depende de que el cliente no acceda directamente a recursos sensibles.",
      "req": [
        "t4-2"
      ]
    },
    {
      "id": "t4-4",
      "m": "m4",
      "order": 4,
      "title": "Arquitectura de tres capas (3-Tier)",
      "desc": "Separa presentación (cliente), lógica (servidor de aplicación) y datos (base de datos). El cliente solo habla con la capa de lógica; esta es la única que accede a los datos. Así se protege la información, se reutiliza la lógica y se puede escalar cada capa por separado. Es el modelo más común en aplicaciones web profesionales.",
      "req": [
        "t4-3"
      ]
    },
    {
      "id": "t4-5",
      "m": "m4",
      "order": 5,
      "title": "Arquitectura multicapa (N-Tier)",
      "desc": "Añade capas intermedias como caché, colas, servicios externos, autenticación o microservicios. Cada capa tiene una responsabilidad y se comunica mediante contratos. Más capas dan flexibilidad y escalabilidad, pero también más latencia, más puntos de fallo y más complejidad operativa. No conviene añadirlas sin una necesidad real.",
      "req": [
        "t4-4"
      ]
    },
    {
      "id": "t4-6",
      "m": "m4",
      "order": 6,
      "title": "Separación de responsabilidades",
      "desc": "Cada parte debe ocuparse de una tarea y conocer lo mínimo de las demás. La interfaz no consulta la base de datos directamente; el backend no genera HTML de presentación; la base de datos no decide reglas de negocio. Esta separación facilita las pruebas, el mantenimiento y los cambios sin efectos colaterales.",
      "req": [
        "t4-4"
      ]
    },
    {
      "id": "t4-7",
      "m": "m4",
      "order": 7,
      "title": "Flujo de comunicación entre capas",
      "desc": "Una acción del usuario se convierte en una petición HTTP que llega al servidor. El servidor valida la entrada, aplica la lógica, consulta o escribe en la base de datos y construye una respuesta, normalmente JSON. El cliente recibe el resultado y actualiza la vista. Si algo falla, cada capa devuelve un error comprensible y registra el problema.",
      "req": [
        "t4-5",
        "t4-6"
      ]
    },
    {
      "id": "t4-8",
      "m": "m4",
      "order": 8,
      "title": "¿Qué es una API?",
      "desc": "Una API (interfaz de programación de aplicaciones) es un contrato que permite que dos programas se comuniquen sin conocer su implementación interna. Define rutas, métodos, parámetros, formatos y errores. En la Web suele ser HTTP + JSON. Es la puerta controlada por la que el frontend accede a los datos y funciones del backend.",
      "req": [
        "t4-2"
      ]
    },
    {
      "id": "t4-9",
      "m": "m4",
      "order": 9,
      "title": "¿Qué es una API REST?",
      "desc": "REST es un estilo de diseño para APIs que trata todo como recursos identificados por URL y usa los métodos HTTP según su intención: GET para leer, POST para crear, PUT/PATCH para actualizar y DELETE para borrar. Debe ser sin estado: cada petición lleva lo necesario para entenderse. No es un protocolo ni un estándar obligatorio, sino un conjunto de principios.",
      "req": [
        "t4-8"
      ]
    },
    {
      "id": "t4-10",
      "m": "m4",
      "order": 10,
      "title": "Conectar la app web con la base de datos",
      "desc": "La aplicación nunca conecta el navegador directamente a la base de datos: lo hace el backend con credenciales seguras. El backend recibe la petición, valida permisos, ejecuta una consulta parametrizada y devuelve solo los datos necesarios. Así se evita exponer la base, se controla el acceso y se previenen inyecciones SQL.",
      "req": [
        "t4-4"
      ]
    },
    {
      "id": "t5-1",
      "m": "m5",
      "order": 1,
      "title": "¿Qué es HTTP?",
      "desc": "HTTP (HyperText Transfer Protocol) es el protocolo de comunicación de la Web. Define cómo el cliente formula una petición y cómo el servidor responde: métodos, URL, encabezados, cuerpo y códigos de estado. Es un protocolo de texto, sin estado, que normalmente viaja sobre TCP. Cada recurso se identifica con una URL.",
      "req": [
        "t4-2"
      ]
    },
    {
      "id": "t5-2",
      "m": "m5",
      "order": 2,
      "title": "¿Qué es HTTPS?",
      "desc": "HTTPS es HTTP dentro de una conexión cifrada con TLS. Protege lo que se envía y se recibe: contraseñas, cookies, datos personales y tokens. Además verifica que el servidor es quien dice ser mediante un certificado. Hoy es obligatorio para cualquier sitio serio; los navegadores marcan como inseguro todo lo que use HTTP simple.",
      "req": [
        "t5-1"
      ]
    },
    {
      "id": "t5-3",
      "m": "m5",
      "order": 3,
      "title": "HTTP vs. HTTPS",
      "desc": "La diferencia es la capa de seguridad: HTTP envía los datos en claro y HTTPS los cifra con TLS. HTTPS también autentica el servidor y protege la integridad del contenido. En HTTP cualquiera en la red podría leer o modificar una petición; en HTTPS no. El puerto habitual cambia de 80 a 443.",
      "req": [
        "t5-2"
      ]
    },
    {
      "id": "t5-4",
      "m": "m5",
      "order": 4,
      "title": "¿Qué es SSL/TLS?",
      "desc": "SSL y TLS son protocolos criptográficos que crean un canal seguro entre cliente y servidor. TLS es la versión moderna; SSL quedó obsoleto. Negocian algoritmos, verifican el certificado e intercambian claves para cifrar la conexión. Son la base técnica de HTTPS.",
      "req": [
        "t5-2"
      ]
    },
    {
      "id": "t5-5",
      "m": "m5",
      "order": 5,
      "title": "¿Qué es un certificado digital?",
      "desc": "Es un archivo emitido por una autoridad de certificación que vincula un dominio con una clave pública. Permite al navegador comprobar que el servidor es legítimo y establecer una conexión cifrada. Tiene fechas de validez y debe renovarse. Un certificado inválido o vencido provoca advertencias de seguridad.",
      "req": [
        "t5-4"
      ]
    },
    {
      "id": "t5-6",
      "m": "m5",
      "order": 6,
      "title": "Cómo funciona el cifrado HTTPS",
      "desc": "El cliente y el servidor realizan un handshake: acuerdan la versión de TLS, verifican el certificado e intercambian claves de forma segura. A partir de ahí usan cifrado simétrico, más rápido, para el resto de la comunicación. Cada conexión obtiene claves distintas, así que interceptar una no compromete las demás.",
      "req": [
        "t5-4",
        "t5-5"
      ]
    },
    {
      "id": "t5-7",
      "m": "m5",
      "order": 7,
      "title": "¿Qué es una conexión segura?",
      "desc": "Es una conexión en la que los datos viajan cifrados, el servidor está autenticado y el contenido no puede alterarse sin detectarse. En la Web se consigue con HTTPS. No basta con tener candado: también importan la configuración del servidor, la validez del certificado y las buenas prácticas de la aplicación.",
      "req": [
        "t5-6"
      ]
    },
    {
      "id": "t5-8",
      "m": "m5",
      "order": 8,
      "title": "¿Qué es un puerto? (80 y 443)",
      "desc": "Un puerto es un número que identifica un servicio dentro de una máquina con una misma dirección IP. HTTP usa el 80 y HTTPS el 443 por convención; si se omite en la URL, el navegador los asume. Otros servicios usan otros puertos, como 3000 para un servidor de desarrollo o 5432 para PostgreSQL.",
      "req": [
        "t5-1"
      ]
    },
    {
      "id": "t5-9",
      "m": "m5",
      "order": 9,
      "title": "Encabezados HTTP (Headers)",
      "desc": "Los headers son metadatos que acompañan una petición o una respuesta. Indican formato, idioma, cookies, autenticación, caché, origen y más. Tienen la forma Nombre: valor. Algunos son obligatorios, otros opcionales, y muchos afectan a la seguridad y al rendimiento. No son el contenido, pero lo condicionan.",
      "req": [
        "t5-1"
      ]
    },
    {
      "id": "t5-10",
      "m": "m5",
      "order": 10,
      "title": "Cuerpo de una solicitud (Body)",
      "desc": "El body es la parte de la petición que lleva datos, como un formulario o un objeto JSON. No todas las peticiones lo tienen: GET normalmente carece de body. Su formato se declara con Content-Type y su tamaño puede limitarse en el servidor. El backend debe validarlo antes de usarlo.",
      "req": [
        "t5-1"
      ]
    },
    {
      "id": "t6-1",
      "m": "m6",
      "order": 1,
      "title": "¿Qué es una solicitud HTTP?",
      "desc": "Una solicitud HTTP es el mensaje que el cliente envía al servidor para pedir un recurso o ejecutar una acción. Contiene un método, una URL, la versión del protocolo, encabezados y, a veces, un cuerpo. El servidor la interpreta y devuelve una respuesta con un código de estado.",
      "req": [
        "t5-9",
        "t5-10"
      ]
    },
    {
      "id": "t6-2",
      "m": "m6",
      "order": 2,
      "title": "¿Qué es una respuesta HTTP?",
      "desc": "Es el mensaje que el servidor devuelve al cliente. Incluye un código de estado, encabezados y, opcionalmente, un cuerpo con el recurso o el resultado. El código indica si la operación tuvo éxito o falló, y los headers describen el contenido. El cliente decide qué hacer con esa información.",
      "req": [
        "t6-1"
      ]
    },
    {
      "id": "t6-3",
      "m": "m6",
      "order": 3,
      "title": "Estructura de una solicitud",
      "desc": "Una solicitud tiene una línea inicial con método, ruta y versión (por ejemplo GET /productos/15 HTTP/1.1), seguida de encabezados y una línea en blanco. Después puede venir el body. La ruta identifica el recurso, los headers añaden contexto y el body transporta datos cuando el método lo permite.",
      "req": [
        "t6-1"
      ]
    },
    {
      "id": "t6-4",
      "m": "m6",
      "order": 4,
      "title": "Estructura de una respuesta",
      "desc": "Empieza con la versión y el código de estado (por ejemplo HTTP/1.1 200 OK), sigue con los encabezados y una línea en blanco, y termina con el cuerpo. Los headers indican tipo de contenido, longitud, caché o cookies; el body contiene HTML, JSON, una imagen o un mensaje de error.",
      "req": [
        "t6-2"
      ]
    },
    {
      "id": "t6-5",
      "m": "m6",
      "order": 5,
      "title": "¿Qué es Content-Type?",
      "desc": "Content-Type es el encabezado que declara el formato del body: application/json, text/html, text/plain, multipart/form-data, image/png, etc. Sin él, el receptor tendría que adivinar cómo interpretar los datos. Debe coincidir con lo que realmente se envía; si no, el cliente o el servidor pueden rechazarlo o parsearlo mal.",
      "req": [
        "t6-3"
      ]
    },
    {
      "id": "t6-6",
      "m": "m6",
      "order": 6,
      "title": "¿Qué es Accept?",
      "desc": "Accept es el encabezado con el que el cliente indica qué formatos de respuesta puede entender, por ejemplo application/json o text/html. El servidor puede usarlo para negociar el contenido. Si no puede satisfacerlo, responde con 406 Not Acceptable. No obliga al servidor, pero expresa una preferencia.",
      "req": [
        "t6-3"
      ]
    },
    {
      "id": "t6-7",
      "m": "m6",
      "order": 7,
      "title": "¿Qué es Authorization?",
      "desc": "Authorization es el encabezado que transporta credenciales para acceder a un recurso protegido, normalmente un token: Authorization: Bearer <token>. El servidor lo valida y decide si la petición puede continuar. No debe confundirse con autenticación: primero se identifica al usuario y luego se autoriza la acción.",
      "req": [
        "t6-3"
      ]
    },
    {
      "id": "t6-8",
      "m": "m6",
      "order": 8,
      "title": "¿Qué es User-Agent?",
      "desc": "User-Agent es un encabezado que identifica el cliente: navegador, versión, sistema operativo o app. Sirve para adaptar respuestas, detectar bots y recoger estadísticas. No es fiable para seguridad porque el cliente puede falsificarlo. Hoy se usa más para compatibilidad y diagnóstico que para bloquear accesos.",
      "req": [
        "t6-3"
      ]
    },
    {
      "id": "t6-9",
      "m": "m6",
      "order": 9,
      "title": "¿Qué es JSON?",
      "desc": "JSON (JavaScript Object Notation) es un formato de texto ligero para representar datos mediante objetos, arreglos, cadenas, números, booleanos y null. Es fácil de leer y de parsear, y por eso domina las APIs. No es un lenguaje de programación ni admite comentarios; solo describe datos.",
      "req": [
        "t6-4"
      ]
    },
    {
      "id": "t6-10",
      "m": "m6",
      "order": 10,
      "title": "JSON vs. XML",
      "desc": "Ambos sirven para intercambiar datos estructurados. JSON es más compacto y directo de mapear a objetos; XML usa etiquetas, atributos y esquemas, y fue común en servicios SOAP. JSON domina las APIs modernas, mientras XML sigue presente en integraciones empresariales y documentos. La elección depende del ecosistema.",
      "req": [
        "t6-9"
      ]
    },
    {
      "id": "t6-11",
      "m": "m6",
      "order": 11,
      "title": "Inspeccionar solicitudes en el navegador",
      "desc": "Las DevTools del navegador permiten ver cada petición en la pestaña Network: URL, método, headers, body, código de estado, tiempos y respuesta. Es la forma más rápida de comprobar qué se envía, qué devuelve el servidor y dónde falla. También se puede filtrar por tipo, buscar texto y copiar la petición como cURL.",
      "req": [
        "t6-4"
      ]
    },
    {
      "id": "t6-12",
      "m": "m6",
      "order": 12,
      "title": "DevTools, Network y Postman",
      "desc": "DevTools Network sirve para observar el tráfico real de la página; Postman o curl permiten construir peticiones manuales y probar la API sin interfaz. Con ellas puedes cambiar métodos, headers y body, y comparar respuestas. Son herramientas complementarias: una diagnostica, la otra experimenta.",
      "req": [
        "t6-11"
      ]
    },
    {
      "id": "t7-1",
      "m": "m7",
      "order": 1,
      "title": "¿Qué son los métodos HTTP?",
      "desc": "Son verbos que indican la intención de una petición: leer, crear, reemplazar, modificar o eliminar. Los principales son GET, POST, PUT, PATCH y DELETE. El método no es solo una convención: servidores, cachés y proxies lo usan para decidir cómo tratar la petición. Elegir bien mejora la claridad y la seguridad de la API.",
      "req": [
        "t6-3"
      ]
    },
    {
      "id": "t7-2",
      "m": "m7",
      "order": 2,
      "title": "GET: obtener información",
      "desc": "GET solicita un recurso y no debe modificar el estado del servidor. Sus parámetros viajan en la URL, por lo que quedan visibles en el historial y los registros; no conviene usarlo para datos sensibles. Es seguro e idempotente: repetirlo devuelve lo mismo salvo que el recurso cambie por otro motivo.",
      "req": [
        "t7-1"
      ]
    },
    {
      "id": "t7-3",
      "m": "m7",
      "order": 3,
      "title": "POST: crear o procesar",
      "desc": "POST envía datos en el body para crear un recurso o disparar un proceso. No es seguro ni idempotente: dos envíos pueden crear dos registros. Se usa para formularios, altas y acciones que cambian estado. La respuesta suele incluir el recurso creado y un código 201.",
      "req": [
        "t7-1"
      ]
    },
    {
      "id": "t7-4",
      "m": "m7",
      "order": 4,
      "title": "PUT: reemplazar un recurso",
      "desc": "PUT reemplaza el recurso completo por la representación enviada. Si envías solo un campo, los demás pueden perderse. Es idempotente: repetir la misma petición deja el mismo estado. Se usa cuando el cliente conoce la representación completa y quiere sobrescribirla.",
      "req": [
        "t7-1"
      ]
    },
    {
      "id": "t7-5",
      "m": "m7",
      "order": 5,
      "title": "PATCH: modificar parcialmente",
      "desc": "PATCH aplica cambios parciales a un recurso: solo los campos enviados. Es útil para actualizaciones pequeñas y evita reenviar todo el objeto. No siempre es idempotente, porque el resultado puede depender del estado previo o de operaciones como incrementar un contador.",
      "req": [
        "t7-1"
      ]
    },
    {
      "id": "t7-6",
      "m": "m7",
      "order": 6,
      "title": "DELETE: eliminar un recurso",
      "desc": "DELETE solicita eliminar un recurso identificado por la URL. Es idempotente: si el recurso ya no existe, repetir la petición no debería cambiar el resultado. Puede responder 204 si no devuelve cuerpo o 200 si confirma la eliminación. En sistemas reales a veces se hace borrado lógico para conservar historial.",
      "req": [
        "t7-1"
      ]
    },
    {
      "id": "t7-7",
      "m": "m7",
      "order": 7,
      "title": "PUT vs. PATCH",
      "desc": "PUT reemplaza el recurso completo; PATCH modifica solo una parte. Si tienes un usuario con nombre, correo y teléfono, PUT exige enviar los tres campos y PATCH permite enviar solo el teléfono. PUT suele ser idempotente por definición; PATCH no necesariamente. Elegir mal puede borrar datos sin querer.",
      "req": [
        "t7-4",
        "t7-5"
      ]
    },
    {
      "id": "t7-8",
      "m": "m7",
      "order": 8,
      "title": "GET vs. POST",
      "desc": "GET pide datos y los pone en la URL; POST envía datos en el body y puede cambiar estado. GET es cacheable, visible y repetible sin efectos; POST no. Usa GET para consultar y POST para crear o ejecutar acciones. No uses GET para operaciones que modifiquen datos.",
      "req": [
        "t7-2",
        "t7-3"
      ]
    },
    {
      "id": "t7-9",
      "m": "m7",
      "order": 9,
      "title": "Métodos seguros",
      "desc": "Un método es seguro si no modifica el estado del servidor. GET, HEAD y OPTIONS lo son; POST, PUT, PATCH y DELETE no. “Seguro” no significa cifrado ni libre de riesgos: significa que llamarlo no cambia datos. Los navegadores y rastreadores pueden repetir métodos seguros sin consecuencias.",
      "req": [
        "t7-2"
      ]
    },
    {
      "id": "t7-10",
      "m": "m7",
      "order": 10,
      "title": "Métodos idempotentes e idempotencia",
      "desc": "Idempotente significa que repetir la misma petición produce el mismo estado final. GET, PUT y DELETE lo son; POST normalmente no. No es lo mismo que “seguro”: DELETE cambia datos, pero repetirlo no debería eliminarlos dos veces. La idempotencia permite reintentar peticiones con seguridad.",
      "req": [
        "t7-4",
        "t7-6"
      ]
    },
    {
      "id": "t7-11",
      "m": "m7",
      "order": 11,
      "title": "Cuándo usar cada método",
      "desc": "GET para leer, POST para crear o procesar, PUT para reemplazar, PATCH para actualizar parcialmente y DELETE para eliminar. Si una operación no encaja, probablemente estás modelando mal el recurso. Mantén la coherencia en toda la API: el mismo verbo debe significar lo mismo en todas las rutas.",
      "req": [
        "t7-7",
        "t7-8",
        "t7-10"
      ]
    },
    {
      "id": "t8-1",
      "m": "m8",
      "order": 1,
      "title": "¿Qué son los códigos de estado?",
      "desc": "Son números de tres dígitos que el servidor devuelve para indicar el resultado de una petición. Se agrupan por familias: 1xx informativo, 2xx éxito, 3xx redirección, 4xx error del cliente y 5xx error del servidor. El código permite al cliente reaccionar sin analizar el cuerpo. Debe ser coherente con lo que realmente ocurrió.",
      "req": [
        "t6-4"
      ]
    },
    {
      "id": "t8-2",
      "m": "m8",
      "order": 2,
      "title": "Clasificación 1xx–5xx",
      "desc": "1xx indica que la petición se está procesando; 2xx que tuvo éxito; 3xx que el recurso está en otro lugar o no cambió; 4xx que hay un problema en la petición del cliente; 5xx que el servidor falló. La primera cifra ya orienta el diagnóstico. No todos los códigos se usan a diario, pero conviene conocer la familia.",
      "req": [
        "t8-1"
      ]
    },
    {
      "id": "t8-3",
      "m": "m8",
      "order": 3,
      "title": "Códigos 2xx: éxito",
      "desc": "200 OK confirma una operación correcta con cuerpo; 201 Created indica que se creó un recurso, normalmente tras un POST; 204 No Content confirma éxito sin cuerpo, típico en DELETE o PUT. Otros como 202 Accepted indican que la operación se procesará después. Usa el más específico que describa el resultado.",
      "req": [
        "t8-2"
      ]
    },
    {
      "id": "t8-4",
      "m": "m8",
      "order": 4,
      "title": "Códigos 3xx: redirecciones",
      "desc": "301 indica un cambio permanente de URL; 302, uno temporal; 304 Not Modified dice que la copia en caché sigue vigente. 307 y 308 conservan el método original al redirigir. Las redirecciones no son errores: guían al cliente hacia el recurso correcto o ahorran transferencia.",
      "req": [
        "t8-2"
      ]
    },
    {
      "id": "t8-5",
      "m": "m8",
      "order": 5,
      "title": "Códigos 4xx: errores del cliente",
      "desc": "Indican que la petición no puede procesarse por algo del lado del cliente: ruta inexistente (404), datos inválidos (400/422), falta de autenticación (401), permisos insuficientes (403), método no permitido (405) o demasiadas peticiones (429). El servidor debe explicar el problema sin revelar información sensible.",
      "req": [
        "t8-2"
      ]
    },
    {
      "id": "t8-6",
      "m": "m8",
      "order": 6,
      "title": "Códigos 5xx: errores del servidor",
      "desc": "Indican que el servidor falló al procesar una petición válida: error interno (500), servicio no disponible (503), tiempo de espera (504) o fallo de una dependencia (502). No son culpa del cliente. Deben registrarse y monitorizarse, y no conviene exponer detalles internos en la respuesta.",
      "req": [
        "t8-2"
      ]
    },
    {
      "id": "t8-7",
      "m": "m8",
      "order": 7,
      "title": "401 vs. 403",
      "desc": "401 Unauthorized significa que no estás autenticado o tu credencial no es válida: falta iniciar sesión o el token expiró. 403 Forbidden significa que el servidor te identifica pero no tienes permiso para esa acción. En 401 conviene enviar WWW-Authenticate; en 403 no se debe revelar cómo obtener acceso.",
      "req": [
        "t8-5"
      ]
    },
    {
      "id": "t8-8",
      "m": "m8",
      "order": 8,
      "title": "400 vs. 422",
      "desc": "400 Bad Request indica que la petición está mal formada: JSON inválido, parámetros faltantes o tipos incorrectos. 422 Unprocessable Entity indica que la sintaxis es válida pero los datos no cumplen las reglas de negocio, como un correo con formato correcto pero ya registrado. Algunos equipos usan 400 para ambos; ser específico ayuda al cliente.",
      "req": [
        "t8-5"
      ]
    },
    {
      "id": "t8-9",
      "m": "m8",
      "order": 9,
      "title": "Cuándo usar cada código",
      "desc": "Elige el código que describa con precisión el resultado: 200 para lectura correcta, 201 al crear, 204 al borrar sin cuerpo, 400 para entrada inválida, 401 sin autenticar, 403 sin permiso, 404 si no existe, 409 en conflictos, 422 en validación semántica y 500 ante fallos internos. La coherencia facilita el diagnóstico y las integraciones.",
      "req": [
        "t8-3",
        "t8-4",
        "t8-5",
        "t8-6",
        "t8-7",
        "t8-8"
      ]
    },
    {
      "id": "t9-1",
      "m": "m9",
      "order": 1,
      "title": "¿Qué es una URL?",
      "desc": "Una URL (Uniform Resource Locator) es la dirección que identifica y localiza un recurso en la Web. Indica el protocolo, el dominio, la ruta y, opcionalmente, parámetros y fragmento. El navegador la usa para saber a qué servidor conectarse y qué recurso pedir. Ejemplo: https://ejemplo.com/productos/15?color=azul.",
      "req": [
        "t4-2"
      ]
    },
    {
      "id": "t9-2",
      "m": "m9",
      "order": 2,
      "title": "¿Qué es una URI?",
      "desc": "Una URI (Uniform Resource Identifier) es un identificador genérico de un recurso. Puede ser una URL, que además indica cómo localizarlo, o un URN, que solo le da un nombre persistente. En la práctica, casi todas las URI que usamos en la Web son URL. El término es más amplio y formal.",
      "req": [
        "t9-1"
      ]
    },
    {
      "id": "t9-3",
      "m": "m9",
      "order": 3,
      "title": "URL vs. URI",
      "desc": "Toda URL es una URI, pero no toda URI es una URL. La URL añade la información necesaria para localizar el recurso: protocolo, servidor y ruta. La URI solo lo identifica. En conversaciones técnicas se usan casi como sinónimos, pero en especificaciones la distinción importa.",
      "req": [
        "t9-2"
      ]
    },
    {
      "id": "t9-4",
      "m": "m9",
      "order": 4,
      "title": "Estructura de una URL",
      "desc": "Una URL se compone de esquema (https), host o dominio (ejemplo.com), puerto opcional (443), ruta (/productos/15), query (?color=azul) y fragmento (#detalle). Cada parte cumple una función: el esquema indica el protocolo, el host el servidor, la ruta el recurso y la query los filtros. El fragmento no se envía al servidor.",
      "req": [
        "t9-1"
      ]
    },
    {
      "id": "t9-5",
      "m": "m9",
      "order": 5,
      "title": "¿Qué es un dominio?",
      "desc": "Un dominio es un nombre legible que identifica un sitio en Internet, como ejemplo.com. Se registra ante un registrador y se traduce a una dirección IP mediante DNS. Tiene partes jerárquicas: subdominio, dominio de segundo nivel y extensión. Los dominios facilitan recordar direcciones y permiten cambiar de servidor sin cambiar el nombre.",
      "req": [
        "t9-4"
      ]
    },
    {
      "id": "t9-6",
      "m": "m9",
      "order": 6,
      "title": "¿Qué es el DNS?",
      "desc": "El DNS (Domain Name System) es el sistema que traduce nombres de dominio a direcciones IP. Funciona como una agenda distribuida: el navegador consulta un resolutor, que pregunta a servidores jerárquicos hasta encontrar la respuesta. Sin DNS tendríamos que recordar números IP. También gestiona correo y otros servicios.",
      "req": [
        "t9-5"
      ]
    },
    {
      "id": "t9-7",
      "m": "m9",
      "order": 7,
      "title": "¿Qué es una dirección IP?",
      "desc": "Una dirección IP es un número que identifica un dispositivo en una red. IPv4 usa cuatro bloques (192.168.1.10); IPv6 usa hexadecimal y ofrece muchísimas más direcciones. Puede ser pública o privada, fija o dinámica. El DNS traduce dominios a estas direcciones para que los clientes encuentren el servidor.",
      "req": [
        "t9-6"
      ]
    },
    {
      "id": "t9-8",
      "m": "m9",
      "order": 8,
      "title": "Parámetros de ruta (Path Parameters)",
      "desc": "Son valores incrustados en la URL que identifican un recurso concreto: en /productos/15, el 15 es el parámetro de ruta. Forman parte de la estructura jerárquica y suelen ser obligatorios. A diferencia de los query parameters, sirven para identificar un recurso único, no para filtrar una lista. En Express se declaran como /productos/:id.",
      "req": [
        "t9-4"
      ]
    },
    {
      "id": "t9-9",
      "m": "m9",
      "order": 9,
      "title": "Parámetros de consulta (Query Parameters)",
      "desc": "Van después del signo ? y separados por &, como /productos?color=azul&orden=precio. Sirven para filtrar, ordenar, paginar o buscar sin cambiar el recurso base. Son opcionales y no forman parte de la ruta jerárquica. Deben codificarse correctamente y validarse en el servidor.",
      "req": [
        "t9-4"
      ]
    },
    {
      "id": "t9-10",
      "m": "m9",
      "order": 10,
      "title": "Path vs. Query Parameters",
      "desc": "Los path parameters identifican un recurso; los query parameters modifican cómo se consulta o presenta. /productos/15 pide un producto concreto; /productos?color=azul pide una lista filtrada. Confundirlos produce APIs confusas. Usa path para identidad y query para opciones.",
      "req": [
        "t9-8",
        "t9-9"
      ]
    },
    {
      "id": "t9-11",
      "m": "m9",
      "order": 11,
      "title": "Codificación URL",
      "desc": "La codificación URL transforma caracteres especiales en secuencias seguras, como %20 para un espacio o %C3%B1 para la ñ. Es necesaria porque la URL solo admite un conjunto limitado de caracteres. El servidor debe decodificarla y validar el resultado. Una codificación incorrecta puede romper la ruta o abrir fallos de seguridad.",
      "req": [
        "t9-9"
      ]
    },
    {
      "id": "t9-12",
      "m": "m9",
      "order": 12,
      "title": "URL absoluta vs. relativa",
      "desc": "Una URL absoluta incluye esquema y dominio: https://ejemplo.com/imagen.png. Una relativa se resuelve contra la URL actual: /imagen.png o ../datos.json. Las relativas facilitan mover el sitio entre dominios y entornos. En APIs y correos conviene usar absolutas para evitar ambigüedad.",
      "req": [
        "t9-4"
      ]
    },
    {
      "id": "t10-1",
      "m": "m10",
      "order": 1,
      "title": "Resolución de nombres de dominio",
      "desc": "Es el proceso de convertir un dominio en una dirección IP. El navegador consulta la caché local, luego el resolutor del sistema o del proveedor, y este recorre la jerarquía DNS hasta obtener la respuesta. El resultado se guarda temporalmente según el TTL. Si falla, el sitio no carga aunque el servidor esté activo.",
      "req": [
        "t9-6"
      ]
    },
    {
      "id": "t10-2",
      "m": "m10",
      "order": 2,
      "title": "DNS y direcciones IP",
      "desc": "El DNS mantiene la relación entre nombres y direcciones IP. Cuando cambias de servidor, actualizas el registro DNS y los clientes empiezan a resolver el dominio hacia la nueva IP. Por eso un sitio puede seguir apuntando al servidor antiguo durante un tiempo. El TTL controla cuánto se conserva esa información en caché.",
      "req": [
        "t10-1",
        "t9-7"
      ]
    },
    {
      "id": "t10-3",
      "m": "m10",
      "order": 3,
      "title": "Registros A, AAAA, CNAME y MX",
      "desc": "Un registro A asocia un dominio a una IPv4; AAAA, a una IPv6; CNAME crea un alias hacia otro nombre; MX indica los servidores de correo. También existen TXT para verificaciones y NS para delegar la zona. Cada tipo responde a una necesidad distinta dentro de la configuración DNS.",
      "req": [
        "t10-1"
      ]
    },
    {
      "id": "t10-4",
      "m": "m10",
      "order": 4,
      "title": "Propagación DNS",
      "desc": "La propagación es el tiempo que tardan las cachés DNS del mundo en actualizarse tras un cambio. No se propaga un archivo, sino que expiran copias antiguas según el TTL. Puede tardar minutos u horas. Para migraciones conviene bajar el TTL antes del cambio y monitorear la resolución.",
      "req": [
        "t10-3"
      ]
    },
    {
      "id": "t11-1",
      "m": "m11",
      "order": 1,
      "title": "¿Qué es un navegador?",
      "desc": "Un navegador es el programa que solicita recursos, interpreta HTML, CSS y JavaScript, y muestra páginas interactivas. Incluye motor de renderizado, motor JavaScript, red, almacenamiento y APIs del sistema. Chrome, Firefox, Safari y Edge compiten por velocidad, compatibilidad y privacidad. Es el cliente más común de la Web.",
      "req": [
        "t2-1"
      ]
    },
    {
      "id": "t11-2",
      "m": "m11",
      "order": 2,
      "title": "¿Qué es un motor de renderizado?",
      "desc": "Es el componente que convierte HTML y CSS en píxeles. Construye el DOM, calcula estilos, organiza el layout y pinta la pantalla. Blink (Chrome/Edge), Gecko (Firefox) y WebKit (Safari) son los principales. Su comportamiento explica diferencias de compatibilidad y rendimiento entre navegadores.",
      "req": [
        "t11-1"
      ]
    },
    {
      "id": "t11-3",
      "m": "m11",
      "order": 3,
      "title": "Cómo interpreta HTML, CSS y JavaScript",
      "desc": "El navegador descarga el HTML, lo parsea y construye el DOM; descarga y aplica el CSS para calcular estilos; y ejecuta JavaScript, que puede modificar el DOM y el CSSOM. Luego calcula el layout y pinta. Si el JavaScript bloquea el parser o cambia el layout repetidamente, la página se vuelve lenta.",
      "req": [
        "t11-2"
      ]
    },
    {
      "id": "t11-4",
      "m": "m11",
      "order": 4,
      "title": "¿Qué es el DOM?",
      "desc": "El DOM (Document Object Model) es la representación en memoria del HTML como un árbol de nodos. JavaScript puede leerlo y modificarlo para cambiar textos, atributos, estilos o estructura. No es el HTML del archivo, sino el estado actual de la página. Manipularlo en exceso puede afectar al rendimiento.",
      "req": [
        "t11-3"
      ]
    },
    {
      "id": "t11-5",
      "m": "m11",
      "order": 5,
      "title": "¿Qué es el BOM?",
      "desc": "El BOM (Browser Object Model) agrupa los objetos que representan el navegador más allá del documento: window, navigator, location, history, screen y timers. Permite navegar, leer información del entorno y usar APIs del navegador. No está estandarizado del todo, aunque los navegadores modernos convergen en gran parte.",
      "req": [
        "t11-4"
      ]
    },
    {
      "id": "t11-6",
      "m": "m11",
      "order": 6,
      "title": "Almacenamiento del navegador",
      "desc": "El navegador ofrece varias formas de guardar datos en el cliente: cookies, localStorage, sessionStorage, IndexedDB y Cache Storage. Cada una tiene límites, persistencia y alcance distintos. Cookies viajan al servidor; localStorage e IndexedDB se quedan en el navegador. Elegir mal puede afectar a seguridad, privacidad y rendimiento.",
      "req": [
        "t11-1"
      ]
    },
    {
      "id": "t12-1",
      "m": "m12",
      "order": 1,
      "title": "HTTP es stateless",
      "desc": "HTTP no guarda memoria entre peticiones: cada una se entiende por sí sola. El servidor no sabe automáticamente que dos peticiones vienen del mismo usuario. Para mantener sesión se usan cookies, tokens o identificadores. Esa falta de estado hace el protocolo simple y escalable, pero obliga a transportar contexto en cada petición.",
      "req": [
        "t6-2"
      ]
    },
    {
      "id": "t12-2",
      "m": "m12",
      "order": 2,
      "title": "¿Qué son las cookies?",
      "desc": "Las cookies son pequeños datos que el servidor envía y el navegador guarda y reenvía en cada petición al mismo dominio. Sirven para sesiones, preferencias y seguimiento. Pueden tener atributos como HttpOnly, Secure y SameSite para reducir riesgos. No conviene guardar información sensible directamente en ellas.",
      "req": [
        "t12-1"
      ]
    },
    {
      "id": "t12-3",
      "m": "m12",
      "order": 3,
      "title": "¿Qué es una sesión?",
      "desc": "Una sesión es el periodo en el que el servidor reconoce a un usuario entre varias peticiones. Normalmente se crea al iniciar sesión y se identifica con una cookie o un token. El servidor guarda el estado asociado (usuario, permisos, caducidad). Al cerrar sesión o expirar, ese contexto deja de ser válido.",
      "req": [
        "t12-2"
      ]
    },
    {
      "id": "t12-4",
      "m": "m12",
      "order": 4,
      "title": "localStorage",
      "desc": "localStorage guarda pares clave-valor en el navegador sin fecha de caducidad. Sobrevive a recargas y cierres, y solo es accesible desde el mismo origen. Tiene unos 5 MB y solo admite cadenas. Es útil para preferencias, pero no para secretos: cualquier script de la página puede leerlo.",
      "req": [
        "t11-6"
      ]
    },
    {
      "id": "t12-5",
      "m": "m12",
      "order": 5,
      "title": "sessionStorage",
      "desc": "sessionStorage es similar a localStorage, pero los datos se borran al cerrar la pestaña o el navegador. Está aislado por pestaña y por origen. Sirve para estados temporales, como un formulario a medio completar o un flujo de varios pasos. Tampoco es seguro para tokens sensibles.",
      "req": [
        "t11-6"
      ]
    },
    {
      "id": "t12-6",
      "m": "m12",
      "order": 6,
      "title": "Cookies vs. sesiones vs. almacenamiento",
      "desc": "Las cookies viajan automáticamente al servidor y sirven para identificar la sesión; la sesión es el estado que el servidor mantiene; localStorage y sessionStorage viven solo en el navegador y no se envían solos. Usa cookies HttpOnly para sesión, almacenamiento para preferencias y nunca guardes contraseñas en el cliente.",
      "req": [
        "t12-3",
        "t12-4",
        "t12-5"
      ]
    },
    {
      "id": "t13-1",
      "m": "m13",
      "order": 1,
      "title": "JSON: estructura y sintaxis",
      "desc": "JSON representa datos con objetos entre llaves, arreglos entre corchetes, cadenas entre comillas dobles, números, booleanos y null. Las claves siempre son cadenas y no se permiten comas finales ni comentarios. Debe ser válido para poder parsearse. Es el formato estándar de las APIs modernas.",
      "req": [
        "t6-9"
      ]
    },
    {
      "id": "t13-2",
      "m": "m13",
      "order": 2,
      "title": "Objetos y arreglos JSON",
      "desc": "Un objeto JSON es una colección de pares clave-valor, como {\"nombre\":\"Ana\",\"edad\":30}. Un arreglo es una lista ordenada, como [\"rojo\",\"verde\"]. Se pueden anidar para representar estructuras complejas. Los arreglos mantienen el orden; los objetos no garantizan un orden semántico.",
      "req": [
        "t13-1"
      ]
    },
    {
      "id": "t13-3",
      "m": "m13",
      "order": 3,
      "title": "Serialización y deserialización",
      "desc": "Serializar es convertir un objeto en texto JSON, normalmente con JSON.stringify. Deserializar es el proceso inverso, con JSON.parse. Así se envía información por HTTP y se reconstruye en el otro extremo. Hay que validar el JSON recibido: un parseo de datos maliciosos o gigantes puede causar errores o consumo excesivo.",
      "req": [
        "t13-2"
      ]
    },
    {
      "id": "t13-4",
      "m": "m13",
      "order": 4,
      "title": "Tipos de contenido y MIME Types",
      "desc": "Los MIME types identifican el formato de un contenido: application/json, text/html, image/png, application/pdf. Se declaran en Content-Type y se negocian con Accept. Un tipo incorrecto puede hacer que el navegador no renderice o que una API rechace los datos. Es la etiqueta que dice cómo interpretar los bytes.",
      "req": [
        "t13-1",
        "t6-5"
      ]
    },
    {
      "id": "t13-5",
      "m": "m13",
      "order": 5,
      "title": "Envío y recepción de datos",
      "desc": "Para enviar datos, el cliente usa fetch o XMLHttpRequest con el método adecuado, añade Content-Type y serializa el body. El servidor lo recibe, valida y responde con su propio Content-Type y código de estado. En el cliente se comprueba el estado antes de parsear la respuesta. Los errores de red y los errores HTTP se tratan distinto.",
      "req": [
        "t13-3",
        "t13-4",
        "t7-3"
      ]
    },
    {
      "id": "t19-1",
      "m": "m19",
      "order": 1,
      "title": "¿Qué es una base de datos?",
      "desc": "Una base de datos es un sistema organizado para guardar, consultar y actualizar información de forma persistente. En una aplicación web vive detrás del backend, que es el único que accede a ella con credenciales seguras. Permite buscar, relacionar y proteger datos aunque el servidor se reinicie. Elegir bien su modelo afecta al rendimiento y al mantenimiento.",
      "req": [
        "t4-10"
      ]
    },
    {
      "id": "t19-2",
      "m": "m19",
      "order": 2,
      "title": "Bases relacionales vs. NoSQL",
      "desc": "Las bases relacionales organizan datos en tablas con esquema y relaciones, y usan SQL; son fuertes en consistencia y consultas complejas. Las NoSQL (documentos, clave-valor, grafos) priorizan flexibilidad y escala horizontal, con esquemas más libres. No hay una mejor absoluta: depende de los datos y del acceso. Muchas aplicaciones combinan ambas.",
      "req": [
        "t19-1"
      ]
    },
    {
      "id": "t19-3",
      "m": "m19",
      "order": 3,
      "title": "Tablas, filas y columnas",
      "desc": "En una base de datos relacional, una tabla representa una entidad, como usuarios o pedidos. Cada fila es un registro y cada columna un campo con un tipo definido: texto, número, fecha o booleano. El esquema describe esas columnas y sus restricciones. Un buen modelo evita duplicar datos y facilita consultas claras. Cambiar el esquema requiere migraciones controladas.",
      "req": [
        "t19-2"
      ]
    },
    {
      "id": "t19-4",
      "m": "m19",
      "order": 4,
      "title": "Clave primaria y clave foránea",
      "desc": "La clave primaria identifica de forma única cada fila, normalmente un id. La clave foránea es una columna que referencia la clave primaria de otra tabla y crea una relación, por ejemplo pedido.usuario_id. Las foráneas protegen la integridad: no permiten referencias a registros inexistentes. También pueden definir qué ocurre al borrar.",
      "req": [
        "t19-3"
      ]
    },
    {
      "id": "t19-5",
      "m": "m19",
      "order": 5,
      "title": "SQL básico: SELECT, INSERT, UPDATE y DELETE",
      "desc": "SQL es el lenguaje de consulta de las bases relacionales. SELECT lee datos, INSERT crea filas, UPDATE modifica las existentes y DELETE las elimina. Se combinan con WHERE para filtrar, ORDER BY para ordenar y LIMIT para acotar. Siempre se usan consultas parametrizadas para evitar inyección SQL.",
      "req": [
        "t19-4"
      ]
    },
    {
      "id": "t19-6",
      "m": "m19",
      "order": 6,
      "title": "Relaciones entre tablas",
      "desc": "Una relación uno a uno asocia un registro con otro; uno a muchos, como un usuario con sus pedidos; muchos a muchos, como productos y categorías, requiere una tabla intermedia. Las relaciones evitan duplicar información y mantienen la coherencia. Se consultan con JOIN, que combina filas de varias tablas según una condición.",
      "req": [
        "t19-4"
      ]
    },
    {
      "id": "t19-7",
      "m": "m19",
      "order": 7,
      "title": "Normalización",
      "desc": "Normalizar es organizar las tablas para reducir duplicación y dependencias innecesarias. Las formas normales separan datos repetidos en tablas propias y usan claves para relacionarlas. Menos duplicación significa menos incoherencias al actualizar. En sistemas de lectura intensiva a veces se desnormaliza a propósito para ganar velocidad, asumiendo el coste.",
      "req": [
        "t19-6"
      ]
    },
    {
      "id": "t19-8",
      "m": "m19",
      "order": 8,
      "title": "Índices",
      "desc": "Un índice es una estructura que acelera la búsqueda de filas por una o varias columnas, como el índice de un libro. Mejora las lecturas pero ocupa espacio y ralentiza las escrituras, porque hay que actualizarlo. Conviene indexar columnas usadas en WHERE, JOIN y ORDER BY. Un índice mal elegido no se usa y solo añade coste.",
      "req": [
        "t19-5"
      ]
    },
    {
      "id": "t19-9",
      "m": "m19",
      "order": 9,
      "title": "Transacciones y ACID",
      "desc": "En una base de datos, una transacción agrupa varias operaciones que deben completarse juntas o no aplicarse. ACID resume sus garantías: atomicidad, consistencia, aislamiento y durabilidad. El ejemplo clásico es transferir dinero: restar de una cuenta y sumar a otra sin que quede a medias. Los niveles de aislamiento equilibran consistencia y concurrencia.",
      "req": [
        "t19-5"
      ]
    },
    {
      "id": "t19-10",
      "m": "m19",
      "order": 10,
      "title": "ORM",
      "desc": "Un ORM (Object-Relational Mapping) traduce objetos del código a tablas y consultas SQL. Permite trabajar con modelos en lugar de escribir SQL manual y ayuda con relaciones y migraciones. Ejemplos son Prisma, Sequelize, SQLAlchemy o Hibernate. Puede ocultar consultas ineficientes, así que conviene revisar el SQL que genera.",
      "req": [
        "t19-5"
      ]
    },
    {
      "id": "t20-1",
      "m": "m20",
      "order": 1,
      "title": "Paginación, filtros y orden",
      "desc": "Las APIs que devuelven listas deben paginar para no enviar miles de registros. Se usan parámetros como page y limit, o cursores para datos cambiantes. Los filtros y el orden también viajan en la query y se validan en el servidor. La respuesta incluye metadatos como total o siguiente página. Un buen diseño mantiene las listas rápidas y predecibles.",
      "req": [
        "t4-9",
        "t9-9"
      ]
    },
    {
      "id": "t20-2",
      "m": "m20",
      "order": 2,
      "title": "Versionado de APIs",
      "desc": "Versionar una API permite evolucionarla sin romper a los clientes antiguos. Se suele indicar en la URL (/v1) o en un header. Los cambios incompatibles crean una versión nueva; los compatibles se añaden sin romper. Documentar y avisar los cambios evita integraciones rotas. Una versión antigua se mantiene un tiempo y luego se retira.",
      "req": [
        "t4-9"
      ]
    },
    {
      "id": "t20-3",
      "m": "m20",
      "order": 3,
      "title": "Webhooks",
      "desc": "Un webhook es una petición HTTP que un servicio envía a tu aplicación cuando ocurre un evento, como un pago completado. Invierte el flujo: no preguntas, te avisan. Debes verificar la firma, responder rápido y procesar en segundo plano, porque el emisor puede reintentar. Si tu endpoint falla, el evento puede perderse o duplicarse.",
      "req": [
        "t4-8",
        "t7-3"
      ]
    },
    {
      "id": "t20-4",
      "m": "m20",
      "order": 4,
      "title": "Polling",
      "desc": "El polling consiste en preguntar al servidor cada cierto tiempo si hay novedades. Es simple y funciona en cualquier cliente, pero genera peticiones inútiles y latencia. El polling largo mantiene la conexión abierta hasta que hay datos o se agota el tiempo. Para tiempo real intenso conviene WebSockets o Server-Sent Events.",
      "req": [
        "t20-1"
      ]
    },
    {
      "id": "t20-5",
      "m": "m20",
      "order": 5,
      "title": "WebSockets",
      "desc": "WebSocket abre una conexión bidireccional y persistente entre cliente y servidor. Ambos pueden enviar mensajes en cualquier momento sin repetir headers en cada uno. Es ideal para chat, juegos o colaboración en vivo. Requiere gestionar reconexiones, autenticación y escalado. No reemplaza a HTTP para peticiones normales.",
      "req": [
        "t5-1"
      ]
    },
    {
      "id": "t20-6",
      "m": "m20",
      "order": 6,
      "title": "Server-Sent Events (SSE)",
      "desc": "SSE permite que el servidor envíe un flujo de eventos al cliente por una conexión HTTP abierta. Es unidireccional: solo del servidor al navegador. Sirve para notificaciones, progreso o cotizaciones. Es más simple que WebSocket y se reconecta solo. No permite que el cliente envíe mensajes por ese canal.",
      "req": [
        "t20-4"
      ]
    },
    {
      "id": "t20-7",
      "m": "m20",
      "order": 7,
      "title": "GraphQL",
      "desc": "GraphQL es un lenguaje de consulta para APIs en el que el cliente pide exactamente los campos que necesita. Una sola petición puede traer datos relacionados y evitar respuestas con campos de más. Requiere definir un esquema y resolver cada campo. Es potente, pero añade complejidad de caché, autorización y consultas costosas.",
      "req": [
        "t4-9"
      ]
    },
    {
      "id": "t20-8",
      "m": "m20",
      "order": 8,
      "title": "Rate limiting",
      "desc": "El rate limiting limita cuántas peticiones puede hacer un cliente en un periodo, por ejemplo 100 por minuto. Protege al servidor de abusos, ataques y errores en bucle. Se aplica por IP, usuario o API key y responde con 429 Too Many Requests. Conviene informar el límite y el tiempo de espera en headers.",
      "req": [
        "t8-5"
      ]
    },
    {
      "id": "t18-1",
      "m": "m18",
      "order": 1,
      "title": "¿Qué es Git?",
      "desc": "Git es un sistema de control de versiones distribuido que registra la historia de los cambios de un proyecto. Cada confirmación guarda una instantánea y permite volver atrás, comparar o trabajar en paralelo. No depende de un servidor central: cada copia tiene el historial completo. Es la herramienta estándar para colaborar en código.",
      "req": [
        "t1-1"
      ]
    },
    {
      "id": "t18-2",
      "m": "m18",
      "order": 2,
      "title": "Repositorio y commit",
      "desc": "Un repositorio es la carpeta del proyecto con su historial. Un commit es una instantánea de los cambios preparados, con un mensaje que explica qué se hizo y por qué. Antes se eligen archivos con git add; luego git commit los registra. Commits pequeños y claros hacen la historia fácil de revisar y revertir.",
      "req": [
        "t18-1"
      ]
    },
    {
      "id": "t18-3",
      "m": "m18",
      "order": 3,
      "title": "Ramas (branches)",
      "desc": "Una rama es una línea de desarrollo independiente. Permite trabajar en una función o corrección sin tocar la rama principal, normalmente main. Al terminar se integra con merge o pull request. Las ramas cortas y enfocadas reducen conflictos. Cambiar de rama con git switch actualiza los archivos del proyecto.",
      "req": [
        "t18-2"
      ]
    },
    {
      "id": "t18-4",
      "m": "m18",
      "order": 4,
      "title": "Merge y conflictos",
      "desc": "El merge une los cambios de una rama en otra. Si dos ramas modificaron las mismas líneas, Git no puede decidir y marca un conflicto. Hay que abrir los archivos, elegir el resultado correcto y confirmar la resolución. Entender el conflicto evita perder trabajo; los merges frecuentes reducen su tamaño.",
      "req": [
        "t18-3"
      ]
    },
    {
      "id": "t18-5",
      "m": "m18",
      "order": 5,
      "title": "Repositorio remoto y GitHub",
      "desc": "Un repositorio remoto vive en un servidor como GitHub, GitLab o Bitbucket y sirve para compartir y respaldar el proyecto. Se conecta con git remote y se sincroniza con push y pull. GitHub añade incidencias, revisiones y acciones automatizadas. El remoto no reemplaza los commits locales: los publica.",
      "req": [
        "t18-1"
      ]
    },
    {
      "id": "t18-6",
      "m": "m18",
      "order": 6,
      "title": "Pull request",
      "desc": "Una pull request propone integrar una rama en otra y abre un espacio para revisar el código. Muestra los cambios, permite comentar líneas, ejecutar pruebas automáticas y pedir aprobación. Un buen PR es pequeño, explica el objetivo y enlaza el problema que resuelve. Al aprobarse se fusiona y se cierra.",
      "req": [
        "t18-5"
      ]
    },
    {
      "id": "t18-7",
      "m": "m18",
      "order": 7,
      "title": "clone, pull y push",
      "desc": "git clone copia un repositorio remoto a tu máquina. git pull descarga los cambios remotos y los integra en tu rama; git push envía tus commits al remoto. Antes de subir conviene hacer pull para evitar rechazos. Si hay divergencias, se resuelven con merge o rebase. Son los comandos básicos para sincronizar el trabajo.",
      "req": [
        "t18-5"
      ]
    },
    {
      "id": "t18-8",
      "m": "m18",
      "order": 8,
      "title": ".gitignore y archivos que no se suben",
      "desc": "El archivo .gitignore indica qué rutas Git debe ignorar: dependencias, builds, archivos temporales y secretos como .env. Evita subir basura y credenciales al repositorio. Si un archivo ya está rastreado, añadirlo al ignore no basta: hay que quitarlo del índice. Cada lenguaje tiene plantillas habituales.",
      "req": [
        "t18-2"
      ]
    },
    {
      "id": "t18-9",
      "m": "m18",
      "order": 9,
      "title": "Buenas prácticas con Git",
      "desc": "Haz commits pequeños y con mensajes en imperativo que expliquen el qué y el porqué. Trabaja en ramas, sincroniza a menudo y revisa el diff antes de confirmar. No subas secretos ni archivos generados. Usa etiquetas para versiones y protege main con revisión. Un historial limpio ahorra horas de depuración.",
      "req": [
        "t18-6"
      ]
    },
    {
      "id": "t21-1",
      "m": "m21",
      "order": 1,
      "title": "¿Qué es la caché?",
      "desc": "La caché guarda copias de respuestas o recursos para reutilizarlas sin volver a generarlos. Reduce latencia, tráfico y carga del servidor. Puede vivir en el navegador, en un proxy, en una CDN o en memoria del backend. El reto es invalidarla cuando los datos cambian. Una buena política de caché es clave para el rendimiento.",
      "req": [
        "t5-9"
      ]
    },
    {
      "id": "t21-2",
      "m": "m21",
      "order": 2,
      "title": "Cache-Control y ETag",
      "desc": "Cache-Control indica cuánto tiempo y dónde puede guardarse una respuesta con directivas como max-age, no-store o no-cache. ETag identifica una versión del recurso y permite la validación condicional con If-None-Match, que responde 304 si no cambió. Juntos evitan descargas innecesarias y mantienen el contenido actualizado.",
      "req": [
        "t21-1",
        "t8-4"
      ]
    },
    {
      "id": "t21-3",
      "m": "m21",
      "order": 3,
      "title": "CDN",
      "desc": "Una CDN (Content Delivery Network) es una red de servidores distribuidos que entrega contenido desde el punto más cercano al usuario. Reduce latencia, absorbe picos de tráfico y protege contra ataques. Se usa para estáticos, imágenes y vídeo, y a veces para APIs. Configurar bien la caché y la invalidación es esencial.",
      "req": [
        "t21-1"
      ]
    },
    {
      "id": "t21-4",
      "m": "m21",
      "order": 4,
      "title": "Compresión de respuestas",
      "desc": "Comprimir el cuerpo de una respuesta con gzip o Brotli reduce los bytes transferidos y acelera la carga. El servidor negocia el algoritmo con Accept-Encoding y el navegador descomprime. Funciona muy bien con texto, HTML, CSS, JavaScript y JSON; las imágenes ya comprimidas no ganan tanto. Debe aplicarse en el servidor o en la CDN.",
      "req": [
        "t21-1"
      ]
    },
    {
      "id": "t21-5",
      "m": "m21",
      "order": 5,
      "title": "Lazy loading",
      "desc": "Lazy loading carga recursos solo cuando se necesitan: imágenes al acercarse al viewport, componentes al navegar o módulos al usarlos. Reduce el peso inicial y mejora la percepción de velocidad. Se implementa con loading=\"lazy\" en imágenes o import dinámico en JavaScript. Hay que cuidar el SEO y evitar saltos de layout.",
      "req": [
        "t21-4"
      ]
    },
    {
      "id": "t21-6",
      "m": "m21",
      "order": 6,
      "title": "Core Web Vitals",
      "desc": "Core Web Vitals son métricas de experiencia de usuario: LCP mide cuándo aparece el contenido principal, INP la respuesta a la interacción y CLS los saltos de layout. Google las usa como señal de calidad. Se mejoran optimizando imágenes, fuentes, JavaScript y espacio reservado. Medir con datos reales es más útil que adivinar.",
      "req": [
        "t21-5"
      ]
    },
    {
      "id": "t21-7",
      "m": "m21",
      "order": 7,
      "title": "Minificación y bundling",
      "desc": "Minificar elimina espacios y acorta nombres para reducir el tamaño de CSS y JavaScript. El bundling agrupa varios módulos en menos archivos para disminuir peticiones. Hoy conviene combinar bundling con división de código y compresión. Un bundle gigante retrasa la primera carga, así que se separa lo crítico de lo secundario.",
      "req": [
        "t21-4"
      ]
    },
    {
      "id": "t21-8",
      "m": "m21",
      "order": 8,
      "title": "Imágenes optimizadas",
      "desc": "Las imágenes suelen ser el recurso más pesado. Conviene usar formatos modernos como WebP o AVIF, elegir el tamaño adecuado, definir width y height para evitar saltos y servir versiones responsive con srcset. La compresión y la CDN completan la estrategia. Una imagen de 4 MB puede arruinar una página bien programada.",
      "req": [
        "t15-5",
        "t21-5"
      ]
    },
    {
      "id": "t22-1",
      "m": "m22",
      "order": 1,
      "title": "¿Por qué probar el código?",
      "desc": "Probar comprueba que una función, una API o el código hace lo esperado y sigue haciéndolo tras un cambio. Las pruebas automatizadas detectan regresiones, documentan el comportamiento y dan confianza para refactorizar. No eliminan todos los errores, pero reducen el riesgo. La clave es probar lo importante sin obsesionarse con la cobertura.",
      "req": [
        "t17-4"
      ]
    },
    {
      "id": "t22-2",
      "m": "m22",
      "order": 2,
      "title": "Pruebas unitarias",
      "desc": "Una prueba unitaria verifica una función o módulo aislado con entradas y salidas conocidas. Debe ser rápida, determinista e independiente de la red o la base de datos. Se agrupan en suites y se ejecutan en cada cambio. Cubren la lógica, pero no garantizan que las piezas funcionen juntas.",
      "req": [
        "t22-1"
      ]
    },
    {
      "id": "t22-3",
      "m": "m22",
      "order": 3,
      "title": "Pruebas de integración",
      "desc": "Las pruebas de integración comprueban cómo interactúan varias piezas: una ruta de la API con su base de datos, o un componente con un servicio. Son más lentas que las unitarias y detectan fallos de contrato y configuración. Se suelen usar bases de datos de prueba o contenedores. Complementan, no sustituyen, a las unitarias.",
      "req": [
        "t22-2"
      ]
    },
    {
      "id": "t22-4",
      "m": "m22",
      "order": 4,
      "title": "Pruebas end-to-end (E2E)",
      "desc": "Una prueba end-to-end simula a un usuario real: abre el navegador, rellena un formulario y comprueba el resultado. Valida el flujo completo, pero es lenta y frágil si la interfaz cambia. Herramientas como Playwright o Cypress la automatizan. Conviene reservarlas para los recorridos críticos, no para cada detalle.",
      "req": [
        "t22-3"
      ]
    },
    {
      "id": "t22-5",
      "m": "m22",
      "order": 5,
      "title": "TDD",
      "desc": "TDD (Test-Driven Development) propone escribir primero una prueba que falla, luego el código mínimo para pasarla y después refactorizar. El ciclo rojo-verde-refactor fuerza a pensar en el comportamiento antes de la implementación. No es obligatorio, pero mejora el diseño y la cobertura. Funciona mejor en lógica de negocio que en prototipos visuales.",
      "req": [
        "t22-2"
      ]
    },
    {
      "id": "t22-6",
      "m": "m22",
      "order": 6,
      "title": "Linting y formato de código",
      "desc": "Un linter analiza el código y señala errores, variables sin usar o malas prácticas; un formateador como Prettier lo deja con un estilo uniforme. Se configuran en el proyecto y se ejecutan en el editor o antes de cada commit. Reducen discusiones de estilo y errores tontos. No sustituyen a las pruebas ni a la revisión.",
      "req": [
        "t22-1"
      ]
    },
    {
      "id": "t22-7",
      "m": "m22",
      "order": 7,
      "title": "Depuración (debugging)",
      "desc": "Depurar es localizar y corregir un fallo. Las DevTools permiten pausar el código, inspeccionar variables, ver la pila de llamadas y observar la red. Conviene reproducir el error, aislar la causa y comprobar la solución con una prueba. Los mensajes de error y los logs son pistas, no la respuesta final. Depurar bien ahorra tiempo.",
      "req": [
        "t22-6"
      ]
    },
    {
      "id": "t23-1",
      "m": "m23",
      "order": 1,
      "title": "¿Qué es el despliegue?",
      "desc": "Desplegar es llevar la aplicación desde tu entorno de desarrollo a un servidor accesible para los usuarios. Incluye construir los archivos, configurar el servidor, aplicar variables de entorno y verificar que todo funciona. Un despliegue repetible y automatizado reduce errores. No termina al subir: hay que monitorear y poder revertir.",
      "req": [
        "t3-8"
      ]
    },
    {
      "id": "t23-2",
      "m": "m23",
      "order": 2,
      "title": "Build y artefactos",
      "desc": "El build transforma el código fuente en archivos listos para producción: compila, minifica, agrupa y copia assets. El resultado, llamado artefacto, debe ser reproducible e independiente de tu máquina. Se guarda con una versión para poder desplegarlo o volver a él. Si el build falla, el despliegue no debe continuar.",
      "req": [
        "t21-7"
      ]
    },
    {
      "id": "t23-3",
      "m": "m23",
      "order": 3,
      "title": "Variables de entorno",
      "desc": "Las variables de entorno guardan configuración y secretos fuera del código: credenciales de base de datos, claves de API, URL del backend. Cambian entre desarrollo, pruebas y producción sin recompilar. Nunca deben subirse al repositorio ni exponerse en el frontend. Se gestionan en el servidor o en la plataforma de despliegue.",
      "req": [
        "t23-1",
        "t18-8"
      ]
    },
    {
      "id": "t23-4",
      "m": "m23",
      "order": 4,
      "title": "CI/CD",
      "desc": "CI (integración continua) ejecuta pruebas y builds en cada cambio para detectar errores pronto. CD (entrega o despliegue continuo) automatiza la publicación en un entorno. Un pipeline típico instala dependencias, prueba, construye y despliega si todo pasa. Reduce el trabajo manual y hace los lanzamientos más frecuentes y seguros.",
      "req": [
        "t23-2",
        "t22-1"
      ]
    },
    {
      "id": "t23-5",
      "m": "m23",
      "order": 5,
      "title": "Docker y contenedores",
      "desc": "Un contenedor empaqueta la aplicación con sus dependencias y configuración para que se ejecute igual en cualquier entorno. Docker es la herramienta más común; las imágenes se construyen con un Dockerfile y se ejecutan como contenedores. Resuelve el “en mi máquina funciona”. Añade capas que hay que entender y actualizar.",
      "req": [
        "t23-1"
      ]
    },
    {
      "id": "t23-6",
      "m": "m23",
      "order": 6,
      "title": "Logs y monitoreo",
      "desc": "Los logs registran eventos y errores; el monitoreo mide salud, latencia, tráfico y uso de recursos. Juntos permiten detectar fallos antes de que los reporten los usuarios. Conviene estructurar los logs y no guardar datos sensibles. Las alertas deben ser accionables para no generar ruido. Observar producción es parte del trabajo.",
      "req": [
        "t23-1"
      ]
    },
    {
      "id": "t23-7",
      "m": "m23",
      "order": 7,
      "title": "Dominio, DNS y HTTPS en producción",
      "desc": "Para publicar con un dominio hay que apuntar sus registros DNS al servidor y emitir un certificado TLS. HTTPS protege las credenciales y las cookies, y los navegadores lo exigen. La renovación del certificado debe automatizarse. También conviene configurar redirecciones de HTTP a HTTPS y un host canónico.",
      "req": [
        "t10-3",
        "t5-2"
      ]
    },
    {
      "id": "t23-8",
      "m": "m23",
      "order": 8,
      "title": "Rollback y versiones",
      "desc": "Un rollback vuelve a una versión anterior cuando un despliegue falla. Para poder hacerlo hay que versionar los artefactos, mantener la base de datos compatible y tener un plan claro. Los despliegues azul-verde o canario reducen el riesgo al exponer primero a pocos usuarios. Nunca improvises una vuelta atrás en producción.",
      "req": [
        "t23-2"
      ]
    },
    {
      "id": "t23-9",
      "m": "m23",
      "order": 9,
      "title": "Cloud y serverless",
      "desc": "La nube ofrece servidores, almacenamiento, bases de datos y servicios gestionados bajo demanda. Serverless ejecuta funciones sin administrar servidores, escalando automáticamente y cobrando por uso. Reduce la operación, pero añade dependencia del proveedor y límites de tiempo o frío. La elección depende del tráfico, el equipo y el control necesario.",
      "req": [
        "t23-5"
      ]
    },
    {
      "id": "t14-1",
      "m": "m14",
      "order": 1,
      "title": "¿Qué es la autenticación?",
      "desc": "Autenticar es verificar quién es un usuario. Se hace con credenciales como contraseña, código de un solo uso, huella o un proveedor externo. Si la verificación es correcta, el sistema crea una sesión o emite un token. No dice qué puede hacer el usuario, solo quién es.",
      "req": [
        "t12-3"
      ]
    },
    {
      "id": "t14-2",
      "m": "m14",
      "order": 2,
      "title": "¿Qué es la autorización?",
      "desc": "Autorizar es decidir qué puede hacer un usuario ya identificado. Se aplica con roles, permisos o reglas sobre recursos: quién puede editar un artículo, ver un pedido o borrar una cuenta. Debe comprobarse en el servidor en cada operación sensible. Un usuario autenticado no tiene permiso automático para todo.",
      "req": [
        "t14-1",
        "t8-7"
      ]
    },
    {
      "id": "t14-3",
      "m": "m14",
      "order": 3,
      "title": "Autenticación vs. autorización",
      "desc": "La autenticación responde “¿quién eres?”; la autorización, “¿qué puedes hacer?”. Primero se identifica al usuario y después se comprueban sus permisos. Un 401 indica falta de autenticación; un 403, falta de autorización. Confundirlas produce fallos de seguridad y mensajes erróneos.",
      "req": [
        "t14-1",
        "t14-2"
      ]
    },
    {
      "id": "t14-4",
      "m": "m14",
      "order": 4,
      "title": "¿Qué es un token?",
      "desc": "Un token es una credencial que el servidor emite tras autenticar al usuario y que el cliente envía en peticiones posteriores, normalmente en el header Authorization. Puede ser opaco o contener datos firmados. Tiene caducidad y debe tratarse como una contraseña: no se comparte ni se guarda en lugares inseguros.",
      "req": [
        "t14-1"
      ]
    },
    {
      "id": "t14-5",
      "m": "m14",
      "order": 5,
      "title": "¿Qué es JWT?",
      "desc": "JWT (JSON Web Token) es un token formado por header, payload y firma, codificados en Base64URL. El servidor puede verificar la firma sin consultar la base de datos. El payload no está cifrado: cualquiera puede leerlo, así que no debe contener secretos. Se usa para sesiones y APIs, con cuidado en expiración y revocación.",
      "req": [
        "t14-4",
        "t13-3"
      ]
    },
    {
      "id": "t14-6",
      "m": "m14",
      "order": 6,
      "title": "¿Qué es CORS?",
      "desc": "CORS (Cross-Origin Resource Sharing) es un mecanismo del navegador que controla si una página puede leer respuestas de otro origen. El servidor declara qué orígenes, métodos y headers permite mediante Access-Control-Allow-*. Sin esos headers, el navegador bloquea la lectura aunque la petición llegue. No es una autenticación: es una política de acceso del navegador.",
      "req": [
        "t4-9",
        "t6-6"
      ]
    },
    {
      "id": "t14-7",
      "m": "m14",
      "order": 7,
      "title": "¿Qué es CSRF?",
      "desc": "CSRF (Cross-Site Request Forgery) es un ataque en el que un sitio malicioso hace que el navegador del usuario envíe una petición autenticada a otro sitio. Se previene con tokens anti-CSRF, cookies SameSite, comprobación de Origin/Referer y no usando GET para acciones que cambian estado. La víctima no nota nada porque su sesión es válida.",
      "req": [
        "t12-2",
        "t14-3"
      ]
    },
    {
      "id": "t14-8",
      "m": "m14",
      "order": 8,
      "title": "¿Qué es XSS?",
      "desc": "XSS (Cross-Site Scripting) ocurre cuando un atacante inyecta JavaScript en una página que otros usuarios ven. Puede robar cookies, modificar la interfaz o actuar en nombre del usuario. Se evita escapando la salida, validando la entrada, usando CSP y evitando innerHTML con datos no confiables. Es uno de los fallos más comunes de la Web.",
      "req": [
        "t11-4",
        "t14-3"
      ]
    },
    {
      "id": "t14-9",
      "m": "m14",
      "order": 9,
      "title": "Validación en cliente y servidor",
      "desc": "Validar en el cliente mejora la experiencia: avisa antes de enviar y evita viajes innecesarios. Validar en el servidor es obligatorio para la seguridad: el cliente puede modificarse o saltarse. Se deben comprobar tipos, longitudes, formatos y reglas de negocio en ambos lados, con el servidor como autoridad final.",
      "req": [
        "t13-5",
        "t14-3"
      ]
    },
    {
      "id": "t14-10",
      "m": "m14",
      "order": 10,
      "title": "Buenas prácticas de seguridad",
      "desc": "Usa HTTPS, contraseñas con hash fuerte, cookies HttpOnly/Secure/SameSite, validación en servidor, consultas parametrizadas, permisos mínimos y dependencias actualizadas. No expongas secretos en el frontend ni en el repositorio. Registra eventos sin guardar datos sensibles y aplica el principio de menor privilegio. La seguridad es un proceso continuo, no una casilla.",
      "req": [
        "t14-6",
        "t14-7",
        "t14-8",
        "t14-9"
      ]
    },
    {
      "id": "t24-1",
      "m": "m24",
      "order": 1,
      "title": "Event loop, call stack y microtareas",
      "desc": "El event loop es el mecanismo que permite a JavaScript ser asíncrono con un solo hilo. Ejecuta el call stack hasta vaciarlo, luego procesa las microtareas (promesas) y después una macrotarea (temporizadores, eventos). Por eso una promesa se resuelve antes que un setTimeout de 0 ms. Entenderlo explica por qué el código pesado bloquea la interfaz.",
      "req": [
        "t17-8",
        "t17-9"
      ]
    },
    {
      "id": "t24-2",
      "m": "m24",
      "order": 2,
      "title": "Closures (clausuras)",
      "desc": "Un closure o clausura es una función que recuerda el ámbito donde fue creada, incluso después de que ese ámbito termine. Permite encapsular estado privado, crear fábricas de funciones y conservar valores entre llamadas. En entrevistas suele aparecer con bucles y var, donde todas las funciones comparten la misma variable. Con let cada iteración crea su propio ámbito.",
      "req": [
        "t17-4"
      ]
    },
    {
      "id": "t24-3",
      "m": "m24",
      "order": 3,
      "title": "Hoisting y this",
      "desc": "Hoisting es la elevación de declaraciones al inicio de su ámbito: las funciones se pueden llamar antes de declararse y las variables existen pero valen undefined hasta su inicialización. this depende de cómo se invoca la función: en un método apunta al objeto, en una función suelta es undefined en modo estricto y las funciones flecha heredan el this externo. No es lo mismo scope que contexto.",
      "req": [
        "t17-2",
        "t17-4"
      ]
    },
    {
      "id": "t24-4",
      "m": "m24",
      "order": 4,
      "title": "Prototipos y herencia prototípica",
      "desc": "JavaScript usa herencia prototípica: cada objeto tiene un prototipo del que hereda propiedades y métodos. Al buscar una propiedad, sube por la cadena de prototipos hasta encontrarla o llegar a null. Las clases son azúcar sintáctico sobre prototipos. Con Object.create o class puedes compartir comportamiento sin duplicar memoria. Es una pregunta clásica para distinguir de la herencia basada en clases.",
      "req": [
        "t17-5"
      ]
    },
    {
      "id": "t24-5",
      "m": "m24",
      "order": 5,
      "title": "Debounce y throttle",
      "desc": "Debounce retrasa la ejecución hasta que pasan X ms sin nuevos eventos; throttle garantiza como máximo una ejecución cada X ms. Se usan para búsquedas mientras se escribe, scroll, resize o validación. Debounce es ideal cuando solo importa el último evento; throttle, cuando quieres actualizar de forma regular. Ambos reducen trabajo y mejoran el rendimiento de la interfaz.",
      "req": [
        "t17-4",
        "t17-7"
      ]
    },
    {
      "id": "t24-6",
      "m": "m24",
      "order": 6,
      "title": "Bubbling, capturing y delegación de eventos",
      "desc": "Un evento recorre el DOM en tres fases: captura desde la raíz hasta el objetivo, objetivo y burbujeo de vuelta. addEventListener puede escuchar en captura con true. La delegación aprovecha el burbujeo para poner un solo listener en un contenedor y detectar el hijo con closest. Ahorra listeners y funciona con elementos añadidos después. stopPropagation corta el recorrido.",
      "req": [
        "t17-7"
      ]
    },
    {
      "id": "t24-7",
      "m": "m24",
      "order": 7,
      "title": "Copia superficial vs. copia profunda",
      "desc": "Una copia superficial duplica solo el primer nivel: los objetos anidados siguen compartidos, así que modificar uno afecta a ambos. Se hace con Object.assign o spread. Una copia profunda duplica todos los niveles con structuredClone, JSON.parse(JSON.stringify()) o una librería. Cuidado con referencias circulares, fechas y funciones. En entrevistas preguntan la diferencia y sus riesgos.",
      "req": [
        "t17-5"
      ]
    },
    {
      "id": "t24-8",
      "m": "m24",
      "order": 8,
      "title": "HTTP/1.1 vs. HTTP/2 vs. HTTP/3",
      "desc": "HTTP/1.1 usa una conexión por petición o keep-alive y sufre bloqueo de cabeza de línea. HTTP/2 multiplexa varias peticiones sobre una conexión, comprime headers y prioriza recursos. HTTP/3 usa QUIC sobre UDP para reducir latencia y evitar el bloqueo por pérdida de paquetes. La elección afecta al rendimiento, no cambia la semántica de métodos y códigos.",
      "req": [
        "t5-1",
        "t1-8"
      ]
    },
    {
      "id": "t24-9",
      "m": "m24",
      "order": 9,
      "title": "Same-origin policy y preflight CORS",
      "desc": "La same-origin policy impide que un script de un origen lea datos de otro origen distinto (esquema, dominio y puerto). CORS relaja esa regla mediante headers. Si la petición no es simple (usa PUT, JSON o headers personalizados), el navegador envía primero un preflight OPTIONS para preguntar al servidor qué permite. Sin la respuesta correcta, bloquea la lectura aunque la petición llegue.",
      "req": [
        "t14-6",
        "t5-1"
      ]
    },
    {
      "id": "t24-10",
      "m": "m24",
      "order": 10,
      "title": "Content Security Policy (CSP)",
      "desc": "Content Security Policy es un header que indica al navegador qué fuentes de scripts, estilos, imágenes y conexiones puede cargar. Con directivas como default-src o script-src se reduce el impacto de XSS. Evita inline scripts o usa nonces y hashes. Una CSP mal configurada rompe la página; una ausente deja la puerta abierta. Es defensa en profundidad, no sustituye escapar la salida.",
      "req": [
        "t14-8",
        "t5-9"
      ]
    },
    {
      "id": "t24-11",
      "m": "m24",
      "order": 11,
      "title": "Inyección SQL",
      "desc": "La inyección SQL ocurre cuando datos del usuario se concatenan en una consulta y alteran su lógica, por ejemplo con ' OR 1=1. Se evita con consultas parametrizadas o prepared statements, que separan código y datos, y con validación y permisos mínimos. Escapar comillas no es suficiente. Es una de las vulnerabilidades más graves y aparece mucho en entrevistas de backend.",
      "req": [
        "t19-5",
        "t14-9"
      ]
    },
    {
      "id": "t24-12",
      "m": "m24",
      "order": 12,
      "title": "Hash de contraseñas",
      "desc": "En una base de datos, las contraseñas nunca se guardan en texto plano ni con cifrado reversible: se guardan con un hash lento y con sal, como bcrypt, scrypt o Argon2. La sal evita tablas precalculadas y el coste alto frena la fuerza bruta. Nunca se compara con ===; se usa la función de verificación. Si la base se filtra, el atacante aún debe romper cada hash.",
      "req": [
        "t14-1",
        "t14-10"
      ]
    },
    {
      "id": "t24-13",
      "m": "m24",
      "order": 13,
      "title": "OAuth 2.0 y OpenID Connect",
      "desc": "OAuth 2.0 es un marco de autorización que permite a una aplicación acceder a recursos de otra sin pedir la contraseña. El usuario autoriza y la app recibe un access token. OpenID Connect añade una capa de identidad sobre OAuth con un ID token. No confundas autorización con autenticación. En entrevistas importan los flujos, los scopes y el manejo seguro de tokens.",
      "req": [
        "t14-1",
        "t14-4"
      ]
    },
    {
      "id": "t24-14",
      "m": "m24",
      "order": 14,
      "title": "Cookies: HttpOnly, Secure y SameSite",
      "desc": "HttpOnly impide que JavaScript lea la cookie, lo que reduce el robo por XSS. Secure hace que solo viaje por HTTPS. SameSite controla si se envía en peticiones de otro sitio: Lax, Strict o None. Para sesión conviene HttpOnly, Secure y SameSite=Lax o Strict. Estos atributos son la primera defensa de una cookie y se preguntan mucho.",
      "req": [
        "t12-2",
        "t5-2"
      ]
    },
    {
      "id": "t24-15",
      "m": "m24",
      "order": 15,
      "title": "Sesiones vs. JWT",
      "desc": "Una sesión guarda el estado en el servidor y el cliente solo lleva un identificador en una cookie. Un JWT lleva los datos firmados en el propio token y el servidor no consulta la sesión en cada petición. Las sesiones son fáciles de revocar; los JWT escalan mejor pero revocarlos exige listas o expiraciones cortas. No hay ganador absoluto: depende del sistema.",
      "req": [
        "t12-3",
        "t14-5"
      ]
    },
    {
      "id": "t24-16",
      "m": "m24",
      "order": 16,
      "title": "SSR, CSR, SSG e hidratación",
      "desc": "CSR renderiza en el navegador con JavaScript; SSR genera el HTML en el servidor en cada petición; SSG lo genera en el build y lo sirve estático. La hidratación es el proceso de hacer interactivo ese HTML ya renderizado. SSR y SSG mejoran la primera carga y el SEO; CSR simplifica la interactividad. Muchos frameworks combinan varios modos por ruta.",
      "req": [
        "t1-7",
        "t11-3",
        "t17-1"
      ]
    },
    {
      "id": "t24-17",
      "m": "m24",
      "order": 17,
      "title": "REST vs. GraphQL",
      "desc": "REST expone recursos con URLs y métodos HTTP, y suele devolver estructuras fijas. GraphQL expone un esquema y permite pedir exactamente los campos necesarios en una sola consulta. REST es simple y cacheable; GraphQL reduce overfetching pero complica caché, autorización y consultas costosas. La elección depende del cliente y del equipo, no de moda.",
      "req": [
        "t4-9",
        "t20-7"
      ]
    },
    {
      "id": "t24-18",
      "m": "m24",
      "order": 18,
      "title": "Problema N+1 en bases de datos",
      "desc": "El problema N+1 ocurre cuando se hace una consulta para obtener N registros y luego una consulta adicional por cada uno para traer su relación. Con 100 pedidos, se ejecutan 101 consultas en lugar de una o dos. Se resuelve con JOIN, eager loading del ORM o consultas por lotes. Es una causa clásica de lentitud y una pregunta frecuente de bases de datos.",
      "req": [
        "t19-6",
        "t19-8"
      ]
    },
    {
      "id": "t24-19",
      "m": "m24",
      "order": 19,
      "title": "Monolito vs. microservicios",
      "desc": "Un monolito concentra la aplicación en un solo despliegue; es más simple de desarrollar, probar y desplegar al principio. Los microservicios dividen el sistema en servicios independientes que se comunican por red; escalan y se despliegan por separado, pero añaden latencia, observabilidad y consistencia distribuida. No empieces con microservicios sin necesidad. La modularidad importa más que el número de servicios.",
      "req": [
        "t4-5",
        "t4-6"
      ]
    },
    {
      "id": "t24-20",
      "m": "m24",
      "order": 20,
      "title": "Escalado horizontal, vertical y balanceador de carga",
      "desc": "El escalado vertical aumenta los recursos de una máquina; el horizontal añade más máquinas. El horizontal suele ser más flexible y tolerante a fallos, pero exige que la aplicación no guarde estado local. Un balanceador de carga reparte las peticiones entre instancias y comprueba su salud. También hay que pensar en sesiones, caché y base de datos compartida.",
      "req": [
        "t3-5",
        "t3-6"
      ]
    },
    {
      "id": "t24-21",
      "m": "m24",
      "order": 21,
      "title": "Proxy inverso",
      "desc": "Un proxy inverso se coloca delante de los servidores y recibe las peticiones de los clientes. Puede terminar TLS, servir archivos estáticos, comprimir, cachear, limitar peticiones y repartir tráfico. Nginx y Caddy son ejemplos habituales. El cliente solo ve el proxy, no los servicios internos. Mejora seguridad y rendimiento sin cambiar la aplicación.",
      "req": [
        "t3-5",
        "t5-8"
      ]
    },
    {
      "id": "t24-22",
      "m": "m24",
      "order": 22,
      "title": "Pirámide de testing",
      "desc": "La pirámide de testing propone muchas pruebas unitarias rápidas, menos de integración y muy pocas end-to-end. Las unitarias aíslan la lógica; las de integración comprueban contratos entre piezas; las E2E validan flujos reales. La forma evita una suite lenta y frágil. En entrevistas importa explicar qué probar en cada nivel y no perseguir el 100% de cobertura.",
      "req": [
        "t22-2",
        "t22-3",
        "t22-4"
      ]
    },
    {
      "id": "t24-23",
      "m": "m24",
      "order": 23,
      "title": "Semver y gestores de paquetes",
      "desc": "Semver usa MAJOR.MINOR.PATCH: MAJOR rompe compatibilidad, MINOR añade funciones compatibles y PATCH corrige errores. Los gestores de paquetes como npm, yarn o pnpm descargan dependencias, resuelven versiones y ejecutan scripts. package.json declara dependencias y package-lock.json fija el árbol exacto en el repositorio. Entender rangos como ^ y ~ evita actualizaciones inesperadas en producción.",
      "req": [
        "t18-2",
        "t22-6"
      ]
    },
    {
      "id": "t24-24",
      "m": "m24",
      "order": 24,
      "title": "CAP, replicación y sharding",
      "desc": "El teorema CAP dice que ante una partición de red un sistema distribuido debe elegir entre consistencia y disponibilidad. La replicación copia los datos de una base de datos en varios nodos para tolerar fallos y repartir lecturas; el sharding divide los datos por una clave para escalar escrituras. Ambos añaden complejidad de consistencia. En entrevistas se pregunta cuándo priorizar cada trade-off.",
      "req": [
        "t19-2",
        "t19-9"
      ]
    },
    {
      "id": "t24-25",
      "m": "m24",
      "order": 25,
      "title": "Complejidad algorítmica (Big O)",
      "desc": "La notación Big O describe cómo crece el tiempo o la memoria de un algoritmo cuando crece la entrada. O(1) es constante, O(log n) crece muy lento, O(n) es lineal y O(n²) se dispara. Un índice de base de datos cambia una búsqueda lineal por una logarítmica. No hace falta memorizar todos los casos, pero sí reconocer los patrones y justificar la elección.",
      "req": [
        "t17-6",
        "t19-8"
      ]
    },
    {
      "id": "t24-26",
      "m": "m24",
      "order": 26,
      "title": "Virtual DOM y React",
      "desc": "El Virtual DOM es una representación en memoria de la interfaz que una librería compara con la anterior para calcular los cambios mínimos y aplicarlos al DOM real. React lo popularizó junto con componentes y estado declarativo. No es automáticamente más rápido: evita manipulaciones innecesarias y facilita razonar sobre la UI. Entender el DOM real ayuda a explicar por qué existe.",
      "req": [
        "t11-4",
        "t17-7",
        "t2-8"
      ]
    }
  ],
  "status": {}
};

# Mapa de Aprendizaje · Fundamentos de desarrollo web

Aplicación web local para estudiar los fundamentos del desarrollo web como una ruta de aprendizaje interactiva. Cada concepto tiene una explicación completa, enlaces a otros términos y un sistema de prerrequisitos que indica qué conviene dominar antes de continuar.

No necesita instalación, dependencias ni proceso de build: es HTML, CSS y JavaScript puro.

## Características

- **Ruta principal** con 14 módulos y 123 conceptos ordenados.
- **Explicaciones completas** para cada concepto, con términos enlazados automáticamente.
- **Navegación entre conceptos** sin perder el punto de partida: cada enlace interno permite volver.
- **Prerrequisitos**: avisa cuando falta dominar un concepto anterior y muestra qué desbloquea cada uno.
- **Estados de estudio**: pendiente, estudiando, dominado y repasar.
- **Vista Repaso**: calcula qué puedes estudiar ahora, qué está bloqueado y qué conviene repasar.
- **Mapa de dependencias** en SVG, con arrastre, rueda para desplazarse, `Ctrl` + rueda o doble clic para zoom, flechas, botones de desplazamiento y detalle por módulo.
- **Notas personales** por concepto.
- **Búsqueda y filtros** por título, explicación y estado.
- **Alta y edición de conceptos**, con gestión de prerrequisitos y protección contra ciclos.
- **Persistencia en `localStorage`** y exportación/importación de los datos en JSON.

## Cómo ejecutarlo

La forma recomendada es servir la carpeta con un servidor local:

```bash
python -m http.server 8123 --bind 127.0.0.1
```

Después abre:

```
http://127.0.0.1:8123/index.html
```

También puedes abrir `index.html` directamente en el navegador.

## Estructura

```
.
├── index.html   # Estructura de la interfaz
├── styles.css   # Tema oscuro, layout y estilos del mapa SVG
├── data.js      # Contenido semilla: módulos, conceptos y prerrequisitos
└── app.js       # Estado, vistas, enlaces automáticos, mapa y persistencia
```

## Contenido

El contenido inicial cubre:

1. Introducción al desarrollo web (incluye Internet, TCP/IP, TCP vs. UDP y paquetes de datos)
2. Frontend y Backend
3. Cliente y servidor
4. Arquitectura cliente-servidor
5. HTTP y HTTPS
6. Request y Response
7. Métodos HTTP
8. Códigos de estado HTTP
9. URL, URI y parámetros
10. DNS y dominios
11. Navegadores y DOM
12. Cookies, sesiones y almacenamiento
13. JSON e intercambio de información
14. Seguridad web básica

## Datos y persistencia

Los cambios se guardan en el navegador bajo la clave `mapa-aprendizaje-nivel1-v3`. Desde el menú `⋯` puedes:

- exportar el progreso y los datos a JSON,
- importar un archivo JSON,
- borrar solo el progreso,
- restaurar el contenido original.

Cuando se actualiza el contenido semilla, la aplicación conserva el progreso y las notas de los conceptos existentes.

## Tecnologías

- HTML5
- CSS3 (tema oscuro, responsive)
- JavaScript vanilla
- SVG para el mapa de dependencias
- `localStorage` para persistencia

## Licencia

Uso libre para aprendizaje y proyectos personales.

# Mapa de Aprendizaje · Fundamentos de desarrollo web

Aplicación web local para estudiar los fundamentos del desarrollo web como una ruta de aprendizaje interactiva. Cada concepto tiene una explicación completa, enlaces a otros términos y un sistema de prerrequisitos que indica qué conviene dominar antes de continuar.

No necesita instalación, dependencias ni proceso de build: es HTML, CSS y JavaScript puro.

## Características

- **Ruta principal** con 24 módulos y 233 conceptos ordenados.
- **Explicaciones completas** para cada concepto, con términos enlazados automáticamente.
- **Navegación entre conceptos** sin perder el punto de partida: cada enlace interno permite volver.
- **Prerrequisitos**: avisa cuando falta dominar un concepto anterior y muestra qué desbloquea cada uno.
- **Estados de estudio**: pendiente, estudiando, dominado y repasar.
- **Vista Repaso**: calcula qué puedes estudiar ahora, qué está bloqueado y qué conviene repasar.
- **Mapa de dependencias** en SVG, controlado con el mouse: arrastre para mover, rueda para desplazarte, `Ctrl` + rueda o doble clic para zoom, y detalle por módulo.
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

El contenido inicial cubre 24 módulos y 233 conceptos:

1. Introducción al desarrollo web (incluye Internet, TCP/IP, TCP vs. UDP y paquetes de datos)
2. HTML y estructura del contenido
3. CSS y diseño visual
4. JavaScript esencial
5. Frontend y Backend
6. Cliente y servidor
7. Arquitectura cliente-servidor
8. HTTP y HTTPS
9. Request y Response
10. Métodos HTTP
11. Códigos de estado HTTP
12. URL, URI y parámetros
13. DNS y dominios
14. Navegadores y DOM
15. Cookies, sesiones y almacenamiento
16. JSON e intercambio de información
17. Bases de datos y SQL
18. APIs modernas y tiempo real
19. Git y control de versiones
20. Rendimiento y caché web
21. Testing y calidad
22. Despliegue y DevOps básico
23. Seguridad web básica
24. Conceptos clave para entrevistas (event loop, closures, HTTP/2 y HTTP/3, CSP, OAuth, N+1, microservicios, Big O y más)

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

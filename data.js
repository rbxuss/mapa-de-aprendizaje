/* Contenido inicial: Nivel 1 · Fundamentos de desarrollo web.
   La app guarda tus cambios en localStorage; este archivo solo es la semilla. */
window.SEED_VERSION = 4;
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
      "id": "m2",
      "order": 2,
      "title": "Frontend y Backend",
      "priority": "alta",
      "desc": "Las dos mitades de una aplicación: lo que ve el usuario y lo que ocurre en el servidor."
    },
    {
      "id": "m3",
      "order": 3,
      "title": "Cliente y servidor",
      "priority": "alta",
      "desc": "Quién pide y quién responde, y en qué se diferencian los tipos de cada lado."
    },
    {
      "id": "m4",
      "order": 4,
      "title": "Arquitectura cliente-servidor",
      "priority": "alta",
      "desc": "Cómo se organizan las capas, qué es una API y cómo se conecta todo con la base de datos."
    },
    {
      "id": "m5",
      "order": 5,
      "title": "HTTP y HTTPS",
      "priority": "alta",
      "desc": "El protocolo que hace posible la Web y cómo se protege con cifrado."
    },
    {
      "id": "m6",
      "order": 6,
      "title": "Request y Response",
      "priority": "alta",
      "desc": "La anatomía de una petición y de una respuesta: headers, body y formatos."
    },
    {
      "id": "m7",
      "order": 7,
      "title": "Métodos HTTP",
      "priority": "alta",
      "desc": "GET, POST, PUT, PATCH y DELETE: la intención de cada petición."
    },
    {
      "id": "m8",
      "order": 8,
      "title": "Códigos de estado HTTP",
      "priority": "alta",
      "desc": "Qué significa cada familia de códigos y cuándo usar cada uno."
    },
    {
      "id": "m9",
      "order": 9,
      "title": "URL, URI y parámetros",
      "priority": "alta",
      "desc": "Cómo se identifica un recurso y cómo se le pasan datos."
    },
    {
      "id": "m10",
      "order": 10,
      "title": "DNS y dominios",
      "priority": "media",
      "desc": "Cómo un nombre legible se convierte en la dirección IP de un servidor."
    },
    {
      "id": "m11",
      "order": 11,
      "title": "Navegadores y DOM",
      "priority": "alta",
      "desc": "Cómo el navegador interpreta HTML, CSS y JavaScript, y qué es el DOM."
    },
    {
      "id": "m12",
      "order": 12,
      "title": "Cookies, sesiones y almacenamiento",
      "priority": "alta",
      "desc": "Cómo se conserva el estado en un protocolo que no recuerda nada."
    },
    {
      "id": "m13",
      "order": 13,
      "title": "JSON e intercambio de información",
      "priority": "alta",
      "desc": "El formato que domina el intercambio de datos y cómo se envía y recibe."
    },
    {
      "id": "m14",
      "order": 14,
      "title": "Seguridad web básica",
      "priority": "alta",
      "desc": "Autenticación, autorización, tokens y los ataques más comunes."
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
    }
  ],
  "status": {}
};

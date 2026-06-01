/*
 * ═══════════════════════════════════════════════════════════════════
 *   GUIA DE EDICION - PORTAFOLIO DE EVIDENCIAS
 * ═══════════════════════════════════════════════════════════════════
 *
 *   Este archivo contiene TODA la informacion del portafolio.
 *   NO necesitas editar index.html, styles.css ni script.js.
 *
 * ── CAMBIAR FOTO DE PERFIL ──────────────────────────────────────
 *   En la seccion "presentacion", modifica el valor de "foto"
 *   con el nombre de tu archivo de imagen.
 *   Ejemplo: foto: "mi-foto.jpg"
 *
 * ── MODIFICAR SEMBLANZA ────────────────────────────────────────
 *   En la seccion "presentacion", edita el texto de "semblanza".
 *   Puedes usar parrafos separados con saltos de linea.
 *
 * ── EDITAR TEXTOS DE PORTADA ───────────────────────────────────
 *   En la seccion "portada", cambia titulo, nombre, grupo y frase.
 *
 * ── EDITAR INTRODUCCION ────────────────────────────────────────
 *   En la seccion "introduccion", modifica titulo y texto.
 *
 * ── AGREGAR UNA NUEVA ACTIVIDAD ────────────────────────────────
 *   1. Crea una carpeta con tus imagenes dentro del proyecto.
 *   2. Copia una entrada existente del array "actividades".
 *   3. Cambia el "id" (unico, sin espacios ni acentos).
 *   4. Cambia el "titulo" que se mostrara en la pestana.
 *   5. Escribe la "descripcion" de la actividad.
 *   6. En "imagenes", agrega un objeto por cada foto:
 *      { ruta: "carpeta/subcarpeta/foto.JPG", alt: "Descripcion" }
 *
 * ── AGREGAR IMAGENES A UNA ACTIVIDAD EXISTENTE ─────────────────
 *   Dentro del array "imagenes" de la actividad, agrega nuevos
 *   objetos con la ruta y descripcion de cada foto.
 *
 * ── ELIMINAR UNA ACTIVIDAD ─────────────────────────────────────
 *   Simplemente borra todo el bloque { ... } de esa actividad.
 *
 * ═══════════════════════════════════════════════════════════════════
 */

var PORTAFOLIO_DATA = {

  portada: {
    titulo: "Portafolio de Evidencias",
    subtitulo: "Athena",
    nombre: "Athena Itzel Espinoza Ornelas",
    grupo: "552",
    materia: "Realizacion de Contenidos Fotograficos",
    frase: "La luz escribe historias que solo el ojo atento sabe leer, y la camara es la pluma con la que elijo contarlas."
  },

  presentacion: {
    foto: "IMG_7007.JPG",
    nombre: "Athena Itzel Espinoza Ornelas",
    rol: "Estudiante de Comunicacion Visual",
    semblanza: "Mi nombre es Athena Itzel Espinoza Ornelas y desde hace tiempo la fotografia se ha convertido en mi forma favorita de expresarme. Durante este curso he tenido la oportunidad de sumergirme en distintos generos fotograficos: desde la precision que exige la foto de producto, la conexion humana del retrato en estudio, hasta la adrenalina de capturar el movimiento en la fotografia deportiva y la libertad de documentar la vida en las calles. Lo que mas disfruto es descubrir como un mismo escenario puede verse completamente diferente dependiendo de la luz, el angulo y la intencion detras del disparo. En este portafolio comparto el trabajo que he realizado a lo largo de la materia de Realizacion de Contenidos Fotograficos, un espacio donde he aprendido a mirar con mas intencion y a construir imagenes que dicen algo."
  },

  introduccion: {
    titulo: "Introduccion",
    texto: "Fotografiar es detener el tiempo por una fraccion de segundo y convertir ese instante en algo permanente. Para mi, la fotografia representa la union entre tecnica y creatividad: por un lado exige conocimiento sobre la luz, la exposicion y el equipo; por otro, demanda sensibilidad para encontrar belleza, tension o significado en lo que nos rodea.\n\nEn las siguientes paginas se encuentra una coleccion de los trabajos que realice durante el semestre en la materia de Realizacion de Contenidos Fotograficos. El portafolio esta organizado por temas, comenzando con los fundamentos tecnicos como la medicion de luz y las distancias focales, pasando por ejercicios de accion, iluminacion con modificadores y cobertura de eventos, hasta llegar a proyectos mas completos de fotografia de producto, retrato con flash y fotografia de calle.\n\nCada seccion contiene una seleccion cuidada de imagenes junto con una breve descripcion del proceso creativo y los aprendizajes obtenidos. Mas alla de cumplir con un requisito academico, este portafolio es un reflejo de mi crecimiento como fotografa y de la pasion que he desarrollado por este oficio a lo largo del curso."
  },

  actividades: [

    {
      id: "medicion",
      titulo: "#1 Medicion",
      descripcion: "Antes de poder crear buenas fotografias, es indispensable entender como la camara lee la luz. En este primer ejercicio trabaje con los tres modos de medicion que ofrece el equipo: matricial, ponderada al centro y puntual. Cada uno interpreta la escena de forma distinta, lo que se refleja directamente en la exposicion de la imagen final. Las tomas incluyen un paisaje escolar, un grupo de personas y un detalle cercano, lo que me permitio comparar resultados y entender cuando conviene usar cada modo dependiendo del sujeto y las condiciones de iluminacion.",
      imagenes: [
        { ruta: "Medición/#1 Medición/Paisaje escolar .JPG", alt: "Fotografia de paisaje escolar con medicion de luz" },
        { ruta: "Medición/#1 Medición/Grupo de personas .JPG", alt: "Fotografia de grupo de personas con medicion de luz" },
        { ruta: "Medición/#1 Medición/Detalle.JPG", alt: "Fotografia de detalle con medicion de luz" }
      ]
    },

    {
      id: "distancia-focal",
      titulo: "#2 Distancia Focal",
      descripcion: "El lente que elegimos cambia por completo la manera en que una escena se ve. Para este ejercicio fotografe el mismo sujeto utilizando cuatro distancias focales diferentes: 55mm, 70mm, 135mm y 210mm. Al comparar los resultados se nota claramente como las distancias cortas abren el campo de vision y separan los planos, mientras que las distancias largas comprimen el fondo y reducen la profundidad de campo. Este tipo de practica es fundamental para tomar decisiones conscientes al momento de elegir que lente usar segun lo que queremos comunicar.",
      imagenes: [
        { ruta: "Distancia focal/#2 Distancia focal/55.JPG", alt: "Fotografia tomada a 55mm de distancia focal" },
        { ruta: "Distancia focal/#2 Distancia focal/70.JPG", alt: "Fotografia tomada a 70mm de distancia focal" },
        { ruta: "Distancia focal/#2 Distancia focal/135.JPG", alt: "Fotografia tomada a 135mm de distancia focal" },
        { ruta: "Distancia focal/#2 Distancia focal/210.JPG", alt: "Fotografia tomada a 210mm de distancia focal" }
      ]
    },

    {
      id: "lectura-exposicion",
      titulo: "#3 Lectura de Exposicion",
      descripcion: "Lograr una exposicion correcta depende del equilibrio entre apertura, velocidad e ISO, y saber leer lo que la camara nos indica es clave para tomar el control. En esta practica analice distintas escenas con condiciones de luz variadas, ajustando manualmente los parametros del equipo para conseguir resultados equilibrados. Tambien aprendi a interpretar el histograma como una herramienta confiable para evaluar si una imagen esta subexpuesta, sobreexpuesta o correctamente expuesta, algo que ahora aplico en cada sesion fotografica.",
      imagenes: [
        { ruta: "lectura de exposición/#3 lectura de exposición/IMG_5614.JPG", alt: "Ejercicio de lectura de exposicion 1" },
        { ruta: "lectura de exposición/#3 lectura de exposición/IMG_5639.JPG", alt: "Ejercicio de lectura de exposicion 2" },
        { ruta: "lectura de exposición/#3 lectura de exposición/IMG_5643.JPG", alt: "Ejercicio de lectura de exposicion 3" },
        { ruta: "lectura de exposición/#3 lectura de exposición/IMG_5647.JPG", alt: "Ejercicio de lectura de exposicion 4" }
      ]
    },

    {
      id: "accion-deportes",
      titulo: "#4 Accion - Deportes",
      descripcion: "Congelar un momento de movimiento intenso es uno de los retos mas emocionantes de la fotografia. En esta actividad me enfrente al desafio de capturar escenas deportivas, donde todo sucede rapido y no hay segunda oportunidad. Trabaje con velocidades de obturacion altas para detener la accion y con el modo de rafaga para aumentar las posibilidades de conseguir el momento exacto. Aprendi que la anticipacion es tan importante como la tecnica: conocer el deporte, predecir los movimientos y estar lista con la configuracion correcta marca la diferencia entre una foto comun y una imagen con impacto.",
      imagenes: [
        { ruta: "deportes/#4 Acción-deportes/AIEO.JPG", alt: "Fotografia de accion deportiva 1" },
        { ruta: "deportes/#4 Acción-deportes/AIEO (1).JPG", alt: "Fotografia de accion deportiva 2" },
        { ruta: "deportes/#4 Acción-deportes/AIEO (2).JPG", alt: "Fotografia de accion deportiva 3" },
        { ruta: "deportes/#4 Acción-deportes/AIEO (3).JPG", alt: "Fotografia de accion deportiva 4" }
      ]
    },

    {
      id: "modificadores-luz",
      titulo: "#5 Modificadores de Luz",
      descripcion: "En fotografia de estudio, la luz rara vez se usa directamente; casi siempre pasa por algun modificador que altera su comportamiento. Durante esta sesion probe distintos accesorios como softboxes, paraguas difusores y reflectores para ver como cada uno cambia la calidad de la luz sobre el sujeto. Los resultados fueron muy claros: un softbox produce sombras suaves y transiciones graduales, un paraguas genera una luz mas abierta y envolvente, mientras que un reflector permite rellenar sombras sin necesidad de otra fuente de luz. Entender estas diferencias me dio mucha mas libertad creativa al momento de planear una iluminacion.",
      imagenes: [
        { ruta: "modificadores de luz/#5 modificadores de luz/AIEO (4).JPG", alt: "Ejercicio con modificadores de luz 1" },
        { ruta: "modificadores de luz/#5 modificadores de luz/AIEO (5).JPG", alt: "Ejercicio con modificadores de luz 2" },
        { ruta: "modificadores de luz/#5 modificadores de luz/AIEO (6).JPG", alt: "Ejercicio con modificadores de luz 3" },
        { ruta: "modificadores de luz/#5 modificadores de luz/AIEO (7).JPG", alt: "Ejercicio con modificadores de luz 4" },
        { ruta: "modificadores de luz/#5 modificadores de luz/AIEO (8).JPG", alt: "Ejercicio con modificadores de luz 5" },
        { ruta: "modificadores de luz/#5 modificadores de luz/AIEO (9).JPG", alt: "Ejercicio con modificadores de luz 6" }
      ]
    },

    {
      id: "feria-libro",
      titulo: "#6 Feria del Libro",
      descripcion: "Cubrir un evento en vivo pone a prueba muchas habilidades al mismo tiempo: hay que ser rapido, discreto y tener buen ojo para encontrar los momentos que cuentan la historia del lugar. En la Feria del Libro trabaje con luz natural y composicion espontanea para capturar el ambiente, los visitantes y las actividades que se desarrollaban. Lo mas interesante de este ejercicio fue aprender a construir una narrativa visual coherente a partir de imagenes sueltas, seleccionando aquellas que juntas transmiten la experiencia completa de haber estado ahi.",
      imagenes: [
        { ruta: "Feria del libro/#6 Feria del libro/AIEO (10).JPG", alt: "Fotografia de la Feria del Libro 1" },
        { ruta: "Feria del libro/#6 Feria del libro/AIEO (11).JPG", alt: "Fotografia de la Feria del Libro 2" },
        { ruta: "Feria del libro/#6 Feria del libro/AIEO (12).JPG", alt: "Fotografia de la Feria del Libro 3" },
        { ruta: "Feria del libro/#6 Feria del libro/AIEO (13).JPG", alt: "Fotografia de la Feria del Libro 4" },
        { ruta: "Feria del libro/#6 Feria del libro/AIEO (14).JPG", alt: "Fotografia de la Feria del Libro 5" }
      ]
    },

    {
      id: "angulos",
      titulo: "#7 Direccion de Luz - Angulos",
      descripcion: "Mover la fuente de luz aunque sea unos centimetros puede transformar por completo el aspecto de una fotografia. En este ejercicio experimente con diferentes angulos de iluminacion: frontal, lateral, contraluz, cenital y rasante. Cada posicion genera un efecto distinto sobre las sombras, el volumen y las texturas del sujeto. La luz frontal aplana, la lateral define formas, el contraluz crea siluetas dramaticas y la luz rasante exagera cada textura. Fue un ejercicio revelador porque me hizo entender que iluminar no es solo encender una luz, sino decidir exactamente desde donde y con que intencion.",
      imagenes: [
        { ruta: "ángulos/#7 Dirección de luz-ángulos/IMG_7131.JPG", alt: "Ejercicio de direccion de luz y angulos 1" },
        { ruta: "ángulos/#7 Dirección de luz-ángulos/IMG_7177.JPG", alt: "Ejercicio de direccion de luz y angulos 2" },
        { ruta: "ángulos/#7 Dirección de luz-ángulos/IMG_7178.JPG", alt: "Ejercicio de direccion de luz y angulos 3" },
        { ruta: "ángulos/#7 Dirección de luz-ángulos/IMG_7183.JPG", alt: "Ejercicio de direccion de luz y angulos 4" },
        { ruta: "ángulos/#7 Dirección de luz-ángulos/IMG_7189.JPG", alt: "Ejercicio de direccion de luz y angulos 5" }
      ]
    },

    {
      id: "foto-producto",
      titulo: "P#1 Foto Producto",
      descripcion: "Hacer que un objeto comun se vea atractivo ante la camara requiere mas tecnica de la que parece. En este proyecto de fotografia de producto trabaje con iluminacion controlada, fondos limpios y composicion cuidada para resaltar las cualidades visuales del sujeto. Cada detalle cuenta: la posicion de las luces para evitar reflejos no deseados, la eleccion del angulo que mejor muestra la forma del producto y la nitidez necesaria para que la imagen se vea profesional. Es un genero que exige paciencia y precision, pero los resultados son muy satisfactorios cuando todo se alinea.",
      imagenes: [
        { ruta: "Foto producto/P#1 Foto producto/F2.JPG", alt: "Fotografia de producto 1" },
        { ruta: "Foto producto/P#1 Foto producto/F3 (1).JPG", alt: "Fotografia de producto 2" },
        { ruta: "Foto producto/P#1 Foto producto/F5.JPG", alt: "Fotografia de producto 3" }
      ]
    },

    {
      id: "foto-retrato",
      titulo: "P#2 Foto Retrato",
      descripcion: "El retrato en estudio con flash ofrece un nivel de control que la luz natural no siempre permite. Para este proyecto realice sesiones de retrato donde experimente con distintos esquemas de iluminacion, dirigiendo a los modelos y cuidando cada aspecto de la imagen: desde la expresion y la postura hasta la direccion de la mirada y la relacion con la camara. Trabajar con flash me enseno a pensar la luz de forma intencional, construyendo la iluminacion desde cero para lograr el ambiente que queria transmitir en cada fotografia.",
      imagenes: [
        { ruta: "Foto retrato/P#2 Foto retrato/F1.JPG", alt: "Retrato con flash de estudio 1" },
        { ruta: "Foto retrato/P#2 Foto retrato/F3.JPG", alt: "Retrato con flash de estudio 2" },
        { ruta: "Foto retrato/P#2 Foto retrato/F4.JPG", alt: "Retrato con flash de estudio 3" },
        { ruta: "Foto retrato/P#2 Foto retrato/F5 (1).JPG", alt: "Retrato con flash de estudio 4" }
      ]
    },

    {
      id: "foto-calle",
      titulo: "P#3 Foto Calle",
      descripcion: "Salir a la calle con la camara y buscar historias en lo cotidiano es una de las experiencias mas enriquecedoras de la fotografia. En este proyecto realice varias salidas donde documente escenas urbanas sin intervenir en ellas, confiando en la luz natural, las lineas de la ciudad y mi instinto para encontrar composiciones interesantes. La fotografia de calle me enseno a ser mas observadora, a tener paciencia y a valorar los momentos fugaces que solo existen una vez. Es un genero que premia la curiosidad y la disposicion de estar siempre lista para disparar.",
      imagenes: [
        { ruta: "Foto calle/P#3 Foto calle/0 RALLY+ Espinoza Athena .JPG", alt: "Fotografia de calle - Rally 1" },
        { ruta: "Foto calle/P#3 Foto calle/3RALLY+(EOAI) .JPG", alt: "Fotografia de calle - Rally 2" },
        { ruta: "Foto calle/P#3 Foto calle/5RALLY+(EOAI) .JPG", alt: "Fotografia de calle - Rally 3" },
        { ruta: "Foto calle/P#3 Foto calle/6RALLY+(EOAI) .JPG", alt: "Fotografia de calle - Rally 4" },
        { ruta: "Foto calle/P#3 Foto calle/8RALLY+(EOAI) .JPG", alt: "Fotografia de calle - Rally 5" },
        { ruta: "Foto calle/P#3 Foto calle/10RALLY+(EOAI) .JPG", alt: "Fotografia de calle - Rally 6" }
      ]
    },

    {
      id: "extras",
      titulo: "Extras",
      descripcion: "No todas las fotografias que valen la pena nacen de una tarea asignada. Esta seccion reune imagenes que capture por gusto personal, fuera de las actividades del curso, en momentos donde simplemente sentia ganas de fotografear. Son tomas que reflejan mi curiosidad por explorar sin presion, probando angulos, jugando con la luz y dejandome llevar por lo que me llamaba la atencion en ese instante. Las incluyo porque tambien forman parte de mi proceso como fotografa.",
      imagenes: [
        { ruta: "Extras/Extras/IMG_9400.JPG", alt: "Fotografia extra 1" },
        { ruta: "Extras/Extras/IMG_9542.JPG", alt: "Fotografia extra 2" },
        { ruta: "Extras/Extras/IMG_9558.JPG", alt: "Fotografia extra 3" },
        { ruta: "Extras/Extras/IMG_9615.JPG", alt: "Fotografia extra 4" },
        { ruta: "Extras/Extras/IMG_9618.JPG", alt: "Fotografia extra 5" },
        { ruta: "Extras/Extras/IMG_9635.JPG", alt: "Fotografia extra 6" }
      ]
    }

  ]
};

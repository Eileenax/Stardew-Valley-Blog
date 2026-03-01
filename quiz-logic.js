const personajes = [
  {
    nombre: "Abigail",
    puntos: 0,
    descripcion: "¡Aventurera y valiente!",
    imagen: "imagenes/120px-Abigail_Blush.png",
  },
  {
    nombre: "Sebastian",
    puntos: 0,
    descripcion: "Alguien solitario pero de gran corazón.",
    imagen: "imagenes/120px-Sebastian.png",
  },
  {
    nombre: "Leah",
    puntos: 0,
    descripcion: "Una artista que ama la naturaleza.",
    imagen: "imagenes/120px-Leah_Neutral.png",
  },
  {
    nombre: "Alex",
    puntos: 0,
    descripcion: "Súper deportista y muy dedicado.",
    imagen: "imagenes/120px-Alex_Neutral.png",
  },
  {
    nombre: "Penny",
    puntos: 0,
    descripcion: "Dulce, inteligente y muy amable.",
    imagen: "imagenes/120px-Penny_Neutral.png",
  },
  {
    nombre: "Elliott",
    puntos: 0,
    descripcion: "Un escritor romántico y elegante.",
    imagen: "imagenes/120px-Elliott_Neutral.png",
  },
  {
    nombre: "Haley",
    puntos: 0,
    descripcion: "Al principio fría, pero muy cariñosa.",
    imagen: "imagenes/120px-Haley_Neutral.png",
  },
  {
    nombre: "Harvey",
    puntos: 0,
    descripcion: "Responsable y siempre cuida de los demás.",
    imagen: "imagenes/120px-Harvey_Neutral.png",
  },
];

const preguntas = [
  {
    titulo: "1. En una reunión social o fiesta, ¿qué papel sueles adoptar?",
    opciones: [
      {
        texto: "Prefiero observar desde un rincón tranquilo",
        sumarA: "Sebastian",
      },
      {
        texto: "Me gusta ser el centro de atención y animar a todos",
        sumarA: "Alex",
      },
      {
        texto: "Busco tener conversaciones profundas e interesantes",
        sumarA: "Elliott",
      },
      {
        texto: "Bailar, reír y disfrutar el momento al máximo",
        sumarA: "Haley",
      },
    ],
  },
  {
    titulo: "2. ¿Qué tipo de detalle te gustaría recibir de tu pareja?",
    opciones: [
      { texto: "Un videojuego nuevo o algo tecnológico", sumarA: "Sebastian" },
      {
        texto: "Algo hecho a mano, como un cuadro o manualidad",
        sumarA: "Leah",
      },
      {
        texto: "Un kit de café premium o algo para la salud",
        sumarA: "Harvey",
      },
      { texto: "Un libro de una edición especial o antigua", sumarA: "Penny" },
    ],
  },
  {
    titulo: "3. ¿Cuál es tu clima o estación favorita?",
    opciones: [
      { texto: "Días soleados para ir a la playa", sumarA: "Haley" },
      {
        texto: "Otoño por los colores y el ambiente artístico",
        sumarA: "Leah",
      },
      { texto: "Días tranquilos y cálidos de primavera", sumarA: "Penny" },
      { texto: "Días de lluvia y tormentas eléctricas", sumarA: "Abigail" },
    ],
  },
  {
    titulo: "4. ¿Qué cualidad valoras más en las personas?",
    opciones: [
      { texto: "La valentía y el espíritu de aventura", sumarA: "Abigail" },
      { texto: "La disciplina y el esfuerzo constante", sumarA: "Alex" },
      { texto: "La elegancia y la buena educación", sumarA: "Elliott" },
      { texto: "La amabilidad y las ganas de ayudar", sumarA: "Penny" },
    ],
  },
  {
    titulo: "5. ¿Cuál sería tu plan ideal para una primera cita?",
    opciones: [
      {
        texto: "Ir a un parque de diversiones o algo de aventura",
        sumarA: "Abigail",
      },
      { texto: "Una cena en un lugar acogedor y saludable", sumarA: "Harvey" },
      { texto: "Un picnic romántico frente al mar", sumarA: "Elliott" },
      { texto: "Ir de compras o a un sitio con mucho estilo", sumarA: "Haley" },
    ],
  },
  {
    titulo: "6. ¿Cómo pasarías una tarde de sábado perfecta?",
    opciones: [
      { texto: "Explorando lugares nuevos y desconocidos", sumarA: "Abigail" },
      { texto: "Escribiendo o creando algo nuevo", sumarA: "Elliott" },
      { texto: "Tomando fotos de paisajes hermosos", sumarA: "Haley" },
      { texto: "Leyendo o aprendiendo algo interesante", sumarA: "Penny" },
    ],
  },
  {
    titulo: "7. ¿Cuál es tu tipo de comida favorita para una salida?",
    opciones: [
      {
        texto: "Pizza, hamburguesas o algo rápido y sabroso",
        sumarA: "Sebastian",
      },
      { texto: "Una ensalada fresca o comida orgánica", sumarA: "Leah" },
      {
        texto: "Un plato gourmet en un restaurante refinado",
        sumarA: "Elliott",
      },
      { texto: "Un menú nutritivo, balanceado y casero", sumarA: "Harvey" },
    ],
  },
  {
    titulo: "8. ¿Qué tipo de personalidad te atrae más?",
    opciones: [
      { texto: "Alguien responsable que sepa cuidarme", sumarA: "Harvey" },
      { texto: "Alguien con mentalidad libre y creativa", sumarA: "Leah" },
      {
        texto: "Alguien misterioso y con un mundo interior profundo",
        sumarA: "Sebastian",
      },
      { texto: "Alguien entusiasta que siempre me motive", sumarA: "Alex" },
    ],
  },
  {
    titulo: "9. ¿Cómo sueles reaccionar ante un problema inesperado?",
    opciones: [
      { texto: "Con valor, enfrentándolo directamente", sumarA: "Abigail" },
      { texto: "Analizando calmadamente todas las opciones", sumarA: "Harvey" },
      { texto: "Con mucha paciencia y buscando armonía", sumarA: "Penny" },
      { texto: "Tratando de mantener la actitud positiva", sumarA: "Haley" },
    ],
  },
  {
    titulo: "10. En una situación de estrés, ¿qué sueles hacer?",
    opciones: [
      { texto: "Enfocarme en mis metas para superarme", sumarA: "Alex" },
      { texto: "Retirarme a un lugar tranquilo a solas", sumarA: "Sebastian" },
      { texto: "Canalizar mis emociones de forma creativa", sumarA: "Leah" },
      { texto: "Hacer ejercicio o descargar energía", sumarA: "Alex" },
    ],
  },
];

let indicePreguntaActual = 0;

const iniciarJuego = () => {
  document.getElementById("pantalla-inicio").style.display = "none";
  document.getElementById("contenedor-pregunta").style.display = "block";
  mostrarPregunta();
};

document.getElementById("btn-comenzar").onclick = () => iniciarJuego();

const mostrarPregunta = () => {
  const pregunta = preguntas[indicePreguntaActual];
  document.getElementById("pregunta-titulo").innerText = pregunta.titulo;
  const contenedor = document.getElementById("opciones-contenedor");
  contenedor.innerHTML = "";
  pregunta.opciones.forEach((opcion) => {
    const boton = document.createElement("button");
    boton.innerText = opcion.texto;
    boton.classList.add("quiz-boton");
    boton.onclick = () => seleccionarOpcion(opcion.sumarA);
    contenedor.appendChild(boton);
  });
};

const seleccionarOpcion = (nombrePersonaje) => {
  personajes.find((p) => p.nombre === nombrePersonaje).puntos++;
  indicePreguntaActual++;
  indicePreguntaActual < preguntas.length
    ? mostrarPregunta()
    : mostrarResultado();
};

const mostrarResultado = () => {
  document.getElementById("contenedor-pregunta").style.display = "none";
  document.getElementById("pantalla-resultado").style.display = "block";
  const ganador = personajes.sort((a, b) => b.puntos - a.puntos)[0];
  document.getElementById("nombre-ganador").innerText = ganador.nombre;
  document.getElementById("foto-ganador").src = ganador.imagen;
  document.getElementById("descripcion-ganador").innerText =
    ganador.descripcion;
};

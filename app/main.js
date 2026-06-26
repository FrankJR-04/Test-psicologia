document.addEventListener('DOMContentLoaded', () => {
    const preguntas = [
    {
        texto: "¿La psicología es el estudio de qué cosa?",
        imagen: "Imagenes/pregunta_1.png",
        opciones: [
        { texto: "La biología del cerebro", correcta: false },
        { texto: "Bienestar emocional", correcta: false },
        { texto: "La salud mental", correcta: false },
        { texto: "La mente y el comportamiento", correcta: true }
    ]
    },
    {
        texto: "¿Quién es considerado el padre del psicoanálisis?",
        imagen: "Imagenes/pregunta_2.png",
        opciones: [
        { texto: "Carl Jung", correcta: false },
        { texto: "Sigmund Freud", correcta: true },
        { texto: "Ivan Pavlov", correcta: false },
        { texto: "Jean Piaget", correcta: false }
    ]
    },
    {
        texto: "¿Qué tipo de memoria retiene información por unos segundos?",
        imagen: "Imagenes/pregunta_3.png",
        opciones: [
        { texto: "Memoria a largo plazo", correcta: false },
        { texto: "Memoria icónica", correcta: true },
        { texto: "Memoria procedimental", correcta: false },
        { texto: "Memoria autobiográfica", correcta: false }
    ]
    },
    {
        texto: "¿Quien es conocido como el padre del condicionamiento clásico ?",
        imagen: "Imagenes/pregunta_4.png",
        opciones: [
        { texto: "Ivan Pavlov", correcta: true },
        { texto: "Jean-Paul Sartre", correcta: false },
        { texto: "Jean Piaget", correcta: false },
        { texto: "Memoria Sigmund Freud ", correcta: false }
    ]    
    },
    {
    texto: "¿Cuál de estos es un tipo de aprendizaje según la psicología conductista?",
    imagen: "Imagenes/pregunta_5.png",
    opciones: [
    { texto: "Aprendizaje crítico", correcta: false },
    { texto: "Aprendizaje por descubrimiento", correcta: false },
    { texto: "Condicionamiento clásico", correcta: true },
    { texto: "Aprendizaje colaborativo", correcta: false }
]
},
{
    texto: "¿Qué estudia la psicología cognitiva?",
    imagen: "Imagenes/pregunta_6.png",
    opciones: [
    { texto: "Las emociones y motivaciones", correcta: false },
    { texto: "La conducta observable", correcta: false },
    { texto: "Los procesos mentales como memoria y percepción", correcta: true },
    { texto: "La estructura del sistema nervioso", correcta: false }
]
},
{
    texto: "¿Qué nombre recibe la etapa del desarrollo de Erik Erikson que ocurre en la adolescencia?",
    imagen: "Imagenes/pregunta_7.png",
    opciones: [
    { texto: "Autonomía vs Vergüenza", correcta: false },
    { texto: "Identidad vs Confusión de roles", correcta: true },
    { texto: "Integridad vs Desesperación", correcta: false },
    { texto: "Iniciativa vs Culpa", correcta: false }
]
},
{
    texto: "¿Cuál de las siguientes NO es una de las cinco etapas del duelo según Kübler-Ross?",
    imagen: "Imagenes/pregunta_8.png",
    opciones: [
    { texto: "Negación", correcta: false },
    { texto: "Aceptación", correcta: false },
    { texto: "Confusión", correcta: true },
    { texto: "Ira", correcta: false }
]
},
{
    texto: "¿Qué técnica psicológica utiliza la asociación libre?",
    imagen: "Imagenes/pregunta_9.png",
    opciones: [
    { texto: "Cognitivo-conductual", correcta: false },
    { texto: "Terapia humanista", correcta: false },
    { texto: "Psicoanálisis", correcta: true },
    { texto: "Terapia sistémica", correcta: false }
]
},
{
    texto: "¿Qué neurotransmisor está relacionado con el placer y la recompensa?",
    imagen: "Imagenes/pregunta_10.png",
    opciones: [
    { texto: "Cortisol", correcta: false },
    { texto: "Serotonina", correcta: false },
    { texto: "Dopamina", correcta: true },
    { texto: "Adrenalina", correcta: false }
]
},
{
    texto: "¿Cuál es la principal característica de la esquizofrenia?",
    imagen: "Imagenes/pregunta_11.png",
    opciones: [
    { texto: "Altos niveles de ansiedad", correcta: false },
    { texto: "Problemas de atención", correcta: false },
    { texto: "Pérdida de contacto con la realidad", correcta: true },
    { texto: "Impulsividad excesiva", correcta: false }
]
},
{
    texto: "¿Qué teoría de la motivación plantea una jerarquía de necesidades?",
    imagen: "Imagenes/pregunta_12.png",
    opciones: [
    { texto: "Teoría de la autodeterminación", correcta: false },
    { texto: "Teoría del refuerzo", correcta: false },
    { texto: "Teoría de Maslow", correcta: true },
    { texto: "Teoría de la expectativa", correcta: false }
]
},
{
    texto: "¿Qué es la disonancia cognitiva según Leon Festinger?",
    imagen: "Imagenes/pregunta_13.png",
    opciones: [
    { texto: "Cuando el lenguaje no expresa lo que se piensa", correcta: false },
    { texto: "Cuando las emociones y pensamientos coinciden", correcta: false },
    { texto: "El conflicto entre creencias y comportamientos", correcta: true },
    { texto: "El olvido repentino de información", correcta: false }
]
},
{
    texto: "¿Qué estudia la psicología del desarrollo?",
    imagen: "Imagenes/pregunta_14.png",
    opciones: [
    { texto: "El comportamiento criminal", correcta: false },
    { texto: "Los procesos psicológicos a lo largo de la vida", correcta: true },
    { texto: "La interacción social en grupos", correcta: false },
    { texto: "La estructura cerebral", correcta: false }
]
},
{
    texto: "¿Quién desarrolló la teoría del desarrollo moral en etapas?",
    imagen: "Imagenes/pregunta_15.png",
    opciones: [
    { texto: "Jean Piaget", correcta: false },
    { texto: "Erik Erikson", correcta: false },
    { texto: "Lawrence Kohlberg", correcta: true },
    { texto: "Albert Bandura", correcta: false }
]
},
{
    texto: "¿Qué autor propuso la teoría del aprendizaje social?",
    imagen: "Imagenes/pregunta_16.png",
    opciones: [
    { texto: "Sigmund Freud", correcta: false },
    { texto: "Carl Rogers", correcta: false },
    { texto: "Albert Bandura", correcta: true },
    { texto: "Lev Vygotsky", correcta: false }
]
},
{
    texto: "¿Qué representa el 'ello' en la teoría psicoanalítica de Freud?",
    imagen: "Imagenes/pregunta_17.png",
    opciones: [
    { texto: "La conciencia moral", correcta: false },
    { texto: "La parte racional del individuo", correcta: false },
    { texto: "Los deseos e impulsos inconscientes", correcta: true },
    { texto: "La identidad social", correcta: false }
]
},
{
    texto: "¿Cuál es la principal herramienta de evaluación en la psicología clínica?",
    imagen: "Imagenes/pregunta_18.png",
    opciones: [
    { texto: "La resonancia magnética", correcta: false },
    { texto: "La entrevista psicológica", correcta: true },
    { texto: "El test de inteligencia", correcta: false },
    { texto: "La observación natural", correcta: false }
]
},
{
    texto: "¿Qué es el efecto placebo?",
    imagen: "Imagenes/pregunta_19.png",
    opciones: [
    { texto: "Una mejora real causada por una sustancia falsa", correcta: true },
    { texto: "Un medicamento que causa adicción", correcta: false },
    { texto: "Un efecto negativo por medicamentos reales", correcta: false },
    { texto: "Una técnica de manipulación emocional", correcta: false }
]
},
{
    texto: "¿Qué mide principalmente un test de inteligencia como el de Wechsler?",
    imagen: "Imagenes/pregunta_20.png",
    opciones: [
    { texto: "El estado emocional", correcta: false },
    { texto: "La inteligencia práctica y social", correcta: false },
    { texto: "Las capacidades cognitivas y de razonamiento", correcta: true },
    { texto: "El nivel de motivación", correcta: false }
]
}
];

let preguntaActual = 0;
let puntaje = 0;

const questionBox = document.getElementById('question-box');
const mensaje = document.getElementById('mensaje-respuesta');

function mostrarPregunta(index) {
    const pregunta = preguntas[index];
    mensaje.textContent = "";
    questionBox.innerHTML = `
    <h2>Pregunta ${index + 1 + ' de 20 '}</h2>
    <p class="question">${pregunta.texto}</p>
    <div class="image-container">
        <img src="${pregunta.imagen}" alt="Imagen pregunta" />
        </div>
        <div class="answers">
        ${pregunta.opciones.map((op, i) => `
            <button class="btn" data-correcta="${op.correcta}">${op.texto}</button>
        `).join('')}
    </div>
    `;

    // Agregar eventos
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
        const correcta = btn.getAttribute('data-correcta') === 'true';

        if (correcta) {
            mensaje.textContent = "¡Respuesta correcta!";
        mensaje.style.color = "#2ecc71";
        puntaje++;
        } else {
        mensaje.textContent = "Respuesta incorrecta.";
        mensaje.style.color = "#e74c3c";
        }

        // Desactivar botones
        document.querySelectorAll('.btn').forEach(b => {
        b.disabled = true;
        b.style.cursor = 'not-allowed';
        if (b.getAttribute('data-correcta') === 'true') {
            b.style.backgroundColor = '#2ecc71';
        } else {
            b.style.backgroundColor = '#e74c3c';
        }
        });

        // Ir a la siguiente pregunta
        setTimeout(() => {
        preguntaActual++;
        if (preguntaActual < preguntas.length) {
            mostrarPregunta(preguntaActual);
        } else {
            mostrarResultadoFinal();
        }
        }, 2000);
    });
    });
}

function mostrarResultadoFinal() {
    const mensajeFinal = obtenerMensajeFinal(puntaje);

    questionBox.innerHTML = `
    <h2>¡Test finalizado!</h2>
    <p>Obtuviste <strong>${puntaje}</strong> de <strong>${preguntas.length}</strong> respuestas correctas.</p>
    <p class="mensaje">${mensajeFinal}</p>
    <button id="reiniciar" class="btn reiniciar">Reiniciar Test</button>
    `;
    mensaje.textContent = "";

    document.getElementById('reiniciar').addEventListener('click', () => {
    preguntaActual = 0;
    puntaje = 0;
    mostrarPregunta(preguntaActual);
});
}


function obtenerMensajeFinal(puntaje) {
    if (puntaje === 20) {
    return "¡Excelente! Has respondido todo correctamente. ¡Eres un crack de la psicología! 🧠🎉";
    } else if (puntaje >= 15) {
    return "¡Muy bien hecho! Tienes un gran conocimiento. 💪";
} else if (puntaje >= 10) {
    return "Buen intento, vas por buen camino. Sigue aprendiendo. 📘";
} else if (puntaje >= 5) {
    return "Has acertado algunas, pero aún puedes mejorar. ¡No te rindas! 🚀";
} else {
    return "Parece que necesitas repasar un poco más. ¡Ánimo! 🌱";
}
}
  // Mostrar la primera pregunta
    mostrarPregunta(preguntaActual);
});

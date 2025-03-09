// Base de Conocimientos de Cursos
const cursos = {
    "python": {
        "nombre": "Python para Principiantes",
        "descripcion": "Aprende los fundamentos de Python y crea tus primeras aplicaciones.",
        "detalles": "Este curso te guiará desde cero en el mundo de Python. Aprenderás sobre variables, bucles, funciones y cómo construir programas sencillos pero útiles."
    },
    "ruby": {
        "nombre": "Desarrollo Web con Ruby on Rails",
        "descripcion": "Crea aplicaciones web robustas y escalables con Ruby on Rails.",
        "detalles": "Aprende a construir aplicaciones web dinámicas utilizando el framework Ruby on Rails. Ideal para quienes buscan crear plataformas web interactivas."
    },
    "r": {
        "nombre": "Análisis de Datos con R",
        "descripcion": "Domina el análisis estadístico y la visualización de datos con R.",
        "detalles": "Este curso te enseñará a usar R para analizar datos, crear visualizaciones impactantes y obtener información valiosa para la toma de decisiones."
    },
    "ia_generativa": {
        "nombre": "IA Generativa",
        "descripcion": "Crea imágenes, texto y más con IA. Domina prompts y modelos generativos.",
        "detalles": "Descubre el poder de la IA Generativa. Aprende a crear contenido único usando herramientas como DALL-E y GPT. Domina la creación de prompts y modelos generativos para generar imágenes y textos impresionantes. Ideal para creativos y profesionales que buscan innovar con IA."
    },
    "machine_learning": {
        "nombre": "Fundamentos de Machine Learning",
        "descripcion": "Explora los principios básicos del aprendizaje automático.",
        "detalles": "Introducción al mundo de los algoritmos, modelado de datos y análisis predictivo."
    },
    "deep_learning": {
        "nombre": "Deep Learning con TensorFlow",
        "descripcion": "Sumérgete en redes neuronales usando TensorFlow.",
        "detalles": "Construye y entrena modelos complejos para reconocimiento de imágenes, PNL y más."
    },
    "algebra_lineal": {
        "nombre": "Álgebra Lineal para ML",
        "descripcion": "Comprende el papel del álgebra lineal en el aprendizaje automático.",
        "detalles": "Domina vectores, matrices y transformaciones esenciales para algoritmos de ML."
    },
    "arduino": {
        "nombre": "Arduino para Principiantes",
        "descripcion": "Comienza a construir proyectos electrónicos.",
        "detalles": "Aprende a programar e interconectar sensores y actuadores."
    },
    "calculo": {
        "nombre": "Cálculo I",
        "descripcion": "Obtén una base sólida en cálculo diferencial.",
        "detalles": "Explora límites, derivadas y sus aplicaciones."
    },
    "looker": {
        "nombre": "Visualización de datos con Looker",
        "descripcion": "Crea dashboards.",
        "detalles": "Transforma datos en visualizaciones impactantes con Looker."
    },
    "power_bi": {
        "nombre": "Power BI",
        "descripcion": "Inteligencia empresarial.",
        "detalles": "Aprende a crear informes y dashboards interactivos con Power BI."
    },
    "excel": {
        "nombre": "Excel Avanzado",
        "descripcion": "Domina fórmulas y tablas dinámicas.",
        "detalles": "Aprende a utilizar funciones avanzadas, tablas dinámicas y macros en Excel."
    },
    "autocad": {
        "nombre": "AutoCAD",
        "descripcion": "Diseño 2D y 3D.",
        "detalles": "Aprende a crear dibujos técnicos y modelos 3D con AutoCAD."
    },
    "ms_project": {
        "nombre": "MS Project",
        "descripcion": "Gestión de proyectos.",
        "detalles": "Aprende a planificar y gestionar proyectos con diagramas de Gantt y recursos."
    }
};

// Funciones del Chatbot
const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');

function sendMessage() {
    const message = userInput.value;
    if (message.trim() === '') return;

    appendMessage('user-message', message);
    userInput.value = '';

    const response = getBotResponse(message);
    setTimeout(() => {
        appendMessage('bot-message', response);
    }, 500);
}

function appendMessage(className, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = className;

    if (className === 'bot-message') {
        // Agregar avatar para mensajes del chatbot
        const avatar = document.createElement('img');
        avatar.src = 'robot-face.jpg'; // Reemplaza con la ruta de tu imagen
        avatar.style.width = '30px';
        avatar.style.height = '30px';
        avatar.style.marginRight = '5px';
        messageDiv.appendChild(avatar);
    }

    messageDiv.innerHTML = message; // Usamos innerHTML para permitir enlaces
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getBotResponse(message) {
    message = message.toLowerCase();

    if (message.includes('cursos') || message.includes('lista')) {
        let cursoLista = 'Ofrecemos los siguientes cursos:<ul>';
        for (const cursoKey in cursos) {
            cursoLista += `<li>${cursos[cursoKey].nombre}</li>`;
        }
        cursoLista += '</ul>';
        return cursoLista;
    }

    for (const cursoKey in cursos) {
        if (message.includes(cursoKey)) {
            return `<strong>${cursos[cursoKey].nombre}</strong>: ${cursos[cursoKey].detalles}`;
        }
    }

    if (message.includes('precios')) {
        return 'Nuestros precios varían según el plan. Visita la sección de precios para más detalles.';
    } else if (message.includes('contacto') || message.includes('directo') || message.includes('hablar')) {
        return 'Si deseas hablar directamente conmigo, haz clic aquí: <a href="https://wa.me/56959414178" target="_blank">Chatear por WhatsApp</a>';
    } else {
        return 'Lo siento, no entiendo. ¿Puedes reformular tu pregunta?';
    }
}

// Crear la pelota del chatbot
const chatBall = document.createElement('div');
chatBall.className = 'chat-ball';
chatBall.textContent = '?'; // O un icono de chat
document.body.appendChild(chatBall);

// Mostrar/ocultar el chatbot al hacer clic en la pelota
chatBall.addEventListener('click', () => {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';
});
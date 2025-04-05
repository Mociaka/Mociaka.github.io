document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const langUkButton = document.getElementById("lang-uk");
    const langEnButton = document.getElementById("lang-en");

    // Тексти для кожної мови
    const texts = {
        "uk": {
            "name": "Денис",
            "position": "Бекенд-розробник",
            "description": "Досвід у Spring Boot, PostgreSQL, Docker, OAuth 2.0, Keycloak, Eureka, API Gateway",
            "skills-title": "Навички",
            "projects-title": "Проєкти",
            "video-title": "Відео про SSD",
            "contacts-title": "Контакти",
			"projects-SSD": "SSD – Платформа для пошуку команди (Spring Boot + React)",
			"projects-SSD-text": "SSD (Students Squad for Development) – це веб-платформа, яка дозволяє розробникам знаходити та об'єднуватися в команди для спільної роботи над проектами. Платформа побудована з використанням Spring Boot на бекенді для забезпечення швидкості і надійності серверної частини, а також React для динамічної і зручної взаємодії на фронтенді. SSD підтримує реєстрацію користувачів, можливість створювати або приєднуватися до проектів, а також взаємодіяти з іншими розробниками.",
			"projects-SSD-Microservices": "SSD Microservices (pet-проєкт)",
			"projects-SSD-Microservices-text1": "Розробка мікросервісної архітектури на основі сучасних технологій. Проєкт включає:",
			"projects-SSD-Microservices-keycloak": "Keycloak — для автентифікації та авторизації користувачів за допомогою OAuth 2.0 і JWT",
			"projects-SSD-Microservices-gateway": "API Gateway — централізована точка доступу з маршрутизацією запитів",
			"projects-SSD-Microservices-discovery": "Discovery Service — Eureka для динамічної реєстрації сервісів",
			"projects-SSD-Microservices-file": "File Service — власна реалізація зберігання зображень, аналог Amazon S3",
			"projects-SSD-Microservices-notification": "Notification Service — надсилання email-сповіщень користувачам",
			"projects-SSD-Microservices-kafka": "Kafka та Redis — для обробки подій і кешування",
			"projects-SSD-Microservices-text2": "Проєкт розгортається у Docker-оточенні. Основна мета — створення масштабованої та безпечної екосистеми сервісів для керування користувачами, контентом та сповіщеннями.",

        },
        "en": {
            "name": "Denys",
            "position": "Backend Developer",
            "description": "Experience in Spring Boot, PostgreSQL, Docker, OAuth 2.0, Keycloak, Eureka, API Gateway",
            "skills-title": "Skills",
            "projects-title": "Projects",
            "video-title": "SSD Video",
            "contacts-title": "Contacts",
			"projects-SSD": "SSD - Platform for team search (Spring Boot + React)",
			"projects-SSD-text": "SSD (Students Squad for Development) is a web-based platform that allows developers to find and form teams to work together on projects. The platform is built using Spring Boot on the backend to ensure speed and reliability of the server side, as well as React for dynamic and user-friendly interaction on the frontend. SSD supports user registration, the ability to create or join projects, and interact with other developers.",
			"projects-SSD-Microservices": "SSD Microservices (pet-project)",
			"projects-SSD-Microservices-text1": "Development of microservice architecture using modern technologies. The project includes:",
			"projects-SSD-Microservices-keycloak": "Keycloak — for user authentication and authorization using OAuth 2.0 and JWT",
			"projects-SSD-Microservices-gateway": "API Gateway — a centralized access point with request routing",
			"projects-SSD-Microservices-discovery": "Discovery Service — Eureka for dynamic service registration",
			"projects-SSD-Microservices-file": "File Service — custom image storage implementation similar to Amazon S3",
			"projects-SSD-Microservices-notification": "Notification Service — sending email notifications to users",
			"projects-SSD-Microservices-kafka": "Kafka and Redis — for event handling and caching",
			"projects-SSD-Microservices-text2": "The project is deployed in a Docker environment. The main goal is to build a scalable and secure ecosystem of services for managing users, content, and notifications.",

        }
    };

    // Зміна мови
    //function setLanguage(language) {
    //    document.querySelectorAll("[data-lang]").forEach(el => {
    //       const key = el.getAttribute("data-lang");
    //       el.textContent = texts[language][key];
    // });
    //}
	
	 function updateLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            el.textContent = texts[lang][key];
        });

        // Зберігаємо мову
        localStorage.setItem("lang", lang);

        // Підсвічування активної кнопки
        langUkButton.classList.toggle("active", lang === "uk");
        langEnButton.classList.toggle("active", lang === "en");
    }

    // Встановлення мови за замовчуванням (Українська)
    updateLanguage("uk");

    // Кнопка для зміни на UK
    langUkButton.addEventListener("click", () => {
        updateLanguage("uk");
    });

    // Кнопка для зміни на EN
    langEnButton.addEventListener("click", () => {
        updateLanguage("en");
    });

    // Зміна теми
    themeToggle.addEventListener("click", () => {
        const theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
		console.log(theme);
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);  // Збереження вибору теми
    });
});

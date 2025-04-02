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
            "contacts-title": "Контакти"
        },
        "en": {
            "name": "Denys",
            "position": "Backend Developer",
            "description": "Experience in Spring Boot, PostgreSQL, Docker, OAuth 2.0, Keycloak, Eureka, API Gateway",
            "skills-title": "Skills",
            "projects-title": "Projects",
            "video-title": "SSD Video",
            "contacts-title": "Contacts"
        }
    };

    // Зміна мови
    function setLanguage(language) {
        document.querySelectorAll("[data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            el.textContent = texts[language][key];
        });
    }

    // Встановлення мови за замовчуванням (Українська)
    setLanguage("uk");

    // Кнопка для зміни на UK
    langUkButton.addEventListener("click", () => {
        setLanguage("uk");
    });

    // Кнопка для зміни на EN
    langEnButton.addEventListener("click", () => {
        setLanguage("en");
    });

    // Зміна теми
    themeToggle.addEventListener("click", () => {
        const theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);  // Збереження вибору теми
    });
});

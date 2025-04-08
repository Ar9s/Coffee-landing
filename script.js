document.addEventListener("DOMContentLoaded", () => {
    const text = "Лучший кофе — с утра и по жизни ☕";
    const typedText = document.getElementById("typed-text");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 60);
        }
    }

    typeText();

    // Скролл вниз
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", (e) => {
        if (btn.closest("form")) return;
        e.preventDefault();
        document.querySelector("#order").scrollIntoView({
            behavior: "smooth"
        });
    });

    // Модалка + кнопка OK
    const form = document.getElementById("order-form");
    const modal = document.getElementById("modal");
    const okButton = document.getElementById("ok-button");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });

    okButton.addEventListener("click", () => {
        modal.style.display = "none";
        window.location.href = window.location.pathname; // перезагрузка
    });
});

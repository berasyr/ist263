document.querySelector('.menu-toggle').addEventListener('click'), function () {
    document.querySelector('.menu').classList.toggle('open');
}

const themeSwitcher = document.getElementById("theme-switcher");
themeSwitcher.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});
/* Function for toggle button*/

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", () => {
        if (navMenu.style.display === "block") {
            navMenu.style.display = "none";
            menuButton.textContent = "☰";
        } else {
            navMenu.style.display = "block";
            menuButton.textContent = "✖";
        }
    });
});

/* current year for copyright */
document.getElementById("currentyear").textContent = new Date().getFullYear();

/* last modified date for footer */
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
const menu=document.querySelector(".menu-hamburguesa"),cerrar=document.querySelector(".cerrar-menu"),mobileMenu=document.querySelector(".menu_mobile");function abrirMenu(){mobileMenu.classList.toggle("hidden")}function cerrarMenu(){mobileMenu.classList.add("hidden")}window.addEventListener("resize",cerrarMenu),menu.addEventListener("click",abrirMenu),cerrar.addEventListener("click",cerrarMenu);
//# sourceMappingURL=app.js.map

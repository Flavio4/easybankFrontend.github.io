let menu_click = document.querySelector(".menu_hamburguer");


menu_click.onclick = () => {
    let mobile_menu = document.querySelector(".menu_mobile");
    let hero_img = document.querySelector(".hero_img_mobile");
    menu_click.classList.toggle("open");
    mobile_menu.classList.toggle("open");
    hero_img.classList.toggle("open");
} 


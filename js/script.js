let burger = document.querySelector(".burger");
let burgerMenu =  document.querySelector(".menu");

console.log(burgerMenu)

burger.addEventListener('click', () => {
    burger.classList.toggle("active-burger");

    if(burger.classList.contains("active-burger")){
        burgerMenu.style.left = "0"
    }
    else{
        burgerMenu.style.left = "-42vw"
    }
})
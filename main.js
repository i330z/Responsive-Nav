const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', (e)=>{
    e.preventDefault();
    var element = document.querySelector(".mob-menu");
    element.classList.toggle("active");
})
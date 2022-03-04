const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const section = document.querySelector("section");
const border = document.querySelector(".border");
let header_height = header.offsetHeight;
let section_height = section.offsetHeight;


window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    big_title.style.opacity = - scroll / (header_height / 2) + 1;

    border.style.width = `${scroll / (sectionY.top + section_height) + 3}%`;
    
});

btnScrollTop.addEventListener("click", function(){
window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
    });
}); 
 
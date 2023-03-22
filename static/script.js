
const menuMobile=document.querySelector(".menu-mobile")
const body=document.querySelector("body")

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list" );
    body.classList.toggle("menu-nave-active"); 
});

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach( item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nave-active")){
            body.classList.remove("menu-nave-active")
            menuMobile.classList.replace("bi-x", "bi-list" );
        }
    })

})

/*animando os itens da tela*/

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {

   


 const windowTop = window.pageYOffset + window.innerHeight * 0.85;
   
   
   
 item.forEach((element) => {
      if (windowTop > element.offsetTop ){
            element.classList.add("animate");
        }
        else {
            element.classList.remove("animate");
        }
    });
};

animeScroll ();

window.addEventListener("scroll", ()=>{
    animeScroll();
})

//Navigation Bar
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav__list");

hamburger.addEventListener("click", ()=> {
    navbar.classList.toggle("open");
});


// const navLinks=document.querySelector('.nav__list');
// const links=document.querySelectorAll('.nav__list-item');

// function toggleMenu(){
//     if(navLinks.classList.contains('visible')){
//         navLinks.classList.remove('visible');
//     } else {
//         navLinks.classList.add('visible');
//     }
// }

// hamburger.addEventListener('click', toggleMenu, false);
// hamburger.addEventListener('click',()=>{
//     navLinks.classList.toggle("open");
//     links.forEach(link=>{
//         link.classList.toggle("fade");
//     });
// });

//Hamburger
const hamburgerBtn = document.querySelector('.hamburger');
let hamburgerOpen = false;

hamburgerBtn.addEventListener('click', () => {
	if (!hamburgerOpen) {
		hamburgerBtn.classList.add('open');
		hamburgerOpen = true;
	} else {
		hamburgerBtn.classList.remove('open');
		hamburgerOpen = false;
	}
});



// hero-img
function heroSlider(anything){
    document.querySelector('.mainImg').src = anything;
}

function changeBgColor(color){
    const header = document.querySelector('.bg-hero');
    header.style.background = color;
}


var popupViews = document.querySelectorAll('.popup-view');
    var popupBtns = document.querySelectorAll('.popup-btn');
    var closeBtns = document.querySelectorAll('.close-btn');

    //javascript for quick view button
    var popup = function(popupClick){
      popupViews[popupClick].classList.add('active');
    }

    popupBtns.forEach((popupBtn, i) => {
      popupBtn.addEventListener("click", () => {
        popup(i);
      });
    });

    //javascript for close button
    closeBtns.forEach((closeBtn) => {
      closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
          popupView.classList.remove('active');
        });
      });
    });
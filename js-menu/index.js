const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");


menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");

});


// <!-- javascript do video -->
// const btns = document.querySelectorAll("nav-btn");

// var sliderNav = function(manual){
//     btns[manual].classList.add("active");
// }

// btns.forEach((btn, i) => {
//      btn.addEventListener("click", () => {
//         sliderNav(i);
//      });
// });
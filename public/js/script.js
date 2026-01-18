// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


// ........................................................................................


// // Toggle category hamburger
// const catToggle = document.getElementById("category-toggle");
// const catMenu = document.querySelector(".hamburger-menu");

// catToggle.addEventListener("click", () => {
//     catMenu.style.display = catMenu.style.display === "flex" ? "none" : "flex";
// });

// // Toggle navbar hamburger
// const navToggle = document.querySelector(".navbar-toggle");
// const navMenu = document.querySelector(".navbar-hamburger");

// if(navToggle) {
//     navToggle.addEventListener("click", () => {
//         navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
//     });
// }



const navToggle = document.querySelector(".navbar-toggle");
const navMenu = document.querySelector(".navbar-hamburger");

if(navToggle){
    navToggle.addEventListener("click", () => {
        if(navMenu.style.display === "block"){
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "block";
        }
    });
}

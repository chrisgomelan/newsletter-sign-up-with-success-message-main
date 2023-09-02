let form = document.querySelector('#myForm');
let email = document.querySelector('.email');
let sub = document.querySelector(".subscribe");
let invalid = document.querySelector(".invalid");
let c1 = '.';
let c2 = '@';

form.addEventListener("submit", function(e){
   
   if(!email.value.includes(c1) || !email.value.includes(c2) || email.value == null){
    e.preventDefault()

    invalid.classList.add("active");
    email.classList.add("active");
   }

 
})

sub.addEventListener("click", function(){
    console.log("Hello");
})

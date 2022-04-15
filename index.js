"use strict";

const form = document.getElementById("checkoutForm");
// INPUTS
const email = document.getElementById("email");
const namee = document.getElementById("name");
const address = document.getElementById("address");
const city = document.getElementById("city");
const country = document.getElementById("country");
// INPUT VALUES
let nameVal = namee.value.trim();
let emailVal = email.value.trim();
let cityVal = city.value.trim();
let addressVal = address.value.trim();

// REG EXPRESIONS
const emailRegex = /^\S+@\S+\.\S+$/;

const nameRegex = /^[a-zA-Z\s]+$/; 

const addressRegex= /^[#.0-9a-zA-Z\s,-]+$/

let formValues = [];

form.addEventListener("submit", (e) => {
e.preventDefault();

validateForm()

window.scroll({
top:0
})

console.log("Sended!")
});

function setBorder(element){
element.style.border="1px solid green"
}

email.addEventListener('change',e=>{
  if(e.target.value.length > 12 && e.target.value !==''){
   setBorder(email)
  }

})

namee.addEventListener('change',e=>{
  if(e.target.value.length > 4 && e.target.value !==''){
    setBorder(namee)
  }
})


address.addEventListener('change',e=>{
  if(e.target.value.length > 6 && e.target.value !==''){
    setBorder(address)
  }
})

city.addEventListener('change',e=>{
  if(e.target.value.length > 2 && e.target.value !==''){
  setBorder(city)
  }
})

country.addEventListener('change',(e)=>{
  if(e.target.value !=='' || e.target.value !== undefined)
  setBorder(country)
})


// form.addEventListener('change',(e)=>{

// let n = namee.value= e.target.value
// let em= email.value = e.target.value
// let adrs = address.value= e.target.value
// let cty = city.value = e.target.value
//   if(n.trim().length > 2 ){
//     namee.style.border="1px solid green"
//   }

//   if(em.trim().length > 6 ){
// email.style.border="1px solid green"
//   }

// if(adrs.trim().length > 7){
//   address.style.border = "1px solid green"
// }
// if(cty.trim().length >3){
//   city.style.border ="1px solid green"
// }

// })

function validateForm() {
  if (emailVal === "") {
    setErrorFor(email,"Email have errors");
  } else {
    setSuccessFor(emailVal);
  }
  if (nameVal === "") {
    setErrorFor(namee,"Name cannot be empty");
  } else {
    setSuccessFor(namee);
  }
  if (cityVal === "") {
    setErrorFor(city,"City cannot be empty");
  } else {
    setSuccessFor(city);
  }
  if (addressVal === "" ) {
    setErrorFor(address,"Address have errors");
  } else {
    setSuccessFor(address);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  input.removeClass="success"
  small.className = "error-msj";
  small.innerHTML = message.toString();
}

function setSuccessFor(input) {
 input.removeClass="error-msj"
 input.className = "success";
}

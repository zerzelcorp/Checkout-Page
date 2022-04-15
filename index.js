"use strict";

const form = document.getElementById("checkoutForm");
// INPUTS
const email = document.getElementById("email");
const namee = document.getElementById("name");
const address = document.getElementById("address");
const city = document.getElementById("city");
const country = document.getElementById("country");

const nameRegex = /^[a-zA-Z\s]+$/; 

const addressRegex= /^[#.0-9a-zA-Z\s,-]+$/

let formValues = [];

const errorMsj = document.getElementsByClassName('error')

form.addEventListener("submit", (e) => {
e.preventDefault();
validateForm()
   window.scroll({
    top:0
  })
});

function setErrorFor(element, message) {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector(".error")
errorDisplay.innerHTML = message
element.classList.remove('success')
element.style.border="1px solid red"
formControl.classList.add('error')
}

function setSuccessFor(element) {
const formControl = element.parentElement;
const errorDisplay = formControl.querySelector(".error")
  errorDisplay.innerHTML = ''
  formControl.classList.remove('error')
  element.style.border=""
  element.classList.add('success')
}

function validateForm(){
// INPUT VALUES
let emailVal = email.value.trim();
let nameVal = namee.value.trim();
let cityVal = city.value.trim();
let addressVal = address.value.trim();
let countryVal = country.value.trim();

  if (emailVal==="") {
    setErrorFor(email,"email cannot be blank")
  }else{
    setSuccessFor(email);
  }

  if (nameVal === "") {
    setErrorFor(namee,"name cannot be blank")
      }else {
        setSuccessFor(namee);
      }

      if (cityVal === "") {
        setErrorFor(city,"city cannot be blank")
      }
      else {
        setSuccessFor(city);
      }
  
      if (addressVal === "" ) {
     setErrorFor(address,"address cannot be blank")
      } else {
        setSuccessFor(address);
      } 
}


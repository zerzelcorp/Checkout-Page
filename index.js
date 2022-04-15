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
if(!validateForm()){
  e.preventDefault();
}else{
  form.innerHTML="Form submitted successfully!"
  document.getElementsByClassName('flex-col-2')[0].innerHTML=""
  
  form.reset()
}

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

const isValidName = name => {
  const re = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
  return re.test(String(name).toLowerCase());
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const isValidAddress = adrs => {
  const re = /^[#.0-9a-zA-Z\s,-]+$/;
  return re.test(String(adrs).toLowerCase());
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
  }else if(!isValidEmail(emailVal)){
    setErrorFor(email,"email is not valid")
  }else{
    setSuccessFor(email);
  }

  if (nameVal.toLowerCase === "") {
    setErrorFor(namee,"name cannot be blank")
      }else if(!isValidName(nameVal)){
        setErrorFor(namee,"name is not valid")
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
    }else if(!isValidAddress(addressVal)){
      setErrorFor(address,"address is not valid")
    }
     else {
      setSuccessFor(address);
    } 

  if(emailVal==="" || nameVal==="" || addressVal==="" || cityVal===""){
    return false
  }else{
    return true
  }
}


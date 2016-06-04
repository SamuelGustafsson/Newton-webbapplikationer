"use strict"

var elContactForm = document.getElementById('contact-form');
var elContactName = document.getElementById('contact-name');
var elContactEmail = document.getElementById('contact-email');
var elContactPhone = document.getElementById('contact-phone');
var elContactMessage = document.getElementById('contact-form-message');
var elContactTextArea = document.getElementById('contact-textarea');

function emailValidation (email) {
      var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
      if (reg.test(email.value) == false) {
            return false;
      }
}

function checkForm(event) {
      event.preventDefault();
   if (elContactName.value.length < 2) {
      elContactMessage.textContent = 'Invalid username';
   }
   else if (emailValidation(elContactEmail) == false) {
         alert('Invalid email, example "person@company.com"');
   }
   else if (isNaN(elContactPhone.value) || elContactPhone.value == null) {
         elContactMessage.textContent = 'Your phonenumber cant have letters';
   }
   else if (elContactPhone.value.length < 10) {
         elContactMessage.textContent = 'Phonenumber is invalid. Write you number with 10 numbers.';
   }
   else if (elContactTextArea == null){
         elContactTextArea.textContent = '';
   }
   else {
      alert("Message has been sent! \nFrom: " + elContactName.value + "\nEmail:  " + elContactEmail.value + "\nPhone: " + elContactPhone.value + "\nMessage: " + elContactTextArea.value);
   }
}
elContactForm.addEventListener('submit', checkForm, false);
var elContactForm = document.getElementById('contact-form');
var elContactName = document.getElementById('contact-name');
var elContactEmail = document.getElementById('contact-email');
var elContactPhone = document.getElementById('contact-phone');
var elContactMessage = document.getElementById('contact-form-message');
console.log('Hejsan');
function checkForm(event) {
      event.preventDefault();
   console.log('i funktionen');
   if (elContactName.value.length < 2) {
      elContactMessage.textContent = 'Fyll i ditt användarnamn!';
   }
   else {
      elContactMessage.textContent = '';
   }

}

elContactForm.addEventListener('submit', checkForm, false);
// copy button
function copyBtn() {
   const email = document.getElementById('email').innerText;
   const tempInput = document.createElement('input');
   tempInput.value = email;
   document.body.appendChild(tempInput);

   tempInput.select();
   document.execCommand('copy');

   document.body.removeChild(tempInput);

   alert('Email Copied!');
}
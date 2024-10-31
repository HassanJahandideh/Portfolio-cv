// copy button
function copyBtn() {
   const email = document.getElementById('email').innerText;
   const tempInput = document.createElement('input');
   tempInput.value = email;
   document.body.appendChild(tempInput);

   tempInput.select();
   document.execCommand('copy');

   document.body.removeChild(tempInput);

   // changing copy text after clicking
   const copyButton = document.querySelector('.copy-btn')
   copyButton.addEventListener('click', () => {
      copyButton.innerHTML = 'Copied!'
   });
   setTimeout(() => {
      copyButton.innerText = 'Copy';
   }, 2000)
}


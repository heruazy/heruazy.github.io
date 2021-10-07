const scriptURL = 'https://script.google.com/macros/s/AKfycbzd2GAW8F5cDrgJKGtGPSEcFD2hA0sdV3X3tSuiNk2bfxY4GbJqN8NbCvPWcVYvr2DY/exec'
const form = document.forms['contact-form']

const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.alert');

form.addEventListener('submit', e => {
    e.preventDefault();

    //  if submit button on click.
    //  show loading button, hide send button.
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            //  show send button, hide loading button.
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // tampilkan alert
            myAlert.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message));
});
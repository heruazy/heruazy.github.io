const scriptURL = 'https://script.google.com/macros/s/AKfycbzd2GAW8F5cDrgJKGtGPSEcFD2hA0sdV3X3tSuiNk2bfxY4GbJqN8NbCvPWcVYvr2DY/exec'
const form = document.forms['contact-form']

const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.alert');

form.addEventListener('submit', e => {
    e.preventDefault();

    //  ketika tombol submit diklik
    //  tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            //  tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // tampilkan alert
            myAlert.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message));
});
const btnLogin = document.querySelector('.btn-login')
const input = document.querySelector('.input');

btnLogin.addEventListener('click', function() {
    if(input.value.length == 0) {
        alert('Nenhum dado informado. Por favor, preencha os campos');
    }
})
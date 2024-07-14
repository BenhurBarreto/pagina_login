document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    alert('Formulário enviado com sucesso!');
});

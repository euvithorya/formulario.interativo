const form = document.getElementById('userForm');
const messageDiv = document.getElementById('message');


form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;


    if (name && age) {

        messageDiv.innerHTML = `Olá, ${name}! Você tem ${age} anos.`;
        messageDiv.style.color = 'green';
    } else {

        messageDiv.innerHTML = 'Por favor, preencha todos os campos.';
        messageDiv.style.color = 'red';
    }
    
    form.reset();
});

// :V
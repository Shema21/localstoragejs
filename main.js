//Get All Value
let sendBtn = document.getElementById('send');
let form = document.getElementById('form');

//Form Refresh State
form.addEventListener('submit', (e) => {
    e.preventDefault();
});



//Now Start SendBtn
sendBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    //Set Value And LocalStorage
    
    name = name.value;
    localStorage.setItem('name', name);

    email = email.value;
    localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('message', message);

});


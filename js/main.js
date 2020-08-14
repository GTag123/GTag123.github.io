document.addEventListener('DOMContentLoaded', () => {
    console.image('https://i.imgur.com/RGcoujP.png', size=0.1);
    console.log('jquery хрень кста как оно тут появилось');
    let age = document.querySelector(".age"),
        birthday = new Date(2005,2,11);
    age.textContent = new Date(Date.now() - birthday).getFullYear() - 1970;
});
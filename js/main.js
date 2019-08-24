document.addEventListener('DOMContentLoaded', () => {
    console.image('https://i.imgur.com/Y8fM5v3.png', size=0.2);
    console.log('Не бейте за говно вёрстку и JQ плииз');
    let age = document.querySelector(".age"),
        birthday = new Date(2005,2,11);
    age.textContent = new Date(Date.now() - birthday).getFullYear() - 1970
});
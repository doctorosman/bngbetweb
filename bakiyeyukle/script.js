const user = document.querySelector('.user');
const userbox = document.querySelector('.user-box');
const userarrow = document.querySelector('.user-btn');

user.onclick = () => {
    userbox.classList.toggle('active');
}

const tutar = document.querySelector('input#tutar');
tutar.oninput = () => {
    if (tutar.value.length > 3) {
        tutar.value = tutar.value.slice(0,3); 
    }
}
const user = document.querySelector('.user');
const userbox = document.querySelector('.user-box');
const userarrow = document.querySelector('.user-btn');

user.onclick = () => {
    userbox.classList.toggle('active');
}
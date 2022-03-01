const user = document.querySelector('.user');
const userbox = document.querySelector('.user-box');
const userarrow = document.querySelector('.user-btn');

user.onclick = () => {
    userbox.classList.toggle('active');
}

const popup_profil = document.querySelector('.popup-profil');
const profil_btn = document.querySelector('.duzenle');
const profil_close = document.querySelector('.popup-profil .exit');

profil_btn.onclick = () => {
    popup_profil.classList.add('active');
}

profil_close.onclick = () => {
    popup_profil.classList.remove('active');
}

const popup_sifre = document.querySelector('.popup-sifre');
const sifre_btn = document.querySelector('.sifre');
const sifre_close = document.querySelector('.popup-sifre .exit');

sifre_btn.onclick = () => {
    popup_sifre.classList.add('active');
}

sifre_close.onclick = () => {
    popup_sifre.classList.remove('active');
}
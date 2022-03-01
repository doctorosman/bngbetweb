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

const odeme_papara = document.querySelector('.odeme-papara');
const papara_btn = document.querySelector('button#papara');
const odeme_papara_exit = document.querySelector('.odeme-papara .exit');
const odeme_papara_iptal = document.querySelector('.odeme-papara button#iptal-et');

papara_btn.onclick = () => {
    if (parseInt(tutar.value) > 0) {
        odeme_papara.classList.add('active');
        
        document.querySelector('.gtutar span').innerHTML = tutar.value + ',00 ₺';
    }
}

const papara_exit = () => {
    odeme_papara.classList.remove('active');
}

odeme_papara_exit.onclick = papara_exit;
odeme_papara_iptal.onclick = papara_exit;

const odeme_elden = document.querySelector('.odeme-elden');
const elden_btn = document.querySelector('button#elden');
const elden_exit = document.querySelector('.odeme-elden .exit');
const elden_iptal = document.querySelector('.odeme-elden button#iptal-et');

const eldenx = () => {
    odeme_elden.classList.remove('active');
}

elden_exit.onclick = eldenx;
elden_iptal.onclick = eldenx;

elden_btn.onclick = () => {
    if (parseInt(tutar.value) > 0) {
        odeme_elden.classList.add('active');

        document.querySelector('.ytutar span').innerHTML = tutar.value + ',00 ₺';
    }
}
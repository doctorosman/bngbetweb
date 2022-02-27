const user = document.querySelector('.user');
const userbox = document.querySelector('.user-box');
const userarrow = document.querySelector('.user-btn');

user.onclick = () => {
    userbox.classList.toggle('active');
}

const more_mevcutk = document.querySelector('.mevcut-kuponlar .more');
const morebtn_mevcutk = document.querySelector('.mevcut-kuponlar .see-more span');
morebtn_mevcutk.onclick = () => {
    more_mevcutk.classList.toggle('active');

    if (more_mevcutk.classList.contains('active')) {
        morebtn_mevcutk.innerHTML = '<i class="fa fa-angle-up"></i>';
    }else {
        morebtn_mevcutk.innerHTML = 'Devamını Gör <i class="fas fa-angle-down"></i>'
    }
}

const more_gecmisk = document.querySelector('.gecmis-kuponlar .more');
const morebtn_gecmisk = document.querySelector('.gecmis-kuponlar .see-more span');
morebtn_gecmisk.onclick = () => {
    more_gecmisk.classList.toggle('active');

    if (more_gecmisk.classList.contains('active')) {
        morebtn_gecmisk.innerHTML = '<i class="fa fa-angle-up"></i>';
    }else {
        morebtn_gecmisk.innerHTML = 'Devamını Gör <i class="fas fa-angle-down"></i>'
    }
}
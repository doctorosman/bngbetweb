const user = document.querySelector('.user');
const userbox = document.querySelector('.user-box');
const userarrow = document.querySelector('.user-btn');

user.onclick = () => {
    userbox.classList.toggle('active');
    
    if (userbox.classList.contains('active')){
        userarrow.classList.remove('fa-angle-down');
        userarrow.classList.add('fa-angle-up')
    }else {
        userarrow.classList.remove('fa-angle-up');
        userarrow.classList.add('fa-angle-down');
    }
}
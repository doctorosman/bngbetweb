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

// const morebtn = document.querySelector('.see-more');
document.querySelectorAll('.maclar-table').forEach((e) => {
    console.log(e.id);
    let more = document.querySelector('#' + e.id + ' .more');
    let morearrow = document.querySelector('#' + e.id + ' .see-more i');

    morearrow.onclick = () => {
        more.classList.toggle('active');
    
        if (more.classList.contains('active')){
            morearrow.classList.remove('fa-angle-down');
            morearrow.classList.add('fa-angle-up')
        }else {
            morearrow.classList.remove('fa-angle-up');
            morearrow.classList.add('fa-angle-down');
        }
    }
});
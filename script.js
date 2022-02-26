const user = document.querySelector('.user');
const userbox = document.querySelector('.user-box');
const userarrow = document.querySelector('.user-btn');

const birKuponAktifMi = () => {
    let kuponAktifMi = false;

    document.querySelectorAll('button#iptal').forEach((e) => {
        if (e.style.display != 'none') {
            kuponAktifMi = true;
        }
    });

    return kuponAktifMi;
}

const baskaBirKuponAktifMi = (id) => {
    let varMi = false;
    const buttons = document.querySelectorAll('.maclar-table');
    buttons.forEach((a) => {
        if (a.id != id) {
            if (document.querySelector('#' + a.id + ' button#iptal').style.display != 'none') {
                varMi = true;
            }
        }
    });
    return varMi;
}

user.onclick = () => {
    userbox.classList.toggle('active');
}

window.onload = () => {
    document.querySelectorAll('button#iptal').forEach((e) => {
        e.style.display = 'none';
    });
}

document.querySelectorAll('.maclar-table').forEach((e) => {
    let more = document.querySelector('#' + e.id + ' .more');
    let morearrow = document.querySelector('#' + e.id + ' .see-more i');
    let kuponyap = document.querySelector('#' + e.id + ' h3 button');
    let iptal = document.querySelector('#' + e.id + ' button#iptal');

    const open = () => {
        if (!birKuponAktifMi()) {
            more.classList.toggle('active');
        
            if (more.classList.contains('active')){
                morearrow.classList.remove('fa-angle-down');
                morearrow.classList.add('fa-angle-up')
            }else {
                morearrow.classList.remove('fa-angle-up');
                morearrow.classList.add('fa-angle-down');
            }
        }
    };

    morearrow.onclick = open;

    kuponyap.onclick = () => {
        if (!birKuponAktifMi()) {
            more.classList.add('active');
            
            if (kuponyap.style.display != 'none') {
                kuponyap.style.display = 'none';
                iptal.style.display = 'flex';
            }else {
                kuponyap.style.display = 'flex';
                iptal.style.display = 'none';
            }
        
            if (more.classList.contains('active')){
                morearrow.classList.remove('fa-angle-down');
                morearrow.classList.add('fa-angle-up')
            }else {
                morearrow.classList.remove('fa-angle-up');
                morearrow.classList.add('fa-angle-down');
            }
        }else {
            alert('Aktif kuponunuzu tamamlamadan başka bir kupon yapamazsınız!');
        }
    };

    iptal.onclick = () => {
        more.classList.remove('active');
        
        if (iptal.style.display != 'none') {
            iptal.style.display = 'none';
            kuponyap.style.display = 'flex';
        }else {
            iptal.style.display = 'flex';
            kuponyap.style.display = 'none';
        }
    
        if (more.classList.contains('active')){
            morearrow.classList.remove('fa-angle-down');
            morearrow.classList.add('fa-angle-up')
        }else {
            morearrow.classList.remove('fa-angle-up');
            morearrow.classList.add('fa-angle-down');
        }

        document.querySelectorAll('#' + e.id + ' .mac-row button').forEach((es) => {
            es.classList.remove('selected');
        })

        document.querySelector('#' + e.id + ' .tamamla button').disabled = true;
    }

    document.querySelectorAll('#' + e.id + ' .mac-row button').forEach((es) => {
        es.onclick = () => {
            if (!baskaBirKuponAktifMi(e.id)) {
                const buttons = es.parentElement.querySelectorAll('button.selected');
                buttons.forEach((e) => {
                    e.classList.remove('selected');
                });
                es.classList.add('selected');
                more.classList.add('active');
            
                if (more.classList.contains('active')){
                    morearrow.classList.remove('fa-angle-down');
                    morearrow.classList.add('fa-angle-up')
                }else {
                    morearrow.classList.remove('fa-angle-up');
                    morearrow.classList.add('fa-angle-down');
                }
                    
                    if (kuponyap.style.display != 'none') {
                        kuponyap.style.display = 'none';
                        iptal.style.display = 'flex';
                    }
                
                    if (more.classList.contains('active')){
                        morearrow.classList.remove('fa-angle-down');
                        morearrow.classList.add('fa-angle-up')
                    }else {
                        morearrow.classList.remove('fa-angle-up');
                        morearrow.classList.add('fa-angle-down');
                    }

                const macSayisi = document.querySelectorAll('#' + e.id + ' .mac-row').length;
                const oynananMacSayisi = document.querySelectorAll('#' + e.id + ' .mac-row button.selected').length;

                if (macSayisi == oynananMacSayisi) {
                    document.querySelector('#' + e.id + ' .tamamla button').disabled = false;
                }
            }else {
                alert('Aktif kuponunuzu tamamlamadan başka bir kupon yapamazsınız!');
            }
        }
    });
});
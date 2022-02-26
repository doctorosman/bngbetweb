// ELEMENTLER
const user = document.querySelector('.user');
const userbox = document.querySelector('.user-box');
const userarrow = document.querySelector('.user-btn');

// FONKSİYONLAR
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

const toggleMore = (league_id) => {
    const more = document.querySelector('#' + league_id + ' .more');
    const morearrow = document.querySelector('#' + league_id + ' .see-more i');

    more.classList.toggle('active');

    if (more.classList.contains('active')){
        morearrow.classList.remove('fa-angle-down');
        morearrow.classList.add('fa-angle-up')
    }else {
        morearrow.classList.remove('fa-angle-up');
        morearrow.classList.add('fa-angle-down');
    }
}

const showMore = (league_id) => {
    const more = document.querySelector('#' + league_id + ' .more');
    const morearrow = document.querySelector('#' + league_id + ' .see-more i');

    more.classList.add('active');

    if (more.classList.contains('active')){
        morearrow.classList.remove('fa-angle-down');
        morearrow.classList.add('fa-angle-up')
    }else {
        morearrow.classList.remove('fa-angle-up');
        morearrow.classList.add('fa-angle-down');
    }
}

const hideMore = (league_id) => {
    const more = document.querySelector('#' + league_id + ' .more');
    const morearrow = document.querySelector('#' + league_id + ' .see-more i');

    more.classList.remove('active');

    if (more.classList.contains('active')){
        morearrow.classList.remove('fa-angle-down');
        morearrow.classList.add('fa-angle-up')
    }else {
        morearrow.classList.remove('fa-angle-up');
        morearrow.classList.add('fa-angle-down');
    }
}

const clearSelections = (league_id) => {
    document.querySelectorAll('#' + league_id + ' .mac-row button').forEach((e) => {
        e.classList.remove('selected');
    })
}

const showTamamla = (league_id, disabled = false) => {
    document.querySelector('#' + league_id + ' .tamamla button').style.display = 'flex';
    document.querySelector('#' + league_id + ' .tamamla button').disabled = disabled;
}

const hideTamamla = (league_id) => {
    document.querySelector('#' + league_id + ' .tamamla button').style.display = 'none';
}

// EVENTLAR
user.onclick = () => {
    userbox.classList.toggle('active');
}

window.onload = () => {
    document.querySelectorAll('button#iptal').forEach((e) => {
        e.style.display = 'none';
    });
}

document.querySelectorAll('.maclar-table').forEach((e) => {
    let kuponyap = document.querySelector('#' + e.id + ' h3 button');
    let iptal = document.querySelector('#' + e.id + ' button#iptal');

    document.querySelector('#' + e.id + ' .see-more i').onclick = () => {
        if (!birKuponAktifMi()) {
            toggleMore(e.id);

            if (document.querySelectorAll('#' + e.id + ' .mac-row button.selected').length == 0) {
                hideTamamla(e.id);
            }else {
                document.querySelector('#' + e.id + ' .tamamla button').style.display = 'flex';
            }
        }
    };

    kuponyap.onclick = () => {
        if (!birKuponAktifMi()) {
            document.querySelector('#' + e.id + ' .tamamla button').style.display = 'flex';
            
            if (kuponyap.style.display != 'none') {
                kuponyap.style.display = 'none';
                iptal.style.display = 'flex';
            }else {
                kuponyap.style.display = 'flex';
                iptal.style.display = 'none';
            }
            
            showMore(e.id);
        }else {
            alert('Aktif kuponunuzu tamamlamadan başka bir kupon yapamazsınız!');
        }
    };

    iptal.onclick = () => {
        hideMore(e.id);
        
        if (iptal.style.display != 'none') {
            iptal.style.display = 'none';
            kuponyap.style.display = 'flex';
        }else {
            iptal.style.display = 'flex';
            kuponyap.style.display = 'none';
        }

        clearSelections(e.id);
        hideTamamla(e.id);
    }

    document.querySelectorAll('#' + e.id + ' .mac-row button').forEach((es) => {
        es.onclick = () => {
            if (!baskaBirKuponAktifMi(e.id)) {
                const buttons = es.parentElement.querySelectorAll('button.selected');
                buttons.forEach((e) => {
                    e.classList.remove('selected');
                });
                es.classList.add('selected');
                showMore(e.id);
                showTamamla(e.id, true);
                    
                if (kuponyap.style.display != 'none') {
                    kuponyap.style.display = 'none';
                    iptal.style.display = 'flex';
                }

                const macSayisi = document.querySelectorAll('#' + e.id + ' .mac-row').length;
                const oynananMacSayisi = document.querySelectorAll('#' + e.id + ' .mac-row button.selected').length;

                if (macSayisi == oynananMacSayisi) {
                    showTamamla(e.id);
                }
            }else {
                alert('Aktif kuponunuzu tamamlamadan başka bir kupon yapamazsınız!');
            }
        }
    });
});
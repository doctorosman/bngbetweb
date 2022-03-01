// ELEMENTLER
const user = document.querySelector('.user');
const userbox = document.querySelector('.user-box');
const userarrow = document.querySelector('.user-btn');

// CLASSLAR
let Mac = class {
    constructor(title, tahmin, puan) {
        this.title = title;
        this.tahmin = tahmin;
        this.puan = puan;
    }
}

let Kupon = class {
    constructor(lig, lig_logo, hafta, maclar) {
        this.lig = lig;
        this.lig_logo = lig_logo;
        this.hafta = hafta;
        this.maclar = maclar;
    }
}

// FONKSİYONLAR
const ligAdi = (lig_id) => {
    switch (lig_id) {
        case 'stsl':
            return 'Süper Lig';
        case 'pl':
            return 'Premier Lig';
        case 'ucl':
            return 'Şampiyonlar Ligi';
        case 'uel':
            return 'Avrupa Ligi';
        case 'bl':
            return 'Bundesliga';
        case 'l1':
            return 'Ligue 1';
        case 'laliga':
            return 'La Liga';
    }
}

const ligLogo = (lig_id) => {
    switch (lig_id) {
        case 'stsl':
            return 'img/superlig.png';

        case 'pl':
            return 'img/premier-lig.png';

        case 'ucl':
            return 'img/ucl.png';

        case 'uel':
            return 'img/uel.png';

        case 'bl':
            return 'img/bundesliga.png';

        case 'l1':
            return 'img/ligue-1.png';

        case 'laliga':
            return 'img/laliga.png';
    }
}

const kuponPopup = (kupon, mobile = false) => {
    const table = '.kuponu-tamamla-popup table.kupon-table' + (mobile ? '.mobile' : '');
    const lig = document.querySelector(table + ' td#oynanan-lig');
    const hafta = document.querySelector(table + ' td#hafta');
    const maclar = document.querySelector(table + ' table.maclar');

    lig.innerHTML = '<img src="' + kupon.lig_logo + '">' + kupon.lig;
    hafta.innerHTML = kupon.hafta;

    let maclar_table = '';
    kupon.maclar.forEach((mac) => {
        maclar_table += '<tr><td>' + mac.title + '</td><td>' + mac.tahmin + '</td><td>' + mac.puan + '</td></tr>';
    });

    maclar.innerHTML = maclar_table;
}

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
    const tamamla = document.querySelector('#' + league_id + ' .tamamla button');
    tamamla.style.display = 'flex';
    tamamla.disabled = disabled;

    if (!disabled) {
        tamamla.onclick = () => {
            const mtable = tamamla.parentElement.parentElement.parentElement;
            const hafta = mtable.querySelector('#lig-hafta').innerHTML;
            let maclar = [];
            mtable.querySelectorAll('.mac-row').forEach((e) => {
                if (e != null) {
                    selected = e.querySelector('button.selected');
                    const takim1 = e.querySelector('.mac-takimlar .mac-takim:nth-child(1) .takim-adi');
                    const takim2 = e.querySelector('.mac-takimlar .mac-takim:last-child .takim-adi');
                    
                    const title = takim1.innerHTML + ' - ' + takim2.innerHTML;
                    let tahmin = 'MS ' + selected.innerHTML;
                    const puan = selected.querySelector('i').innerHTML;
                    tahmin = tahmin.substring(0, 4);
                    maclar.push(new Mac(
                        title,
                        tahmin,
                        puan
                    ));
                }
            });
            const kupon = new Kupon(
                ligAdi(league_id),
                ligLogo(league_id),
                hafta,
                maclar
            );

            kuponPopup(kupon);
            kuponPopup(kupon, true);
            document.querySelector('.kuponu-tamamla-popup-container').classList.add('active');
        }
    }
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

document.querySelector('.kuponu-tamamla-popup .exit').onclick = () => {
    document.querySelector('.kuponu-tamamla-popup-container').classList.remove('active');
}

const papara_exit = document.querySelector('.odeme-papara .exit');
const elden_exit = document.querySelector('.odeme-elden .exit');
const cuzdan_exit = document.querySelector('.odeme-cuzdan .exit');

const papara_popup = document.querySelector('.odeme-papara');
const elden_popup = document.querySelector('.odeme-elden');
const cuzdan_popup = document.querySelector('.odeme-cuzdan');

const papara_iptal_et = document.querySelector('.odeme-papara #iptal-et');
const elden_iptal_et = document.querySelector('.odeme-elden #iptal-et');
const cuzdan_iptal_et = document.querySelector('.odeme-cuzdan #iptal-et');

const exit_papara = () => {
    papara_popup.classList.remove('active');
}

const exit_elden = () => {
    elden_popup.classList.remove('active');
}

const exit_cuzdan = () => {
    cuzdan_popup.classList.remove('active');
}

papara_iptal_et.onclick = () => exit_papara();
elden_iptal_et.onclick = () => exit_elden();
cuzdan_iptal_et.onclick = () => exit_cuzdan();

papara_exit.onclick = () => exit_papara();
elden_exit.onclick = () => exit_elden();
cuzdan_exit.onclick = () => exit_cuzdan();

const papara_ile_ode = document.querySelector('.kuponu-tamamla-popup-container .papara');
const elden_ode = document.querySelector('.kuponu-tamamla-popup-container .elden');
const cuzdan_ile_ode = document.querySelector('.kuponu-tamamla-popup-container .cuzdan');

papara_ile_ode.onclick = () => {
    document.querySelector('.odeme-papara').classList.add('active');
}

elden_ode.onclick = () => {
    document.querySelector('.odeme-elden').classList.add('active');
}

cuzdan_ile_ode.onclick = () => {
    document.querySelector('.odeme-cuzdan').classList.add('active');
}
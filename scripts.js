
var db_pl = './assets/db_pl.txt';
var db_eng = './assets/db_eng.txt';

const $langbuttons = document.querySelectorAll('.lang'), langbuttons_len = $langbuttons.length;
const $globe = document.querySelector("#globe");

var nav_lang = false; // false if navmenu is hidden, true if displayed

function show_lang() {
    if (nav_lang == true) { // if open, hide navmenu
        for (i=0; i<langbuttons_len; i++) {
            $langbuttons[i].classList.remove('opacity-1');
            $langbuttons[i].classList.add('hide');
            $globe.classList.remove('globe-tilt');
        }
        nav_lang = false;
    } else { // if hidden, open navmenu
        for (i=0; i<langbuttons_len; i++) {
            $langbuttons[i].classList.remove('hide');
            $langbuttons[i].classList.add('opacity-1');
            $globe.classList.add('globe-tilt');
        }
        nav_lang = true;
    }
}

// make it actually change language
const $nhie_text = document.querySelector('#nhie-text');
var lang = 'eng'
function change_lang(opt) {
    if (opt == 'pl') {
        lang = 'pl';
        $nhie_text.innerHTML = 'Nigdy, przenigdy nie...';
        show_lang();
    } else if (opt == 'eng') {
        lang = 'eng';
        $nhie_text.innerHTML = 'Never have I ever...';
        show_lang();
    }
}



const $tap_indicator = document.querySelector("#tap-indicator")
function roll() {
    $tap_indicator.classList.add('opacity-0')
    if (lang == 'pl') {

    } else if (lang == 'eng') {
        
    }
}
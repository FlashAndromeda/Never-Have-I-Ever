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

function readFileAndCreateArray(filePath) {
    return fetch(filePath)
      .then(response => response.text())
      .then(fileContent => fileContent.split('\n'));
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const $rolled = document.querySelector('#rolled');
function add_line(content) {
    var h3 = document.createElement('h3');
    h3.classList.add('rolled-text');
    h3.innerHTML = content;
    $rolled.insertBefore(h3, $rolled.firstChild);

    if ($rolled.children.length > 15) {
        $rolled.lastElementChild.remove()
    }
}

var $db_pl = {}
var $db_eng = {}

readFileAndCreateArray('databases/db_pl.txt').then(lines => {
    $db_pl = lines
});

readFileAndCreateArray('databases/db_eng.txt').then(lines => {
    $db_eng = lines
});

const $tap_indicator = document.querySelector("#tap-indicator")
function roll() {
    $tap_indicator.classList.add('opacity-0');
    if (lang == 'pl') {
        add_line(getRandomElement($db_pl));
    } else if (lang == 'eng') {
        add_line(getRandomElement($db_eng));
    }
}



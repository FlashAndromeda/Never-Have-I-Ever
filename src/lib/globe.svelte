<script>
    import { locale } from 'svelte-i18n';
    import { lang } from '../stores';

    var nav_lang = false; // false if navmenu is hidden, true if displayed
    function show_lang () {
        if (nav_lang == true) { // if open, hide navmenu
            document.querySelector('#lang_selection').classList.remove('show')
            document.querySelector('#lang_selection').classList.add('hide')
            nav_lang = false;
        } else { // if hidden, open navmenu
            document.querySelector('#lang_selection').classList.remove('hide')
            document.querySelector('#lang_selection').classList.add('show')
            nav_lang = true;
        }
    };

    function change_locale_pl () {
        locale.set('pl')
        lang.update(value => 'pl')
        show_lang()
    }

    function change_locale_en () {
        locale.set('en')
        lang.update(value => 'en')
        show_lang()
    }
</script>

<div id=box>
    <button on:click={show_lang}><img id=globe src='src\assets\globe.svg' alt='A globe.'/></button>
    <div id="lang_selection" class="hide">
        <button on:click={change_locale_pl}><img class=flag src='src\assets\pl.svg' alt='Flag of Poland.'></button>
        <button on:click={change_locale_en}><img class=flag src='src\assets\eng.svg' alt='Flag of the United Kingdom.'></button>
    </div>
</div>

<style>
    #box {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        position: absolute;
        top: 2vh;
        right: 1vh;
        z-index: 10;
    }

    button {
        background: none;
        border: none;
        border-radius: 50%;
    }
    #globe {
        height: 10vh;
        max-width: 200px;
    }

    #lang_selection {
        overflow: hidden;

        display: flex;
        flex-direction: row;
        justify-content: left;

        transition-property: opacity;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
    }

    .flag {
        height: 6vh;
        max-width: 180px;
        margin-right: 1vh;
    }

    .hide {
        opacity: 0;
        width: 0%;
    }

    .show {
        opacity: 1;
        width: 100%;
    }
</style>
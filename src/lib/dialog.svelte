<script>
    import { _ } from 'svelte-i18n';
    import { element } from 'svelte/internal';
</script>

<div id='cover'>
    <div id='box'>
        <p>{$_('dialog.title')}</p>
        <div id='select'>
            <button type='button' on:click={function () {document.querySelector('#cover').remove();}}>{$_('dialog.yes')}</button>
            <button type='button' on:click={function () {window.open('https://google.com', name="_self")}}>{$_('dialog.no')}</button>
        </div>
    </div>
</div>

<style>
    #cover {
        height: 100%;
        width: 100%;
        background-color: #1B1B1B;

        position: absolute;
        margin: 0;
        z-index: 10;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #select {
        display: flex;
        justify-content: space-evenly;
    }

    p {
        font-size: 3vh;
        font-family: 'Nunito Sans', 'Tahoma';
        color: var(--maincolor, #eceae7);

        margin-bottom: 1vh;
    }

    button {
        width: 45%;
        height: 3vh;

        font-family: 'Nunito Sans', 'Tahoma';
        font-size: 2vh;
        color: var(--maincolor, #eceae7);

        background-color: var(--buttoncolor, #801f1f);

        border: none;
        border-radius: 15px;
    }

    button:hover {
        background-color: var(--buttoncolordark, #801f1f);
    }
</style>
<script>
    import { _ } from 'svelte-i18n';
    import { element } from 'svelte/internal';
</script>

<div id='cover'>
    <div id='box'>
        <p>{$_('dialog.title')}</p>
        <div id='select'>
            <button type='button' on:click={function () {document.querySelector('#cover').remove();}}>{$_('dialog.yes')}</button>
            <button type='button' on:click={function () {window.close()}}>{$_('dialog.no')}</button>
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
    }
</style>
<script>
    import {_} from 'svelte-i18n';
</script>

<p>{$_('footer.title')} <a target="_blank" href="https://github.com/FlashAndromeda">@FlashAndromeda</a></p>

<style>
    p {
        margin: 0;
        cursor: default;
        color: var(--color, #7a7a7a);
        font-family: 'Comfortaa', 'Arial';
        font-size: 2.5vh;
    }

    a {
        text-decoration: none;
        color: var(--color, #7a7a7a);
    }
</style>
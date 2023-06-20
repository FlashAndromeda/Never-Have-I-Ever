<script>
  import Dialog from "./lib/dialog.svelte";
  import Footer from "./lib/footer.svelte";
    import Globe from "./lib/globe.svelte";
  import { lang, lang_dict } from "./stores";

  import { dictionary, locale } from 'svelte-i18n';

  dictionary.set(lang_dict);

  let language;
  lang.subscribe(value => {
		language = value;
	});

  locale.set(language);

</script>

<main>
  <Dialog --maincolor="var(--main)" --buttoncolor="var(--highlight)" --buttoncolordark="var(--highlight2)"/>
  

  <Globe />

  
  <footer>
    <Footer --color="var(--tooltip)"/>
  </footer>
</main>

<style>
</style>

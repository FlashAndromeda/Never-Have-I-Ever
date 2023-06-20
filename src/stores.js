import { writable, readable } from 'svelte/store';

export const lang = writable('en');

export const lang_dict = {
    en: {
      dialog: {
        title: 'Are you 18 years old or above?',
        yes: 'Yes',
        no: 'No',
      },

    },
    pl: {
      dialog: {
        title: 'Czy jesteś osobą pełnoletnią?',
        yes: 'Tak',
        no: 'Nie',
      },

    },
  };
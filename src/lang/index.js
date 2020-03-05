import { init, register, getLocaleFromNavigator } from 'svelte-i18n'

register('en', () => import(/* webpackChunkName: "language-file-en" */ './en.json'))

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator()
})

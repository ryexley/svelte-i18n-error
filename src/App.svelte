<script>
  import { t } from 'svelte-i18n'

	export let name;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
<p>{ $t("test.label") }</p>

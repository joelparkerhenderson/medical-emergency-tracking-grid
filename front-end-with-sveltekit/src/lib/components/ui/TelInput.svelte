<script lang="ts">
	let {
		id = '',
		value = $bindable(''),
		placeholder = '',
	}: {
		id?: string;
		value?: string;
		placeholder?: string;
	} = $props();
</script>

<input
	type="tel"
	{id}
	bind:value
	{placeholder}
	autocomplete="tel"
	inputmode="tel"
	pattern="[0-9+\-\s()]*"
/>

<style>
	input {
		width: 100%;
		padding: 0.4rem 0.5rem;
		border: 2px solid #768692;
		border-radius: 4px;
		font-size: 0.9rem;
		font-family: inherit;
	}

	input:focus {
		outline: 3px solid #ffeb3b;
		outline-offset: 0;
		border-color: #003087;
	}
</style>

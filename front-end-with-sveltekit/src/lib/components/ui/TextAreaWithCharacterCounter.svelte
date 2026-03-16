<script lang="ts">
	let {
		id = '',
		value = $bindable(''),
		maxlength = 500,
		placeholder = '',
		rows = 4,
	}: {
		id?: string;
		value?: string;
		maxlength?: number;
		placeholder?: string;
		rows?: number;
	} = $props();

	let count = $derived(value.length);
</script>

<div class="textarea-counter">
	<textarea
		{id}
		bind:value
		{maxlength}
		{placeholder}
		{rows}
		aria-describedby="{id}-counter"
	></textarea>
	<p id="{id}-counter" class="counter">
		{count} of {maxlength} characters
	</p>
</div>

<style>
	.textarea-counter {
		width: 100%;
	}

	textarea {
		width: 100%;
		padding: 0.4rem 0.5rem;
		border: 2px solid #768692;
		border-radius: 4px;
		font-size: 0.9rem;
		font-family: inherit;
		resize: vertical;
		min-height: 4rem;
	}

	textarea:focus {
		outline: 3px solid #ffeb3b;
		outline-offset: 0;
		border-color: #003087;
	}

	.counter {
		margin: 0.2rem 0 0;
		font-size: 0.8rem;
		color: #425563;
	}
</style>

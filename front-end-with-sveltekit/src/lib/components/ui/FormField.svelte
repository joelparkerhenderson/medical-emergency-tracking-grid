<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		label,
		id,
		children,
	}: {
		label: string;
		id?: string;
		children: Snippet;
	} = $props();
</script>

<div class="form-field">
	<label for={id}>{label}</label>
	{@render children()}
</div>

<style>
	.form-field {
		margin-bottom: 0.75rem;
	}

	label {
		display: block;
		font-weight: 600;
		font-size: 0.85rem;
		color: #425563;
		margin-bottom: 0.2rem;
	}

	.form-field :global(input[type="text"]),
	.form-field :global(input[type="tel"]),
	.form-field :global(input[type="date"]),
	.form-field :global(input[type="time"]),
	.form-field :global(input[type="number"]),
	.form-field :global(select),
	.form-field :global(textarea) {
		width: 100%;
		padding: 0.4rem 0.5rem;
		border: 2px solid #768692;
		border-radius: 4px;
		font-size: 0.9rem;
		font-family: inherit;
	}

	.form-field :global(input:focus),
	.form-field :global(select:focus),
	.form-field :global(textarea:focus) {
		outline: 3px solid #ffeb3b;
		outline-offset: 0;
		border-color: #003087;
	}

	.form-field :global(textarea) {
		min-height: 4rem;
		resize: vertical;
	}
</style>

<script lang="ts">
	let {
		label,
		name,
		options,
		value = $bindable(''),
	}: {
		label: string;
		name: string;
		options: string[];
		value?: string;
	} = $props();
</script>

<fieldset class="radio-group">
	<legend>{label}</legend>
	<div class="options">
		{#each options as option (option)}
			<label class="radio-label">
				<input type="radio" {name} value={option} bind:group={value} />
				{option}
			</label>
		{/each}
	</div>
</fieldset>

<style>
	.radio-group {
		border: none;
		padding: 0;
		margin: 0 0 0.75rem;
	}

	legend {
		font-weight: 600;
		font-size: 0.85rem;
		color: #425563;
		margin-bottom: 0.2rem;
	}

	.options {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.radio-label {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		font-size: 0.9rem;
		cursor: pointer;
	}

	input[type="radio"]:focus-visible {
		outline: 3px solid #ffeb3b;
		outline-offset: 2px;
	}
</style>

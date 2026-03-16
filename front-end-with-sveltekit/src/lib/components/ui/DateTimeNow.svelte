<script lang="ts">
	import * as m from '../../../paraglide/messages.js';

	let {
		label,
		dateValue = $bindable(''),
		timeValue = $bindable(''),
	}: {
		label: string;
		dateValue?: string;
		timeValue?: string;
	} = $props();

	function setNow() {
		const now = new Date();
		dateValue = now.toISOString().slice(0, 10);
		timeValue = now.toTimeString().slice(0, 5);
	}
</script>

<div class="datetime-now">
	<label class="dt-label">{label}</label>
	<div class="dt-inputs">
		<input type="date" bind:value={dateValue} />
		<input type="time" bind:value={timeValue} />
		<button type="button" class="now-btn" onclick={setNow}>{m.btn_now()}</button>
	</div>
</div>

<style>
	.datetime-now {
		margin-bottom: 0.75rem;
	}

	.dt-label {
		display: block;
		font-weight: 600;
		font-size: 0.85rem;
		color: #425563;
		margin-bottom: 0.2rem;
	}

	.dt-inputs {
		display: flex;
		gap: 0.4rem;
		align-items: center;
	}

	input {
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

	.now-btn {
		padding: 0.4rem 0.75rem;
		background: #005eb8;
		color: #fff;
		border: none;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 600;
		cursor: pointer;
	}

	.now-btn:hover {
		background: #003087;
	}

	.now-btn:focus-visible {
		outline: 3px solid #ffeb3b;
		outline-offset: 2px;
	}
</style>

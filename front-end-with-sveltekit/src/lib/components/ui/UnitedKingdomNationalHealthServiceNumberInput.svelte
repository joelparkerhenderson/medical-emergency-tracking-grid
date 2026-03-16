<script lang="ts">
	let {
		id = '',
		value = $bindable(''),
	}: {
		id?: string;
		value?: string;
	} = $props();

	let error = $derived(getValidationError(value));

	function formatNhs(raw: string): string {
		const digits = raw.replace(/\D/g, '');
		if (digits.length <= 3) return digits;
		if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
		return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)}`;
	}

	function handleInput(e: Event) {
		const input = e.target as HTMLInputElement;
		const digits = input.value.replace(/\D/g, '').slice(0, 10);
		value = digits;
		input.value = formatNhs(digits);
	}

	function getValidationError(val: string): string {
		const digits = val.replace(/\D/g, '');
		if (digits.length === 0) return '';
		if (digits.length !== 10) return 'NHS number must be 10 digits';
		if (!isValidNhsChecksum(digits)) return 'Invalid NHS number';
		return '';
	}

	function isValidNhsChecksum(digits: string): boolean {
		// NHS number uses modulus 11 check digit
		let total = 0;
		for (let i = 0; i < 9; i++) {
			total += parseInt(digits[i]) * (10 - i);
		}
		const remainder = total % 11;
		const checkDigit = 11 - remainder;
		if (checkDigit === 11) return parseInt(digits[9]) === 0;
		if (checkDigit === 10) return false; // invalid
		return parseInt(digits[9]) === checkDigit;
	}
</script>

<div class="nhs-input">
	<input
		type="text"
		{id}
		value={formatNhs(value)}
		oninput={handleInput}
		placeholder="000 000 0000"
		inputmode="numeric"
		maxlength="12"
		aria-describedby={error ? `${id}-error` : undefined}
		aria-invalid={error ? 'true' : undefined}
		autocomplete="off"
	/>
	{#if error}
		<p id="{id}-error" class="error" role="alert">{error}</p>
	{/if}
</div>

<style>
	.nhs-input {
		width: 100%;
	}

	input {
		width: 100%;
		padding: 0.4rem 0.5rem;
		border: 2px solid #768692;
		border-radius: 4px;
		font-size: 0.9rem;
		font-family: inherit;
		letter-spacing: 0.05em;
	}

	input:focus {
		outline: 3px solid #ffeb3b;
		outline-offset: 0;
		border-color: #003087;
	}

	input[aria-invalid='true'] {
		border-color: #d4351c;
	}

	.error {
		margin: 0.2rem 0 0;
		font-size: 0.8rem;
		color: #d4351c;
		font-weight: 600;
	}
</style>

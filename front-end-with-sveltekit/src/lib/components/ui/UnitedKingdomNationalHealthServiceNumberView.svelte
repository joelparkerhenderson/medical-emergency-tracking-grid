<script lang="ts">
	let {
		value = '',
	}: {
		value?: string;
	} = $props();

	let formatted = $derived(formatNhs(value));

	function formatNhs(raw: string): string {
		const digits = raw.replace(/\D/g, '');
		if (digits.length === 0) return '---';
		if (digits.length <= 3) return digits;
		if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
		return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)}`;
	}
</script>

<span class="nhs-number" aria-label="NHS number: {formatted}">{formatted}</span>

<style>
	.nhs-number {
		font-size: 0.9rem;
		font-variant-numeric: tabular-nums;
		letter-spacing: 0.05em;
		color: #212b32;
	}
</style>

<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="medical-banner" role="banner" aria-label="Patient medical information">
	{@render children()}
</div>

<style>
	.medical-banner {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		padding: 0.75rem;
		background: #f0f4f5;
		border: 2px solid #d8dde0;
		border-radius: 4px;
	}
</style>

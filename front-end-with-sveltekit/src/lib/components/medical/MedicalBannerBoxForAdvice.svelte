<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<div class="medical-banner-box-advice">
	<h3 class="box-title">{title}</h3>
	<div class="box-content">
		{@render children()}
	</div>
</div>

<style>
	.medical-banner-box-advice {
		flex: 1 1 200px;
		min-width: 200px;
		border: 2px solid #005eb8;
		border-radius: 4px;
		background: #fff;
		overflow: hidden;
	}

	.box-title {
		margin: 0;
		padding: 0.4rem 0.75rem;
		background: #005eb8;
		color: #fff;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.box-content {
		padding: 0.5rem 0.75rem;
		font-size: 0.85rem;
		color: #212b32;
	}
</style>

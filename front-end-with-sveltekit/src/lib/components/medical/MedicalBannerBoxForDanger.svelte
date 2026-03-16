<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<div class="medical-banner-box-danger" role="alert">
	<h3 class="box-title">{title}</h3>
	<div class="box-content">
		{@render children()}
	</div>
	<div class="box-actions">
		<button type="button" class="btn-confirm">Confirm/Edit</button>
	</div>
</div>

<style>
	.medical-banner-box-danger {
		flex: 1 1 200px;
		min-width: 200px;
		border: 2px solid #d4351c;
		border-radius: 4px;
		background: #fff;
		overflow: hidden;
	}

	.box-title {
		margin: 0;
		padding: 0.4rem 0.75rem;
		background: #d4351c;
		color: #fff;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.box-content {
		padding: 0.5rem 0.75rem;
		font-size: 0.85rem;
		color: #212b32;
	}

	.box-actions {
		padding: 0.25rem 0.75rem 0.5rem;
	}

	.btn-confirm {
		padding: 0.3rem 0.75rem;
		background: #d4351c;
		color: #fff;
		border: none;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.15s;
	}

	.btn-confirm:hover {
		background: #b02a14;
	}

	.btn-confirm:focus-visible {
		outline: 3px solid #ffeb3b;
		outline-offset: 2px;
	}
</style>

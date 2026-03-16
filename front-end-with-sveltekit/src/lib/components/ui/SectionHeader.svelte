<script lang="ts">
	let { title }: { title: string } = $props();
</script>

<h2 class="section-header">{title}</h2>

<style>
	.section-header {
		margin: 1rem 0 0.5rem;
		padding: 0.4rem 0.75rem;
		background: #005eb8;
		color: #fff;
		font-size: 0.9rem;
		font-weight: 600;
		border-radius: 4px;
	}

	.section-header:first-child {
		margin-top: 0;
	}
</style>

<script lang="ts">
	import * as m from '../../../paraglide/messages.js';

	type NavItem = { icon: string; label: string; href?: string; onclick?: () => void };

	let {
		items,
		side,
	}: {
		items: NavItem[];
		side: 'left' | 'right';
	} = $props();

	let expanded = $state(false);

	function toggle() {
		expanded = !expanded;
	}

	const toggleLabel = $derived(expanded ? m.nav_collapse_sidebar() : m.nav_expand_sidebar());
	const toggleIcon = $derived(
		side === 'left'
			? (expanded ? '\u25C0' : '\u25B6')
			: (expanded ? '\u25B6' : '\u25C0')
	);
</script>

<aside class="sidebar {side}" class:expanded aria-label="{side} navigation">
	<div>
		<button class="toggle-btn" onclick={toggle} title={toggleLabel} aria-expanded={expanded}>
			<span class="icon">{toggleIcon}</span>
			{#if expanded}
				<span class="label">{toggleLabel}</span>
			{/if}
		</button>
		<nav>
			{#each items as item (item.label)}
				{#if item.href}
					<a href={item.href} class="nav-item" title={item.label}>
						<span class="icon">{item.icon}</span>
						{#if expanded}
							<span class="label">{item.label}</span>
						{/if}
					</a>
				{:else if item.onclick}
					<button class="nav-item" title={item.label} onclick={item.onclick}>
						<span class="icon">{item.icon}</span>
						{#if expanded}
							<span class="label">{item.label}</span>
						{/if}
					</button>
				{/if}
			{/each}
		</nav>
	</div>
</aside>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		background: #003087;
		color: #fff;
		width: 3rem;
		transition: width 0.2s ease;
		overflow: hidden;
		flex-shrink: 0;
	}

	.sidebar.expanded {
		width: 12rem;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
		padding: 0 0.25rem;
	}

	.nav-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 0.6rem;
		border: none;
		border-radius: 4px;
		background: none;
		color: #fff;
		text-decoration: none;
		font-size: 0.85rem;
		cursor: pointer;
		white-space: nowrap;
		transition: background 0.15s;
		width: 100%;
		text-align: left;
	}

	.nav-item:hover {
		background: rgba(255, 255, 255, 0.15);
	}

	.nav-item:focus-visible {
		outline: 3px solid #ffeb3b;
		outline-offset: -2px;
	}

	.icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.5rem;
		height: 1.5rem;
		font-size: 1.1rem;
		flex-shrink: 0;
	}

	.label {
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.toggle-btn {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 0.6rem;
		margin: 0.25rem;
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 4px;
		background: rgba(255, 255, 255, 0.1);
		color: #fff;
		font-size: 0.85rem;
		cursor: pointer;
		white-space: nowrap;
		transition: background 0.15s;
		width: calc(100% - 0.5rem);
	}

	.toggle-btn:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	.toggle-btn:focus-visible {
		outline: 3px solid #ffeb3b;
		outline-offset: -2px;
	}
</style>

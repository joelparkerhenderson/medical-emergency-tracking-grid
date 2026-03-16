<script lang="ts">
	let {
		id = '',
		value = $bindable(''),
		placeholder = 'Type to search',
		options = [],
		onselect,
	}: {
		id?: string;
		value?: string;
		placeholder?: string;
		options?: string[];
		onselect?: (selected: string) => void;
	} = $props();

	let showResults = $state(false);
	let filteredOptions = $derived(
		value.trim().length > 0
			? options.filter((opt) => opt.toLowerCase().includes(value.toLowerCase()))
			: []
	);

	function selectOption(opt: string) {
		value = opt;
		showResults = false;
		onselect?.(opt);
	}

	function handleInput() {
		showResults = true;
	}

	function handleBlur() {
		// Delay to allow click on option
		setTimeout(() => {
			showResults = false;
		}, 150);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			showResults = false;
		}
	}
</script>

<div class="text-input-search">
	<div class="input-wrapper">
		<input
			type="text"
			{id}
			bind:value
			{placeholder}
			oninput={handleInput}
			onblur={handleBlur}
			onkeydown={handleKeydown}
			role="combobox"
			aria-expanded={showResults && filteredOptions.length > 0}
			aria-autocomplete="list"
			aria-controls="{id}-listbox"
			autocomplete="off"
		/>
		<svg class="search-icon" aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
			<circle cx="10.5" cy="10.5" r="7" fill="none" stroke="currentColor" stroke-width="2" />
			<line x1="15.5" y1="15.5" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		</svg>
	</div>
	{#if showResults && filteredOptions.length > 0}
		<ul id="{id}-listbox" class="search-results" role="listbox">
			{#each filteredOptions as opt (opt)}
				<li role="option" aria-selected="false">
					<button type="button" onmousedown={() => selectOption(opt)}>{opt}</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.text-input-search {
		position: relative;
	}

	.input-wrapper {
		position: relative;
	}

	input {
		width: 100%;
		padding: 0.4rem 2rem 0.4rem 0.5rem;
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

	.search-icon {
		position: absolute;
		right: 0.5rem;
		top: 50%;
		transform: translateY(-50%);
		color: #768692;
		pointer-events: none;
	}

	.search-results {
		position: absolute;
		z-index: 10;
		width: 100%;
		max-height: 12rem;
		overflow-y: auto;
		margin: 0;
		padding: 0;
		list-style: none;
		background: #fff;
		border: 2px solid #768692;
		border-top: none;
		border-radius: 0 0 4px 4px;
	}

	.search-results li button {
		display: block;
		width: 100%;
		padding: 0.4rem 0.5rem;
		border: none;
		background: none;
		text-align: left;
		font-size: 0.9rem;
		font-family: inherit;
		cursor: pointer;
		color: #212b32;
	}

	.search-results li button:hover {
		background: #e8edee;
		color: #003087;
	}

	.search-results li button:focus-visible {
		outline: 3px solid #ffeb3b;
		outline-offset: -3px;
	}
</style>

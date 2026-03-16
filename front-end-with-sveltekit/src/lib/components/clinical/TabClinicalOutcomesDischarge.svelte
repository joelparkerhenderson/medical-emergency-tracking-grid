<script lang="ts">
	import type { Patient } from '$lib/types.js';
	import * as m from '../../../paraglide/messages.js';

	let { patient }: { patient: Patient } = $props();
</script>

<div class="tab-content">
	<section>
		<h2>{m.section_outcome()}</h2>
		<p class="placeholder">{m.placeholder_no_outcome()}</p>
	</section>

	<section>
		<h2>{m.section_discharge_details()}</h2>
		<p class="placeholder">{m.placeholder_no_discharge()}</p>
	</section>

	<section>
		<h2>{m.section_follow_up()}</h2>
		<p class="placeholder">{m.placeholder_no_follow_up()}</p>
	</section>
</div>

<style>
	.placeholder {
		color: #768692;
		font-style: italic;
	}
</style>

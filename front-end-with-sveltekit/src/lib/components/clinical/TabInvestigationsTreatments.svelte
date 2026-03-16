<script lang="ts">
	import type { Patient } from '$lib/types.js';
	import * as m from '../../../paraglide/messages.js';

	let { patient }: { patient: Patient } = $props();
</script>

<div class="tab-content">
	<section>
		<h2>{m.section_investigations_ordered()}</h2>
		<p class="placeholder">{m.placeholder_no_investigations()}</p>
	</section>

	<section>
		<h2>{m.section_treatments_given()}</h2>
		<p class="placeholder">{m.placeholder_no_treatment()}</p>
	</section>

	<section>
		<h2>{m.section_medications()}</h2>
		<p class="placeholder">{m.placeholder_no_medications()}</p>
	</section>
</div>

<style>
	.placeholder {
		color: #768692;
		font-style: italic;
	}
</style>

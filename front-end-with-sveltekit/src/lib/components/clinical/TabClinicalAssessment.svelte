<script lang="ts">
	import type { Patient } from '$lib/types.js';
	import * as m from '../../../paraglide/messages.js';

	let { patient }: { patient: Patient } = $props();
</script>

<div class="tab-content">
	<section>
		<h2>{m.section_ca_investigations()}</h2>
		<p class="placeholder">{m.placeholder_no_ca_investigations()}</p>
	</section>

	<section>
		<h2>{m.section_ca_treatment_plan()}</h2>
		<p class="placeholder">{m.placeholder_no_treatment_plan()}</p>
	</section>

	<section>
		<h2>{m.section_ca_past_medical_history()}</h2>
		<p class="placeholder">{m.placeholder_no_past_medical_history()}</p>
	</section>

	<section>
		<h2>{m.section_ca_drug_history()}</h2>
		<p class="placeholder">{m.placeholder_no_drug_history()}</p>
	</section>

	<section>
		<h2>{m.section_ca_social_history()}</h2>
		<p class="placeholder">{m.placeholder_no_social_history()}</p>
	</section>

	<section>
		<h2>{m.section_ca_family_history()}</h2>
		<p class="placeholder">{m.placeholder_no_family_history()}</p>
	</section>

	<section>
		<h2>{m.section_ca_collateral_history()}</h2>
		<p class="placeholder">{m.placeholder_no_collateral_history()}</p>
	</section>

	<section>
		<h2>{m.section_examination()}</h2>
		<p class="placeholder">{m.placeholder_no_examination()}</p>
	</section>

	<section>
		<h2>{m.section_ca_clinical_problem_list()}</h2>
		<p class="placeholder">{m.placeholder_no_clinical_problem_list()}</p>
	</section>

	<section>
		<h2>{m.section_ca_management_plan()}</h2>
		<p class="placeholder">{m.placeholder_no_management_plan()}</p>
	</section>

	<section>
		<h2>{m.section_ca_comorbidity()}</h2>
		<p class="placeholder">{m.placeholder_no_comorbidity()}</p>
	</section>

	<section>
		<h2>{m.section_diagnosis()}</h2>
		<p class="placeholder">{m.placeholder_no_diagnosis()}</p>
	</section>
</div>

<style>
	.placeholder {
		color: #768692;
		font-style: italic;
	}
</style>

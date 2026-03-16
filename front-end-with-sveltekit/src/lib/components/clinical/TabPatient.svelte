<script lang="ts">
	import type { Patient } from '$lib/types.js';
	import { triageLevels } from '$lib/types.js';
	import * as m from '../../../paraglide/messages.js';

	let { patient }: { patient: Patient } = $props();
</script>

<div class="tab-content">
	<section>
		<h2>{m.section_demographics()}</h2>
		<dl class="field-grid">
			<dt>{m.label_name()}</dt>
			<dd>{patient.surname}, {patient.forename}</dd>

			<dt>{m.label_age()}</dt>
			<dd>{patient.age}</dd>

			<dt>{m.label_gender()}</dt>
			<dd>{patient.gender}</dd>

			<dt>{m.label_nhs()}</dt>
			<dd>{patient.nhsNumber}</dd>

			<dt>{m.label_department()}</dt>
			<dd>{patient.department}</dd>

			<dt>{m.label_triage_level()}</dt>
			<dd>
				<span class="triage-badge" style="background:{triageLevels[patient.triageLevel].background};color:{triageLevels[patient.triageLevel].color}">
					{triageLevels[patient.triageLevel].label()}
				</span>
			</dd>
		</dl>
	</section>

	{#if patient.alerts.length > 0}
		<section>
			<h2>{m.label_alerts()}</h2>
			<div class="badge-list">
				{#each patient.alerts as alert (alert)}
					<span class="badge alert-badge">{alert}</span>
				{/each}
			</div>
		</section>
	{/if}

	{#if patient.allergies.length > 0}
		<section>
			<h2>{m.label_allergies()}</h2>
			<div class="badge-list">
				{#each patient.allergies as allergy (allergy)}
					<span class="badge allergy-badge">{allergy}</span>
				{/each}
			</div>
		</section>
	{/if}
</div>

<style>
	.field-grid {
		display: grid;
		grid-template-columns: 10rem 1fr;
		gap: 0.5rem 1rem;
		margin: 0;
	}

	dt {
		font-weight: 600;
		color: #425563;
	}

	dd {
		margin: 0;
	}

	.triage-badge {
		display: inline-block;
		padding: 0.15rem 0.6rem;
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.85rem;
	}

	.badge-list {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.badge {
		padding: 0.2rem 0.6rem;
		border-radius: 12px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #fff;
	}

	.alert-badge {
		background: #ff9800;
	}

	.allergy-badge {
		background: #e53935;
	}
</style>

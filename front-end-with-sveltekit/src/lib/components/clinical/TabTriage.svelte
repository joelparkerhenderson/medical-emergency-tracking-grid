<script lang="ts">
	import type { Patient } from '$lib/types.js';
	import { triageLevels } from '$lib/types.js';
	import * as m from '../../../paraglide/messages.js';

	let { patient }: { patient: Patient } = $props();
</script>

<div class="triage-columns">
	<div class="column">
		<h2>{m.section_triage_assessment()}</h2>

		<dl class="field-grid">
			<dt>{m.label_triage_category()}</dt>
			<dd>
				<span class="triage-badge" style="background:{triageLevels[patient.triageLevel].background};color:{triageLevels[patient.triageLevel].color}">
					{patient.triageLevel} &mdash; {triageLevels[patient.triageLevel].label()}
				</span>
			</dd>

			<dt>{m.label_chief_complaint()}</dt>
			<dd>{patient.chiefComplaint}</dd>
		</dl>

		{#if patient.alerts.length > 0}
			<div class="sub-section">
				<h3>{m.label_alerts()}</h3>
				<div class="badge-list">
					{#each patient.alerts as alert (alert)}
						<span class="badge alert-badge">{alert}</span>
					{/each}
				</div>
			</div>
		{/if}

		{#if patient.allergies.length > 0}
			<div class="sub-section">
				<h3>{m.label_allergies()}</h3>
				<div class="badge-list">
					{#each patient.allergies as allergy (allergy)}
						<span class="badge allergy-badge">{allergy}</span>
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<div class="column">
		<h2>{m.section_initial_observations()}</h2>
		<p class="placeholder">{m.placeholder_no_observations()}</p>
	</div>

	<div class="column">
		<h2>{m.section_further_observations()}</h2>
		<p class="placeholder">{m.placeholder_no_observations()}</p>
	</div>
</div>

<style>
	.triage-columns {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.5rem;
	}

	.column {
		min-width: 0;
	}

	.field-grid {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.4rem 0.75rem;
		margin: 0 0 1rem;
	}

	dt {
		font-weight: 600;
		color: #425563;
		white-space: nowrap;
	}

	dd {
		margin: 0;
	}

	.triage-badge {
		display: inline-block;
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.85rem;
	}

	.sub-section {
		margin-top: 1rem;
	}

	h3 {
		font-size: 0.95rem;
		color: #425563;
		margin: 0 0 0.4rem;
	}

	.badge-list {
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
	}

	.badge {
		padding: 0.15rem 0.5rem;
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

	.placeholder {
		color: #768692;
		font-style: italic;
	}

	@media (max-width: 768px) {
		.triage-columns {
			grid-template-columns: 1fr;
		}
	}
</style>

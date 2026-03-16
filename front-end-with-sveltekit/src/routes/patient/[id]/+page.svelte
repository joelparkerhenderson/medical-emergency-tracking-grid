<script lang="ts">
	import { patientStore } from '$lib/stores.svelte.js';
	import { triageLevels } from '$lib/types.js';
	import * as m from '../../../paraglide/messages.js';
	import TabPatient from '$lib/components/clinical/TabPatient.svelte';
	import TabAttendance from '$lib/components/clinical/TabAttendance.svelte';
	import TabTriage from '$lib/components/clinical/TabTriage.svelte';
	import TabClinicalAssessment from '$lib/components/clinical/TabClinicalAssessment.svelte';
	import TabInvestigationsTreatments from '$lib/components/clinical/TabInvestigationsTreatments.svelte';
	import TabClinicalOutcomesDischarge from '$lib/components/clinical/TabClinicalOutcomesDischarge.svelte';

	let { data } = $props();

	const patient = $derived(patientStore.patients.find(p => p.id === data.patientId));

	const tabs = $derived([
		{ id: 'patient', label: m.tab_patient() },
		{ id: 'attendance', label: m.tab_attendance() },
		{ id: 'triage', label: m.tab_triage() },
		{ id: 'clinical-assessment', label: m.tab_clinical_assessment() },
		{ id: 'investigations-treatments', label: m.tab_investigations_treatments() },
		{ id: 'clinical-outcomes-discharge', label: m.tab_clinical_outcomes_discharge() },
	]);

	let activeTab = $state('patient');

	function handleKeydown(e: KeyboardEvent, tabId: string) {
		const currentIndex = tabs.findIndex(t => t.id === activeTab);
		let nextIndex = currentIndex;

		if (e.key === 'ArrowRight') {
			nextIndex = (currentIndex + 1) % tabs.length;
		} else if (e.key === 'ArrowLeft') {
			nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
		} else if (e.key === 'Home') {
			nextIndex = 0;
		} else if (e.key === 'End') {
			nextIndex = tabs.length - 1;
		} else {
			return;
		}

		e.preventDefault();
		activeTab = tabs[nextIndex].id;
		const el = document.getElementById(`tab-${tabs[nextIndex].id}`);
		el?.focus();
	}
</script>

{#if patient}
	<div class="clinical-view">
		<div class="top-bar">
			<a href="/" class="back-link">&larr; {m.back_to_grid()}</a>
			<div class="patient-summary">
				<span class="patient-name">{patient.surname}, {patient.forename}</span>
				<span class="patient-detail">{m.label_age()}: {patient.age}</span>
				<span class="patient-detail">{m.label_nhs()}: {patient.nhsNumber}</span>
				<span
					class="triage-badge"
					style="background:{triageLevels[patient.triageLevel].background};color:{triageLevels[patient.triageLevel].color}"
				>
					{triageLevels[patient.triageLevel].label()}
				</span>
			</div>
		</div>

		{#if patient.alerts.length > 0 || patient.allergies.length > 0}
			<div class="alerts-bar">
				{#if patient.alerts.length > 0}
					<div class="alert-group">
						<strong>{m.label_alerts()}:</strong>
						{#each patient.alerts as alert (alert)}
							<span class="badge alert-badge">{alert}</span>
						{/each}
					</div>
				{/if}
				{#if patient.allergies.length > 0}
					<div class="alert-group">
						<strong>{m.label_allergies()}:</strong>
						{#each patient.allergies as allergy (allergy)}
							<span class="badge allergy-badge">{allergy}</span>
						{/each}
					</div>
				{/if}
			</div>
		{/if}

		<div class="tabs" role="tablist" aria-label="Clinical view">
			{#each tabs as tab (tab.id)}
				<button
					id="tab-{tab.id}"
					role="tab"
					aria-selected={activeTab === tab.id}
					aria-controls="panel-{tab.id}"
					tabindex={activeTab === tab.id ? 0 : -1}
					class:active={activeTab === tab.id}
					onclick={() => activeTab = tab.id}
					onkeydown={(e) => handleKeydown(e, tab.id)}
				>
					{tab.label}
				</button>
			{/each}
		</div>

		<div
			id="panel-{activeTab}"
			role="tabpanel"
			aria-labelledby="tab-{activeTab}"
			class="tab-panel"
		>
			{#if activeTab === 'patient'}
				<TabPatient {patient} />
			{:else if activeTab === 'attendance'}
				<TabAttendance {patient} />
			{:else if activeTab === 'triage'}
				<TabTriage {patient} />
			{:else if activeTab === 'clinical-assessment'}
				<TabClinicalAssessment {patient} />
			{:else if activeTab === 'investigations-treatments'}
				<TabInvestigationsTreatments {patient} />
			{:else if activeTab === 'clinical-outcomes-discharge'}
				<TabClinicalOutcomesDischarge {patient} />
			{/if}
		</div>
	</div>
{:else}
	<div class="not-found">
		<h1>{m.patient_not_found()}</h1>
		<a href="/">{m.back_to_grid()}</a>
	</div>
{/if}

<style>
	.clinical-view {
		max-width: 1000px;
	}

	/* Top bar */
	.top-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
	}

	.back-link {
		color: #1976d2;
		text-decoration: none;
		font-size: 0.9rem;
		white-space: nowrap;
	}
	.back-link:hover {
		text-decoration: underline;
	}

	.patient-summary {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
		font-size: 0.95rem;
	}

	.patient-name {
		font-weight: 700;
		font-size: 1.1rem;
	}

	.patient-detail {
		color: #555;
	}

	.triage-badge {
		display: inline-block;
		padding: 0.15rem 0.6rem;
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.85rem;
	}

	/* Alerts bar */
	.alerts-bar {
		background: #fff3e0;
		border: 2px solid #ff9800;
		border-radius: 6px;
		padding: 0.5rem 1rem;
		margin-bottom: 0.75rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.alert-group {
		display: flex;
		align-items: center;
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

	/* Tabs */
	.tabs {
		display: flex;
		border-bottom: 3px solid #005eb8;
		gap: 0;
		overflow-x: auto;
	}

	.tabs button {
		padding: 0.65rem 1.1rem;
		border: none;
		background: #f0f4f5;
		color: #425563;
		font-size: 0.9rem;
		font-weight: 600;
		cursor: pointer;
		white-space: nowrap;
		border-top: 3px solid transparent;
		border-left: 1px solid #d8dde0;
		border-right: 1px solid #d8dde0;
		margin-bottom: -3px;
		transition: background 0.15s, color 0.15s;
	}

	.tabs button:first-child {
		border-left: none;
	}

	.tabs button:hover {
		background: #e8edee;
		color: #003087;
	}

	.tabs button:focus-visible {
		outline: 3px solid #ffeb3b;
		outline-offset: -3px;
		z-index: 1;
	}

	.tabs button.active {
		background: #fff;
		color: #003087;
		border-top-color: #005eb8;
		border-bottom: 3px solid #fff;
	}

	/* Tab panel */
	.tab-panel {
		background: #fff;
		border: 1px solid #d8dde0;
		border-top: none;
		padding: 1.5rem;
	}

	.tab-panel :global(h2) {
		font-size: 1.1rem;
		color: #003087;
		border-bottom: 1px solid #d8dde0;
		padding-bottom: 0.3rem;
		margin: 0 0 0.75rem;
	}

	.tab-panel :global(section) {
		margin-bottom: 1.5rem;
	}

	.tab-panel :global(section:last-child) {
		margin-bottom: 0;
	}

	/* Not found */
	.not-found {
		text-align: center;
		padding: 3rem;
	}
</style>

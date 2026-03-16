<script lang="ts">
	import * as m from '../../paraglide/messages.js';
	import MedicalBanner from '$lib/components/medical/MedicalBanner.svelte';
	import MedicalBannerBoxForDanger from '$lib/components/medical/MedicalBannerBoxForDanger.svelte';
	import MedicalBannerBoxForAdvice from '$lib/components/medical/MedicalBannerBoxForAdvice.svelte';
	import TabPatient from '$lib/components/intake/TabPatient.svelte';
	import TabAttendance from '$lib/components/intake/TabAttendance.svelte';
	import TabTriage from '$lib/components/intake/TabTriage.svelte';
	import TabClinicalAssessment from '$lib/components/intake/TabClinicalAssessment.svelte';
	import TabInvestigationsTreatments from '$lib/components/intake/TabInvestigationsTreatments.svelte';
	import TabClinicalOutcomeDischarge from '$lib/components/intake/TabClinicalOutcomeDischarge.svelte';

	const tabs = $derived([
		{ id: 'patient', label: m.tab_patient() },
		{ id: 'attendance', label: m.tab_attendance() },
		{ id: 'triage', label: m.tab_triage() },
		{ id: 'clinical-assessment', label: m.tab_clinical_assessment() },
		{ id: 'investigations-treatments', label: m.tab_investigations_treatments() },
		{ id: 'clinical-outcomes-discharge', label: m.tab_clinical_outcomes_discharge() },
	]);

	let activeTab = $state('patient');

	function handleKeydown(e: KeyboardEvent) {
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
		document.getElementById(`tab-${tabs[nextIndex].id}`)?.focus();
	}
</script>

<div class="intake-page">
	<MedicalBanner>
		<MedicalBannerBoxForDanger title="Reactions">
			<ul class="banner-list">
				<li>Allergies</li>
				<li>Sensitivities</li>
				<li>Intolerances</li>
			</ul>
		</MedicalBannerBoxForDanger>
		<MedicalBannerBoxForDanger title="Warnings">
			<ul class="banner-list">
				<li>Alerts</li>
				<li>Dangers</li>
				<li>Cautions</li>
			</ul>
		</MedicalBannerBoxForDanger>
		<MedicalBannerBoxForAdvice title="Contact">
			<dl class="banner-dl">
				<dt>Name</dt>
				<dd>--</dd>
				<dt>NHS</dt>
				<dd>--</dd>
				<dt>MRN</dt>
				<dd>--</dd>
				<dt>Gender</dt>
				<dd>--</dd>
			</dl>
		</MedicalBannerBoxForAdvice>
	</MedicalBanner>

	<div class="tabs" role="tablist" aria-label="Patient intake">
		{#each tabs as tab (tab.id)}
			<button
				id="tab-{tab.id}"
				role="tab"
				aria-selected={activeTab === tab.id}
				aria-controls="panel-{tab.id}"
				tabindex={activeTab === tab.id ? 0 : -1}
				class:active={activeTab === tab.id}
				onclick={() => activeTab = tab.id}
				onkeydown={handleKeydown}
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
			<TabPatient />
		{:else if activeTab === 'attendance'}
			<TabAttendance />
		{:else if activeTab === 'triage'}
			<TabTriage />
		{:else if activeTab === 'clinical-assessment'}
			<TabClinicalAssessment />
		{:else if activeTab === 'investigations-treatments'}
			<TabInvestigationsTreatments />
		{:else if activeTab === 'clinical-outcomes-discharge'}
			<TabClinicalOutcomeDischarge />
		{/if}
	</div>
</div>

<style>
	.intake-page {
		max-width: 1200px;
	}

	/* Banner lists */
	.banner-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.banner-list li {
		padding: 0.15rem 0;
		color: #425563;
		font-size: 0.85rem;
	}

	.banner-dl {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.15rem 0.5rem;
		margin: 0;
	}

	.banner-dl dt {
		font-weight: 600;
		color: #425563;
		font-size: 0.85rem;
	}

	.banner-dl dd {
		margin: 0;
		color: #212b32;
		font-size: 0.85rem;
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
		padding: 1.25rem;
	}
</style>

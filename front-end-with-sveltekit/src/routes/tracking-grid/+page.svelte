<script lang="ts">
	import { goto } from '$app/navigation';
	import { patientStore } from '$lib/stores.svelte.js';
	import { triageLevels } from '$lib/types.js';
	import type { PatientLocation } from '$lib/types.js';
	import * as m from '../../paraglide/messages.js';

	function formatTime(iso: string): string {
		return new Date(iso).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
	}

	function handleClick(id: string) {
		if (patientStore.selectedPatientId === id) {
			patientStore.select(null);
		} else {
			patientStore.select(id);
		}
	}

	function handleDblClick(id: string) {
		goto(`/patient/${id}`);
	}

	const selectedPatient = $derived(patientStore.selectedPatient);

	type StatTile = { key: PatientLocation | 'all'; label: () => string };

	const tiles: StatTile[] = [
		{ key: 'all', label: () => m.stat_all() },
		{ key: 'ambulance', label: () => m.stat_ambulances() },
		{ key: 'consultation_room', label: () => m.stat_consultation_rooms() },
		{ key: 'resus', label: () => m.stat_resus() },
		{ key: 'trolley', label: () => m.stat_trolleys() },
		{ key: 'waiting_room', label: () => m.stat_waiting_rooms() },
		{ key: 'other', label: () => m.stat_other() },
	];

	let activeFilter = $state<PatientLocation | 'all'>('all');

	const counts = $derived(
		Object.fromEntries(
			tiles.map(t => [
				t.key,
				t.key === 'all'
					? patientStore.patients.length
					: patientStore.patients.filter(p => p.location === t.key).length,
			])
		) as Record<PatientLocation | 'all', number>
	);

	const filteredPatients = $derived(
		activeFilter === 'all'
			? patientStore.patients
			: patientStore.patients.filter(p => p.location === activeFilter)
	);
</script>

<div class="tracking-grid-page">
	<header>
		<h1>{m.page_heading()}</h1>
	</header>

	<div class="stat-tiles" role="group" aria-label="Patient location statistics">
		{#each tiles as tile (tile.key)}
			<button
				class="tile"
				class:active={activeFilter === tile.key}
				onclick={() => activeFilter = tile.key}
			>
				<span class="tile-count">{counts[tile.key]}</span>
				<span class="tile-label">{tile.label()}</span>
			</button>
		{/each}
	</div>

	{#if selectedPatient}
		<div class="demographics-panel">
			<button class="dismiss" onclick={() => patientStore.select(null)}>&times;</button>
			<div class="demo-fields">
				<div><strong>{m.label_nhs()}:</strong> {selectedPatient.nhsNumber}</div>
				<div><strong>{m.label_name()}:</strong> {selectedPatient.surname}, {selectedPatient.forename}</div>
				<div><strong>{m.label_age()}:</strong> {selectedPatient.age}</div>
				<div><strong>{m.label_gender()}:</strong> {selectedPatient.gender}</div>
			</div>
		</div>
	{/if}

	<div class="grid-container">
		<table>
			<thead>
				<tr>
					<th>{m.col_triage()}</th>
					<th>{m.col_dept()}</th>
					<th>{m.col_arrival()}</th>
					<th>{m.col_alerts()}</th>
					<th>{m.col_allergies()}</th>
					<th>{m.col_age()}</th>
					<th>{m.col_chief_complaint()}</th>
					<th>{m.col_surname()}</th>
					<th>{m.col_forename()}</th>
				</tr>
			</thead>
			<tbody>
				{#each filteredPatients as patient (patient.id)}
					<tr
						class:selected={patientStore.selectedPatientId === patient.id}
						onclick={() => handleClick(patient.id)}
						ondblclick={() => handleDblClick(patient.id)}
					>
						<td>
							<span
								class="triage-cell"
								style="background:{triageLevels[patient.triageLevel].background};color:{triageLevels[patient.triageLevel].color}"
							>
								{patient.triageLevel}
							</span>
						</td>
						<td>{patient.department}</td>
						<td>{formatTime(patient.arrivalTime)}</td>
						<td>
							{#if patient.alerts.length > 0}
								<span class="indicator alert-ind" title={patient.alerts.join(', ')}>
									{patient.alerts.length}
								</span>
							{/if}
						</td>
						<td>
							{#if patient.allergies.length > 0}
								<span class="indicator allergy-ind" title={patient.allergies.join(', ')}>
									{patient.allergies.length}
								</span>
							{/if}
						</td>
						<td>{patient.age}</td>
						<td>{patient.chiefComplaint}</td>
						<td>
							{patient.surname}
							{#if patient.hasDuplicateName}
								<span class="dup-flag" title={m.duplicate_name_title()}>&#9888;</span>
							{/if}
						</td>
						<td>
							{patient.forename}
							{#if patient.hasDuplicateName}
								<span class="dup-flag" title={m.duplicate_name_title()}>&#9888;</span>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<p class="hint">{m.hint_click()}</p>
</div>

<style>
	.tracking-grid-page {
		max-width: 1200px;
	}

	header {
		margin-bottom: 1rem;
	}

	header h1 {
		font-size: 1.3rem;
		color: #003087;
		margin: 0;
	}

	/* Stat tiles */
	.stat-tiles {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	.tile {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-width: 6.5rem;
		padding: 0.6rem 0.75rem;
		border: 2px solid #d8dde0;
		border-radius: 6px;
		background: #f0f4f5;
		cursor: pointer;
		transition: border-color 0.15s, background 0.15s;
	}

	.tile:hover {
		border-color: #005eb8;
		background: #e8edee;
	}

	.tile:focus-visible {
		outline: 3px solid #ffeb3b;
		outline-offset: -2px;
	}

	.tile.active {
		border-color: #005eb8;
		background: #005eb8;
		color: #fff;
	}

	.tile-count {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.2;
	}

	.tile-label {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	/* Demographics panel */
	.demographics-panel {
		background: #e3f2fd;
		border: 2px solid #1976d2;
		border-radius: 6px;
		padding: 0.75rem 1rem;
		margin-bottom: 1rem;
		position: relative;
	}

	.demo-fields {
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;
		font-size: 0.95rem;
	}

	.dismiss {
		position: absolute;
		top: 0.3rem;
		right: 0.5rem;
		background: none;
		border: none;
		font-size: 1.2rem;
		cursor: pointer;
		color: #666;
		line-height: 1;
	}

	/* Grid */
	.grid-container {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.9rem;
	}

	thead {
		background: #263238;
		color: #fff;
	}

	th {
		padding: 0.6rem 0.75rem;
		text-align: left;
		font-weight: 600;
		white-space: nowrap;
	}

	td {
		padding: 0.5rem 0.75rem;
		border-bottom: 1px solid #e0e0e0;
		white-space: nowrap;
	}

	tbody tr {
		cursor: pointer;
		transition: background 0.1s;
	}

	tbody tr:hover {
		background: #f5f5f5;
	}

	tbody tr.selected {
		background: #e3f2fd;
	}

	/* Triage */
	.triage-cell {
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.8rem;
	}

	/* Indicators */
	.indicator {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.4rem;
		height: 1.4rem;
		border-radius: 50%;
		font-size: 0.75rem;
		font-weight: 700;
		color: #fff;
	}

	.alert-ind {
		background: #ff9800;
	}

	.allergy-ind {
		background: #e53935;
	}

	/* Duplicate name flag */
	.dup-flag {
		color: #d32f2f;
		font-size: 1rem;
		margin-left: 0.3rem;
		cursor: help;
	}

	.hint {
		color: #888;
		font-size: 0.8rem;
		margin-top: 0.75rem;
	}
</style>

<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import FormField from '$lib/components/ui/FormField.svelte';
	import * as m from '../../../paraglide/messages.js';

	const medicalHeadings = $derived([
		m.section_ca_investigations(),
		m.section_ca_treatment_plan(),
		m.section_ca_past_medical_history(),
		m.section_ca_drug_history(),
		m.section_ca_social_history(),
		m.section_ca_family_history(),
		m.section_ca_collateral_history(),
		m.section_examination(),
		m.section_ca_clinical_problem_list(),
		m.section_ca_management_plan(),
		m.section_ca_comorbidity(),
		m.section_diagnosis(),
	]);

	const outcomeItems = $derived([
		m.section_handover(),
		'TODO',
		'TODO',
		'TODO',
	]);
</script>

<div class="columns">
	<div class="col col-checklist">
		<SectionHeader title={m.section_medical_headings()} />
		<ul class="checklist">
			{#each medicalHeadings as heading (heading)}
				<li>
					<label><input type="checkbox" /> {heading}</label>
				</li>
			{/each}
		</ul>

		<SectionHeader title={m.section_outcomes()} />
		<ul class="checklist">
			{#each outcomeItems as item (item)}
				<li>
					<label><input type="checkbox" /> {item}</label>
				</li>
			{/each}
		</ul>
	</div>

	<div class="col col-main">
		<FormField label={m.label_done_by()} id="ca-done-by">
			<select id="ca-done-by">
				<option value=""></option>
			</select>
		</FormField>

		<FormField label={m.label_presenting_complaint()} id="ca-complaint">
			<input type="text" id="ca-complaint" />
		</FormField>

		<FormField label={m.label_history_presenting()} id="ca-history">
			<textarea id="ca-history"></textarea>
		</FormField>

		<div class="checkbox-row">
			<label><input type="checkbox" /> {m.label_doc_sensitive()}</label>
		</div>

		<SectionHeader title={m.section_ca_investigations()} />

		<FormField label={m.label_add_investigation()} id="ca-add-inv">
			<input type="text" id="ca-add-inv" placeholder={m.placeholder_type_to_search()} />
		</FormField>

		<FormField label={m.label_notes()} id="ca-inv-notes">
			<textarea id="ca-inv-notes"></textarea>
		</FormField>

		<div class="table-wrap">
			<table>
				<thead>
					<tr>
						<th>{m.col_investigation()}</th>
						<th>{m.col_requested()}</th>
						<th>{m.col_completed()}</th>
						<th>{m.col_requested_by()}</th>
					</tr>
				</thead>
				<tbody>
					<tr class="empty-row">
						<td colspan="4" class="placeholder">{m.placeholder_no_ca_investigations()}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<SectionHeader title={m.section_treatments()} />

		<FormField label={m.label_add_treatment()} id="ca-add-tx">
			<input type="text" id="ca-add-tx" placeholder={m.placeholder_type_to_search()} />
		</FormField>

		<FormField label={m.label_notes()} id="ca-tx-notes">
			<textarea id="ca-tx-notes"></textarea>
		</FormField>

		<div class="table-wrap">
			<table>
				<thead>
					<tr>
						<th>{m.col_treatment()}</th>
						<th>{m.col_requested()}</th>
						<th>{m.col_completed()}</th>
						<th>{m.col_requested_by()}</th>
					</tr>
				</thead>
				<tbody>
					<tr class="empty-row">
						<td colspan="4" class="placeholder">{m.placeholder_no_treatment()}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>

<style>
	.columns {
		display: grid;
		grid-template-columns: 14rem 1fr;
		gap: 1.5rem;
	}

	.checklist {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.checklist li {
		margin-bottom: 0.3rem;
	}

	.checklist label {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.9rem;
		cursor: pointer;
	}

	.checkbox-row {
		margin-bottom: 0.75rem;
	}

	.checkbox-row label {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.9rem;
		cursor: pointer;
	}

	.table-wrap {
		overflow-x: auto;
		margin-bottom: 1.5rem;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.85rem;
	}

	thead {
		background: #f0f4f5;
	}

	th {
		padding: 0.5rem 0.6rem;
		text-align: left;
		font-weight: 600;
		border-bottom: 2px solid #d8dde0;
	}

	td {
		padding: 0.5rem 0.6rem;
		border-bottom: 1px solid #e0e0e0;
	}

	.placeholder {
		color: #768692;
		font-style: italic;
	}

	@media (max-width: 768px) {
		.columns {
			grid-template-columns: 1fr;
		}
	}
</style>

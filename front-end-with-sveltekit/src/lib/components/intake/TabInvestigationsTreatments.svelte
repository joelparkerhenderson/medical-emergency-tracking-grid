<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import FormField from '$lib/components/ui/FormField.svelte';
	import * as m from '../../../paraglide/messages.js';
</script>

<div class="tab-content">
	<SectionHeader title={m.section_investigations()} />

	<FormField label={m.label_add_investigation()} id="it-add-inv">
		<input type="text" id="it-add-inv" placeholder={m.placeholder_type_to_search()} />
	</FormField>

	<div class="table-wrap">
		<table>
			<thead>
				<tr>
					<th>{m.col_investigation()}</th>
					<th>{m.col_requested()}</th>
					<th>{m.col_completed()}</th>
					<th>{m.col_requested_by()}</th>
					<th>{m.col_requested_date()}</th>
					<th>{m.col_completed_by()}</th>
					<th>{m.col_completed_date()}</th>
				</tr>
			</thead>
			<tbody>
				<tr class="empty-row">
					<td colspan="7" class="placeholder">{m.placeholder_no_ca_investigations()}</td>
				</tr>
			</tbody>
		</table>
	</div>

	<SectionHeader title={m.section_treatments()} />

	<FormField label={m.label_add_treatment()} id="it-add-tx">
		<input type="text" id="it-add-tx" placeholder={m.placeholder_type_to_search()} />
	</FormField>

	<div class="table-wrap">
		<table>
			<thead>
				<tr>
					<th>{m.col_treatment()}</th>
					<th>{m.col_requested()}</th>
					<th>{m.col_completed()}</th>
					<th>{m.col_requested_by()}</th>
					<th>{m.col_requested_date()}</th>
					<th>{m.col_completed_by()}</th>
					<th>{m.col_completed_date()}</th>
				</tr>
			</thead>
			<tbody>
				<tr class="empty-row">
					<td colspan="7" class="placeholder">{m.placeholder_no_treatment()}</td>
				</tr>
			</tbody>
		</table>
	</div>

	<button type="button" class="btn-primary">{m.btn_assessment_complete()}</button>
</div>

<style>
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
		white-space: nowrap;
	}

	td {
		padding: 0.5rem 0.6rem;
		border-bottom: 1px solid #e0e0e0;
	}

	.placeholder {
		color: #768692;
		font-style: italic;
	}

	.btn-primary {
		padding: 0.6rem 1.5rem;
		background: #005eb8;
		color: #fff;
		border: none;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 600;
		cursor: pointer;
	}

	.btn-primary:hover {
		background: #003087;
	}

	.btn-primary:focus-visible {
		outline: 3px solid #ffeb3b;
		outline-offset: 2px;
	}
</style>

<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import FormField from '$lib/components/ui/FormField.svelte';
	import RadioGroup from '$lib/components/ui/RadioGroup.svelte';
	import DateTimeNowInput from '$lib/components/ui/DateTimeNowInput.svelte';
	import * as m from '../../../paraglide/messages.js';

	let dischargeDateValue = $state('');
	let dischargeTimeValue = $state('');
	let activityEndDateValue = $state('');
	let activityEndTimeValue = $state('');
</script>

<div class="columns">
	<div class="col">
		<SectionHeader title={m.section_clinical_outcome()} />

		<FormField label={m.label_discharge_decision()} id="dc-decision">
			<DateTimeNowInput id="dc-decision" bind:dateValue={dischargeDateValue} bind:timeValue={dischargeTimeValue} />
		</FormField>

		<FormField label={m.label_discharging_clinician()} id="dc-clinician">
			<select id="dc-clinician">
				<option value=""></option>
			</select>
		</FormField>

		<FormField label={m.label_discharge_status()} id="dc-status">
			<select id="dc-status">
				<option value=""></option>
			</select>
		</FormField>

		<FormField label={m.label_discharge_destination()} id="dc-dest">
			<select id="dc-dest">
				<option value=""></option>
			</select>
		</FormField>

		<FormField label={m.label_discharge_dest_site()} id="dc-dest-site">
			<select id="dc-dest-site">
				<option value=""></option>
			</select>
		</FormField>

		<SectionHeader title={m.section_left_department()} />

		<FormField label={m.label_activity_end()} id="activity-end">
			<DateTimeNowInput id="activity-end" bind:dateValue={activityEndDateValue} bind:timeValue={activityEndTimeValue} />
		</FormField>

		<FormField label={m.label_attendance_output()} id="att-output">
			<select id="att-output">
				<option value=""></option>
			</select>
		</FormField>

		<FormField label={m.label_discharge_followup()} id="dc-followup">
			<select id="dc-followup">
				<option value=""></option>
			</select>
		</FormField>
	</div>

	<div class="col">
		<SectionHeader title={m.section_inpatient_admission()} />

		<div class="checkbox-row">
			<label><input type="checkbox" /> {m.label_bed_requested()}</label>
		</div>

		<FormField label={m.label_admitting_clinician()} id="admit-clinician">
			<select id="admit-clinician">
				<option value=""></option>
			</select>
		</FormField>

		<FormField label={m.label_admitting_specialty()} id="admit-tfc">
			<select id="admit-tfc">
				<option value=""></option>
			</select>
		</FormField>

		<FormField label={m.label_admitting_ward()} id="admit-ward">
			<select id="admit-ward">
				<option value=""></option>
			</select>
		</FormField>

		<div class="checkbox-row">
			<label><input type="checkbox" /> {m.label_bed_accepted()}</label>
		</div>
	</div>

	<div class="col">
		<SectionHeader title={m.section_gp_discharge()} />

		<FormField label={m.label_gp_discharge_comments()} id="gp-comments">
			<textarea id="gp-comments"></textarea>
		</FormField>

		<RadioGroup
			label={m.label_gp_letter_printed()}
			name="gp-letter"
			options={[m.radio_yes(), m.radio_no()]}
		/>

		<FormField label={m.label_sign_off()} id="sign-off">
			<input type="text" id="sign-off" />
		</FormField>

		<button type="button" class="btn-primary">{m.btn_preview_discharge()}</button>
	</div>
</div>

<style>
	.columns {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.5rem;
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

	@media (max-width: 900px) {
		.columns {
			grid-template-columns: 1fr;
		}
	}
</style>

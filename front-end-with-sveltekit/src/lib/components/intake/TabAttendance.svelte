<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import FormField from '$lib/components/ui/FormField.svelte';
	import RadioGroup from '$lib/components/ui/RadioGroup.svelte';
	import DateTimeNowInput from '$lib/components/ui/DateTimeNowInput.svelte';
	import TextAreaWithCharacterCounter from '$lib/components/ui/TextAreaWithCharacterCounter.svelte';
	import TextInputWithSearch from '$lib/components/ui/TextInputWithSearch.svelte';
	import * as m from '../../../paraglide/messages.js';

	let arrivalDate = $state('');
	let arrivalTime = $state('');
	let registeredDate = $state('');
	let registeredTime = $state('');
	let complaint = $state('');
	let whereHappen = $state('');
	let injuryCause = $state('');
</script>

<div class="columns">
	<div class="col">
		<SectionHeader title={m.section_attendance_details()} />

		<FormField label={m.label_arrival()} id="arrival">
			<DateTimeNowInput id="arrival" bind:dateValue={arrivalDate} bind:timeValue={arrivalTime} />
		</FormField>

		<FormField label={m.label_registered()} id="registered">
			<DateTimeNowInput id="registered" bind:dateValue={registeredDate} bind:timeValue={registeredTime} />
		</FormField>

		<FormField label={m.label_presenting_complaint()} id="att-complaint">
			<TextAreaWithCharacterCounter id="att-complaint" bind:value={complaint} maxlength={500} />
		</FormField>

		<FormField label={m.label_reason_attending()} id="reason">
			<select id="reason">
				<option value=""></option>
			</select>
		</FormField>

		<div class="checkbox-row">
			<label><input type="checkbox" /> {m.label_specific_datetime()}</label>
		</div>

		<FormField label={m.label_when_happen()} id="when-happen">
			<select id="when-happen">
				<option value=""></option>
				<option value="1">1 hour ago</option>
				<option value="2">2 hours ago</option>
				<option value="3">3 hours ago</option>
				<option value="6">6 hours ago</option>
				<option value="12">12 hours ago</option>
				<option value="24">24 hours ago</option>
				<option value="48">48 hours ago</option>
				<option value="more">More than 48 hours ago</option>
			</select>
		</FormField>

		<FormField label={m.label_patient_care_stream()} id="care-stream">
			<select id="care-stream">
				<option value=""></option>
			</select>
		</FormField>

		<FormField label={m.label_current_location()} id="current-loc">
			<select id="current-loc">
				<option value=""></option>
			</select>
		</FormField>
	</div>

	<div class="col">
		<SectionHeader title={m.section_arrival_details()} />

		<FormField label={m.label_arrival_mode()} id="arrival-mode">
			<select id="arrival-mode">
				<option value=""></option>
				<option value="ambulance">Ambulance</option>
				<option value="walk_in">Walk-in</option>
				<option value="police">Police</option>
				<option value="other">Other</option>
			</select>
		</FormField>

		<SectionHeader title={m.section_ambulance_details()} />
		<textarea class="standalone-textarea" placeholder={m.placeholder_ambulance_na()}></textarea>

		<SectionHeader title={m.section_police_details()} />
		<textarea class="standalone-textarea" placeholder={m.placeholder_police_na()}></textarea>

		<SectionHeader title={m.section_additional_info()} />

		<RadioGroup
			label={m.label_abroad_last_4_weeks()}
			name="abroad"
			options={[m.radio_yes(), m.radio_no(), m.radio_unknown()]}
		/>

		<FormField label={m.label_which_countries()} id="countries">
			<select id="countries" multiple>
				<option value=""></option>
			</select>
		</FormField>

		<FormField label={m.label_return_date()} id="return-date">
			<input type="date" id="return-date" />
		</FormField>
	</div>

	<div class="col">
		<SectionHeader title={m.section_injury_details()} />

		<FormField label={m.label_where_happen()} id="where-happen">
			<TextInputWithSearch id="where-happen" bind:value={whereHappen} placeholder={m.placeholder_type_to_search()} />
		</FormField>

		<FormField label={m.label_home_status()} id="home-status">
			<input type="text" id="home-status" />
		</FormField>

		<FormField label={m.label_location_lookup()} id="postcode">
			<input type="text" id="postcode" placeholder={m.placeholder_type_to_search()} />
		</FormField>

		<FormField label={m.label_patient_activity()} id="activity">
			<select id="activity">
				<option value=""></option>
			</select>
		</FormField>

		<FormField label={m.label_type_of_activity()} id="activity-type">
			<select id="activity-type">
				<option value=""></option>
			</select>
		</FormField>

		<FormField label={m.label_injury_caused_by()} id="injury-cause">
			<TextInputWithSearch id="injury-cause" bind:value={injuryCause} placeholder={m.placeholder_type_to_search()} />
		</FormField>

		<button type="button" class="btn-secondary">{m.btn_full_injury_details()}</button>

		<SectionHeader title={m.section_accommodation()} />

		<FormField label={m.label_accommodation_status()} id="accom-status">
			<select id="accom-status">
				<option value=""></option>
			</select>
		</FormField>
	</div>
</div>

<style>
	.columns {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.5rem;
	}

	.standalone-textarea {
		width: 100%;
		padding: 0.4rem 0.5rem;
		border: 2px solid #768692;
		border-radius: 4px;
		font-size: 0.9rem;
		font-family: inherit;
		min-height: 4rem;
		resize: vertical;
		margin-bottom: 0.75rem;
	}

	.standalone-textarea:focus {
		outline: 3px solid #ffeb3b;
		outline-offset: 0;
		border-color: #003087;
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

	.btn-secondary {
		padding: 0.5rem 1rem;
		background: #425563;
		color: #fff;
		border: none;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 600;
		cursor: pointer;
		margin-bottom: 1rem;
	}

	.btn-secondary:hover {
		background: #003087;
	}

	.btn-secondary:focus-visible {
		outline: 3px solid #ffeb3b;
		outline-offset: 2px;
	}

	@media (max-width: 900px) {
		.columns {
			grid-template-columns: 1fr;
		}
	}
</style>

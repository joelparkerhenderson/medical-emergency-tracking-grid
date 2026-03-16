<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import FormField from '$lib/components/ui/FormField.svelte';
	import RadioGroup from '$lib/components/ui/RadioGroup.svelte';
	import TextAreaWithCharacterCounter from '$lib/components/ui/TextAreaWithCharacterCounter.svelte';
	import * as m from '../../../paraglide/messages.js';

	let triComplaint = $state('');
	let triComments = $state('');
</script>

<div class="columns">
	<div class="col">
		<SectionHeader title={m.section_triage_details()} />

		<FormField label={m.label_presenting_complaint()} id="tri-complaint">
			<TextAreaWithCharacterCounter id="tri-complaint" bind:value={triComplaint} maxlength={500} />
		</FormField>

		<FormField label={m.label_done_by()} id="tri-done-by">
			<select id="tri-done-by">
				<option value=""></option>
			</select>
		</FormField>

		<FormField label={m.label_date()} id="tri-date">
			<input type="date" id="tri-date" />
		</FormField>

		<FormField label={m.label_time()} id="tri-time">
			<input type="time" id="tri-time" />
		</FormField>

		<div class="checkbox-row">
			<label><input type="checkbox" /> {m.label_see_and_treat()}</label>
		</div>

		<div class="checkbox-row">
			<label><input type="checkbox" /> {m.label_rapid_assessment()}</label>
		</div>

		<FormField label={m.label_comments()} id="tri-comments">
			<TextAreaWithCharacterCounter id="tri-comments" bind:value={triComments} maxlength={1000} />
		</FormField>

		<button type="button" class="btn-primary">{m.btn_open_manchester()}</button>

		<FormField label={m.label_manchester_complaint()} id="manchester-complaint">
			<select id="manchester-complaint">
				<option value=""></option>
			</select>
		</FormField>

		<FormField label={m.label_manchester_discriminator()} id="manchester-disc">
			<select id="manchester-disc">
				<option value=""></option>
			</select>
		</FormField>
	</div>

	<div class="col">
		<SectionHeader title={m.section_initial_observations()} />

		<FormField label={m.label_done_by()} id="obs-done-by">
			<select id="obs-done-by">
				<option value=""></option>
			</select>
		</FormField>

		<RadioGroup
			label={m.label_pregnant()}
			name="pregnant"
			options={[m.radio_yes(), m.radio_no(), m.radio_unknown()]}
		/>

		<SectionHeader title={m.section_news2()} />

		<FormField label={m.label_respirations()} id="respirations">
			<input type="number" id="respirations" min="0" />
		</FormField>

		<RadioGroup
			label={m.label_hypercapnic()}
			name="hypercapnic"
			options={[m.radio_yes(), m.radio_no(), m.radio_unknown()]}
		/>

		<FormField label={m.label_oxygen_sat()} id="spo2">
			<input type="number" id="spo2" min="0" max="100" />
		</FormField>

		<FormField label={m.label_air_o2()} id="air-o2">
			<input type="number" id="air-o2" min="0" />
		</FormField>

		<FormField label={m.label_blood_pressure()} id="bp">
			<input type="text" id="bp" placeholder="120/80" />
		</FormField>

		<FormField label={m.label_pulse()} id="pulse">
			<input type="number" id="pulse" min="0" />
		</FormField>

		<FormField label={m.label_acvpu()} id="acvpu">
			<select id="acvpu">
				<option value=""></option>
				<option value="A">Alert</option>
				<option value="C">Confusion</option>
				<option value="V">Voice</option>
				<option value="P">Pain</option>
				<option value="U">Unresponsive</option>
			</select>
		</FormField>

		<FormField label={m.label_temperature()} id="temp">
			<input type="number" id="temp" step="0.1" />
		</FormField>

		<FormField label={m.label_total_score()} id="news-total">
			<input type="number" id="news-total" readonly />
		</FormField>
	</div>

	<div class="col">
		<SectionHeader title={m.section_further_observations()} />

		<FormField label={m.label_blood_glucose()} id="glucose">
			<input type="text" id="glucose" />
		</FormField>

		<FormField label={m.label_peak_flow()} id="peak-flow">
			<input type="text" id="peak-flow" />
		</FormField>

		<FormField label={m.label_pupil_reactions()} id="pupils">
			<input type="text" id="pupils" />
		</FormField>

		<FormField label={m.label_visual_acuity()} id="visual-acuity">
			<input type="text" id="visual-acuity" />
		</FormField>

		<SectionHeader title={m.section_further_injury()} />

		<FormField label={m.label_injury_intent()} id="injury-intent">
			<select id="injury-intent">
				<option value=""></option>
			</select>
		</FormField>

		<RadioGroup
			label={m.label_intoxicant()}
			name="intoxicant"
			options={[m.radio_yes(), m.radio_no(), m.radio_unknown_not_recorded()]}
		/>

		<button type="button" class="btn-secondary">{m.btn_full_injury_details()}</button>
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
		padding: 0.5rem 1rem;
		background: #005eb8;
		color: #fff;
		border: none;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 600;
		cursor: pointer;
		margin-bottom: 1rem;
	}

	.btn-primary:hover {
		background: #003087;
	}

	.btn-primary:focus-visible {
		outline: 3px solid #ffeb3b;
		outline-offset: 2px;
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

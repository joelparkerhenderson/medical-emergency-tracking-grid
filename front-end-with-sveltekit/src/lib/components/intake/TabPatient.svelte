<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import FormField from '$lib/components/ui/FormField.svelte';
	import RadioGroup from '$lib/components/ui/RadioGroup.svelte';
	import TelInput from '$lib/components/ui/TelInput.svelte';
	import TextInputWithSearch from '$lib/components/ui/TextInputWithSearch.svelte';
	import UnitedKingdomNationalHealthServiceNumberInput from '$lib/components/ui/UnitedKingdomNationalHealthServiceNumberInput.svelte';
	import * as m from '../../../paraglide/messages.js';

	let nhsNumber = $state('');
	let mainAddressSearch = $state('');
	let tempAddressSearch = $state('');
	let mobile = $state('');
	let dayPhone = $state('');
	let nightPhone = $state('');
	let nokMobile = $state('');
	let kcMobile = $state('');
</script>

<div class="columns">
	<div class="col">
		<SectionHeader title={m.section_identification()} />

		<FormField label={m.label_crn()} id="crn">
			<input type="text" id="crn" />
		</FormField>

		<FormField label={m.label_nhs()} id="nhs">
			<UnitedKingdomNationalHealthServiceNumberInput id="nhs" bind:value={nhsNumber} />
		</FormField>

		<FormField label={m.label_title()} id="title">
			<input type="text" id="title" />
		</FormField>

		<FormField label={m.label_sex()} id="sex">
			<select id="sex">
				<option value=""></option>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="other">Other</option>
				<option value="unknown">Unknown</option>
			</select>
		</FormField>

		<FormField label={m.label_surname()} id="surname">
			<input type="text" id="surname" />
		</FormField>

		<FormField label={m.label_forename()} id="forename">
			<input type="text" id="forename" />
		</FormField>

		<FormField label={m.label_dob()} id="dob">
			<input type="date" id="dob" />
		</FormField>

		<FormField label={m.label_main_address()} id="main-address">
			<TextInputWithSearch id="main-address" bind:value={mainAddressSearch} placeholder={m.placeholder_type_to_search()} />
			<textarea></textarea>
		</FormField>

		<FormField label={m.label_temp_address()} id="temp-address">
			<TextInputWithSearch id="temp-address" bind:value={tempAddressSearch} placeholder={m.placeholder_type_to_search()} />
			<textarea></textarea>
		</FormField>

		<FormField label={m.label_marital_status()} id="marital">
			<select id="marital">
				<option value=""></option>
				<option value="single">Single</option>
				<option value="married">Married</option>
				<option value="civil_partner">Civil Partner</option>
				<option value="divorced">Divorced</option>
				<option value="widowed">Widowed</option>
				<option value="separated">Separated</option>
				<option value="unknown">Unknown</option>
			</select>
		</FormField>

		<FormField label={m.label_ethnic_group()} id="ethnic">
			<select id="ethnic">
				<option value=""></option>
				<option value="white_british">White - British</option>
				<option value="white_irish">White - Irish</option>
				<option value="white_other">White - Other</option>
				<option value="mixed_white_caribbean">Mixed - White and Black Caribbean</option>
				<option value="mixed_white_african">Mixed - White and Black African</option>
				<option value="mixed_white_asian">Mixed - White and Asian</option>
				<option value="asian_indian">Asian - Indian</option>
				<option value="asian_pakistani">Asian - Pakistani</option>
				<option value="asian_bangladeshi">Asian - Bangladeshi</option>
				<option value="asian_chinese">Asian - Chinese</option>
				<option value="black_caribbean">Black - Caribbean</option>
				<option value="black_african">Black - African</option>
				<option value="other">Other</option>
				<option value="not_stated">Not stated</option>
			</select>
		</FormField>
	</div>

	<div class="col">
		<SectionHeader title={m.section_registered_gp()} />

		<FormField label={m.label_gp_practice()} id="gp-practice">
			<select id="gp-practice">
				<option value=""></option>
			</select>
			<textarea rows="2"></textarea>
		</FormField>

		<FormField label={m.label_registered_gp()} id="registered-gp">
			<select id="registered-gp">
				<option value=""></option>
			</select>
		</FormField>

		<SectionHeader title={m.section_comm_prefs()} />

		<FormField label={m.label_preferred_language()} id="lang">
			<select id="lang">
				<option value="en">English</option>
				<option value="cy">Cymraeg (Welsh)</option>
				<option value="other">Other</option>
			</select>
		</FormField>

		<RadioGroup
			label={m.label_interpreter_required()}
			name="interpreter"
			options={[m.radio_yes(), m.radio_no(), m.radio_declined()]}
		/>
	</div>

	<div class="col">
		<SectionHeader title={m.section_telephone()} />

		<FormField label={m.label_mobile()} id="mobile">
			<TelInput id="mobile" bind:value={mobile} />
		</FormField>

		<FormField label={m.label_day_phone()} id="day-phone">
			<TelInput id="day-phone" bind:value={dayPhone} />
		</FormField>

		<FormField label={m.label_night_phone()} id="night-phone">
			<TelInput id="night-phone" bind:value={nightPhone} />
		</FormField>

		<SectionHeader title={m.section_contact()} />

		<FormField label={m.label_nok_name()} id="nok-name">
			<input type="text" id="nok-name" />
		</FormField>

		<FormField label={m.label_nok_mobile()} id="nok-mobile">
			<TelInput id="nok-mobile" bind:value={nokMobile} />
		</FormField>

		<FormField label={m.label_key_contact_name()} id="kc-name">
			<input type="text" id="kc-name" />
		</FormField>

		<FormField label={m.label_key_contact_mobile()} id="kc-mobile">
			<TelInput id="kc-mobile" bind:value={kcMobile} />
		</FormField>
	</div>
</div>

<style>
	.columns {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.5rem;
	}

	@media (max-width: 900px) {
		.columns {
			grid-template-columns: 1fr;
		}
	}
</style>

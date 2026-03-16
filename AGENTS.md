# Medical Emergency Department Tracking Grid

Medical Emergency Department Tracking Grid — a tool for tracking patients and resources in hospital emergency departments.

@AGENTS.md
@../AGENTS/sveltekit.md
@../AGENTS/patient-banner.md

Use maximum thinking. Think carefully.

- Update AGENTS.md plan.md tasks.md

## Design principles

Section starts with headline <h2> blue bar

## Holy Grail layout:

- Top header
- Left aside nav bar with icon buttons (and wide/narrow open/close button)
- Center main content
- Right aside nav bar with icon buttons (and wide/narrow open/close button)
- Bottom footer

### Top Header

- NHS Wales Logo
- The text "Urgent Emergency Care: {page title}"

### Left aside nav bar with icon buttons

- Arrow that makes nav bar wider or narrower
- [Home](/)
- [Tracking grid](/tracking-grid)
- [Patient search](/patient-search)
- [Staff details](/staff-details)
- [Settings](/settings)

### Right aside nav bar with icon buttons

- Arrow that makes nav bar wider or narrower
- [Help](/help)
- [Email](/email)
- [Phone](/phone)

### Footer with links

- Help
- Copyright
- Privacy Policy
- Security Policy

## Svelte components

### Medical banner components

- MedicalBanner: a prominent message bar across the top of a page, with medical information
- MedicalBannerBox: a medical banner box that is inside a medical-banner component, using flexbox horizontal, with medical information
- MedicalBannerBoxForDanger: a medical record banner box for danger information e.g. reactions, warnings, alarms, etc.
- MedicalBannerBoxForAdvice: a medical record banner box for advice information e.g. contacts, contexts, plans, etc.

### UI input components

- DateTimeNowInput: an input for entering a date and time with a "Now" button <input type="date"><input type="time"><button type="button">
- FormField: a wrapper for a label and form control (input, select, textarea)
- RadioGroup: a fieldset with radio buttons
- SectionHeader: a blue bar section heading <h2>
- TelInput: an input for entering a telephone number <input type="tel">
- TextAreaWithCharacterCounter: a multi-line text area with a caption below that is a character counter "[number] of [maximum] characters"
- TextInputWithSearch: a single-line text input field <input type="text"> with search capability
- UnitedKingdomNationalHealthServiceNumberInput: an input for entering a UK NHS number with auto-formatting and modulus 11 checksum validation
- UnitedKingdomNationalHealthServiceNumberView: a read-only display of a UK NHS number formatted as "000 000 0000"

### Layout components

- Sidebar: a collapsible left/right navigation sidebar with icon buttons

## Pages

### Page: Tracking Grid (route /tracking-grid)

Header area with statistics tiles:

- "ALL" and count
- "Ambulances" and count
- "Consultation rooms" and count
- "Resus" and number
- "Trolleys" and number
- "Waiting Rooms" and number
- "Misc/Other" and number

### Page: Patient Intake (/patient-intake)

Pattern:

```svelte
<MedicalBanner>
    <MedicalBannerBoxForDanger>
        - "Reactions"
        - Allergies
        - Sensitivities
        - Intolerances
        - etc.
    </MedicalBannerBoxForDanger>
    <MedicalBannerBoxForDanger>
        - "Warnings"
        - Alerts
        - Dangers
        - Cautions
        - etc.
    </MedicalBannerBoxForDanger>
    <MedicalBannerBoxForAdvice>
        - "Contact"
        - Name
        - NHS (National Health Service Number)
        - MRN (Medical Record Number)
        - Gender (Male/Female/Other/Unknown)
    </MedicalBannerBoxForAdvice>
</MedicalBanner>

- Tab: "Patient"
  - Column 1
    - Section: "Identification details"
    - "CRN" <text>
    - "NHS Number" <UnitedKingdomNationalHealthServiceNumberInput>
    - "Title" <text>
    - "Sex" <select>
    - "Surname" <text>
    - "Forename" <text>
    - "Date of birth" <date>
    - "Main address" <TextInputWithSearch> <textarea with freeform>
    - "Temporary address" <TextInputWithSearch> <textarea with freeform>
    - "Marital status" <select>
    - "Ethnic group" <select>
  - Column 2
    - Section: "Registered GP details"
      - "GP Practice" <select> <textarea>
      - "Registered GP" <select> <text>
    - Section: "Communication preferences"
      - "Preferred language" <select>
      - "Interpreter required" <radio> "Yes", "No", "Declined"
  - Column 3
    - Section: "Telephone numbers"
      - "Mobile" <TelInput>
      - "Day" <TelInput>
      - "Night" <TelInput>
    - Section: "Contact details"
      - "Next of kin name" <text>
      - "Next of kin mobile telephone" <TelInput>
      - "Key contact name" <text>
      - "Key contact mobile telephone" <TelInput>
- Tab: "Attendance"
  - Column 1
    - Section: "Attendance details"
    - "Arrival" <DateTimeNowInput>
    - "Registered" <DateTimeNowInput>
    - "Presenting complaint" <TextAreaWithCharacterCounter>
    - "Reason for attending" <select>
    - <checkbox> "Specific date/time"
    - "When did this happen?" <select hours-ago>
    - "Patient care stream" <select>
    - "Current location" <select>
  - Column 2
    - Section: "Arrival details"
      - "Arrival mode" <select>
    - Section: "Ambulance details"
      - Textarea placeholder "The patient did not arrive via ambulance" <textarea>
    - Section: "Police details"
      - Textarea placeholder "The patient did not arrive via police" <textarea>
    - Section: "Additional information"
      - "Has patient been abroad in last 4 weeks?" <radio> "Yes", "No", "Unknown"
      - "Which countries?" <multi-select>
      - "When did patient return home?" <date>
  - Column 3
    - Section: "Injury details"
      - "Where did it happen?" <TextInputWithSearch>
      - "Home status (if domestic)" <text>
      - "Location lookup" <postcode-search>
      - "What was patient doing (at time of injury activity)" <select>
      - "Type of activity" <select>
      - "Injury caused by" <TextInputWithSearch>
      - Button "Full injury details"
    - Section: "Accommodation"
      - "Status" <select>
- Tab: "Triage/Initial Assessment"
  - Column 1
    - Section: "Details"
      - "Presenting complaint" <TextAreaWithCharacterCounter>
      - "Done by" <select> clinician
      - "Date" <date>
      - "Time" <time>
      - "See and treat" <checkbox>
      - "Rapid assessment" <checkbox>
      - "Comments" <TextAreaWithCharacterCounter>
      - Button: "Open Manchester Triage"
      - "Manchester triage presenting complaint" <select>
      - "Manchester triage initial discriminator" <select>
  - Column 2
    - Section: "Initial observations"
      - "Done by" <select> clinician
      - "Pregnant?" <radio> "Yes", "No", "Unknown"
    - Section: "NEWS2"
      - "Respirations (bpm)" <count>
      - "Hypercapnic respiratory failure" <radio> "Yes", "No", "Unknown"
      - "Oxygen saturation % SpO2 Scale 1" <percent>
      - "Air or O2 (l/min)" <count>
      - "Blood pressure (mmHg)" <count>
      - "Pulse (bpm)" <count>
      - "ACVPU" <select>
      - "Temperature °C"
      - "Total Score" <count>
  - Column 3
    - Section: "Further observations"
      - "Blood glucose" <text>
      - "Peak flow (PEFR)" <text>
      - "Pupil reactions" <text>
      - "Visual acuity" <text>
    - Section: "Further injury details"
      - "Injury intent" <select>
      - "Intoxicant involvement" <radio> "Yes", "No", "Unknown or not recorded"
    - Button: "Full injury details"
- Tab: "Clinical Assessment"
  - Column 1 is a task list with left checkboxes
    - Section: "Medical headings"
      - <checkbox> "Investigations"
      - <checkbox> "Treatment Plan"
      - <checkbox> "Past Medical History"
      - <checkbox> "Drug History on Admission"
      - <checkbox> "Social History"
      - <checkbox> "Family History"
      - <checkbox> "Collateral History"
      - <checkbox> "Examination"
      - <checkbox> "Clinical Problem List"
      - <checkbox> "Management Plan"
      - <checkbox> "Comorbidity"
      - <checkbox> "Diagnosis"
  - Section: "Outcomes"
    - <checkbox> "Handover"
    - <checkbox> "TODO"
    - <checkbox> "TODO"
    - <checkbox> "TODO"
  - Column 2
    - "Done by" <select> clinician
    - "Presenting complaint" <text>
    - "History of presenting complaint" <textarea>
    - "Document is highly sensitive" <checkbox>
  - Section: "Investigations"
    - "Add investigation" <TextInputWithSearch>
    - "Notes" <textarea>
    - Table
      - Columns
        - "Investigation" (text phrase)
        - "Requested" (checkmark or blank)
        - "Completed" (checkmark or blank)
        - "Requested by" (clinician name and id)
  - Section: "Treatments"
    - "Add treatment" <TextInputWithSearch>
    - "Notes" <textarea>
    - Table
      - Columns
        - "Treatment" (text phrase)
        - "Requested" (checkmark or blank)
        - "Completed" (checkmark or blank)
        - "Requested by" (clinician name and id)
- Tab: "Investigations &amp; Treatments"
  - Section: "Investigations"
    - Label: "Add investigation"
    - Text input + placeholder "Type to search"
    - Table
      - Columns
        - "Investigation" (text phrase)
        - "Requested" (checkmark or blank)
        - "Completed" (checkmark or blank)
        - "Requested by" (clinician)
        - "Requested date" (date)
        - "Completed by" (clinician)
        - "Completed date" (date)
  - Section: "Treatments"
    - Label: "Add treatment"
    - Text input + placeholder "Type to search"
    - Table
      - Columns
        - "Treatment" (text phrase)
        - "Requested" (checkmark or blank)
        - "Completed" (checkmark or blank)
        - "Requested by" (clinician name and id)
        - "Requested date" (date)
        - "Completed by" (clinician)
        - "Completed date" (date)
  - Button: "Assessment complete"
- Tab: "Clinical Outcome &amp; Discharge"
  - Column 1
    - Section: "Clinical outcome" <section><header>
      - "Discharge decision date/time" <DateTimeNowInput>
      - "Discharging clinician" <select>
      - "Discharge status" <select>
      - "Discharge destination" <select>
      - "Discharge destination site" <select>
    - "Left department" section header blue bar
      - "Activity end (time patient left department)" <DateTimeNowInput>
      - "Attendance output" <select>
      - "Discharge followup" <select>
  - Column 2
    - Section: "Inpatient admission" <section><header>
      - "Bed requested" <input type="checkbox">
      - "Admitting clinician" <select>
      - "Admitting specialty (TFC)" <select>
      - "Admitting ward" <select>
      - "Bed accepted" <input type="checkbox">
  - Column 3
    - Section: "GP discharge" <section><header>
      - "Doctor's discharge comments for GP:" with <textarea>
      - "Has the GP letter been printed and given to the patient?" <input type="radio"> "Yes", "No"
      - "Sign off"
      - Button: "Preview discharge summary"
```

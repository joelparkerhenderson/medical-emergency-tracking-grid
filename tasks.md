# Tasks

## 1. Technology Setup

- [x] Set up Svelte 5 + SvelteKit 2 + TypeScript + Vite
- [x] Set up Paraglide-JS internationalization (English, Welsh)
- [x] Set up Vitest + @testing-library/svelte testing
- [x] Implement Holy Grail layout (header, left sidebar, main, right sidebar, footer)

## 2. Data Model

- [x] Define Patient interface (surname, forename, age, gender, nhsNumber, department, location, arrivalTime, triageLevel, alerts, allergies, chiefComplaint, hasDuplicateName)
- [x] Define TriageLevel (1-5) with color mappings
- [x] Define PatientLocation enum (ambulance, consultation_room, resus, trolley, waiting_room, other)
- [x] Create sample patient data (8 patients)
- [x] Create reactive patient store (stores.svelte.ts)

## 3. Tracking Grid

- [x] Build grid layout with columns: triage, department, arrival time, alerts, allergies, age, chief complaint, surname, forename
- [x] Exclude NHS number from grid display
- [x] Apply color coding to triage/acuity column
- [x] Display alerts and allergies indicators in grid rows

## 4. Duplicate Name Detection

- [x] Implement phonetic code algorithm (Soundex-like) for name matching
- [x] Flag exact matches and similar names across current grid patients
- [x] Display visual indicator on grid rows where names match
- [x] Write unit tests for phonetic matching

## 5. Single-Click Demographics Panel

- [x] Implement single-click handler on patient rows
- [x] Build demographics panel component (displays at top of page)
- [x] Show surname, full name, age, NHS number in demographics panel

## 6. Double-Click Patient Record

- [x] Implement double-click handler on patient rows
- [x] Build patient record view with clinical tabs
- [x] Display alerts and allergies at top of patient record page

## 7. Medical Banner Components

- [x] MedicalBanner container
- [x] MedicalBannerBox generic box
- [x] MedicalBannerBoxForDanger (red alert boxes)
- [x] MedicalBannerBoxForAdvice (blue information boxes)

## 8. UI Components

- [x] DateTimeNowInput (date + time + "Now" button)
- [x] FormField (label + control wrapper)
- [x] RadioGroup (fieldset with radio buttons)
- [x] SectionHeader (blue bar heading)
- [x] TelInput (telephone number input)
- [x] TextAreaWithCharacterCounter (textarea with live counter)
- [x] TextInputWithSearch (combobox with search dropdown)
- [x] UnitedKingdomNationalHealthServiceNumberInput (NHS number with validation)
- [x] UnitedKingdomNationalHealthServiceNumberView (read-only formatted display)

## 9. Patient Intake Form

- [x] Tab: Patient (identification, GP, communication, telephone, contacts)
- [x] Tab: Attendance (arrival, ambulance/police, injury, accommodation)
- [x] Tab: Triage/Initial Assessment (Manchester triage, NEWS2, observations)
- [x] Tab: Clinical Assessment (medical headings checklist, investigations, treatments)
- [x] Tab: Investigations & Treatments (full tracking tables)
- [x] Tab: Clinical Outcome & Discharge (discharge, inpatient admission, GP discharge)
- [ ] Integrate new UI components into intake tabs (replace bare inputs with TelInput, TextAreaWithCharacterCounter, UnitedKingdomNationalHealthServiceNumberInput, DateTimeNowInput, TextInputWithSearch)

## 10. Internationalization

- [x] Set up Paraglide-JS message catalog
- [x] Translate all field labels, section headers, button text, placeholders
- [ ] Add Welsh language translations

## 11. Testing & Polish

- [x] Phonetic name matching unit tests
- [ ] Component unit tests for UI components
- [ ] Integration tests for patient intake form
- [ ] Accessibility audit (ARIA attributes, keyboard navigation, focus management)
- [ ] Responsive layout testing

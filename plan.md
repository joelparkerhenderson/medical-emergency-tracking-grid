# Plan

## Overview

Build a medical emergency department tracking grid for monitoring patients and resources. The grid is the primary interface used by ED staff to track all current patients.

## Architecture

### Technology Stack

- Svelte 5 with runes ($state, $derived, $props, $bindable)
- SvelteKit 2 with adapter-auto
- TypeScript (strict mode)
- Vite dev server and build
- Paraglide-JS for internationalization (English, Welsh)
- Vitest + @testing-library/svelte for testing

### Component Architecture

Components are organized under `app/src/lib/components/`:

- `medical/` — Patient banner components (MedicalBanner, MedicalBannerBox, MedicalBannerBoxForDanger, MedicalBannerBoxForAdvice)
- `ui/` — Reusable form inputs (DateTimeNowInput, FormField, RadioGroup, SectionHeader, TelInput, TextAreaWithCharacterCounter, TextInputWithSearch, UnitedKingdomNationalHealthServiceNumberInput, UnitedKingdomNationalHealthServiceNumberView)
- `layout/` — Layout components (Sidebar)
- `intake/` — Patient intake tab components (TabPatient, TabAttendance, TabTriage, TabClinicalAssessment, TabInvestigationsTreatments, TabClinicalOutcomeDischarge)
- `clinical/` — Clinical record tab components (same tab structure as intake)

### Tracking Grid (Main View)

The grid displays one row per patient with these columns:

- Time and department
- Time of arrival
- Triage/acuity level (color-coded)
- Alerts
- Allergies
- Age
- Chief complaint
- Surname
- Forename
- Duplicate name indicator (flag if name matches or is similar to another patient on the grid)

NHS number is intentionally excluded from the grid view to reduce clutter and protect patient data. It is accessible via the demographics panel.

### Interactions

**Single-click a patient row:**
- Opens a demographics panel at the top of the page
- Shows: surname, full name, age, NHS number

**Double-click a patient row:**
- Navigates into the full patient record
- Alerts and allergies are displayed at the top of the patient record page
- Lands directly in the patient record (no intermediate screens)

### Duplicate Name Detection

- When a patient is added or updated, compare their name against all other patients currently on the grid
- Flag exact matches and similar names (e.g. spelling variations, phonetic matches)
- Display a visual indicator on the grid row next to the patient name

## Constraints

- Must support real-time or near-real-time updates (ED environment)
- Must be usable on desktop screens at nursing stations
- Patient data handling must comply with relevant data protection requirements

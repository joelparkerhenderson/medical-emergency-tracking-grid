## Patient banner

A patient banner is a standardized, prominent header in electronic health records (EHR) and clinical systems used to consistently display crucial patient identification and safety information. It usually contains the patient's name, DOB, gender, NHS/MRN number, allergies, and current encounter details to ensure accurate patient identification.

## User interface

Patient banner header summary area shows:

- "Adverse reactions" card in red rectangle
  - "Confirm/Edit" button
- "Warnings" card in red rectangle
  - "Confirm/Edit" button
- "Open WCP" button
- Patient card with:
  - NHS Number
  - Hospital medical record number
  - Postal address
  - Date of birth
  - Age
  - Gender

## Components

- `MedicalBanner` — Flex container wrapper. Accepts children (banner box components).
- `MedicalBannerBox` — Generic box with blue header. Props: `title`, `children`.
- `MedicalBannerBoxForDanger` — Red alert box with "Confirm/Edit" button. Props: `title`, `children`. Uses `role="alert"`.
- `MedicalBannerBoxForAdvice` — Blue information box. Props: `title`, `children`.

## Background information

### Key Features of a Patient Banner

- Essential Identification: Name (surname/forename), date of birth (and age), gender, and NHS/CHI number.
- Safety Information: Allergy status (e.g., 'no known allergies,' or specific allergens) and often flags for infection risk or alerts.
- Encounter Context: Displays the current location, consultant, and active visit/episode of care.
- Contact Info: Access to patient address and phone number, often visible upon clicking.
- Active Status: Frequently shows active isolation status or resuscitation status.

### Sticky

These banners are designed to be "sticky" or consistently visible at the top of
the screen across different pages in a patient's record to prevent errors, as
seen in YouTube and Patients Know Best.

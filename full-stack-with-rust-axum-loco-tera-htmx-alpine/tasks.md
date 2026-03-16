# Tasks

## 1. Project Setup

- [x] Scaffold Loco project with PostgreSQL, async workers, server-side assets
- [x] User model and authentication (JWT, magic link, email verification)
- [x] Tera view engine initializer with Fluent i18n
- [x] CI workflow (GitHub Actions)
- [ ] Update Cargo.toml to Rust edition 2024
- [ ] Add assertables dev-dependency for testing
- [ ] Add HTMX and Alpine.js CDN scripts to base layout template
- [ ] Create base layout template with NHS Wales branding (Holy Grail layout)

## 2. Database Migrations

- [x] Users table migration (scaffolded)
- [ ] Patients table migration (id, pid, surname, forename, age, gender, nhs_number, department, location, arrival_time, triage_level, chief_complaint, created_at, updated_at)
- [ ] Patient alerts table migration (patient_id, alert_text)
- [ ] Patient allergies table migration (patient_id, allergy_text)
- [ ] Investigations table migration (patient_id, name, requested, completed, requested_by, requested_date, completed_by, completed_date)
- [ ] Treatments table migration (patient_id, name, requested, completed, requested_by, requested_date, completed_by, completed_date)

## 3. Models

- [x] User model with authentication (scaffolded)
- [ ] Patient model with SeaORM entity
- [ ] PatientAlert model
- [ ] PatientAllergy model
- [ ] Investigation model
- [ ] Treatment model
- [ ] Triage level enum (1-5 with color mappings)
- [ ] Patient location enum
- [ ] Duplicate name detection (phonetic matching)

## 4. Controllers & Routes

- [x] Auth controller (scaffolded)
- [ ] Home controller (redirect to tracking grid)
- [ ] Tracking grid controller (GET /tracking-grid)
- [ ] Patient intake controller (GET /patient-intake, POST /patient)
- [ ] Patient detail controller (GET /patient/:id, PUT /patient/:id)
- [ ] Patient search controller (GET /patient-search)
- [ ] HTMX partial endpoints for demographics panel, search results, form fragments

## 5. Tera Templates

- [ ] Base layout template (header, left sidebar, main, right sidebar, footer)
- [ ] Tracking grid template (patient table with triage color coding)
- [ ] Patient intake template (tabbed form: Patient, Attendance, Triage, Clinical Assessment, Investigations & Treatments, Clinical Outcome & Discharge)
- [ ] Patient detail template (clinical record view)
- [ ] Patient search template
- [ ] HTMX fragment templates (demographics panel, search results, form sections)
- [ ] Error templates (404, 500)

## 6. HTMX Integration

- [ ] hx-boost on body for SPA-like navigation
- [ ] Single-click patient row → hx-get demographics panel fragment
- [ ] Patient search with hx-trigger="keyup changed delay:300ms"
- [ ] Form submission with hx-post for patient intake
- [ ] Polling or SSE for real-time grid updates

## 7. Alpine.js Integration

- [ ] Tab switching on patient intake form (x-data, x-show)
- [ ] Conditional form fields (e.g., ambulance details shown when arrival mode = ambulance)
- [ ] Client-side form validation feedback
- [ ] Sidebar expand/collapse toggle

## 8. Seed Data

- [x] User fixtures (scaffolded)
- [ ] Sample patient data (mirror the 8 sample patients from SvelteKit app)
- [ ] Triage level reference data

## 9. Testing

- [x] User model tests (scaffolded)
- [x] Auth request tests (scaffolded)
- [ ] Patient model tests
- [ ] Tracking grid controller tests
- [ ] Patient intake controller tests
- [ ] Patient detail controller tests
- [ ] Duplicate name detection tests
- [ ] HTMX fragment response tests

## 10. Production Readiness

- [ ] Production config (config/production.yaml)
- [ ] Environment variable documentation
- [ ] CORS configuration for FRONTEND_URL
- [ ] Rate limiting on auth endpoints
- [ ] Logging configuration for production

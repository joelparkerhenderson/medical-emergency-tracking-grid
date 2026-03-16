# Plan

## Overview

Build a Rust-based full-stack backend for the Medical Emergency Department Tracking Grid. Uses Loco framework (Rails-like on axum) with Tera server-side templates, HTMX for dynamic page updates without full reloads, and Alpine.js for lightweight client-side interactivity.

## Architecture

### Technology Stack

| Component | Version | Purpose |
| --- | --- | --- |
| Rust | Edition 2024 | Systems programming language |
| axum | 0.8 | Web application framework |
| Loco | 0.16 | Rails-like framework on axum |
| Tera | 1.20 | Server-side template engine |
| SeaORM | 1.1 | Object relational mapper |
| PostgreSQL | 18.3 | Database server |
| serde | 1.x | Serialization with `rename_all = "camelCase"` |
| uuid | 1.6 | UUIDv4 primary keys |
| Assertables | 9.8 | Assertion testing macros |
| HTMX | 2.0.8 | AJAX navigation via hx-boost, live filtering |
| Alpine.js | 3.14.8 | Client-side conditional fields and dynamic lists |

### Backend Pattern

- Loco framework with axum routing
- Tera templates with `<body hx-boost="true">` for SPA-like navigation
- SeaORM entities with PostgreSQL
- JWT authentication (scaffolded by Loco)
- Background workers for async tasks

### Data Model

Core entities needed for the ED tracking grid:

- **Patient** — surname, forename, age, gender, NHS number, department, location, arrival time, triage level, alerts, allergies, chief complaint
- **User** — clinician/staff authentication (scaffolded by Loco)
- **TriageLevel** — 1-5 with color mappings
- **PatientLocation** — ambulance, consultation_room, resus, trolley, waiting_room, other
- **Investigation** — tracking requested/completed investigations per patient
- **Treatment** — tracking requested/completed treatments per patient

### Page Rendering

- Base layout template with NHS Wales branding, Holy Grail layout
- HTMX `hx-boost="true"` on body for SPA-like page transitions
- HTMX `hx-get` / `hx-post` for partial page updates (e.g., demographics panel, search results)
- Alpine.js `x-data` / `x-show` for client-side tab switching, form validation, conditional fields
- Server returns full pages for initial load, HTML fragments for HTMX requests

### Routes

| Method | Path | Description |
| --- | --- | --- |
| GET | `/` | Redirect to tracking grid |
| GET | `/tracking-grid` | Main patient tracking grid |
| GET | `/patient-intake` | Patient intake form |
| GET | `/patient/:id` | Patient record detail |
| POST | `/patient` | Create new patient |
| PUT | `/patient/:id` | Update patient record |
| GET | `/patient-search` | Search patients |
| GET | `/api/auth/*` | Authentication endpoints (scaffolded) |

## Constraints

- Must support real-time or near-real-time updates (HTMX polling or SSE)
- Must be usable on desktop screens at nursing stations
- Patient data handling must comply with relevant data protection requirements
- PostgreSQL required for production; development can use local instance

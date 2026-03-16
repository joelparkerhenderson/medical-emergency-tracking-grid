import * as m from '../paraglide/messages.js';

export interface Patient {
	id: string;
	surname: string;
	forename: string;
	age: number;
	gender: 'M' | 'F';
	nhsNumber: string;
	department: string;
	location: PatientLocation;
	arrivalTime: string; // ISO datetime
	triageLevel: TriageLevel;
	alerts: string[];
	allergies: string[];
	chiefComplaint: string;
	hasDuplicateName: boolean;
}

export type PatientLocation = 'ambulance' | 'consultation_room' | 'resus' | 'trolley' | 'waiting_room' | 'other';

export type TriageLevel = 1 | 2 | 3 | 4 | 5;

export const triageLevels: Record<TriageLevel, { label: () => string; color: string; background: string }> = {
	1: { label: () => m.triage_immediate(), color: '#fff', background: '#d32f2f' },
	2: { label: () => m.triage_very_urgent(), color: '#fff', background: '#f57c00' },
	3: { label: () => m.triage_urgent(), color: '#000', background: '#fdd835' },
	4: { label: () => m.triage_standard(), color: '#fff', background: '#388e3c' },
	5: { label: () => m.triage_non_urgent(), color: '#fff', background: '#1976d2' },
};

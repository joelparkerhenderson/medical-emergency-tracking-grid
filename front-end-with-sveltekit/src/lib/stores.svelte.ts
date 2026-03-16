import type { Patient } from './types.js';
import { samplePatients } from './sample-data.js';
import { flagDuplicateNames } from './duplicate-names.js';

export const patientStore = createPatientStore();

function createPatientStore() {
	let patients = $state<Patient[]>(flagDuplicateNames(samplePatients));
	let selectedPatientId = $state<string | null>(null);

	return {
		get patients() { return patients; },
		get selectedPatientId() { return selectedPatientId; },
		get selectedPatient(): Patient | undefined {
			return patients.find(p => p.id === selectedPatientId);
		},
		select(id: string | null) {
			selectedPatientId = id;
		},
	};
}

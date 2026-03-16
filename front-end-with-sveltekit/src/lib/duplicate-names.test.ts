import { describe, it, expect } from 'vitest';
import { flagDuplicateNames } from './duplicate-names.js';
import type { Patient } from './types.js';

function makePatient(overrides: Partial<Patient> = {}): Patient {
	return {
		id: '1',
		surname: 'Smith',
		forename: 'John',
		age: 45,
		gender: 'M',
		nhsNumber: '000 000 0000',
		department: 'Majors',
		location: 'trolley',
		arrivalTime: '2026-03-16T08:00:00',
		triageLevel: 3,
		alerts: [],
		allergies: [],
		chiefComplaint: 'Test',
		hasDuplicateName: false,
		...overrides,
	};
}

describe('flagDuplicateNames', () => {
	it('returns empty array for empty input', () => {
		expect(flagDuplicateNames([])).toEqual([]);
	});

	it('does not flag a single patient', () => {
		const result = flagDuplicateNames([makePatient()]);
		expect(result[0].hasDuplicateName).toBe(false);
	});

	it('flags exact name duplicates', () => {
		const patients = [
			makePatient({ id: '1', surname: 'Smith', forename: 'John' }),
			makePatient({ id: '2', surname: 'Smith', forename: 'John' }),
		];
		const result = flagDuplicateNames(patients);
		expect(result[0].hasDuplicateName).toBe(true);
		expect(result[1].hasDuplicateName).toBe(true);
	});

	it('flags phonetically similar names', () => {
		const patients = [
			makePatient({ id: '1', surname: 'Smith', forename: 'John' }),
			makePatient({ id: '2', surname: 'Smyth', forename: 'Jon' }),
		];
		const result = flagDuplicateNames(patients);
		expect(result[0].hasDuplicateName).toBe(true);
		expect(result[1].hasDuplicateName).toBe(true);
	});

	it('does not flag different names', () => {
		const patients = [
			makePatient({ id: '1', surname: 'Smith', forename: 'John' }),
			makePatient({ id: '2', surname: 'Patel', forename: 'Priya' }),
		];
		const result = flagDuplicateNames(patients);
		expect(result[0].hasDuplicateName).toBe(false);
		expect(result[1].hasDuplicateName).toBe(false);
	});
});

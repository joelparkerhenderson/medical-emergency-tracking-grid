import type { Patient } from './types.js';

/**
 * Simple phonetic code using a Soundex-like approach.
 * Maps a name to a code so similar-sounding names match.
 */
function phoneticCode(name: string): string {
	const s = name.toUpperCase().trim();
	if (!s) return '';

	const map: Record<string, string> = {
		B: '1', F: '1', P: '1', V: '1',
		C: '2', G: '2', J: '2', K: '2', Q: '2', S: '2', X: '2', Z: '2',
		D: '3', T: '3',
		L: '4',
		M: '5', N: '5',
		R: '6',
	};

	let code = s[0];
	let lastDigit = map[s[0]] || '0';

	for (let i = 1; i < s.length && code.length < 4; i++) {
		const digit = map[s[i]];
		if (digit && digit !== lastDigit) {
			code += digit;
			lastDigit = digit;
		} else if (!digit) {
			lastDigit = '0';
		}
	}

	return code.padEnd(4, '0');
}

function normalise(name: string): string {
	return name.toLowerCase().trim();
}

function namesMatch(a: string, b: string): boolean {
	if (normalise(a) === normalise(b)) return true;
	if (phoneticCode(a) === phoneticCode(b)) return true;
	return false;
}

/**
 * Mark patients whose surname+forename matches or sounds like another patient on the grid.
 */
export function flagDuplicateNames(patients: Patient[]): Patient[] {
	return patients.map((p, i) => {
		const hasDuplicate = patients.some((other, j) => {
			if (i === j) return false;
			return namesMatch(p.surname, other.surname) && namesMatch(p.forename, other.forename);
		});
		return { ...p, hasDuplicateName: hasDuplicate };
	});
}

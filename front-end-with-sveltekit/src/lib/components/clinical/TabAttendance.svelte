<script lang="ts">
	import type { Patient } from '$lib/types.js';
	import * as m from '../../../paraglide/messages.js';

	let { patient }: { patient: Patient } = $props();

	function formatDateTime(iso: string): string {
		const d = new Date(iso);
		return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
			+ ' ' + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
	}
</script>

<div class="tab-content">
	<section>
		<h2>{m.section_attendance_details()}</h2>
		<dl class="field-grid">
			<dt>{m.label_arrival_time()}</dt>
			<dd>{formatDateTime(patient.arrivalTime)}</dd>

			<dt>{m.label_department()}</dt>
			<dd>{patient.department}</dd>

			<dt>{m.label_chief_complaint()}</dt>
			<dd>{patient.chiefComplaint}</dd>
		</dl>
	</section>
</div>

<style>
	.field-grid {
		display: grid;
		grid-template-columns: 10rem 1fr;
		gap: 0.5rem 1rem;
		margin: 0;
	}

	dt {
		font-weight: 600;
		color: #425563;
	}

	dd {
		margin: 0;
	}
</style>

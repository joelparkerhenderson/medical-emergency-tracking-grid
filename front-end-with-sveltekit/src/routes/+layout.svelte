<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import { page } from '$app/state';
	import * as m from '../paraglide/messages.js';

	let { children } = $props();

	const pageTitles: Record<string, () => string> = {
		'/': () => m.page_home(),
		'/tracking-grid': () => m.page_tracking_grid(),
		'/patient-intake': () => m.page_patient_intake(),
		'/patient-search': () => m.page_patient_search(),
		'/staff-details': () => m.page_staff_details(),
		'/settings': () => m.page_settings(),
	};

	const pageTitle = $derived(() => {
		const path = page.url.pathname.replace(/\/$/, '') || '/';
		for (const [key, fn] of Object.entries(pageTitles)) {
			if (path === key || path.startsWith(key + '/')) return fn();
		}
		return '';
	});

	const leftNav = $derived([
		{ icon: '\u{1F3E0}', label: m.nav_home(), href: '/' },
		{ icon: '\u{1F4CB}', label: m.nav_tracking_grid(), href: '/tracking-grid' },
		{ icon: '\u{1F50D}', label: m.nav_patient_search(), href: '/patient-search' },
		{ icon: '\u{1F9D1}\u200D\u2695\uFE0F', label: m.nav_staff_details(), href: '/staff-details' },
		{ icon: '\u2699\uFE0F', label: m.nav_settings(), href: '/settings' },
	]);

	const rightNav = $derived([
		{ icon: '\u2753', label: m.nav_help(), href: '/help' },
		{ icon: '\u2709\uFE0F', label: m.nav_email(), href: '/email' },
		{ icon: '\u{1F4DE}', label: m.nav_phone(), href: '/phone' },
	]);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{m.app_title()}{pageTitle() ? ': ' + pageTitle() : ''}</title>
</svelte:head>

<div class="holy-grail">
	<header class="site-header">
		<a href="/" class="header-brand">
			<svg class="nhs-logo" viewBox="0 0 40 16" aria-label="NHS Wales" role="img">
				<rect width="40" height="16" rx="2" fill="#005eb8"/>
				<text x="4" y="12" font-family="Arial,sans-serif" font-weight="bold" font-size="10" fill="#fff">NHS</text>
			</svg>
			<span class="header-title">
				{m.app_title()}{#if pageTitle()}: <strong>{pageTitle()}</strong>{/if}
			</span>
		</a>
	</header>

	<div class="body">
		<Sidebar items={leftNav} side="left" />

		<main>
			{@render children()}
		</main>

		<Sidebar items={rightNav} side="right" />
	</div>

	<footer class="site-footer">
		<span class="footer-org">{m.footer_nhs()}</span>
		<nav class="footer-links" aria-label="Footer">
			<a href="/help">{m.footer_help()}</a>
			<a href="/copyright">{m.footer_copyright()}</a>
			<a href="/privacy-policy">{m.footer_privacy_policy()}</a>
			<a href="/security-policy">{m.footer_security_policy()}</a>
		</nav>
	</footer>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		background: #f0f4f5;
		color: #212b32;
	}

	/* Global section header blue bar */
	:global(.section-header) {
		background: #005eb8;
		color: #fff;
		padding: 0.4rem 0.75rem;
		margin: 0 0 0.75rem;
		font-size: 0.95rem;
		font-weight: 700;
	}

	.holy-grail {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* Header */
	.site-header {
		background: #003087;
		color: #fff;
		padding: 0 1rem;
		height: 3rem;
		display: flex;
		align-items: center;
		flex-shrink: 0;
		border-bottom: 4px solid #005eb8;
	}

	.header-brand {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		color: #fff;
	}

	.header-brand:hover {
		text-decoration: underline;
	}

	.nhs-logo {
		height: 1.6rem;
		width: auto;
		flex-shrink: 0;
	}

	.header-title {
		font-size: 1rem;
		letter-spacing: 0.02em;
	}

	/* Body (sidebars + main) */
	.body {
		display: flex;
		flex: 1;
		min-height: 0;
	}

	main {
		flex: 1;
		min-width: 0;
		overflow-y: auto;
		padding: 1rem;
		background: #fff;
	}

	/* Footer */
	.site-footer {
		background: #003087;
		color: rgba(255, 255, 255, 0.8);
		padding: 0 1rem;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.75rem;
		flex-shrink: 0;
		border-top: 4px solid #005eb8;
	}

	.footer-links {
		display: flex;
		gap: 1.25rem;
	}

	.footer-links a {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
	}

	.footer-links a:hover {
		color: #fff;
		text-decoration: underline;
	}

	.footer-links a:focus-visible {
		outline: 2px solid #ffeb3b;
		outline-offset: 2px;
	}
</style>

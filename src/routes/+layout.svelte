<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import '../app.css'; // CSS global
	import { resolve } from '$app/paths';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	let { children } = $props();

	let header: HTMLElement;

	// This code avoids to have the element hidden behind the header when using HTML anchors
	afterNavigate(() => {
		if ($page.url.hash) {
			setTimeout(() => {
				const targetElement = document.querySelector($page.url.hash);
				if (targetElement && header) {
					const headerHeight = header.offsetHeight;
					const offset = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
					window.scrollTo({ top: offset });
				}
			}, 0);
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header bind:this={header}>
	<a id="prenom-nom" href={resolve('/')}>Hugo Pernin</a>
	<nav id="top-nav">
		<ul>
			<li>
				<a href={resolve('/')}>Accueil</a>
			</li>
			<li>
				<a href={resolve('/')}>CV</a>
			</li>
			<li>
				<a href={resolve('/skills')}>Compétences</a>
			</li>
			<li>
				<a href={resolve('/projects')}>Projets</a>
			</li>
			<li>
				<a href={resolve('/career')}>Parcours</a>
			</li>
			<li>
				<a href="mailto:hugopernin70@gmail.com">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<main>
	{@render children?.()}
</main>

<footer>
	<p>
		© Hugo Pernin 2025
		<br />
		Tous droits réservés.
	</p>
	<div id="footer-links">
		<a href="https://github.com/Hugo-Pernin" target="_blank">
			<img src="/images/github.svg" alt="Mon profil GitHub" title="Mon profil GitHub" />
		</a>
		<a href="https://www.linkedin.com/in/hugo-pernin/" target="_blank">
			<img src="/images/linkedin.png" alt="Mon profil Linkedin" title="Mon profil Linkedin" />
		</a>
	</div>
</footer>

<style>
	header {
		position: sticky; /* Header is always shown on top of the page */
		top: 0;
		z-index: 99;
		background-color: #153d63;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		justify-content: center;
		align-items: center;
	}

	#prenom-nom {
		grid-column: 1;
		font-size: xx-large;
		margin-left: 1%;
		color: #ffffff;
		text-decoration: none;
	}

	#top-nav {
		grid-column: 2;
	}

	#top-nav ul {
		list-style-type: none; /* Remove default disc list-style-type */
		margin-block-start: 0; /* Remove default 1em margin-block-start */
		margin-block-end: 0; /* Remove default 1em margin-block-end */
		padding-inline-start: 0; /* Remove default 40px padding-inline-start */
		display: flex;
	}

	#top-nav ul li a {
		text-decoration: none; /* Remove default underline text-decoration */
		display: block;
		color: #ffffff;
		text-align: center;
		padding: 0.88em 1em;
		transition: color 0.2s;
		border-top: 0.2rem solid #153d63;
		border-bottom: 0.2rem solid #153d63;
	}

	#top-nav ul li a:hover {
		color: #4c94d8;
	}

	main {
		padding: 0 10%;
	}

	footer {
		color: #ffffff;
		background-color: #153d63;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.2em 12em;
		margin-top: 1%;
	}

	#footer-links img {
		height: 3rem;
		padding-left: 1em;
	}

	@media only screen and (max-width: 600px) {
		header {
			display: flex;
			flex-direction: column;
		}

		main {
			padding: 0 0.51em;
		}

		#top-nav ul {
			flex-wrap: wrap;
			justify-content: center;
		}

		footer {
			padding: 1em;
		}
	}
</style>

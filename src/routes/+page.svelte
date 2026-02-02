<script lang="ts">
	import { resolve } from '$app/paths';
	import IndexButton from '$lib/components/IndexButton.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
</script>

<svelte:head>
	<title>Hugo Pernin - Portfolio</title>
</svelte:head>

<div id="index">
	<h1>Hugo Pernin</h1>
	<p id="subtitle">Apprenti développeur informatique</p>
	<p>
		Étudiant en 3e année de BUT informatique, je suis passionné par la programmation depuis de
		nombreuses années. Je m'intéresse à tout : développement de logiciels, de sites web,
		d'applications mobiles, bases de données, réseau...
	</p>
	<h2>Compétences</h2>
	<p>
		Les projets que j'ai réalisés m'ont apporté des compétences dans plusieurs domaines de
		l'informatique. En voici un aperçu :
	</p>
	<div id="index-skill-categories">
		<div class="index-skill-category">
			<h3>Développement d'applications</h3>
			<p>
				De la <b>conception</b> à la <b>maintenance</b>, je peux <b>développer</b> des
				<b>applications de bureau</b>
				et des <b>applications mobiles</b>.
			</p>
			<div class="index-languages">
				<div class="index-language">Python</div>
				<div class="index-language">Java</div>
				<div class="index-language">C#</div>
				<a href={resolve('/skills')} class="index-language">...</a>
			</div>
		</div>
		<div class="index-skill-category">
			<h3>Développement web</h3>
			<p>
				Je peux <b>concevoir</b>, <b>développer</b> et <b>maintenir</b> un site web, partie
				<b>front-end</b>
				et partie <b>back-end</b>.
			</p>
			<div class="index-languages">
				<div class="index-language">HTML/CSS</div>
				<div class="index-language">JavaScript/TypeScript</div>
				<div class="index-language">PHP</div>
				<a href={resolve('/skills')} class="index-language">...</a>
			</div>
		</div>
		<div class="index-skill-category">
			<h3>Bases de données</h3>
			<p>
				Je peux <b>mettre en place</b>, <b>administrer</b> et <b>utiliser</b> différentes technologies
				de bases de données.
			</p>
			<div class="index-languages">
				<div class="index-language">MySQL</div>
				<div class="index-language">MariaDB</div>
				<div class="index-language">SQLite</div>
				<a href={resolve('/skills')} class="index-language">...</a>
			</div>
		</div>
	</div>
	<IndexButton page="skills" text="Voir toutes mes compétences" />
	<h2>Projets</h2>
	<p>Voici quelques projets que j'ai pu réaliser :</p>
	<div id="index-projects">
		<div class="index-project">
			<h3>Cliofy</h3>
			<p>Application mobile</p>
			<a>En savoir plus</a>
			<a>GitHub</a>
		</div>
		<div class="index-project">
			<h3>Portfolio</h3>
			<p>Site web statique</p>
			<a>En savoir plus</a>
			<a>GitHub</a>
		</div>
	</div>
	<IndexButton page="projects" text="Voir tous mes projets" />
	<h2>Parcours</h2>
	<Timeline showLongDescriptions={false} />
	<IndexButton page="career" text="Voir tout mon parcours" />
</div>

<style>
	#index > h1 {
		margin: 10% 0 2% 0;
		font-size: 64px;
	}

	#index > #subtitle {
		text-align: center;
		margin-bottom: 10%;
		font-size: 24px;
	}

	#index > h2 {
		margin-top: 5%;
	}

	#index > p {
		margin: 1% 0;
	}

	#index-skill-categories {
		display: flex;
		justify-content: space-around;
	}

	.index-skill-category,
	.index-project {
		/*background-color: #f0f0f0;*/
		border-radius: 10px;
		padding: 1%;
		margin: 3% 0;
		box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
		animation: fadein 1s;
		width: 25%;
	}

	.index-skill-category {
		display: flex;
		flex-direction: column;
	}

	.index-skill-category p {
		margin: 5% 0;
		flex: 1;
	}

	.index-languages {
		display: flex;
		flex-wrap: wrap;
	}

	.index-language {
		border: 1px solid rgba(0, 0, 0, 0.1);
		color: #000000;
		background-color: #f0f0f0;
		border-radius: 20px;
		margin: 1%;
		padding: 0.75% 2.25%;
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		transition: background-color 0.2s;
	}

	a.index-language:hover {
		background-color: #e0e0e0;
	}

	#index-projects {
		display: flex;
		justify-content: space-around;
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media only screen and (max-width: 600px) {
		#index-skill-categories,
		#index-projects {
			flex-wrap: wrap;
		}

		.index-skill-category,
		.index-project {
			width: auto;
		}
	}
</style>

<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Hugo Pernin - Portfolio</title>
</svelte:head>

<div id="index">
	<h1>Hugo Pernin</h1>
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
	<a href={resolve('/skills')} class="index-link">Voir toutes mes compétences</a>
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
	<a href={resolve('/projects')} class="index-link">Voir tous mes projets</a>
	<h2>Parcours</h2>
	<div class="timeline">
		<div class="container right">
			<div class="content">
				<h3>Alternant développeur (en cours)</h3>
				<p>
					Atol Conseils & Développements, Dijon | 2025-2026
					<br />Alternance dans le cadre de ma 3e année de BUT
				</p>
			</div>
		</div>
		<div class="container left">
			<div class="content">
				<h3>BUT Informatique (3e année en cours)</h3>
				<p><i>IUT de Dijon</i> | 2023 – 2026</p>
			</div>
		</div>
		<div class="container right">
			<div class="content">
				<h3>Stage de développeur</h3>
				<p>
					Atol Conseils & Développements, Gevrey-Chambertin (21220) | 2025
					<br />Stage de 2e année de BUT (9 semaines)
				</p>
			</div>
		</div>
		<div class="container left">
			<div class="content">
				<h3>Baccalauréat STI2D SIN mention <i>Très bien</i></h3>
				<p><i>Lycée Augustin Cournot</i> | 2022 – 2023, Gray (70100)</p>
			</div>
		</div>
		<div class="container right">
			<div class="content">
				<h3>Stage de technicien en maintenance informatique</h3>
				<p>
					Entreprise Fourot, Gray (70100) | 2020
					<br />Stage de 3e (1 semaine)
				</p>
			</div>
		</div>
	</div>
	<a href={resolve('/career')} class="index-link">Voir tout mon parcours</a>
</div>

<style>
	#index > h1 {
		margin: 10% 0;
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

	.index-link {
		background-color: #153d63;
		box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
		transition: background-color 0.2s;
		border-radius: 20px;
		width: 20%;
		padding: 1%;
		margin: 1% auto;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		text-decoration: none;
	}

	.index-link:hover {
		background-color: #4c94d8;
	}

	#index-projects {
		display: flex;
		justify-content: space-around;
	}

	/* The actual timeline (the vertical ruler) */
	.timeline {
		width: 100%;
		position: relative;
		margin: 5% 0;
	}

	/* The actual timeline (the vertical ruler) */
	.timeline::after {
		content: '';
		position: absolute;
		width: 6px;
		background-color: #153d63;
		top: 0;
		bottom: 0;
		left: 50%;
		margin-left: -3px;
		border-radius: 50px;
	}

	/* Container around content */
	.container {
		width: 40%;
		position: relative;
	}

	/* The circles on the timeline */
	/*.container::after {*/
	/*    content: '';*/
	/*    position: absolute;*/
	/*    width: 25px;*/
	/*    height: 25px;*/
	/*    right: -17px;*/
	/*    background-color: white;*/
	/*    border: 4px solid #FF9F55;*/
	/*    top: 15px;*/
	/*    border-radius: 50%;*/
	/*    z-index: 1;*/
	/*}*/

	/* Place the container to the left */
	.left {
		left: calc(10% - 10px);
	}

	/* Place the container to the right */
	.right {
		left: calc(50% + 10px);
	}

	/* Add arrows to the left container (pointing right) */
	.left::before {
		content: ' ';
		height: 0;
		position: absolute;
		top: 22px;
		width: 0;
		z-index: 1;
		border: medium solid white;
		border-width: 10px 0 10px 10px;
		border-color: transparent transparent transparent white;
		right: -10px;
	}

	/* Add arrows to the right container (pointing left) */
	.right::before {
		content: ' ';
		height: 0;
		position: absolute;
		top: 22px;
		width: 0;
		z-index: 1;
		border: medium solid white;
		border-width: 10px 10px 10px 0;
		border-color: transparent white transparent transparent;
		left: -10px;
	}

	/* Fix the circle for containers on the right side */
	/*.right::after {*/
	/*    left: -16px;*/
	/*}*/

	/* The actual content */
	.content {
		padding: 20px 30px;
		background-color: #ffffff;
		box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
		position: relative;
		border-radius: 6px;
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

		.index-link {
			width: 90%;
		}

		/* Place the timelime to the left */
		.timeline::after {
			left: 2%;
		}

		/* Full-width containers */
		.container {
			width: 93%;
			margin-bottom: 5%;
		}

		/* Make sure that all arrows are pointing leftwards */
		/*.container::before {
            left: 60px;
            border: medium solid white;
            border-width: 10px 10px 10px 0;
            border-color: transparent white transparent transparent;
        }*/

		.left::before,
		.right::before {
			border-width: 10px 10px 10px 0;
			border-color: transparent white transparent transparent;
			left: -8px;
		}

		/* Make sure all circles are at the same spot */
		/*.left::after, .right::after {
            left: 15px;
        }*/

		/* Make all right containers behave like the left ones */
		.left,
		.right {
			left: 5%;
		}
	}
</style>

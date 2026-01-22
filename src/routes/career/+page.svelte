<svelte:head>
	<title>Hugo Pernin - Parcours</title>
</svelte:head>

<h1>Mon parcours</h1>

<div class="timeline">
	<div class="container right">
		<div class="content">
			<h3>Alternant développeur (en cours)</h3>
			<p class="place-and-year">Atol Conseils & Développements, Dijon | 2025-2026</p>
			<p>
				Alternance dans le cadre de ma 3e année de BUT
				<br />Participation au développement du projet
				<a href="https://mesparcelles.fr/">MesParcelles</a>
			</p>
		</div>
	</div>
	<div class="container left">
		<div class="content">
			<h3>BUT Informatique (3e année en cours)</h3>
			<p class="place-and-year"><i>IUT de Dijon</i> | 2023 – 2026</p>
			<p>Parcours RACDV : Réalisation d'Applications : Conception, Développement, Validation</p>
		</div>
	</div>
	<div class="container right">
		<div class="content">
			<h3>Stage de développeur</h3>
			<p class="place-and-year">Atol Conseils & Développements, Gevrey-Chambertin (21220) | 2025</p>
			<p>
				Stage de 2e année de BUT (9 semaines)
				<br />Travail sur la solution <a href="https://repplix.fr/" target="_blank">Repplix</a> :
			</p>
			<ul>
				<li>Création d’un tableau de bord Node-RED</li>
				<li>Contrôle d'une carte Arduino reliée à une pince</li>
				<li>Communication avec le système d’exploitation d’un robot industriel par MQTT</li>
			</ul>
			<p>Création d’une application web de réservation de bureaux :</p>
			<ul>
				<li>Codée en HTML, CSS et JavaScript</li>
				<li>Connectée à une base de données SQLite</li>
				<li>Conteneurisée avec Docker</li>
			</ul>
		</div>
	</div>
	<div class="container left">
		<div class="content">
			<h3>Baccalauréat STI2D mention <i>Très bien</i></h3>
			<p class="place-and-year"><i>Lycée Augustin Cournot</i> | 2022 – 2023, Gray (70100)</p>
			<p>Spécialité SIN : Systèmes d'Information & Numérique</p>
		</div>
	</div>
	<div class="container right">
		<div class="content">
			<h3>Stage de technicien en maintenance informatique</h3>
			<p class="place-and-year">Entreprise Fourot, Gray (70100) | 2020</p>
			<p>Stage de 3e (1 semaine)</p>
			<ul>
				<li>Découverte de l’environnement professionnel</li>
				<li>Diagnostic d’ordinateurs</li>
				<li>Montage d’ordinateurs</li>
				<li>Dépannage de clients à domicile</li>
			</ul>
		</div>
	</div>
</div>
<div class="parcours-category-card">
	<h2>Certifications</h2>
	<div class="certification-card">
		<h3>Pix</h3>
		<p>
			724 pix certifiés
			<br />Niveau global : <b>avancé 2</b>
			<br />Certification passée le 02/06/2025
		</p>
	</div>
	<div class="certification-card">
		<h3>Attestation de compétence en langues vivantes</h3>
		<ul>
			<li>Anglais – niveau B2</li>
			<li>Espagnol – niveau B2</li>
		</ul>
	</div>
</div>

<style>
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

	.content p {
		margin-top: 1%;
	}

	.place-and-year {
		color: #707070;
	}

	.parcours-category-card {
		margin-top: 4%;
	}

	.certification-card {
		border-radius: 10px;
		padding: 1%;
		margin: 1%;
		background-color: #f0f0f0;
	}

	@media only screen and (max-width: 600px) {
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

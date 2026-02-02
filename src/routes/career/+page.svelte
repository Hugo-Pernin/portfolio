<script lang="ts">
	import jobsDiplomas from '$lib/data/jobsDiplomas.json';
	import JobDiplomaCard from '$lib/components/JobDiplomaCard.svelte';
</script>

<svelte:head>
	<title>Hugo Pernin - Parcours</title>
</svelte:head>

<h1>Mon parcours</h1>

<div class="timeline">
	{#each jobsDiplomas as jobDiploma, i (jobDiploma)}
		<JobDiplomaCard {jobDiploma} isLeft={i % 2 == 1} showLongDescription={true} />
	{/each}
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
	}
</style>

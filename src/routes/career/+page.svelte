<script lang="ts">
	import Timeline from '$lib/components/Timeline.svelte';
</script>

<svelte:head>
	<title>Hugo Pernin - Parcours</title>
</svelte:head>

<h1>Mon parcours</h1>

<Timeline showLongDescriptions={true} />
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
	.parcours-category-card {
		margin-top: 4%;
	}

	.certification-card {
		border-radius: 10px;
		padding: 1%;
		margin: 1%;
		background-color: #f0f0f0;
	}
</style>

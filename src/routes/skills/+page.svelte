<script lang="ts">
	import skills from '$lib/data/skills.json';
	import technologyCategories from '$lib/data/technologyCategories.json';
	import TechnologyCategoryCard from '$lib/components/TechnologyCategoryCard.svelte';
</script>

<svelte:head>
	<title>Hugo Pernin - Compétences</title>
</svelte:head>

<h1>Mes compétences</h1>

{#each skills as category (category)}
	<div class="skill-category-card">
		<h2 class="skill-category-title">{category.categoryName}</h2>
		<div class="skill-category">
			{#each category.skills as skill (skill)}
				<p class="skill-card">{skill}</p>
			{/each}
		</div>
	</div>
{/each}

<div class="skill-category-card">
	<h2 class="skill-category-title">Langages et logiciels</h2>
	<div id="langages-et-logiciels" class="skill-category">
		{#each technologyCategories as category (category)}
			<TechnologyCategoryCard {category} />
		{/each}
	</div>
</div>

<style>
	.skill-category-card {
		margin-top: 4%;
	}

	.skill-card {
		border-radius: 10px;
		padding: 1%;
		margin: 1%;
		background-color: #f0f0f0;
		display: inline-block;
	}

	#langages-et-logiciels {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>

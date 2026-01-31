<script lang="ts">
	import projects from '$lib/data/projects.json';
	import ProjectCategoryCard from '$lib/components/ProjectCategoryCard.svelte';
</script>

<svelte:head>
	<title>Hugo Pernin - Projets</title>
</svelte:head>

<h1>Mes projets</h1>

{#each projects as category (category)}
	<ProjectCategoryCard {category} />
{/each}

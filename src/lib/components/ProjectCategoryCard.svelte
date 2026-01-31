<script lang="ts">
	import type ProjectCategory from '$lib/models/ProjectCategory';
	import ProjectCard from './ProjectCard.svelte';

	interface Props {
		category: ProjectCategory;
	}

	let props: Props = $props();
</script>

<div class="project-category-card">
	<h2>{props.category.categoryName}</h2>
	<div class="project-category">
		{#each props.category.projects as project (project)}
			<ProjectCard {project} />
		{/each}
	</div>
</div>

<style>
	.project-category-card {
		margin-top: 4%;
	}

	.project-category {
		display: flex;
		flex-wrap: wrap;
	}
</style>

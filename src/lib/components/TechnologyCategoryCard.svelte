<script lang="ts">
	import type TechnologyCategory from '$lib/models/TechnologyCategory';
	import TechnologyBigCard from './TechnologyBigCard.svelte';
	import technologies from '$lib/data/technologies.json';

	interface Props {
		category: TechnologyCategory;
	}

	let props: Props = $props();

	const technologiesMap = Object.fromEntries(
		technologies.map((technology) => [technology.name, technology])
	);
</script>

<div class="technology-category-card">
	<h3>{props.category.categoryName}</h3>
	<div>
		{#each props.category.technologies as technology (technology)}
			<TechnologyBigCard technology={technologiesMap[technology]} />
		{/each}
	</div>
</div>

<style>
	.technology-category-card {
		margin: 2% 1% 0;
		width: 23%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.technology-category-card > h3 {
		text-align: center;
		margin-bottom: 1%;
	}

	.technology-category-card > div {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	@media only screen and (max-width: 600px) {
		.technology-category-card {
			width: 100%;
		}
	}
</style>

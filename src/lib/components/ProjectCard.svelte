<script lang="ts">
	import type Project from '$lib/models/Project';
	import TechnologySmallCard from './TechnologySmallCard.svelte';
	import LinkButton from './LinkButton.svelte';
	import technologies from '$lib/data/technologies.json';

	interface Props {
		project: Project;
	}

	let props: Props = $props();

	const technologiesMap = Object.fromEntries(
		technologies.map((technology) => [technology.name, technology])
	);
</script>

<div class="project-card">
	<div class="name-and-technologies">
		<h3>{props.project.name}</h3>
		<div class="technologies">
			{#each props.project.technologies as technology (technology)}
				<TechnologySmallCard technology={technologiesMap[technology]} />
			{/each}
		</div>
	</div>
	<p>{props.project.description}</p>
	<div class="links-and-year">
		<div class="links">
			{#each props.project.links as link (link)}
				<LinkButton {link} />
			{/each}
		</div>
		<div class="year">
			<p>{props.project.year}</p>
		</div>
	</div>
</div>

<style>
	.project-card {
		border-radius: 10px;
		padding: 1%;
		margin: 1%;
		background-color: #f0f0f0;
		width: 46%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.name-and-technologies {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.technologies {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.project-card p {
		margin: 1% 0;
		white-space: pre-line;
	}

	.links-and-year {
		display: flex;
	}

	.links {
		flex: 1;
	}

	.year {
		flex: 0;
		display: flex;
		align-items: end;
	}

	@media only screen and (max-width: 600px) {
		.project-card {
			width: 100%;
		}
	}
</style>

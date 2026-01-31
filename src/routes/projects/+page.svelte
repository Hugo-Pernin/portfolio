<script lang="ts">
	import TechnologySmallCard from '$lib/components/TechnologySmallCard.svelte';
	import projects from '$lib/data/projects.json';
	import technologies from '$lib/data/technologies.json';
	import Link from '$lib/components/Link.svelte';

	const technologiesMap = Object.fromEntries(
		technologies.map((technology) => [technology.name, technology])
	);
</script>

<svelte:head>
	<title>Hugo Pernin - Projets</title>
</svelte:head>

<h1>Mes projets</h1>

{#each projects as category (category)}
	<div class="project-category-card">
		<h2>{category.categoryName}</h2>
		<div class="project-category">
			{#each category.projects as project (project)}
				<div class="project-card">
					<div class="name-and-technologies">
						<h3>{project.name}</h3>
						<div class="technologies">
							{#each project.technologies as technology (technology)}
								<TechnologySmallCard technology={technologiesMap[technology]} />
							{/each}
						</div>
					</div>
					<p>{project.description}</p>
					<div class="links-and-year">
						<div class="links">
							{#each project.links as link (link)}
								<Link {link} />
							{/each}
						</div>
						<div class="year">
							<p>{project.year}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/each}

<style>
	.project-category-card {
		margin-top: 4%;
	}

	.project-category {
		display: flex;
		flex-wrap: wrap;
	}

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

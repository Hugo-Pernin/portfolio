<script lang="ts">
	import projects from '$lib/data/projects.json';
	import technologies from '$lib/data/technologies.json';

	const technologiesMap = Object.fromEntries(
		technologies.map((technology) => [technology.name, technology])
	);
</script>

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
								<div class="technology-small-card">
									<img
										src={technologiesMap[technology].img}
										alt={technologiesMap[technology].name}
										title={technologiesMap[technology].name}
									/>
								</div>
							{/each}
						</div>
					</div>
					<p>{project.description}</p>
					<div class="links">
						{#each project.links as link (link)}
							<div class="link-card">
								<a href={link.href} target="_blank">
									<p>{link.text}</p>
									<img src="/images/new_tab.svg" alt="" />
								</a>
							</div>
						{/each}
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

	.technology-small-card {
		background-color: #e0e0e0;
		border-radius: 10px;
		margin: 0 5px;
		padding: 5px;
	}

	.technology-small-card img {
		height: 40px;
		cursor: help;
	}

	.project-card p {
		margin: 1% 0;
		white-space: pre-line;
	}

	.link-card {
		background-color: #153d63;
		border-radius: 10px;
		display: inline-flex;
		width: 20%;
		transition: background-color 0.2s;
		margin-right: 1%;
		padding: 0.5%;
	}

	.link-card a {
		padding: 0 3%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #ffffff;
		text-decoration: none;
		width: 100%;
	}

	.link-card:hover {
		background-color: #4c94d8;
	}

	@media only screen and (max-width: 600px) {
		.project-card {
			width: 100%;
		}
	}
</style>

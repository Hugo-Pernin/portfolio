<script lang="ts">
	import skills from '$lib/data/skills.json';
	import technologyCategories from '$lib/data/technologyCategories.json';
	import technologies from '$lib/data/technologies.json';

	const technologiesMap = Object.fromEntries(
		technologies.map((technology) => [technology.name, technology])
	);
</script>

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
			<div class="technology-category-card">
				<h3>{category.categoryName}</h3>
				<div>
					{#each category.technologies as technology (technology)}
						<div class="technology-big-card">
							<img src={technologiesMap[technology].img} alt="" />
							<p>{technologiesMap[technology].name}</p>
						</div>
					{/each}
				</div>
			</div>
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

	.technology-big-card {
		border: 1px solid rgba(0, 0, 0, 0.1);
		background-color: #f0f0f0;
		border-radius: 20px;
		margin: 1%;
		padding: 0.75% 2.25%;
		display: inline-flex;
		align-items: center;
	}

	.technology-big-card img {
		height: 25px;
		margin-right: 5px;
	}

	@media only screen and (max-width: 600px) {
		.technology-category-card {
			width: 100%;
		}
	}
</style>

<script lang="ts">
	import jobsDiplomas from '$lib/data/jobsDiplomas.json';
	import JobDiplomaCard from '$lib/components/JobDiplomaCard.svelte';

	interface Props {
		showLongDescriptions: boolean;
	}

	let props: Props = $props();
</script>

<div class="timeline">
	{#each jobsDiplomas as jobDiploma, i (jobDiploma)}
		<JobDiplomaCard
			{jobDiploma}
			isLeft={i % 2 == 1}
			showLongDescription={props.showLongDescriptions}
		/>
	{/each}
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

	@media only screen and (max-width: 600px) {
		/* Place the timelime to the left */
		.timeline::after {
			left: 2%;
		}
	}
</style>

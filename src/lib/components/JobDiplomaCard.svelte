<script lang="ts">
	import type JobDiploma from '$lib/models/JobDiploma';

	interface Props {
		jobDiploma: JobDiploma;
		isLeft: boolean;
		showLongDescription: boolean;
	}

	let props: Props = $props();
</script>

<div class="container" class:left={props.isLeft} class:right={!props.isLeft}>
	<div class="content">
		<h3>{props.jobDiploma.title}</h3>
		<p class="place-and-year">
			<i>{props.jobDiploma.etablishment}</i>{#if props.jobDiploma.city !== ''}
				, {props.jobDiploma.city}
			{/if}
			| {props.jobDiploma
				.beginningYear}{#if props.jobDiploma.beginningYear != props.jobDiploma.endingYear}
				-{props.jobDiploma.endingYear}
			{/if}
		</p>
		<p>{props.jobDiploma.shortDescription}</p>
		{#if props.showLongDescription && props.jobDiploma.longDescription !== ''}
			<!-- Very low XSS attack risk: props.jobDiploma.longDescription comes from jobsDiploma.json -->
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html props.jobDiploma.longDescription}
		{/if}
	</div>
</div>

<style>
	/* Container around content */
	.container {
		width: 40%;
		position: relative;
	}

	/* Place the container to the left */
	.left {
		left: calc(10% - 10px);
	}

	/* Place the container to the right */
	.right {
		left: calc(50% + 10px);
	}

	/* Add arrows to the left container (pointing right) */
	.left::before {
		content: ' ';
		height: 0;
		position: absolute;
		top: 22px;
		width: 0;
		z-index: 1;
		border: medium solid white;
		border-width: 10px 0 10px 10px;
		border-color: transparent transparent transparent white;
		right: -10px;
	}

	/* Add arrows to the right container (pointing left) */
	.right::before {
		content: ' ';
		height: 0;
		position: absolute;
		top: 22px;
		width: 0;
		z-index: 1;
		border: medium solid white;
		border-width: 10px 10px 10px 0;
		border-color: transparent white transparent transparent;
		left: -10px;
	}

	/* The actual content */
	.content {
		padding: 20px 30px;
		background-color: #ffffff;
		box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
		position: relative;
		border-radius: 6px;
	}

	.content p {
		margin-top: 1%;
	}

	.place-and-year {
		color: #707070;
	}

	@media only screen and (max-width: 600px) {
		/* Full-width containers */
		.container {
			width: 93%;
			margin-bottom: 5%;
		}

		.left::before,
		.right::before {
			border-width: 10px 10px 10px 0;
			border-color: transparent white transparent transparent;
			left: -8px;
		}

		/* Make all right containers behave like the left ones */
		.left,
		.right {
			left: 5%;
		}
	}
</style>

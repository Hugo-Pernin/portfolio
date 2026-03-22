<script lang="ts">
	import LinkButton from './LinkButton.svelte';

	interface Props {
		title: string;
		description: string;
		id: string;
	}

	let props: Props = $props();
</script>

<div class="index-project">
	<h3>{props.title}</h3>
	<p>{props.description}</p>
	<LinkButton link={{ text: 'En savoir plus', href: 'projects#' + props.id }} newTab={false} />
</div>

<style>
	.index-project {
		border-radius: 10px;
		padding: 0.96em;
		margin: 3% 0;
		box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
		animation: fadein 1s;
		width: 25%;
		display: flex;
		flex-direction: column;
	}

	.index-project p {
		margin: 5% 0;
		flex: 1;
	}

	@media only screen and (max-width: 600px) {
		.index-project {
			width: auto;
		}
	}
</style>

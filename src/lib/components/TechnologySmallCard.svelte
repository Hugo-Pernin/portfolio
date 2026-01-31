<script lang="ts">
	import type Technology from '$lib/models/Technology';

	interface Props {
		technology: Technology;
	}

	let props: Props = $props();
</script>

<div class="technology-small-card">
	<img src={props.technology.img} alt={props.technology.name} title={props.technology.name} />
</div>

<style>
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
</style>

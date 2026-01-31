<script lang="ts">
	import type Technology from '$lib/models/Technology';

	interface Props {
		technology: Technology;
	}

	let props: Props = $props();
</script>

<div class="technology-big-card">
	<img src={props.technology.img} alt="" />
	<p>{props.technology.name}</p>
</div>

<style>
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
</style>

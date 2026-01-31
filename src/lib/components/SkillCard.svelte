<script lang="ts">
	interface Props {
		skill: string;
	}

	let props: Props = $props();
</script>

<p class="skill-card">{props.skill}</p>

<style>
	.skill-card {
		border-radius: 10px;
		padding: 1%;
		margin: 1%;
		background-color: #f0f0f0;
		display: inline-block;
	}
</style>

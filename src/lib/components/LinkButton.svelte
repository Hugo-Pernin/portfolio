<script lang="ts">
	import type Link from '$lib/models/Link';

	interface Props {
		link: Link;
	}

	let props: Props = $props();
</script>

<div class="link-card">
	<a href={props.link.href} target="_blank">
		<p>{props.link.text}</p>
		<img src="/images/new_tab.svg" alt="" />
	</a>
</div>

<style>
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

	.link-card p {
		margin: 1% 0;
		white-space: pre-line;
	}

	.link-card:hover {
		background-color: #4c94d8;
	}
</style>

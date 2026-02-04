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
		transition: background-color 0.2s;
		margin-right: 1%;
		padding: 0.5% 2%;
	}

	.link-card a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #ffffff;
		text-decoration: none;
	}

	.link-card p {
		white-space: nowrap;
		margin-right: 5%;
	}

	.link-card:hover {
		background-color: #4c94d8;
	}
</style>

<script lang="ts">
	import type Link from '$lib/models/Link';

	interface Props {
		link: Link;
		newTab: boolean;
	}

	let props: Props = $props();
</script>

<div class="link-card" class:new-tab={props.newTab}>
	<a href={props.link.href} target={props.newTab ? '_blank' : undefined}>
		<p>{props.link.text}</p>
		{#if props.newTab}
			<img src="/images/new_tab.svg" alt="" />
		{/if}
	</a>
</div>

<style>
	.link-card {
		background-color: #153d63;
		display: inline-flex;
		transition: background-color 0.2s;
		margin-right: 1%;
		border-radius: 20px;
		padding: 0.4em 0.8em;
		position: relative;
	}

	.link-card.new-tab {
		border-radius: 10px;
		padding: 0.21em 0.84em;
	}

	.link-card a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #ffffff;
		text-decoration: none;
	}

	.link-card a::after {
		/* Extends the link hitbox to all of the button */
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.link-card p {
		white-space: nowrap;
		margin-right: 5%;
	}

	.link-card:hover {
		background-color: #4c94d8;
	}
</style>

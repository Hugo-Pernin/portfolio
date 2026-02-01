<script lang="ts">
	import { resolve } from '$app/paths';

	interface Props {
		page: string;
		text: string;
	}

	let props: Props = $props();
</script>

<a href={resolve('/' + props.page)} class="index-link">{props.text}</a>

<style>
	.index-link {
		background-color: #153d63;
		box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
		transition: background-color 0.2s;
		border-radius: 20px;
		width: 20%;
		padding: 1%;
		margin: 1% auto;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		text-decoration: none;
	}

	.index-link:hover {
		background-color: #4c94d8;
	}

	@media only screen and (max-width: 600px) {
		.index-link {
			width: 90%;
		}
	}
</style>

<script lang="ts">
	import { MoveUpRight } from 'lucide-svelte'

	export let quote
	export let author
	export let description
	export let firstChild
	export let image
</script>

<article class={firstChild ? 'firstChild' : ''}>
	<p>{quote}</p>
	<div class="footer small-text">
		<div class="image">
			<img
				height="2rem"
				src={image ||
					'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/AI_%28Artificial_Intelligence%29_Dog.jpg/640px-AI_%28Artificial_Intelligence%29_Dog.jpg'}
			/>
		</div>
		<div class="author">
			<p class="name">{author}</p>
			<span>{description}</span>
		</div>
	</div>
</article>

<style>
	.footer {
		display: flex;
		gap: 2rem;
	}
	article {
		padding: 1.25rem 2rem;
		display: flex;
		border-radius: 0.625rem;
		flex-direction: column;
		height: 100%;
		gap: 1.25rem;
		width: 100%;
		break-inside: avoid;
		margin-top: 1rem;
		background-color: var(--bg-subtle);
	}
	.firstChild {
		margin-top: 0;
	}
	p {
		margin: 0;
		/* ça pose un problème overflow sur les écrans qui ne sont pas larges
		width: 40rem;
		*/
		flex-grow: 1;
	}
	.link-icon {
		line-height: 0;
		margin-left: 1rem;
	}
	.read-more {
		display: flex;
		align-items: end;
		text-decoration: none;
		color: black;
	}
	.article-link {
		text-decoration: none;
		background-color: var(--bg-subtle);
		border-radius: 0.625rem;
		overflow: hidden;
	}
	.article-link:hover {
		color: inherit;
	}
	.image img {
		width: 4rem;
		height: 4rem;
		border-radius: 0.625rem;
	}

	.author {
		display: flex;
		flex-direction: column;
	}
	.name {
		font-weight: 600;
		flex-grow: 0;
	}
</style>

<script lang="ts">
	import ArticleCard from '$components/ArticleCard.svelte'
	import Button from '$components/Button.svelte'
	import UnderlinedTitle from '$components/UnderlinedTitle.svelte'
	import { onMount } from 'svelte'

	const label_id = 'articles-title'

	let articles: { title: string; blurb: string; url: string }[] = []
	let title = ''
	let maxArticles = Infinity

	onMount(async () => {
		const response = await fetch('/src/posts/articles.md')
		if (!response.ok) {
			console.error('Failed to fetch articles.md:', response.statusText)
			return
		}
		const text = await response.text()
		const { content, metadata } = parseMarkdown(text)
		title = metadata.title
		maxArticles = metadata.maxArticles || Infinity
		articles = parseArticles(content).slice(0, maxArticles) as {
			title: string
			blurb: string
			url: string
		}[]
		document.documentElement.style.setProperty('--columns', Math.ceil(maxArticles / 2).toString())
	})

	function parseMarkdown(text: string) {
		const [metadata, ...content] = text.split('---').slice(1)
		const metadataObj = Object.fromEntries(
			metadata
				.trim()
				.split('\n')
				.map((line) => line.split(': ').map((str) => str.trim()))
		)
		return { metadata: metadataObj, content: content.join('---') }
	}

	function parseArticles(content: string) {
		const articles = []
		const lines = content.split('\n').filter((line) => line.trim() !== '')
		let article: { title?: string; blurb?: string; url?: string } = {}
		for (const line of lines) {
			if (line.startsWith('- title:')) {
				if (Object.keys(article).length > 0) {
					articles.push(article)
					article = {}
				}
				article.title = line.replace('- title:', '').trim()
			} else if (line.startsWith('  blurb:')) {
				article.blurb = line.replace('  blurb:', '').trim()
			} else if (line.startsWith('  url:')) {
				article.url = line.replace('  url:', '').trim()
			}
		}
		if (Object.keys(article).length > 0) {
			articles.push(article)
		}
		return articles
	}
</script>

<section aria-labelledby={label_id}>
	<UnderlinedTitle id={label_id}>{title}</UnderlinedTitle>
	<div class="articles-grid">
		{#each articles as article}
			<ArticleCard title={article.title} blurb={article.blurb} url={article.url} />
		{/each}
	</div>
	<div style="margin-top: 2rem; text-align: left;">
		<Button href="https://pauseia.substack.com/#articles-title">Voir tous les articles</Button>
	</div>
</section>

<style>
	.articles-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem; /* Ajoute de l'espace en dessous des articles */
	}

	@media (min-width: 1200px) {
		.articles-grid {
			grid-template-columns: repeat(var(--columns), 1fr);
		}
	}

	@media (min-width: 900px) and (max-width: 1199px) {
		.articles-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 600px) and (max-width: 899px) {
		.articles-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 599px) {
		.articles-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

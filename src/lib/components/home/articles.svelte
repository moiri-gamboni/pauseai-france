<script lang="ts">
	import { onMount } from 'svelte'
	import ArticleCard from '$components/ArticleCard.svelte'
	import Button from '$components/Button.svelte'
	import UnderlinedTitle from '$components/UnderlinedTitle.svelte'

	const label_id = 'articles-title'

	let articles: { title: string; blurb: string; url: string }[] = []
	let title = ''
	let maxArticles = 12

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

		// Restaurer la position de défilement lors du retour
		const scrollPosition = localStorage.getItem('scrollPosition')
		if (scrollPosition) {
			window.scrollTo(0, parseInt(scrollPosition, 10))
			localStorage.removeItem('scrollPosition')
		}
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

	// Stocker la position de défilement avant de naviguer
	function handleButtonClick() {
		localStorage.setItem('scrollPosition', window.scrollY.toString())
		window.location.href = 'https://pauseia.substack.com/'
	}

	// Stocker la position de défilement avant de naviguer vers un article
	function handleArticleClick(url: string) {
		localStorage.setItem('scrollPosition', window.scrollY.toString())
		window.location.href = url
	}

	// Gestionnaire d'événements clavier pour les articles
	function handleKeyDown(event: KeyboardEvent, url: string) {
		if (event.key === 'Enter' || event.key === ' ') {
			handleArticleClick(url)
		}
	}
</script>

<section aria-labelledby={label_id}>
	<UnderlinedTitle id={label_id}>{title}</UnderlinedTitle>
	<div class="articles-grid">
		{#each articles as article}
			<div
				role="button"
				tabindex="0"
				on:click={() => handleArticleClick(article.url)}
				on:keydown={(event) => handleKeyDown(event, article.url)}
				class="article-card"
			>
				<ArticleCard title={article.title} blurb={article.blurb} url={article.url} />
			</div>
		{/each}
	</div>
	<div style="margin-top: 2rem; text-align: left;">
		<Button on:click={handleButtonClick}>Voir tous les articles</Button>
	</div>
</section>

<style>
	.articles-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem; /* Ajoute de l'espace en dessous des articles */
	}

	.article-card {
		text-align: left; /* Aligner à gauche le contenu des articles */
		cursor: pointer; /* Indiquer que l'élément est cliquable */
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

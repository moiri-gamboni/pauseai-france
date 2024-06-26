<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import Logo from '$lib/components/logo.svelte'
	import Link from '$lib/components/custom/a.svelte'
	import { toPng } from 'html-to-image'
	import GithubSlugger from 'github-slugger'

	const DOWNLOAD_WIDTH = 2000

	export let background = ''
	export let text = ''
	export let author = ''
	export let author_description = ''
	export let notice: string | null = null
	export let color: string | null = null
	export let padding: string | null = null

	$: bg_url = new URL(`../../assets/quote-bg/${background}.jpg`, import.meta.url).href
	$: color_style = color ? `color: ${color}` : ''
	$: content_style = padding ? `padding: ${padding} 0 0 ${padding};` : ''

	let quoteElement: HTMLDivElement

	async function downloadQuote(e: MouseEvent) {
		const target = e.target as HTMLAnchorElement
		const ratio = quoteElement.scrollWidth / quoteElement.scrollHeight
		const png = await toPng(quoteElement, {
			canvasWidth: DOWNLOAD_WIDTH,
			canvasHeight: DOWNLOAD_WIDTH / ratio
		})
		const fileName = `${author} on AI risks.png`
		download(png, fileName)
	}

	function download(url: string, fileName: string) {
		const anchor: HTMLAnchorElement = document.createElement('a')
		anchor.setAttribute('download', fileName)
		anchor.href = url
		anchor.click()
	}
</script>

<div class="quote-container">
	<div class="quote" style="background-image:url({bg_url}); {color_style}" bind:this={quoteElement}>
		<div class="quote-content" style={content_style}>
			<div class="quote-text-container">
				<div class="quote-text">{@html text}</div>
			</div>
			<div class="quote-author">
				<p>{author}</p>
				<p>{author_description}</p>
			</div>
		</div>
		<div class="quote-logo">
			<Logo width={100} fill_pause={color ? color : 'black'} />
		</div>
	</div>
	<div class="quote-below">
		<Button alt on:click={downloadQuote}>Download</Button>
		{#if notice}
			<div class="quote-notice-button">
				<Button alt>
					<Link href={'#credits-' + new GithubSlugger().slug(author)}>Credits</Link>
				</Button>
			</div>
		{/if}
	</div>
</div>

<style>
	.quote-container {
		margin-bottom: 1rem;
	}

	.quote {
		display: grid;
		background-size: cover;
		aspect-ratio: 2 / 1;
		box-sizing: border-box;
		color: hsl(0, 0%, 15%);
	}

	.quote-content {
		display: flex;
		flex-direction: column;
		grid-column: 1 / span 2;
		font-size: 0.86rem;
		padding-left: 4rem;
		padding-top: 4rem;
		width: 58%;
		box-sizing: border-box;
	}
	.quote-text-container {
		position: relative;
		z-index: 9;

		&::before {
			content: '"';
			position: absolute;
			top: -2.2rem;
			left: -1.2rem;
			font-size: 5rem;
			font-weight: bold;
			opacity: 0.2;
		}
	}

	.quote-text {
		position: relative;
		z-index: 10;
	}

	.quote-author {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		font-family: var(--font-heading);
	}

	.quote-author p {
		margin: 0;
	}

	.quote-author p:first-of-type {
		margin-top: 1.2rem;
		font-size: 1.6rem;
		font-weight: bold;
		line-height: 1.2;
	}

	.quote-logo {
		display: flex;
		grid-row: 2;
		justify-self: flex-start;
		align-self: flex-end;
		width: 100px;
		margin: 1rem;
	}

	.quote-below {
		display: flex;
	}

	.quote-notice-button :global(a) {
		color: inherit;
		text-decoration: inherit;
	}
</style>

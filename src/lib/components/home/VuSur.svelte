<script lang="ts">
	import { onMount } from 'svelte'
	import UnderlinedTitle from '$components/UnderlinedTitle.svelte'
	const label_id = 'logos-title'

	let logosData: { src: string; alt: string; url: string }[] = []

	// Vos paramètres existants
	let logoWidth = 110
	let logoHeight = 110
	let logoGap = 50
	let logoMargin = 0
	let sectionPaddingTop = 10
	let sectionPaddingBottom = 10
	let hoverScale = 1.1
	let maxLogos = 10

	onMount(async () => {
		try {
			const response = await fetch('/src/posts/vu-sur.md')
			if (!response.ok) {
				console.error('Échec du chargement du fichier vu-sur.md:', response.statusText)
				return
			}
			const text = await response.text()

			// Votre code existant pour traiter le fichier Markdown
			const lines = text
				.split('\n')
				.map((line) => line.trim())
				.filter((line) => line)
			const maxLogosLine = lines.find((line) => line.startsWith('#maxLogos='))
			if (maxLogosLine) {
				maxLogos = parseInt(maxLogosLine.replace('#maxLogos=', '').trim(), 10) || maxLogos
				lines.splice(lines.indexOf(maxLogosLine), 1)
			}
			const logosLines = lines.filter(
				(line) => !line.startsWith('#') && !line.startsWith('<!--') && line.includes('|')
			)
			logosData = logosLines
				.slice(0, maxLogos + 1)
				.map((line) => {
					const parts = line.split('|').map((part) => part.trim())
					if (parts.length !== 3) {
						console.warn(`Format de ligne invalide : "${line}"`)
						return null
					}
					const [src, alt, url] = parts
					return { src, alt, url }
				})
				.filter(
					(logo): logo is { src: string; alt: string; url: string } =>
						logo !== null && isValidLogo(logo)
				)
		} catch (error) {
			console.error('Erreur lors du traitement du fichier Markdown :', error)
		}
	})

	function isValidLogo(logo: { src: string; alt: string; url: string }): boolean {
		return (
			typeof logo.src === 'string' &&
			logo.src.trim() !== '' &&
			typeof logo.alt === 'string' &&
			logo.alt.trim() !== '' &&
			typeof logo.url === 'string' &&
			logo.url.trim() !== ''
		)
	}

	function handleImageError(event: Event, src: string) {
		console.error('Image introuvable :', src)
		const target = event.currentTarget as HTMLImageElement
		target.style.display = 'none'
	}
</script>

<section
	aria-labelledby={label_id}
	class="logos-section"
	style="padding-top: {sectionPaddingTop}px; padding-bottom: {sectionPaddingBottom}px;"
>
	<UnderlinedTitle id={label_id}>Nos apparitions médiatiques</UnderlinedTitle>
	<div class="logos-container" style="gap: {logoGap}px;">
		{#each logosData as logo}
			<a
				href={logo.url}
				target="_blank"
				rel="noopener noreferrer"
				class="logo-wrapper"
				style="margin-left: {logoMargin}px; margin-right: {logoMargin}px;"
			>
				<img
					src={logo.src}
					alt={logo.alt}
					class="logo"
					style="width: {logoWidth}px; height: {logoHeight}px;"
					on:error={(event) => handleImageError(event, logo.src)}
				/>
			</a>
		{/each}
	</div>
</section>

<style>
	/* Style de la section principale */
	.logos-section {
		width: 100%;
		text-align: left;
	}

	/* Le reste de votre CSS reste inchangé */
	.logos-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.logo-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		transition:
			transform 0.3s ease,
			filter 0.3s ease;
	}

	.logo {
		width: 100%;
		height: 100%;
		object-fit: contain;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
		border-radius: 8px;
	}

	.logo-wrapper:hover,
	.logo-wrapper:focus {
		transform: scale(1.1);
		filter: brightness(1.1);
	}
</style>

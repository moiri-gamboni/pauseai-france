<script lang="ts">
	import Button from '$components/Button.svelte'
	import UnderlinedTitle from '$components/UnderlinedTitle.svelte'
	const label_id = 'videos-title'
	import Videos from '$posts/videos.md'
</script>

<section aria-labelledby={label_id}>
	<UnderlinedTitle id={label_id}>Nos vidéos</UnderlinedTitle>
	<div class="video-grid">
		<Videos />
	</div>
	<Button href="https://www.youtube.com/@Pause_IA">Voir plus de vidéos</Button>
</section>

<style>
	.video-grid {
		display: grid;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.video-grid :global(iframe) {
		aspect-ratio: 16 / 9;
		width: 100%;
		height: unset;
	}

	@media (min-width: 768px) {
		.video-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 1280px) {
		.video-grid {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>

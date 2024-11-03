<script lang="ts">
	import UnderlinedTitle from '$components/UnderlinedTitle.svelte'
	const label_id = 'newsletter-title'
</script>

<section aria-labelledby={label_id}>
	<div class="newsletter-section">
		<UnderlinedTitle id={label_id}>Inscription à notre newsletter</UnderlinedTitle>
		<div class="embedded-substack">
			<iframe
				title="embedded-substack"
				src="https://pauseia.substack.com/embed"
				frameborder="0"
				scrolling="no"
			></iframe>
		</div>
	</div>
</section>

<style>
	.newsletter-section {
		text-align: center;
		align-items: center;
	}
	.embedded-substack {
		width: 480px;
		height: 320px;
		margin: auto;
	}

	.embedded-substack iframe {
		/* border:1px solid #000000; */
		border: 1px solid var(--brand);
		background: white;
		width: 100%;
		height: 100%;
	}

	@media (max-width: 550px) {
		.embedded-substack {
			width: 90%;
		}
	}
</style>

<script lang="ts">
	import UnderlinedTitle from '$components/UnderlinedTitle.svelte'
	
	const label_id = 'newsletter-title'
</script>

<section aria-labelledby={label_id}>
	<UnderlinedTitle id={label_id}>Inscription à notre newsletter</UnderlinedTitle>
	<div class="embedded-substack">
		<iframe src="https://pauseia.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
	</div>
</section>


<style>

	.embedded-substack {
		text-align: center;
	}
</style>

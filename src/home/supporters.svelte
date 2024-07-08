<script>
	import SupporterCard from '$lib/components/SupporterCard.svelte'
	import Button from '$lib/components/Button.svelte'
	const label_id = 'articles-title'
</script>

<section aria-labelledby={label_id}>
	<h2 id={label_id}>Nos soutiens</h2>
	<div class="logos">
		<div class="logo_items">
			<SupporterCard
				class="card"
				name="Yann LeCan"
				blurb="Chercheur @ Meta"
				image="@imagetools/a061abcea4e33e32315e09e5ab06245d6623388d"
				url="/risks"
			/>
			<SupporterCard
				class="card"
				name="Yann LeCan"
				blurb="Chercheur @ Meta"
				image="@imagetools/a061abcea4e33e32315e09e5ab06245d6623388d"
				url="/risks"
			/>
			<SupporterCard
				class="card"
				name="Yann LeCan"
				blurb="Chercheur @ Meta"
				image="@imagetools/a061abcea4e33e32315e09e5ab06245d6623388d"
				url="/risks"
			/>
			<SupporterCard
				class="card"
				name="Yann LeCan"
				blurb="Chercheur @ Meta"
				image="@imagetools/a061abcea4e33e32315e09e5ab06245d6623388d"
				url="/risks"
			/>
			<SupporterCard
				class="card"
				name="Yann LeCan"
				blurb="Chercheur @ Meta"
				image="@imagetools/a061abcea4e33e32315e09e5ab06245d6623388d"
				url="/risks"
			/>
		</div>
		<div class="logo_items">
			<SupporterCard
				class="card"
				name="Yann LeCan"
				blurb="Chercheur @ Meta"
				image="@imagetools/a061abcea4e33e32315e09e5ab06245d6623388d"
				url="/risks"
			/>
			<SupporterCard
				class="card"
				name="Yann LeCan"
				blurb="Chercheur @ Meta"
				image="@imagetools/a061abcea4e33e32315e09e5ab06245d6623388d"
				url="/risks"
			/>
			<SupporterCard
				class="card"
				name="Yann LeCan"
				blurb="Chercheur @ Meta"
				image="@imagetools/a061abcea4e33e32315e09e5ab06245d6623388d"
				url="/risks"
			/>
			<SupporterCard
				class="card"
				name="Yann LeCan"
				blurb="Chercheur @ Meta"
				image="@imagetools/a061abcea4e33e32315e09e5ab06245d6623388d"
				url="/risks"
			/>
			<SupporterCard
				class="card"
				name="Yann LeCan"
				blurb="Chercheur @ Meta"
				image="@imagetools/a061abcea4e33e32315e09e5ab06245d6623388d"
				url="/risks"
			/>
		</div>
	</div>
</section>

<style>
	.articles-grid {
		display: flex;
		gap: 1rem;

		position: relative;
		overflow: hidden;
	}
	@keyframes slides {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - 1rem));
		}
	}

	.logos {
		overflow: hidden;
		white-space: nowrap;
		position: relative;
		display: flex;
		gap: 1rem;
		margin-left: -6rem;
		margin-right: -6rem;
	}

	.logo_items {
		display: flex;
		gap: 1rem;
		animation: 25s slides infinite linear;
	}

	.logos:hover .logo_items {
		animation-play-state: paused;
	}
</style>

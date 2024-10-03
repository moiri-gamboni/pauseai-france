<script lang="ts">
	import ArticleCard from '$components/ArticleCard.svelte'
	import Button from '$components/Button.svelte'
	import UnderlinedTitle from '$components/UnderlinedTitle.svelte'
	const label_id = 'articles-title'
</script>

<section aria-labelledby={label_id}>
	<UnderlinedTitle id={label_id}>Nos articles mis en avant</UnderlinedTitle>
	<div class="articles-grid">
		<ArticleCard
			title="L’IA et la Cybersécurité"
			blurb="Les systèmes d'IA peuvent déjà analyser et écrire du code, identifier des vulnérabilités et les exploiter."
			url="https://pauseia.substack.com/p/lia-et-la-cybersecurite"
		/>
		<ArticleCard
			title="Quatre niveaux de réglementation de l’IA"
			blurb="Clarifier et mesurer l'efficacité des réglementations aux différentes étapes du processus de création d'un modèle."
			url="https://pauseia.substack.com/p/quatre-niveaux-de-reglementation"
		/>
		<ArticleCard
			title="Classement p(doom) des scientifiques"
			blurb="L'estimation du potentiel de destruction de l'IA par les scientifiques du secteur de l'IA"
			url="https://pauseia.substack.com/p/classement-pdoom-des-scientifiques"
		/>
		<ArticleCard
			title="Les risques existentiels liés à une superintelligence artificielle"
			blurb="Monteriez-vous dans un prototype d’avion dont les ingénieurs aéronautiques estiment qu’il a 14{'\u202F'}% de chances de s’écraser{'\u202F'}?"
			url="https://pauseia.substack.com/p/les-risques-existentiels-lies-a-une"
		/>
		<ArticleCard
			title="Les modèles d’IA face aux humains"
			blurb="Où en sont les modèles les plus récents par rapport à l'intelligence humaine{'\u202F'}?"
			url="https://pauseia.substack.com/p/les-modeles-dia-face-aux-humains"
		/>
		<ArticleCard
			title="Pourquoi une superintelligence pourrait apparaître plus tôt que prévu"
			blurb="L'accélération exponentielle des progrès en IA et ses implications alarmantes"
			url="https://pauseia.substack.com/p/pourquoi-une-superintelligence-pourrait"
		/>
	</div>
	<Button href="https://pauseia.substack.com/">Voir tous les articles</Button>
</section>

<style>
	.articles-grid {
		display: grid;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	@media (min-width: 640px) {
		.articles-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 1024px) {
		.articles-grid {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>

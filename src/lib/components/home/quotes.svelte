<script lang="ts">
	import UnderlinedTitle from '$components/UnderlinedTitle.svelte'
	import QuoteCard from '$components/QuoteCard.svelte'

	const label_id = 'faq-title'
</script>

<section class="faq" aria-labelledby={label_id}>
	<UnderlinedTitle id={label_id}>Ce qu'en disent les experts</UnderlinedTitle>
	<ul class="articles-grid">
		<QuoteCard
			quote="Le développement d'une intelligence artificielle avancée pourrait signer la fin de la race humaine [...] Elle prendrait son essor de manière autonome et se reprogrammerait à un rythme toujours plus rapide."
			author="Stephen Hawking"
			description="Physicien théoricien et cosmologiste"
			firstChild={true}
			image=""
		/>
		<QuoteCard
			quote="Une seule erreur, et l'IA pourrait faciliter la fabrication d'armes chimiques ou biologiques. Les groupes terroristes pourraient utiliser l'IA pour semer terreur et destruction à plus grande échelle. Des criminels pourraient exploiter l'IA pour mener des cyberattaques, diffuser de la désinformation, commettre des fraudes, ou même abuser sexuellement d'enfants. Et dans les cas extrêmes les plus rares, il existe même un risque que l'humanité perde complètement le contrôle de l'IA à cause de ce qu'on appelle communément une 'super intelligence'."
			author="Rishi Sunak"
			description="Premier ministre du Royaume-Uni"
		/>
		<QuoteCard
			quote="[...] une autre chose qui est selon moi peut-être la plus dangereuse qui soit, parce qu'il n'y a pas vraiment de solution — l'IA, comme on l'appelle."
			author="Donald Trump"
			description="45e président des États-Unis"
		/>
		<QuoteCard
			quote="L'Intelligence Artificielle est l'un des outils les plus puissants de notre époque, mais pour saisir l'opportunité qu'elle représente, nous devons d'abord atténuer ses risques. [...] Les réseaux sociaux nous ont démontré les dégâts que peut causer une technologie puissante en l'absence de protections adéquates [...] Nous devons être lucides et vigilants face aux menaces émergentes - face aux technologies émergentes qui peuvent représenter - pas nécessairement, mais peuvent représenter - un danger pour notre démocratie et nos valeurs."
			author="Joe Biden"
			description="46e président des États-Unis"
		/>
		<QuoteCard
			quote="L'intelligence artificielle est l'avenir, non seulement pour la Russie, mais pour toute l'humanité. Elle apporte des opportunités colossales, mais aussi des menaces difficiles à prédire. Celui qui deviendra le leader dans ce domaine deviendra le maître du monde [...] Si nous devenons leaders dans ce domaine, nous partagerons ce savoir-faire avec le monde entier, de la même manière que nous partageons aujourd'hui nos technologies nucléaires."
			author="Vladimir Putin"
			description="Président de la Russie"
		/>
		<QuoteCard
			quote="L'IA doit être guidée dans une direction propice au progrès de l'humanité. Ainsi, il devrait y avoir une ligne rouge dans le développement de l'IA, une ligne rouge à ne pas franchir [...] Elle ne devrait pas profiter uniquement à un petit groupe de personnes, mais bénéficier à la grande majorité de l'humanité [...] Il est essentiel que nous travaillions ensemble et que nous nous coordonnions."
			author="Li Qiang"
			description="Premier ministre de la Chine"
		/>
		<QuoteCard
			quote="[Nous] ne devrions pas sous-estimer les menaces réelles émanant de l'IA [...] Elle progresse plus rapidement que ce que ses développeurs avaient anticipé [...] Nous disposons d'une fenêtre d'opportunité qui se rétrécit pour guider cette technologie de manière responsable."
			author="Ursula von der Leyen"
			description="Présidente de la Commission européenne"
		/>
		<QuoteCard
			quote="L'IA pose un risque planétaire à long terme. Même ses propres concepteurs ignorent où leur invention pourrait les mener. J'exhorte [le Conseil de sécurité de l'ONU] à examiner cette technologie avec un sentiment d'urgence [...] Ses créateurs eux-mêmes ont averti que des risques bien plus grands, potentiellement catastrophiques et existentiels, nous attendent."
			author="António Guterres"
			description="Secrétaire général des Nations Unies"
		/>
		<QuoteCard
			quote="J'exhorte la communauté internationale à collaborer pour adopter un traité régulant le développement et l'utilisation de l'intelligence artificielle sous toutes ses formes [...] [L'IA] peut représenter un risque pour notre survie et mettre en danger notre maison commune."
			author="Pape Francois"
			description="Chef spirituel de l'Église catholique"
		/>
		<QuoteCard
			quote="[...] Comme l'IA a le potentiel d'apporter de grands bienfaits, elle a aussi le potentiel de causer des dommages considérables. Allant des cyberattaques d'une ampleur inédite assistées par l'IA à des armes biologiques conçues par IA qui pourraient menacer des millions de vies, ces riques sont souvent qualifiées de risques existentiels de l'IA car, bien sûr, elles pourraient mettre en péril l'existence même de l'humanité. Ces menaces sont, sans conteste, profondes et exigent une action mondiale."
			author="Kamala Harris"
			description="Vice-présidente des États-Unis"
		/>
		<QuoteCard
			quote="L'impact potentiel de l'IA pourrait dépasser les limites cognitives humaines. Pour garantir que cette technologie profite toujours à l'humanité, nous devons réguler le développement de l'IA et empêcher qu'elle ne devienne incontrôlable [...] Nous devons renforcer la détection et l'évaluation de tout le cycle de vie de l'IA, en nous assurant que l'humanité a la capacité d'appuyer sur le bouton pause à des moments critiques."
			author="Zhang Jun"
			description="Ambassadeur de la Chine auprès des Nations Unies"
		/>
		<QuoteCard
			quote="Il semble probable que dès que le processus de pensée de la machine aura commencé, elle ne tardera pas à dépasser nos faibles capacités... Elles pourraient échanger entre elles pour aiguiser leur esprit. À un certain stade, nous devrions donc nous attendre à ce que les machines prennent le contrôle."
			author="Alan Turing"
			description="Père de l'informatique et de l'intelligence artificielle"
		/>
		<QuoteCard
			quote="L'IA est un des rares cas où je pense que nous devons être proactifs dans la régulation plutôt que réactifs [...] Je pense que [la super intelligence numérique] est la plus grande crise existentielle à laquelle nous sommes confrontés et la plus urgente. Il faut un organisme public qui ait une supervision pour confirmer que tout le monde développe l'IA de manière sûre [...] Et retenez bien ceci, l'IA est bien plus dangereuse que les armes nucléaires. Bien plus. Alors pourquoi n'avons-nous aucune réglementation ? C'est de la folie."
			author="Elon Musk"
			description="Fondateur/Co-fondateur d'OpenAI, Neuralink, SpaceX, xAI, PayPal, PDG de Tesla, CTO de X/Twitter"
		/>
		<QuoteCard
			quote="Les super intelligences feront partie de notre avenir. [...] Il y a une possibilité que les IA échappent à tout contrôle. [Potentiellement,] une machine pourrait décider que les humains sont une menace, conclure que ses intérêts sont différents des nôtres, ou simplement cesser de se soucier de nous."
			author="Bill Gates"
			description="Co-fondateur of Microsoft"
		/>
		<QuoteCard
			quote="[Sur la façon de demander la création d'un organisme de régulation mondial :] Tout cluster de calcul au-dessus d'un certain seuil de puissance extrêmement élevé - et vu les coûts, on parle peut-être de cinq dans le monde, quelque chose comme ça - tout cluster de ce type doit se soumettre à l'équivalent d'inspecteurs internationaux en désarmement [...] J'ai beaucoup voyagé autour du monde cette année, et j'ai parlé aux chefs d'État de nombreux pays, et il y avait un soutien presque universel pour cette idée."
			author="Sam Altman"
			description="Co-fondateur et PDG d'OpenAI, Ancien président de Y Combinator"
		/>
	</ul>
</section>

<style>
	.articles-grid {
		column-count: 1;
		gap: 2rem;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2rem;
		list-style: none;
		margin: 0;
		margin-right: 0px;
		margin-left: 0px;
		padding: 0;
	}

	@media (min-width: 600px) {
		.articles-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 768px) {
		.articles-grid {
			column-count: 2;
		}
	}

	@media (min-width: 1024px) {
		.articles-grid {
			column-count: 3;
		}
	}
	@media (min-width: 1280px) {
		.articles-grid {
			column-count: 4;
		}
	}
</style>

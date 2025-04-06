import adapter from '@sveltejs/adapter-netlify'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import { mdsvex, escapeSvelte } from 'mdsvex'
import { getHighlighter } from 'shiki'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import { faqPlugin } from './src/lib/faqPlugin.js'
import { remarkFrenchTypography } from './src/lib/typographyPlugin.js'
import { rehypeWBWColorBoxes, rehypeWBWPopups2 } from './src/lib/rehypeWBWPlugins.js'

import { config as dotenv } from 'dotenv'
dotenv()

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/lib/layouts/mdsvex.svelte',
		waitbutwhy: './src/lib/layouts/waitbutwhy.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter({ theme: 'poimandres' })
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
			return `{@html \`${html}\` }`
		}
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }], remarkFrenchTypography],
	rehypePlugins: [rehypeWBWColorBoxes, rehypeWBWPopups2, rehypeSlug, faqPlugin]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			edge: true
		}),
		prerender: {
			entries: process.env.PUBLIC_UNDER_CONSTRUCTION === 'true' ? [] : ['*']
		},
		alias: {
			$assets: './src/assets',
			$posts: './src/posts',
			$components: './src/lib/components',
			$config: './src/lib/config.ts',
			$routes: './src/routes'
		}
	}
}

export default config

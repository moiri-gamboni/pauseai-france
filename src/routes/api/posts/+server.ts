import { json } from '@sveltejs/kit'
import { getPosts } from '$lib/api'

export function GET() {
	const posts = getPosts()
	return json(posts)
}

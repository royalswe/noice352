import {getPostsQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

// Gets a specific author from its slug.current value
export async function get({params: {slug}}) {
  const category =
    await client.fetch(/* groq */ `*[_type == "category" && slug.current == "${slug}"][0]{
    ...,
		"posts": ${getPostsQuery(`
			// Get every post that includes the current document _id in its categories[]
      references(^._id)
		`)}
  }`)

  if (category) {
    return {
      status: 200,
      body: {
        category
      }
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}

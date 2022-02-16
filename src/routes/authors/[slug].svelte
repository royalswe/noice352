<script context="module">
  export async function load({page, fetch}) {
    try {
      const url = `/authors/${page.params.slug}.json`
      const res = await fetch(url)
      const {author} = await res.json()

      if (author) {
        return {
          props: {
            author
          }
        }
      }
    } catch (err) {
      return {
        status: 500,
        error: new Error(`Could not load url`)
      }
    }
  }
</script>

<script>
  import PortableText from '@portabletext/svelte'
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import AuthorBlock from '$lib/AuthorBlock.svelte'
  import PostsGrid from '$lib/PostsGrid.svelte'
  import SanityImage from '$lib/SanityImage.svelte'

  export let author
</script>

{#if author.image}
  <figure class="pb-10">
    <SanityImage className="rounded-full mx-auto" image={author.image} maxWidth={250} />
    <figcaption class="font-medium">
      <div class="text-gray-900 text-center">Innlägg av {author.name}</div>
    </figcaption>
  </figure>
{/if}

<!-- {#if author?.bio}
  <PortableText
    blocks={author.bio}
    serializers={{
      types: {
        code: Code,
        image: ImageBlock,
        authorReference: AuthorBlock
      },
      marks: {
        link: Link
      }
    }}
  />
{/if} -->

<PostsGrid posts={author.posts} />

<script context="module">
  export async function load({fetch}) {
    try {
      const res = await fetch('/blog/all.json')
      const data = await res.json()
      return {
        props: data
      }
    } catch (err) {
      console.log('500:', err)
    }
  }
</script>

<script>
  import AuthorCard from '$lib/AuthorCard.svelte'
  import PostCard from '$lib/PostCard.svelte'

  export let posts
  export let authors
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container mx-auto px-6 md:px-4">



<h1 class="heading text-4xl md:text-6xl font-bold font-sans md:leading-tight">Recent posts</h1>
<main class="py-6">
  {#each posts as post (post.slug.current)}
  <PostCard {post} />
{/each}
</main>



<h2 style="margin-top: 4rem">Author{authors.length > 1 ? 's' : ''}</h2>

{#each authors as author}
  <AuthorCard {author} />
{/each}

</div>
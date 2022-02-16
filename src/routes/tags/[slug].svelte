<script context="module">
  export async function load({page, fetch}) {
    try {
      const url = `/tags/${page.params.slug}.json`
      const res = await fetch(url)
      const {category} = await res.json()

      if (category) {
        return {
          props: {
            category
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
  import PostsGrid from '$lib/PostsGrid.svelte'

  export let category
</script>

<main class="p-3">
  <h1 class="ml-5 p-5 text-gray-900 text-xl">Kategori {category.title}</h1>

  <PostsGrid posts={category.posts} />
</main>





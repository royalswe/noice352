<script>
  import SanityImage from '$lib/SanityImage.svelte'
  import AuthorCard from '$lib/AuthorCard.svelte'

  export let post
</script>

<article class="flex justify-center m-5">
  {#if post.image}
    <div class="post-card flex flex-col md:flex-row w-full lg:w-10/12">
      <div class="md:mr-4 mb-2 md:mb-0 md:w-4/12 ">
        <SanityImage image={post.image} maxWidth={1000} />
      </div>
      <div class="flex-1">
        <div class="authors flex items-center">
          <div class="flex">
            {#each post.authors as author}
              <AuthorCard {author} size={'28px'} />
            {/each}
            <div class="flex items-center text-sm font-medium text-gray-700">
              {new Date(post.publishedAt).toLocaleDateString('sv', {
                month: 'long',
                day: '2-digit',
                year: 'numeric'
              })}
            </div>
          </div>
        </div>
        <a rel="prefetch" href="/blog/{post.slug}" class="hover:text-green-400">
          <h2 class="text-2xl font-semibold mb-1 text-black">{post.title}</h2>
        </a>
        <p class="text-base font-light text-gray-600 mb-4">{post.preamble || ''}</p>
        <div class="mb-2">
          {#each post.categories as category}
            <a
              rel="prefetch"
              href="/tags/{category.slug}"
              class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out"
            >
              {category.title}
            </a>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</article>

<style>
  article {
  }

  h2 {
    margin: 1rem 0 0;
  }

  h2 a {
    text-decoration: none;
  }

  .image {
    padding-bottom: 62.5%;
    position: relative;
    overflow: hidden;
  }

  .image :global(img) {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }
</style>

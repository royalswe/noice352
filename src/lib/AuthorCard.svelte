<script>
  import SanityImage from './SanityImage.svelte'

  export let author
</script>

{#if author?.name}
  <a href="/authors/{author.slug.current}">
    <span class="mr-4">
      <SanityImage image={author.image} maxWidth={40} />
    </span>
    <p class="font-bold text-base md:text-xl leading-none mb-2">{author.name}</p>
  </a>
{/if}

<style>
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    vertical-align: middle;
  }
  span :global(img) {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: cover;
    margin: 0;
  }
</style>

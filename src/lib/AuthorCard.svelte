<script>
  import SanityImage from './SanityImage.svelte'

  export let author
  export let size = '40px'
</script>

{#if author?.name}
  <a href="/authors/{author.slug.current}">
    <span class="mr-4" style="--theme-size: {size}">
      <SanityImage image={author.image} maxWidth={40} />
    </span>
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
    width: var(--theme-size);
    height: var(--theme-size);
    object-fit: cover;
    margin: 0;
  }
</style>

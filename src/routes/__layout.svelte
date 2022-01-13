<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
  import '../app.postcss';
</script>

<Header />

<main class="bg-gray-100 font-sans leading-normal tracking-normal">
  <slot />
</main>

<Footer />

<style>
  :global(a) {
    color: #1a4d9e;
  }
  :global(a:hover) {
    color: #1e61cd;
    border-bottom: none;
  }
</style>

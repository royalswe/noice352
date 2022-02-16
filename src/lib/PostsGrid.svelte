<!-- Denna komponent används ej -->
<script>
  import PostCard from '$lib/PostCard.svelte'

  export let posts = []
</script>

<section class="flex post-grid">
  {#each posts as post (post.slug)}
    <PostCard {post} />
  {/each}
</section>

<style lang="scss">
  .post-grid {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;
  }

  :global {
    .post-grid {
      article {
        flex: 1 0 20rem;
        max-width: 400px;

        > div > div:first-of-type {
          width: 100%;
          height: 5rem;
        }
        > div > div:last-child {
          background-color: #ffffff;
          padding: 0 5px 0 5px;
        }
      }

      .post-card {
        flex-direction: column;
        border: 1px solid #ccc;

        .authors {
          flex-direction: column;
          transform: translateY(-1rem);

          > div {
            display: contents;
          }
        }
      }
    }
  }
</style>

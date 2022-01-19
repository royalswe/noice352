<script context="module">
  export async function load({page, fetch}) {
    try {
      const url = `/blog/${page.params.slug}.json`
      const res = await fetch(url)
      const data = await res.json()

      if (data?.post) {
        return {
          props: data
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

<script lang="ts">
  import PortableText from '@portabletext/svelte'
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import AuthorBlock from '$lib/AuthorBlock.svelte'
  import AuthorCard from '$lib/AuthorCard.svelte'
  import SanityImage from '$lib/SanityImage.svelte'
  import type {Post} from '$lib/types'

  export let post: Post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="container w-full md:max-w-4xl mx-auto pt-20">
  <div
    class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
    style="font-family:Georgia,serif;"
  >
    <!--Title-->
    <div class="font-sans">
      <p class="text-base md:text-sm text-green-500 font-bold">
        &lt; <a
          href="/"
          class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
          >BACK TO BLOG</a
        >
      </p>
      <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
        {post.title}
      </h1>
      <p class="text-sm md:text-base font-normal text-gray-600">
        Published {new Date(post.publishedAt).toLocaleDateString('sv', {
          month: 'long',
          day: '2-digit',
          year: 'numeric'
        })}
      </p>
    </div>

    {#if post.image}
      <SanityImage image={post.image} />
    {/if}

    <p class="py-6">
      <PortableText
        blocks={post.body}
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
    </p>
    <!--Tags -->
    <div class="text-base md:text-sm text-gray-500 px-4 py-6">
      Tags: <a href="#" class="text-base md:text-sm text-green-500 no-underline hover:underline"
        >Link</a
      >
      .
      <a href="#" class="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a>
    </div>

    <!--Divider-->
    <hr class="border-b-2 border-gray-400 mb-8 mx-4" />

    <!--Author-->
    <div class="flex w-full items-center font-sans px-4 py-12">
      {#each post.authors || [] as author}
        <AuthorCard {author} />
        <div class="flex-1 px-2">
          <p class="text-base font-bold md:text-xl leading-none mb-2">{author.name}</p>
          <p class="text-gray-600 text-xs md:text-base">{author.bio[0].children[0].text}</p>
        </div>
      {/each}
      <div class="justify-end">
        <button
          class="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full"
          >Read More</button
        >
      </div>
    </div>
  </div>
  <!--/Author-->

  <!--Divider-->
  <hr class="border-b-2 border-gray-400 mb-8 mx-4" />

  <!--Next & Prev Links-->
  <div class="font-sans flex justify-between content-center px-4 pb-12">
    <div class="text-left">
      <span class="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span><br />
      <p>
        <a
          href="#"
          class="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
          >Blog title</a
        >
      </p>
    </div>
    <div class="text-right">
      <span class="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span><br />
      <p>
        <a
          href="#"
          class="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
          >Blog title</a
        >
      </p>
    </div>
  </div>

  <!--/Next & Prev Links-->

  <hr />
</div>

<style lang="postcss">
</style>

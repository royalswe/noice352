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
  import PostCard from '$lib/PostCard.svelte'

  export let posts
</script>

<svelte:head>
  <title>Blog</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Wendy+One&display=swap');
  </style>
</svelte:head>

<!--Hey! This is the original version
of Simple CSS Waves-->

<div class="header">
  <!--Content before waves-->
  <div class="inner-header flex">
    <h1>noice🔊</h1>
  </div>

  <!--Waves Container-->
  <div>
    <svg
      class="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#F3F4F6" />
      </g>
    </svg>
  </div>
  <!--Waves end-->
</div>
<!--Header ends-->

<!--Content starts-->
<div class="content flex">
  
</div>
<!--Content ends-->

<div class="container mx-auto px-6 md:px-4">
  <main class="py-6">
    {#each posts as post (post.slug)}
      <PostCard {post} />
    {/each}
  </main>
</div>

<style>
  h1 {
    font-family: 'Wendy One', sans-serif;
    font-size: 12vw;
    color: #fecc00;
    text-shadow: 0 10px 7px rgba(0, 0, 0, 0.4), 0 -0.06em 1px #fff;
    letter-spacing: -3px;
  }

  h1:hover {
    animation: glitch 0.3s linear infinite;
    cursor: pointer;
  }

  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }

  .header {
    background: linear-gradient(60deg, #002868 0%, #216aa7 100%);
    color: white;
  }

  .content {
    position: relative;
    height: 20vh;
    text-align: center;
  }

  .inner-header {
    height: 65vh;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .flex {
    /*Flexbox for containers*/
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px; /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
  }

  /* Wave animation */

  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }
    .content {
      height: 30vh;
    }
  }
</style>

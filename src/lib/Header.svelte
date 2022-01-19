<script context="module">
  import {page} from '$app/stores'
</script>

<script>
  let path
  $: ({path} = $page)

  let hideNav = true
</script>

<header>
  <nav class="bg-gray-100 w-full z-10 top-0">
    <div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
      <div class="pl-4">
        <a
          data-selected={path === '/'}
          href="/"
          class="text-gray-900 no-underline hover:no-underline font-extrabold text-xl"
        >
          Simon Johansson
        </a>
      </div>

      <div class="block lg:hidden pr-4">
        <button
          on:click={() => (hideNav = !hideNav)}
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
        class:hidden={hideNav}
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <a
              data-selected={path === '/about'}
              href="/about"
              class="inline-block py-2 px-4 text-gray-900 font-bold no-underline">Om mig</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
              href="#">link</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
              href="#">link</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

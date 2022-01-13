import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {

  preprocess: [
		preprocess({
			postcss: true,
	        scss: {
				// We can use a path relative to the root because
				// svelte-preprocess automatically adds it to `includePaths`
				// if none is defined.
				//prependData: `@import 'src/styles/variables.scss';`
			},
		})
	],

  kit: {
    target: '#svelte',
    adapter: adapter(),
    vite: {
      server: {
        fs: {
          allow: ['studio']
        }
      }
    }
  }
}

export default config

import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter(),
  },
  preprocess: [
    sveltePreprocess(),
    mdsvex({
		extension: '.md',
		layout: {
			blog: 'src/routes/blog/post.svelte'
		}
    }),
  ],
};

export default config;

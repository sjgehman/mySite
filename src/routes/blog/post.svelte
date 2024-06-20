<!-- Just like our +layout.svelte file, this component will wrap posts, as a parent component, and slot the post in as its child. The difference is: it’ll work just on Markdown posts in the blog, not every route. The router will ignore post.svelte, even though it’s inside the routes folder, because it’s not a valid + file.
 -->
<script>
	export let title;
	export let date;
</script>

<article>
	<h1>{title}</h1>

	<p>Published: {date}</p>

	<slot />
</article>

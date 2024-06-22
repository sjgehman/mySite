<!-- src/routes/+layout.svelte -->
<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/style.scss';
</script>

<div class="container">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden; // Prevent horizontal scrolling
  }

  main {
    flex: 1;
    padding: 1rem 0;
    max-width: 100%; // Ensure main content does not overflow
  }
</style>

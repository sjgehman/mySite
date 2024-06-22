<script>
  let isOpen = false;

  // Function to toggle the menu
  const toggleMenu = () => {
    isOpen = !isOpen;
  };
</script>

<header>
  <a href="/" class="logo">Home</a>
  <nav class="desktop-menu">
    <ul>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
  <button class="hamburger-menu" on:click={toggleMenu} aria-label="Toggle menu">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>

  {#if isOpen}
    <div class="mobile-menu">
      <button class="close-menu" on:click={toggleMenu} aria-label="Close menu">
        &times;
      </button>
      <ul>
        <li><a href="/blog" on:click={toggleMenu}>Blog</a></li>
        <li><a href="/about" on:click={toggleMenu}>About</a></li>
        <li><a href="/contact" on:click={toggleMenu}>Contact</a></li>
      </ul>
    </div>
  {/if}
</header>

<style lang="scss">
  @import '../styles/variables';
  @import '../styles/mixins';

  header {
    background: $background-color;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: $text-color;
      text-decoration: none;
    }
  }

  .desktop-menu {
    ul {
      list-style: none;
      display: flex;
      gap: 1.5rem;
      padding: 0;
      margin: 0;

      li {
        a {
          color: $text-color;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .hamburger-menu {
    display: none;
    flex-direction: column;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;

    .bar {
      width: 25px;
      height: 3px;
      background-color: #fff;
      margin: 4px 0;
      transition: 0.4s;
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $primary-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    padding: 2rem;
    box-sizing: border-box;

    .close-menu {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 2rem;
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: center;
      width: 100%;

      li {
        a {
          display: block;
          padding: 1.5rem 0;
          font-size: 1.5rem;
          color: #fff;
          text-decoration: none;
          &:hover {
            background: darken($primary-color, 10%);
          }
        }
      }
    }
  }
</style>

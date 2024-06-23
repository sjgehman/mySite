<!-- src/components/Footer.svelte -->
<footer>
  <div class="footer-content">
    <div class="footer-section">
      <ul class="social-links">
        <li><a href="https://github.com/sjgehman"><i class="fab fa-github"></i></a></li>
        <li><a href="mailto:samuelgehman@gmail.com"><i class="fas fa-envelope"></i></a></li>
        <li><a href="https://linkedin.com/in/sgehman/"><i class="fab fa-linkedin-in"></i></a></li>
      </ul>
    </div>
  </div>
</footer>

<style lang="scss">
  @import '../styles/variables';
  @import '../styles/mixins';

  footer {
    background: $secondary-color;
    color: #fff;
    padding: 1.5rem 2.5rem;
    text-align: center;
    font-family: sans-serif;

    .footer-content {
      @include container;
      display: flex;
      justify-content: center;

      .footer-section {
        flex: 1;
        margin: 0.5rem;
        min-width: 250px;

        .social-links {
          list-style: none;
          padding: 0 3rem;
          margin: 0;
          display: flex; // Changed to flex to align icons horizontally
          justify-content: center; // Center the icons horizontally

          li {
            margin: 0 15px; // Adjust spacing between icons
            a {
              color: #fff;
              text-decoration: none;
              transition: color 0.3s;
              font-size: 1.5rem; // Increase icon size for better visibility

              &:hover {
                color: #293766;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    footer .footer-content {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
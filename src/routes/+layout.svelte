<!-- +layout.svelte -->
<script>
    import Header from '$lib/components/Header.svelte';
    import '$lib/styles/style.scss';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="container">
    <Header />

    <main>
        <slot />
    </main>

    <Footer />
</div>

<style lang="scss">
    html, body {
        height: 100%;
        margin: 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        padding: 1rem;
    }

    footer {
        background: #333;
        color: #fff;
        padding: 1rem;
        width: 100%;
    }

    .footer-content {
        display: flex;
        justify-content: space-around;
        width: 100%;
        max-width: 1200px;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }

    .footer-section {
        flex: 1;
        margin: 0.5rem;

        h3 {
            margin-bottom: 0.5rem;
        }
    }

    .social-links {
        list-style: none;
        padding: 0;

        li {
            margin: 0.5rem 0;

            a {
                color: #fff;
                text-decoration: none;
                transition: color 0.3s;

                &:hover {
                    color: #1e90ff;
                }
            }
        }
    }

    .footer-bottom {
        width: 100%;
        text-align: center;
        padding: 1rem 0;
        border-top: 1px solid #444;
    }
</style>
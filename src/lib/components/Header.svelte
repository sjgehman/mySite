<!-- Header.svelte -->
<header>
	<a href="/" class="logo">Home</a>

	<nav>
		<input type="checkbox" id="menu-toggle" />
		<label for="menu-toggle" class="menu-icon">
			<span></span>
			<span></span>
			<span></span>
		</label>
		<ul class="menu">
			<li><a href="/blog">Blog</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		padding: 1rem;
		background: lightskyblue;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: bold;
	}

	nav {
		position: relative;
	}

	.menu-icon {
		display: none;
		flex-direction: column;
		cursor: pointer;

		span {
			height: 3px;
			width: 25px;
			background: #333;
			margin: 4px;
			border-radius: 2px;
			transition: transform 0.3s ease, background 0.3s ease;
		}
	}

	#menu-toggle {
		display: none;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;

		li {
			margin: 0;
		}
	}

	a {
		text-decoration: none;
		color: inherit;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: background 0.3s ease;

		&:hover {
			background: rgba(0, 0, 0, 0.1);
		}
	}

	@media (max-width: 768px) {
		.menu-icon {
			display: flex;
		}

		ul {
			flex-direction: column;
			position: absolute;
			top: 100%; /* Aligns with the bottom of the nav */
			right: 0;
			background: lightskyblue;
			width: 200px; /* Set a fixed width to avoid text cut-off */
			border-radius: 0 0 4px 4px;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			display: none;

			li {
				text-align: left; /* Align text to the left */
				margin: 0;
				width: 100%; /* Make each menu item take full width */
			}

			a {
				display: block;
				width: 100%;
				padding: 1rem; /* Increase padding for better touch targets */
				box-sizing: border-box; /* Ensure padding is included in width */
			}
		}

		#menu-toggle:checked + .menu-icon + .menu {
			display: flex;
		}
	}
</style>

<!-- Footer.svelte -->
<footer>
	<div class="footer-content">
		<div class="footer-section">
			<h3>About Us</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		</div>
		<div class="footer-section">
			<h3>Contact</h3>
			<p>Email: info@example.com</p>
			<p>Phone: (123) 456-7890</p>
		</div>
		<div class="footer-section">
			<h3>Follow Us</h3>
			<ul class="social-links">
				<li><a href="#">Facebook</a></li>
				<li><a href="#">Twitter</a></li>
				<li><a href="#">Instagram</a></li>
			</ul>
		</div>
	</div>
	<div class="footer-bottom">
		<p>&copy; 2024 Your Company. All rights reserved.</p>
	</div>
</footer>

<style lang="scss">
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

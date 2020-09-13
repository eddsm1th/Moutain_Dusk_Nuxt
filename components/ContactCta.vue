<template>
	<nuxt-link to="/contact">
		<section class="contact-cta">
			<div class="section-wrap">
				<h3 class="contact-cta__content">
					<span class="fs-xxl fw-bold">Contact Us</span>
				</h3>
			</div>
		</section>
	</nuxt-link>
</template>

<script>

    export default {
        name: 'ContactCta',
	}

</script>

<style lang="scss">
	.contact-cta {
		padding: 100px 0;
		background-color: #000;
		position: relative;
		z-index: 1;

		&__content {
			color: #fff;
			text-align: center;
			position: relative;
		}
	}
</style>
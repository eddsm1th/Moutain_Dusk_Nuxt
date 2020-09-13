<template>
    <section class="overlay">

        <div class="overlay__section overlay__section--primary">
            <nuxt-link to="/">
                <h1 class="overlay__title fs-m fw-bold">Lomas Brewing</h1>
            </nuxt-link>

            <Navbar />
        </div>

        <div class="overlay__section overlay__section--secondary wysiwyg-content">
            <p class="fw-bold fs-s">Lomas Brewing Company right reserved some other company bullshit idk</p>
            <p class="fs-s">
                <a href="http://eddsmith.com/" target="_blank" rel="noopener">Made by eddsmith.com</a>
            </p>
        </div>

        <div class="overlay__section overlay__section--tertiary">
            <Socialnav />
        </div>

    </section>
</template>

<script>

    import Navbar from '@/components/Navbar.vue';
    import Socialnav from '@/components/SocialNav.vue';

    export default {
        name: 'Overlay',

        components: {
            Navbar,
            Socialnav
        },

        data () {
            return {
            }
        },
    };
</script>

<style lang="scss">
    .overlay {
        color: map-get( $colours, 'white' );
        position: relative;
        z-index: 1;
        mix-blend-mode: difference;

        &__section {
            @include from-to-with-between( 'padding', 20px, 40px );
            position: fixed;

            &--primary {
                width: 100%;
                top: 0;
                left: 0;
                display: flex; 
                justify-content: space-between;
                
                @media ( min-width: 768px ) {
                    align-items: center;
                }    
            }

            &--secondary {
                display: none;
                position: fixed;
                width: 100%;
                bottom: 0;
                left: 0;
                width: 50%;

                @media ( min-width: 768px ) {
                    display: block;
                }
            }

            &--tertiary {
                display: none;
                transform: translateY(-50%);
                right: 0;
                top: 50%;

                @media ( min-width: 768px ) {
                    display: block;
                }
            }
        }

        &__title {
            font-size: $base-font-size;
        }
    }
</style>

<template>
    <header
        class="hero"
        :class="{
            'hero--short' : options.short == true
        }"
        >

        <div
            class="section-wrap section-wrap--wide hero__content"
            :class="{
                'hero__content--has-ctas' : content.ctas && content.ctas.length > 0
            }"
            >
            <h1 class="hero__heading" v-if="content.heading" v-html="content.heading"></h1>
            <h2 class="hero__subheading fs-l" v-if="content.subheading" v-html="content.subheading"></h2>
        </div>

        <ul class="hero__ctas" v-if="content.ctas && content.ctas.length > 0">
            <li class="hero__cta" v-for="cta, index in content.ctas">
                <a href="#">
                    <span class="fs-xs">0{{ index + 1 }}</span>
                    <h3 class="fs-m" v-html="cta.heading"></h3>
                    <p class="fs-s" v-html="cta.subheading"></p>
                </a>
            </li>
        </ul>

    </header>
</template>

<script>

    export default {
        name: 'Hero',

        props: {
            'content': {
                type: Object
            },
            'options': {
                type: Object
            }
        }
    };
</script>

<style lang="scss">

    $cta_dimension: 220px;

    .hero {
        min-height: 100vh;
        position: relative;
        display: flex;
        align-items: center;

        &--short {
            min-height: 60vh;
        }

        &__content {
            color: map-get($colours, 'white');
            line-height: 1;

            &--has-ctas {
                @include from-to-with-between( 'margin-top', ( $cta_dimension / -2 ) * .666, $cta_dimension / -2 );
            }
        }

        &__heading {
            @include from-to-with-between( 'font-size', 48px, 96px, 320px, 768px );
            @include from-to-with-between( 'font-size', 96px, 120px, 768px, 1440px );
            font-weight: 900;
            margin-bottom: 24px;
            text-transform: uppercase;
        }

        &__ctas {
            list-style: none;
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100%;
            background-color: map-get($colours, 'black');
            display: flex;
            flex-wrap: wrap;

            @media ( min-width: 768px ) {
                width: 50%;
            }
        }

        &__cta {
            width: 100%;

            @media ( min-width: 580px ) {
                width: 50%;
            }
            
            a {
                @include from-to-with-between( 'padding', 20px, 40px );
                @include from-to-with-between( 'height', $cta_dimension * .5, $cta_dimension );
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;    
                color: map-get($colours, 'white');

                > * {
                    position: relative;
                    z-index: 1;
                }

                > span {
                    margin-bottom: auto;
                }

                > h3 {
                    font-weight: 600;
                    margin-bottom: 12px;
                }
            }
        }
    }
</style>

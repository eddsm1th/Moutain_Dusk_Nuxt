<template>
    <section class="splashscreen" v-if="!cycle_complete" :class="{
        'mounted' : mounted,
        'out' : clip_out,
    }">
        <div class="splashscreen__inner">
            <span class="splashscreen__text fw-bold fs-l"
                v-html="text"
                :class="{
                    'in' : !clip_text_out,
                    'out' : clip_text_out
                }"
            ></span>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'Splashscreen',

        mounted () {
            this.mounted = true;

            setTimeout( function () {
                this.clip_text_out = true;

                setTimeout( function () {
                    this.clip_out = true;

                    setTimeout( function () {
                        this.cycle_complete = true;
                    }.bind(this), 300 )
                }.bind(this), 600 )
            }.bind(this), 1000 )
        },

        data () {
            return {
                text: "Lomas Brewing",
                cycle_complete: false,
                mounted: false,
                clip_out: false,
                clip_text_out: false,
            }
        },
    };
</script>

<style lang="scss">

    .splashscreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        z-index: 999999;
        clip-path: inset( 0 0 0 0 );

        &.out {
            transition: .3s all cubic-bezier(.6,.02,.68,.3);
            clip-path: inset( 0 100% 0 0 );
        }

        &__inner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &__text {
            text-align: center;
            color: #fff;
            animation-delay: .3s;
            display: inline-block;

            .mounted & {
                &.in {
                    @include transition-in;
                }

                &.out {
                    @include transition-out;
                }
            }
        }
    }
</style>

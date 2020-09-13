<template>
    <section class="brew-grid">
        <div class="section-wrap section-wrap--wide">
            <ul class="brew-grid__list">
                <li class="brew-grid__item" v-for="brew in brews">
                    <div class="brew-grid__item-inner" @click="set_active_brew( brew )">
                        <nuxt-link to="/our-brews#showcase">
                            <div class="brew-grid__item-media">
                                <img :src="brew.image_url">
                            </div>
                            <div class="brew-grid__item-content">
                                <h3 class="brew-grid__item-title fw-bold fs-l">{{ brew.name }}</h3>
                                <h4 class="brew-grid__item-subtitle fs-s">{{ brew.short_description }}</h4>
                            </div>
                        </nuxt-link>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'brewgrid',

        data () {
            return {
                brews: [],
            }
        },

        created () {
            this.brews = this.$store.getters.get_brews;
        },

        methods: {
            set_active_brew ( brew ) {
                this.brews.find( brew => brew.showcase_active == true ).showcase_active = false;
                brew.showcase_active = true;

                this.$store.dispatch( 'set_brews', this.brews );
            }
        }
    };
</script>

<style lang="scss">
    .brew-grid {
        padding: 100px 0;
        background-color: #fff;

        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            list-style: none;
        }

        &__item {
            width: 100%;
            padding-left: 20px;
            padding-right: 20px;

            @media ( min-width: 768px ) {
                width: 50%;
            }

            &:nth-child(even) {
                @media ( min-width: 768px ) {
                    padding-top: 80px;
                }
            }

            &:not(:last-child) {
                @media ( max-width: 767px ) {
                    margin-bottom: 80px;
                }
            }
        }

        &__item-inner {
            max-width: 340px;
            width: 100%;
            margin: 0 auto;
        }

        &__item-media {
            width: calc( 100% - 40px );

            img {
                display: block;
                width: 100%;
            }
        }

        &__item-content {
            width: calc( 100% - 40px );
            margin-left: 40px;
            padding: 0 40px 40px 40px;
            background-color: #000;
            position: relative;
            color: #fff;

            &:before {
                content: "";
                position: absolute;
                bottom: 100%;
                left: 0;
                height: 40px;
                width: 100%;
                background: #000;
            }
        }

        &__item-title {
            margin-bottom: 12px;
        }
    }
</style>

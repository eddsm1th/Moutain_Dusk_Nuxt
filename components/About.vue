<template>
    <section class="about">
        <div class="section-wrap section-wrap--narrow">
            <div class="about__outer-wrap">
                <div class="about__inner-wrap">
                    <div class="about__column">
                        <h2 class="about__heading fw-bold fs-xxl">{{ heading }}</h2>
                        <div class="about__content wysiwyg-content" v-html="content"></div>
                        <img src="http://via.placeholder.com/420x280.png">
                    </div>
                    <div class="about__column about__column--hide-on-mobile">
                        <img src="http://via.placeholder.com/280x380.png">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'about',

        data () {
            return {
                heading: 'Who are we',
                content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque sem at dolor mattis, in pulvinar nunc viverra. Duis imperdiet dui quis aliquam semper. Donec semper ultricies elit, eu vehicula orci vestibulum id.</p>'
            }
        },
    };
</script>

<style lang="scss">

    .about {
        background-color: #000;
        color: #fff;

        &__outer-wrap {
            display: flex;
            flex-wrap: wrap;
            align-items: center; 
            min-height: 100vh;
            padding: 100px 0;
        }

        &__inner-wrap {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start; 
            margin-top: -40px;
            margin-left: -40px;
            min-width: 100%;

            @media ( min-width: 940px ) {
                margin-top: -80px;
                margin-left: -80px;
            }

            @media ( min-width: 1120px ) {
                margin-left: -160px;
            }
        }

        &__column {
            width: 100%;
            padding-top: 40px;
            padding-left: 40px;

            @media ( min-width: 940px ) {
                width: 50%;
                padding-top: 80px;
                padding-left: 80px;
            }

            @media ( min-width: 1120px ) {
                padding-left: 160px;
            }

            &--hide-on-mobile {
                @media ( max-width: 939px ) {
                    display: none;
                }
            }

            img {
                display: block;
                width: 100%;
            }
        }

        &__heading {
            @media ( min-width: 940px ) {
                margin-top: 40px;
            }
        }

        &__heading, &__content {
            margin-bottom: 40px;
        }
    }
</style>

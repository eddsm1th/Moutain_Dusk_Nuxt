<template>
        <ul class="nav">
            <li class="nav__item fs-s"
                v-for="nav_item in nav_items"
                :class="{ 'active' : nav_item.active }"
                @click="set_active_nav_item( nav_item )"
            >
                <nuxt-link :to="nav_item.url">{{ nav_item.name }}</nuxt-link>
            </li>
        </ul>
</template>

<script>

    export default {
        name: 'navbar',

        data () {
            return {
                nav_items: [
                    {
                        'name' : 'Home',
                        'url' : '/',
                        'active' : true,
                    },
                    {
                        'name' : 'Who are we',
                        'url' : '/about',
                        'active' : false,
                    },
                    {
                        'name' : 'Our Brews',
                        'url' : '/our-brews',
                        'active' : false,
                    },
                    {
                        'name' : 'Contact',
                        'url' : '/Contact',
                        'active' : false,
                    }
                ]
            }
        },

        methods: {
            set_active_nav_item ( nav_item ) {
                this.nav_items.find( nav_item => nav_item.active == true ).active = false;
                nav_item.active = true;
            }
        }
    };
</script>

<style lang="scss">

    .nav {
        list-style: none;

        @media ( min-width: 768px ) {
            display: flex;
        }

        &__item {
            text-align: right;

            &:not(:last-child) {
                margin-bottom: 20px;

                @media ( min-width: 768px ) {
                    margin-bottom: 0;
                    margin-right: 40px;
                }
            }

            a {
                display: block;
            }
        }
    }
</style>

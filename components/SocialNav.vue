<template>
    <ul class="social-nav">
        <li class="social-nav__item" v-for="social_item in social_items">
            <a :href="social_item.url" target="_blank" rel="noopener">
                <i class="fab" :class="'fa-' + social_item.name"></i>
            </a>
        </li>
    </ul>
</template>

<script>

    export default {
        name: 'socialnav',

        data () {
            return {
                social_items: [
                    {
                        'name' : 'instagram',
                        'url' : '#'
                    },
                    {
                        'name' : 'twitter',
                        'url' : '#'
                    },
                    {
                        'name' : 'facebook',
                        'url' : '#'
                    }
                ]
            }
        },
    };
</script>

<style lang="scss">

    .social-nav {
        list-style: none;

        &__item {
            &:not(:last-child) {
                margin-bottom: 20px;
            }   
        }
    }
</style>

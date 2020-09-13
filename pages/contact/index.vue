<template>
    <div class="container">
        
        <Hero
            :content="{
                heading: 'Say hello.',
            }"
            :options="{
                short: true,
            }"
        />

    </div>
</template>

<script>
    import Hero from '@/components/Hero.vue';
    import Contactcta from '@/components/ContactCta.vue';

    export default {
        components: {
            Hero,
            Contactcta
        },
    }
</script>

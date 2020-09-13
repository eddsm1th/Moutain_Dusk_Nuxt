<template>
    <div class="container">
        
        <Hero
            :content="{
                heading: 'Who are we.',
            }"
            :options="{
                short: true,
            }"
        />

        <ContactCta />

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

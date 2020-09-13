<template>
    <div class="container">
        
        <Hero
            :content="{
                heading: 'Our brews.',
            }"
            :options="{
                short: true,
            }"
        />

        <Showcase />

        <ContactCta />

    </div>
</template>

<script>
    import Hero from '@/components/Hero.vue';
    import Showcase from '@/components/Showcase.vue';
    import Contactcta from '@/components/ContactCta.vue';

    export default {
        components: {
            Hero,
            Showcase,
            Contactcta
        },
    }
</script>

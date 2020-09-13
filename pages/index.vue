<template>
    <div class="container">

        <Hero
            :content="{
                heading: 'Lomas<br>Brewing.',
                subheading: 'Good beer and even better stories...',
                ctas: [
                    {
                        heading: 'Our Brews',
                        subheading: 'Find out what makes our brews special',
                    },
                    {
                        heading: 'Why us?',
                        subheading: 'What does Lomas Brewing do different'
                    }
                ]
            }"
            :options="{
                short: false,
            }"
        />

        <About />

        <BrewGrid />

        <ContactCta />

    </div>
</template>

<script>
    import Hero from '@/components/Hero.vue';
    import About from '@/components/About.vue';
    import Contactcta from '@/components/ContactCta.vue';
    import BrewGrid from '@/components/BrewGrid.vue';

    export default {
        components: {
            Hero,
            About,
            Contactcta,
            BrewGrid
        },
    }
</script>

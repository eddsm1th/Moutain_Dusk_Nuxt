<template>
  <div>
    <SplashScreen />

    <Overlay />

    <Nuxt />
  </div>
</template>

<script>
    import SplashScreen from '@/components/SplashScreen.vue';
    import Overlay from '@/components/Overlay.vue';

    export default {
        components: {
            Overlay,
            SplashScreen
        }
    }
</script>

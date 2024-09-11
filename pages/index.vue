<script setup lang="ts">
import Navbar from '~/shareds/header/NavbarIndex.vue';

definePageMeta({
    layout: 'default',
});

useHead({
    title: 'Galih Rizki Setiadi',
});
</script>

<template>
    <div class="h-screen">
        <Navbar />
    </div>
</template>

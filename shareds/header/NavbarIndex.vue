<script setup lang="ts">
const links: Array<{ label: string; to: string }> = [
    {
        label: 'Home',
        to: '/',
    },
    {
        label: 'Projects',
        to: '/projects',
    },
];
</script>

<template>
    <div class="h-20 bg-transparent"></div>
    <div v-for="(item, index) in links" :key="index">
        {{ item.label }}
    </div>
    <UButton to="https://github.com/nuxt/ui" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
</template>

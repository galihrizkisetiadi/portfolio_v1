<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui';

const items = ref<StepperItem[]>([
    {
        title: 'Politeknik Negeri Bandung',
        description: 'School, June 2022',
        icon: 'material-symbols:school',
    },
    {
        title: 'PT. Neural Technologies Indonesia',
        description: 'Intern, August 2021 - October 2021',
        icon: 'material-symbols:home-work',
    },
    {
        title: 'CV. Torche Indonesia',
        description: 'Work, May 2023 - Sep 2025',
        icon: 'material-symbols:work',
    },
    {
        title: 'PT. Terakorp Indonesia',
        description: 'Work, Oct 2025 - now',
        icon: 'material-symbols:work',
    },
]);
</script>

<template>
    <UStepper orientation="vertical" :items="items" disabled />
</template>

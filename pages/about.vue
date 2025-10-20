<script setup lang="ts">
import TimelineResume from '~/components/TimelineResume.vue';

definePageMeta({
    layout: 'default',
});

useHead({
    title: 'Galih Rizki Setiadi',
});

const skills = [
    {
        name: 'VueJS',
        icon: 'material-icon-theme:vue',
    },
    {
        name: 'ReactJS',
        icon: 'material-icon-theme:react',
    },
    {
        name: 'NuxtJS',
        icon: 'material-icon-theme:nuxt',
    },
    {
        name: 'Javascript',
        icon: 'material-icon-theme:javascript',
    },
    {
        name: 'PHP',
        icon: 'material-icon-theme:php',
    },
    {
        name: 'Golang',
        icon: 'material-icon-theme:go',
    },
    {
        name: 'HTML',
        icon: 'material-icon-theme:html',
    },
    {
        name: 'CSS',
        icon: 'material-icon-theme:css',
    },
    {
        name: 'TailwindCSS',
        icon: 'material-icon-theme:tailwindcss',
    },
    {
        name: 'Laravel',
        icon: 'material-icon-theme:laravel',
    },
    {
        name: 'Typescript',
        icon: 'material-icon-theme:typescript',
    },
    {
        name: 'Git',
        icon: 'material-icon-theme:git',
    },
    {
        name: 'Java',
        icon: 'material-icon-theme:java',
    },
    {
        name: 'NodeJS',
        icon: 'material-icon-theme:nodejs',
    },
];
</script>

<template>
    <div class="flex w-full items-center pr-4 lg:pl-[10rem]">
        <div class="flex w-full flex-col gap-16 lg:flex-row">
            <div class="flex flex-col gap-6">
                <h1 class="text-xl font-semibold">{{ $t('about.careet') }}</h1>
                <TimelineResume />
            </div>

            <USeparator orientation="vertical" class="hidden h-60 lg:visible" size="lg" />

            <div class="flex flex-col gap-6">
                <h1 class="text-xl font-semibold">{{ $t('about.skills') }}</h1>

                <div class="grid grid-cols-3 gap-1 lg:grid-cols-4 lg:gap-2">
                    <div
                        v-for="(skill, index) in skills"
                        :key="index"
                        class="flex w-full items-center gap-2 rounded-md border border-gray-400 bg-transparent p-2 text-xs lg:px-6 lg:py-2 lg:text-base"
                    >
                        <Icon :name="skill.icon" size="30px" />
                        {{ skill.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

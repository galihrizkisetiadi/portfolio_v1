<script setup lang="ts">
import Navbar from '~/shareds/menu/NavbarIndex.vue';
import SideBar from '~/shareds/menu/SideBar.vue';
import TimelineResume from '~/components/TimelineResume.vue';

definePageMeta({
    layout: 'default',
});

useHead({
    title: 'Galih Rizki Setiadi',
});

const colorMode = useColorMode();

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
    <div class="flex h-screen items-end justify-end">
        <div
            class="mx-40 h-[calc(88vh)] w-full rounded-t-lg"
            :class="[{ 'bg-white': colorMode.value === 'light' }, { 'bg-black': colorMode.value === 'dark' }]"
        >
            <Navbar />
            <div class="flex h-[calc(88vh-7rem)] gap-8">
                <SideBar />

                <div class="flex w-full items-center pl-[20rem]">
                    <div class="flex w-full gap-16">
                        <div class="flex flex-col gap-6">
                            <h1 class="text-xl font-semibold">Career</h1>
                            <TimelineResume />
                        </div>
                        <USeparator orientation="vertical" class="h-60" size="lg" />

                        <div class="flex flex-col gap-6">
                            <h1 class="text-xl font-semibold">Skills</h1>

                            <div class="grid grid-cols-4 gap-2">
                                <div
                                    v-for="(skill, index) in skills"
                                    :key="index"
                                    class="flex w-full items-center gap-2 rounded-md border border-gray-400 bg-transparent px-6 py-2"
                                >
                                    <Icon :name="skill.icon" size="30px" />
                                    {{ skill.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'default',
});

useHead({
    title: 'Galih Rizki Setiadi',
});

const projects = [
    {
        name: 'E-LHKPN',
        img: '/lhkpn.png',
        url: 'https://frontend.elhkpn.devel.torche-indonesia.com',
    },
    {
        name: 'SDP',
        img: '/sdp.jpg',
        url: 'https://frontend.elhkpn.devel.torche-indonesia.com',
    },
    {
        name: 'Pantonpile',
        img: '/pantonpile.png',
        url: 'https://pantonpile.net',
    },
    {
        name: 'Portal Lelang',
        img: '/lelang.png',
        url: 'https://lelang.go.id',
    },
];
</script>

<template>
    <div class="flex w-full items-center justify-center">
        <div class="hidden grid-cols-2 gap-8 py-[2rem] pr-[2rem] lg:grid lg:pl-[5rem]">
            <a
                v-for="(project, index) in projects"
                :key="index"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                    'group flex cursor-pointer flex-col gap-8 rounded-lg',
                    'bg-linear-65 from-gray-300 to-orange-200 dark:from-gray-900 dark:to-gray-500',
                    'h-fit w-fit',
                ]"
            >
                <div
                    class="flex items-end justify-end pt-6 pr-4 text-lg font-bold whitespace-nowrap text-gray-700 lg:text-2xl dark:text-white"
                >
                    {{ project.name }}
                </div>
                <img
                    :src="project.img"
                    :alt="project.name"
                    class="ml-[8rem] aspect-video rounded-xl group-hover:ml-0 hover:ml-0"
                    style="transition: margin-left 1s"
                />
            </a>
        </div>

        <div class="grid grid-cols-1 items-center justify-center gap-2 py-[2rem] pr-[2rem] lg:hidden lg:pl-[5rem]">
            <a
                v-for="(project, index) in projects"
                :key="index"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                    'group flex cursor-pointer flex-col gap-2 rounded-lg',
                    'bg-linear-65 from-gray-300 to-orange-200 dark:from-gray-900 dark:to-gray-500',
                    'h-fit w-fit',
                ]"
            >
                <div
                    class="flex items-end justify-end pr-1 text-lg font-bold whitespace-nowrap text-gray-700 lg:text-2xl dark:text-white"
                >
                    {{ project.name }}
                </div>
                <img :src="project.img" :alt="project.name" class="m-1 aspect-video max-h-24" />
            </a>
        </div>
    </div>
</template>

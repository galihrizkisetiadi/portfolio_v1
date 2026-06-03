<script setup lang="ts">
definePageMeta({
    layout: 'default',
});

useHead({
    title: 'Galih Rizki Setiadi',
});

const { t } = useI18n();

const projects = computed(() => [
    {
        name: 'SIPSN',
        url: 'https://sampahnasional.kemenlh.go.id/portal-indikatif/',
        text: t('projects.sipsn'),
    },
    {
        name: 'Pantonpile',
        url: 'https://pantonpile.net',
        text: t('projects.pantonpile'),
    },
    {
        name: 'Portal Lelang',
        url: 'https://lelang.go.id',
        text: t('projects.lelang'),
    },
    {
        name: 'Teramedik',
        url: 'https://www.teramedik.com/id',
        text: t('projects.teramedik'),
    },
    {
        name: 'E-LHKPN',
        url: 'https://frontend.elhkpn.devel.torche-indonesia.com',
        text: t('projects.lhkpn'),
    },
    {
        name: 'SDP',
        url: 'https://frontend.elhkpn.devel.torche-indonesia.com',
        text: t('projects.sdp'),
    },
]);
</script>

<template>
    <div class="flex w-full items-center justify-center">
        <div class="grid w-fit grid-cols-1 gap-4 p-10 lg:grid-cols-2">
            <a
                v-for="(project, index) in projects"
                :key="index"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                    'flex h-full flex-col gap-4 rounded-lg border border-gray-400 px-4 py-6',
                    'hover:bg-gray-100',
                    'dark:hover:bg-gray-900',
                ]"
            >
                <div class="flex items-center justify-between font-bold">
                    <span>{{ project.name }}</span>
                    <Icon name="cuida:open-in-new-tab-outline" size="20px" />
                </div>

                <div class="text-gray-400 dark:text-gray-300">
                    {{ project.text }}
                </div>
            </a>
        </div>
    </div>
</template>

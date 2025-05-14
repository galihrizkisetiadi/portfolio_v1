<script setup lang="ts">
import Navbar from '~/shareds/menu/NavbarIndex.vue';
import SideBar from '~/shareds/menu/SideBar.vue';

definePageMeta({
    layout: 'default',
});

useHead({
    title: 'Galih Rizki Setiadi',
});

const colorMode = useColorMode();
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

                <div class="flex w-full items-center pl-[30rem]">
                    <div class="flex flex-col gap-16">
                        <div class="flex w-fit flex-col gap-2 text-8xl font-bold">
                            <h1>Galih</h1>
                            <h1 class="text-right">Rizki</h1>
                            <h1 class="text-center">Setiadi</h1>
                        </div>
                        <div class="flex flex-col gap-4">
                            <p class="w-[25rem] text-2xl">{{ $t('index.desc') }}</p>
                            <a
                                href="/CV-Galih_Rizki_Setiadi.pdf"
                                download
                                class="w-fit rounded-md border px-8 py-2 hover:bg-gray-200"
                            >
                                CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

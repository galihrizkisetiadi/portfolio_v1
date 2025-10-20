<script setup lang="ts">
import Navbar from '~/shareds/menu/NavbarIndex.vue';
import SideBar from '~/shareds/menu/SideBar.vue';

const colorMode = useColorMode();
</script>

<template>
    <div class="flex h-screen w-full items-end justify-end px-4 lg:px-40">
        <div
            class="h-[calc(94vh)] w-full rounded-t-lg lg:h-[calc(88vh)]"
            :class="[{ 'bg-white': colorMode.value === 'light' }, { 'bg-black': colorMode.value === 'dark' }]"
        >
            <Navbar />
            <div class="flex h-[calc(88vh-7rem)] gap-8 pr-[5rem]">
                <SideBar />

                <slot />
            </div>
        </div>
    </div>
</template>

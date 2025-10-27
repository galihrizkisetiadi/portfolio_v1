<script setup lang="ts">
import Navbar from '~/shareds/menu/NavbarIndex.vue';
import SideBar from '~/shareds/menu/SideBar.vue';

const colorMode = useColorMode();
</script>

<template>
    <div class="flex h-screen w-full items-end justify-end px-4 lg:px-40">
        <div class="card-paper h-[calc(92vh)] w-full rounded-t-lg lg:h-[calc(88vh)]">
            <Navbar />
            <div class="flex h-[calc(88vh-7rem)] gap-2 lg:gap-8">
                <SideBar />

                <slot />
            </div>
        </div>
    </div>
</template>

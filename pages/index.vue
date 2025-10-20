<script setup lang="ts">
definePageMeta({
    layout: 'default',
});

useHead({
    title: 'Galih Rizki Setiadi',
});
</script>

<template>
    <div class="flex w-full items-center lg:pl-[20rem] xl:pl-[15rem]">
        <div class="flex flex-col gap-16">
            <div class="flex w-fit flex-col gap-2 text-8xl font-bold">
                <h1>Galih</h1>
                <h1 class="text-right">Rizki</h1>
                <h1 class="text-center">Setiadi</h1>
            </div>
            <div class="flex flex-col gap-4">
                <p class="w-[25rem] text-2xl">{{ $t('index.desc') }}</p>
                <a href="/CV-Galih_Rizki_Setiadi.pdf" download class="w-fit rounded-md border px-8 py-2 hover:bg-gray-200">CV</a>
            </div>
        </div>
    </div>
</template>

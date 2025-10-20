<script setup lang="ts">
definePageMeta({
    layout: 'default',
});

useHead({
    title: 'Galih Rizki Setiadi',
});
</script>

<template>
    <div class="flex items-center pr-4 lg:pr-40 pl-[5rem] lg:pl-[20rem] xl:pl-[15rem]">
        <div class="flex flex-col gap-16">
            <div class="flex w-fit flex-col gap-2 text-4xl font-bold lg:text-8xl">
                <h1>Galih</h1>
                <h1 class="text-right">Rizki</h1>
                <h1 class="text-center">Setiadi</h1>
            </div>
            <div class="flex flex-col gap-4">
                <p class="line-clamp-3 text-sm lg:w-[25rem] lg:text-2xl">{{ $t('index.desc') }}</p>
                <a href="/CV-Galih_Rizki_Setiadi.pdf" download class="w-fit rounded-md border px-8 py-2 hover:bg-gray-200">CV</a>
            </div>
        </div>
    </div>
</template>

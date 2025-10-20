<script setup lang="ts">
const { locale, setLocale } = useI18n();

const links: Array<{ label: string; to: string }> = [
    {
        label: 'navbar.home',
        to: '/',
    },
    {
        label: 'navbar.about',
        to: '/about',
    },
    {
        label: 'navbar.projects',
        to: '/project',
    },
];
</script>

<template>
    <div
        :class="['h-28 text-lg lg:text-3xl', 'flex items-center justify-end', 'bg-transparent', 'transition-colors duration-300']"
    >
        <div class="flex gap-2 lg:gap-8">
            <div v-for="(item, index) in links" :key="index" class="h-[40px]">
                <UButton :to="item.to" variant="ghost" class="hover:bg-transparent">
                    <div class="group flex flex-col gap-2">
                        <div class="text-lg lg:text-3xl">{{ $t(item.label) }}</div>
                        <div class="h-[2px] w-0 bg-[#A1D6B2] transition-all duration-300 group-hover:w-2/3" />
                    </div>
                </UButton>
            </div>

            <UButton
                variant="ghost"
                class="cursor-pointer text-lg hover:bg-transparent focus:border-0 lg:text-3xl"
                @click="locale === 'en' || locale === 'en-US' ? setLocale('id') : setLocale('en')"
            >
                <Transition enter-from-class="translate-y-[150%] opacity-0" enter-active-class="transition duration-300">
                    <div v-if="locale === 'en' || locale === 'en-US'" class="group flex flex-col">
                        <div>idn</div>
                        <div class="h-[2px] w-0 bg-[#A1D6B2] transition-all duration-300 group-hover:w-2/3" />
                    </div>
                    <div v-else class="group flex flex-col">
                        <div>en</div>
                        <div class="h-[2px] w-0 bg-[#A1D6B2] transition-all duration-300 group-hover:w-2/3" />
                    </div>
                </Transition>
            </UButton>
        </div>
    </div>
</template>

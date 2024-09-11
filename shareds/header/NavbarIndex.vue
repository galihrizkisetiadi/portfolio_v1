<script setup lang="ts">
const { locale, setLocale } = useI18n();
const colorMode = useColorMode();

const links: Array<{ label: string; to: string }> = [
    {
        label: 'navbar.home',
        to: '/',
    },
    {
        label: 'navbar.projects',
        to: '/projects',
    },
];
</script>

<template>
    <div
        :class="[
            'p-14 text-4xl',
            'flex items-center justify-between',
            'bg-blue-900',
            'transition-colors duration-300',
            { 'bg-[#FF885B] text-white': colorMode.value === 'light' },
            { 'bg-[#557C56] text-[#FDBA74]': colorMode.value === 'dark' },
        ]"
    >
        <UButton
            color="gray"
            variant="ghost"
            class="item flex h-[40px] justify-center focus:border-0"
            @click="colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light')"
        >
            <Transition enter-from-class="translate-y-[125%] opacity-0" enter-active-class="transition duration-300">
                <div v-if="colorMode.value === 'light'" class="group flex flex-col">
                    <Icon name="material-symbols:dark-mode-outline" class="text-white" size="60px" />
                </div>
                <div v-else class="group flex flex-col">
                    <Icon name="material-symbols:light-mode-outline" class="text-[#FDBA74]" size="60px" />
                </div>
            </Transition>
        </UButton>

        <div class="flex gap-8">
            <div v-for="(item, index) in links" :key="index" class="h-[40px]">
                <UButton :to="item.to" color="gray" variant="ghost">
                    <div class="group flex flex-col">
                        <div>{{ $t(item.label) }}</div>
                        <div class="h-[2px] w-0 bg-[#A1D6B2] transition-all duration-300 group-hover:w-2/3" />
                    </div>
                </UButton>
            </div>

            <UButton
                color="gray"
                variant="ghost"
                class="h-[40px] focus:border-0"
                @click="locale === 'en' ? setLocale('id') : setLocale('en')"
            >
                <Transition enter-from-class="translate-y-[150%] opacity-0" enter-active-class="transition duration-300">
                    <div v-if="locale === 'en'" class="group flex flex-col">
                        <div>IDN</div>
                        <div class="h-[2px] w-0 bg-[#A1D6B2] transition-all duration-300 group-hover:w-2/3" />
                    </div>
                    <div v-else class="group flex flex-col">
                        <div>EN</div>
                        <div class="h-[2px] w-0 bg-[#A1D6B2] transition-all duration-300 group-hover:w-2/3" />
                    </div>
                </Transition>
            </UButton>
        </div>
    </div>
</template>

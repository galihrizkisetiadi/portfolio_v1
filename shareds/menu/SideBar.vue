<script setup lang="ts">
const colorMode = useColorMode();

const icons: Array<{ name: string; label: string; to: string }> = [
    {
        name: 'brandico:linkedin',
        label: 'LinkedIn',
        to: 'https://www.linkedin.com/in/galihrizkisetiadi/',
    },
    {
        name: 'pajamas:github',
        label: 'Github',
        to: 'https://github.com/galihrizkisetiadi',
    },
    {
        name: 'simple-icons:whatsapp',
        label: 'WhatsApp',
        to: 'https://wa.me/089699408077',
    },
    {
        name: 'simple-icons:gmail',
        label: 'Gmail',
        to: 'mailto:galihrizkisetiadi18@gmail.com',
    },
];
</script>

<template>
    <div class="flex flex-col items-center justify-center gap-8 p-2 lg:p-9">
        <div v-tooltip="colorMode.value === 'light' ? 'Dark' : 'Light'">
            <UButton
                :color="undefined"
                variant="ghost"
                class="cursor-pointer hover:bg-transparent"
                @click="colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light')"
            >
                <Transition enter-from-class="translate-y-[125%] opacity-0" enter-active-class="transition duration-300">
                    <div v-if="colorMode.value === 'light'" class="group flex flex-col">
                        <Icon name="material-symbols:dark-mode-outline" size="30px" />
                    </div>
                    <div v-else class="group flex flex-col">
                        <Icon name="material-symbols:light-mode-outline" size="30px" />
                    </div>
                </Transition>
            </UButton>
        </div>

        <div v-for="(icon, index) in icons" :key="index">
            <div v-tooltip="icon.label">
                <UButton :to="icon.to" target="_blank" :color="undefined" variant="ghost">
                    <Icon :name="icon.name" size="20px" />
                </UButton>
            </div>
        </div>
    </div>
</template>

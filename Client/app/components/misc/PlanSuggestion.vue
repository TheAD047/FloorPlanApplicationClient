<template>
    <div class="bg-white rounded-lg shadow-lg p-8">
        <NuxtLink :to="`/plans/${id}`">
            <div class="relative overflow-hidden">
                <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Product">
                <div class="absolute inset-0 bg-black opacity-40"></div>
                <div class="absolute inset-0 flex items-center justify-center"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
            <p class="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div class="flex items-center justify-between mt-4">
                <span class="text-gray-900 font-bold text-lg">$29.99</span>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { id } = defineProps(['id']);
</script>

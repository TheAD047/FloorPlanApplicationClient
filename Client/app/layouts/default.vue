<template>
  <header class="bg-blue-900 text-white text-decoration-none">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div class="flex items-center justify-between">
            <!-- Logo Section -->
            <div class="flex-shrink-0">
                <a href="#" class="text-2xl font-bold">FloorPlanMGMT</a>
            </div>

            <!-- Navigation Menu -->
            <nav class="hidden md:flex space-x-10 text-lg">
                <Nuxtlink to="/Plans" class="hover:text-gray-300 transition-all">Plans</Nuxtlink>
                <Nuxtlink to="/Services" class="hover:text-gray-300 transition-all">Services</Nuxtlink>
                <Nuxtlink to="/About" class="hover:text-gray-300 transition-all">About Us</Nuxtlink>
                <Nuxtlink to="/Contact" class="hover:text-gray-300 transition-all">Contact</Nuxtlink>
            </nav>

            <!-- Call-to-Action Button -->
            <div class="hidden md:block">
                <Nuxtlink to="/Cart" class="bg-yellow-500 hover:bg-yellow-400 text-black mx-2 py-2 px-6 rounded-full text-lg transition-all">
                    Cart
                </Nuxtlink>
            </div>

            <!-- Mobile Menu Button (for smaller screens) -->
            <div class="md:hidden flex items-center">
                <button id="menu-button" class="text-white focus:outline-none">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div id="mobile-menu" class="md:hidden mt-5 hidden space-y-4">
            <Nuxtlink to="/Plans" class="block text-lg hover:text-gray-300 transition-all">Plans</Nuxtlink>
            <Nuxtlink to="/Services" class="block text-lg hover:text-gray-300 transition-all">Services</Nuxtlink>
            <Nuxtlink to="/About" class="block text-lg hover:text-gray-300 transition-all">About Us</Nuxtlink>
            <Nuxtlink to="/Conatct" class="block text-lg hover:text-gray-300 transition-all">Contact</Nuxtlink>
        </div>
    </div>
  </header>

  <div class="p-2">
    <slot />
  </div>

</template>

<script lang="ts" setup>
  onMounted(() => {
    const menuButton:any = document.getElementById('menu-button');
    const mobileMenu:any = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  })
</script>

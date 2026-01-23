<template>
  <Header></Header>

  <div class="p-2">
    <slot />
  </div>

  <Footer></Footer>
</template>

<script lang="ts" setup>
    import Footer from '~/components/common/Footer.vue';
    import Header from '~/components/common/Header.vue';
</script>

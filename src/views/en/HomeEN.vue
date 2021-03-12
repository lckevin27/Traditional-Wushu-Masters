<template>
  <div class="home">
    <div class="lightning">
      <div class="lightning-container"><img src="@/assets/lightning/bolt-1.png" alt="lightning image 1"></div>
      <div class="lightning-container"><img src="@/assets/lightning/bolt-2.png" alt="lightning image 2"></div>
      <div class="lightning-container"><img src="@/assets/lightning/bolt-3.png" alt="lightning image 3"></div>
    </div>
    <div class="main-img"></div>
    <HomeListEN />
  </div>
</template>

<script>
import HomeListEN from '@/components/en/HomeListEN.vue'

export default {
  name: 'HomeEN',
  components: {
    HomeListEN
  }
}
</script>

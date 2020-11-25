<template>
  <div class="home">
    <div class="lightning">
      <div class="lightning-container"><img src="@/assets/lightning/bolt-1.png" alt="lightning image 1"></div>
      <div class="lightning-container"><img src="@/assets/lightning/bolt-2.png" alt="lightning image 2"></div>
      <div class="lightning-container"><img src="@/assets/lightning/bolt-3.png" alt="lightning image 3"></div>
    </div>
    <HomeList />
  </div>
</template>

<script>
import HomeList from '@/components/HomeList.vue'

export default {
  name: 'Home',
  components: {
    HomeList
  }
}
</script>

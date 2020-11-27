<template>
  <div class="timeline">
    <a href="/" class="backToHome">◀ 回到主页</a>
    <Intro/>
    <TimelineSection/>
    <img class="background-img" v-bind:src="require(`@/assets/timeline-background/${$route.params.name}.png`)" v-bind:alt="`${$route.params.name}`">
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import TimelineSection from '@/components/TimelineSection.vue'

export default {
  name: 'Timeline',
  components: {
    TimelineSection,
    Intro
  }
}
</script>

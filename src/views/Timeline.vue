<template>
  <div class="timeline">
    <a href="/" class="backToHome">回到主页</a>
    <Intro/>
    <TimelineSection/>
    <img class="background-img" src="@/assets/timeline-background/mabaoguo-background.png" alt="Ma Baoguo">
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

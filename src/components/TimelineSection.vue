<template>
    <div class="timeline-section">
      <div class="title-wrap">
        <h1>光辉岁月</h1>
      </div>
      <div class="timeline-container">
        <ul>
          <TimelineItem v-for="tlc in allMasters[$route.params.name].timelineContents" v-bind:key="tlc.tlTitle" v-bind:tlc="tlc"/>
        </ul>
      </div>
    </div>
</template>

<script>
import TimelineItem from '@/components/TimelineItem.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TimelineItem
  },
  computed: mapGetters(['allMasters'])
}
</script>

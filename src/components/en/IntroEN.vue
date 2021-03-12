<template>
    <div class="intro-section">
      <p class="title">{{ allMastersEN[$route.params.name].title }} <span class="name">{{ $route.params.name }}</span></p>
      <div class="title-wrap">
        <h2>INTRO</h2>
      </div>
      <div class="intro-text">
        <div class="life-tag"><p>INTRO</p></div>
        <p v-html="allMastersEN[$route.params.name].intro"></p>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Timeline',
  computed: mapGetters(['allMastersEN'])
}
</script>

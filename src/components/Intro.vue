<template>
    <div class="intro-section">
      <p class="title">{{ allMasters[$route.params.name].title }} <span class="name">{{ $route.params.name }}</span></p>
      <div class="title-wrap">
        <h2>人物生平</h2>
      </div>
      <div class="intro-text">
        <div class="life-tag"><p>人物生平</p></div>
        <p v-html="allMasters[$route.params.name].intro"></p>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Timeline',
  computed: mapGetters(['allMasters'])
}
</script>

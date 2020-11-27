<template>
  <div id="home-list-container">
    <ul class="list">
      <li></li>
      <li v-for="(master, index) in allMasters" v-bind:key="index"><a v-bind:href="`timeline/${index}`">{{ master.title }} <b>{{ index }}</b></a></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['allMasters'])
}
</script>

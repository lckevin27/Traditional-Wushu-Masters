<template>
  <div id="home-list-container">
    <div v-show="!open" class="btn-open-list" v-on:click="open = true">
      <img src="@/assets/button.png" /><span>&nbsp;传武大师名录</span>
    </div>
    <ul class="list" v-bind:class="{ open: open }">
      <a href="javascript:void(0)" class="close-btn" v-on:click="open = false">&times;</a>
      <li v-for="(master, index) in allMasters" v-bind:key="index"><router-link v-bind:to="`/timeline/${index}`">{{ master.title }} <b>{{ index }}</b></router-link></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['allMasters']),
  data: function () {
    return {
      open: false
    }
  }
}
</script>

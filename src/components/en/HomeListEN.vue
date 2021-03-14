<template>
  <div id="home-list-container">
    <div v-show="!open" class="btn-open-list" v-on:click="open = true">
      <img src="@/assets/button.png" /><span>&nbsp;<strong>LIST OF MASTERS</strong></span>
    </div>
    <ul class="list" v-bind:class="{ open: open }">
      <a href="javascript:void(0)" class="close-btn" v-on:click="open = false">&times;</a>
      <li><router-link to="/cn"><b>中文</b></router-link></li>
      <li v-for="(master, index) in allMastersEN" v-bind:key="index"><router-link v-bind:to="`/en/timeline/${index}`">{{ master.title }} <b>{{ index }}</b></router-link></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['allMastersEN']),
  data: function () {
    return {
      open: false
    }
  }
}
</script>

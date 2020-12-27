<template>
  <div id="navbar-wrapper">
    <nav id="sidenav">
      <a href="javascript:void(0)" class="close-btn" v-on:click="closeNav()">&times;</a>
      <router-link to="/">回到主页</router-link>
      <router-link v-for="(master, index) in allMasters" v-bind:key="index" v-bind:to="`/timeline/${index}`" v-on:click="closeNav()">{{ master.title }} {{ index }}</router-link>
    </nav>
    <div class="navbar">
      <router-link to="/" class="back-to-home">&#9665; 回到主页</router-link>
      <a href="javascript:void(0)" class="open-nav" v-on:click="openNav()">
        <div></div>
        <div></div>
        <div></div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  computed: mapGetters(['allMasters']),
  methods: {
    openNav () {
      document.getElementById('sidenav').style.width = '300px'
      document.getElementById('sidenav').style.maxWidth = '70%'
    },
    closeNav () {
      document.getElementById('sidenav').style.width = '0px'
    }
  }
}
</script>

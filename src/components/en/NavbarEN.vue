<template>
  <div id="navbar-wrapper">
    <nav id="sidenav">
      <a href="javascript:void(0)" class="close-btn" v-on:click="closeNav()">&times;</a>
      <router-link to="/">Home</router-link>
      <router-link v-for="(master, index) in allMastersEN" v-bind:key="index" v-bind:to="`/en/timeline/${index}`" v-on:click="closeNav()">{{ index }}</router-link>
    </nav>
    <div class="navbar">
      <a href="javascript:void(0)" class="open-nav" v-on:click="openNav()">
        <div></div>
        <div></div>
        <div></div>
      </a>
      <router-link to="/" class="logo"><img src="@/assets/chuanwudashi.png" alt="logo" /></router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  computed: mapGetters(['allMastersEN']),
  data: function () {
    return {
      y: window.pageYOffset
    }
  },
  methods: {
    openNav () {
      document.getElementById('sidenav').style.width = '400px'
      document.getElementById('sidenav').style.maxWidth = '70%'
    },
    closeNav () {
      document.getElementById('sidenav').style.width = '0px'
    },
    displayBorderOnScroll () {
      if (window.innerWidth <= 1060) {
        this.y = window.pageYOffset
        const navbarWrapper = document.getElementById('navbar-wrapper')
        if (this.y !== 0) {
          navbarWrapper.style.borderBottom = 'solid 1px #555'
        } else {
          navbarWrapper.style.borderBottom = 'none'
        }
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.displayBorderOnScroll)
  }
}
</script>

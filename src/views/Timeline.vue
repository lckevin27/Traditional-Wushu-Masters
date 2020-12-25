<template>
  <div class="timeline">
    <nav>
      <router-link to="/" class="backToHome">◀ 回到主页</router-link>
    </nav>
    <div class="scrolling-nav">
      <ul>
        <li><a v-on:click="goto('人物生平')">人物生平</a></li>
        <li v-for="tlc in allMasters[$route.params.name].timelineContents" v-bind:key="tlc.tlTitle"><a v-on:click="goto(tlc.tlTitle)">{{ tlc.tlTitle }}</a></li>
      </ul>
    </div>
    <Intro id="人物生平"/>
    <TimelineSection id="timeline-section"/>
    <img class="background-img" v-bind:src="require(`@/assets/timeline-background/${$route.params.name}.png`)" v-bind:alt="`${$route.params.name}`">
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import TimelineSection from '@/components/TimelineSection.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Timeline',
  components: {
    TimelineSection,
    Intro
  },
  methods: {
    onScroll: function () {
      this.y = window.pageYOffset
      if (this.y > this.prevY) {
        if (this.y > this.coordList[this.curNum]) {
          this.unhighlight()
          this.navList[this.curNum].style.color = '#FFF'
          this.curNum = this.navList[this.curNum + 1] ? this.curNum + 1 : this.curNum
        }
      } else {
        const temp = this.navList[this.curNum - 1] ? this.curNum - 1 : this.curNum
        if (this.y < this.coordList[temp] + 5) {
          this.unhighlight()
          this.navList[temp].style.color = '#FFF'
          this.curNum = temp
        }
      }
      this.prevY = window.pageYOffset
    },
    unhighlight: function () {
      this.navList.forEach(item => {
        item.style.color = '#999'
      })
    },
    setNavPos: function () {
      const nav = document.getElementsByClassName('scrolling-nav')[0]
      const top = Math.floor(window.innerHeight / 2 - nav.clientHeight / 2)
      nav.style.top = `${top}px`
    },
    goto (id) {
      const element = document.getElementById(id)
      element.scrollIntoView()
    }
  },
  data: function () {
    return {
      y: window.pageYOffset,
      prevY: window.pageYOffset,
      coordList: [],
      navList: [],
      curNum: 0
    }
  },
  mounted () {
    this.setNavPos()
    window.addEventListener('scroll', this.onScroll)
    this.coordList.push(document.getElementById('人物生平').getBoundingClientRect().top + window.scrollY)
    const timelineItems = document.getElementsByClassName('timeline-content')
    timelineItems.forEach(item => {
      this.coordList.push(item.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2)
    })
    this.navList = document.querySelectorAll('.scrolling-nav ul li a')
    this.navList.forEach((item, index) => {
      item.addEventListener('click', () => {
        if (this.curNum !== index) {
          this.curNum = index
        }
      })
    })
    const images = document.querySelectorAll('.media img')
    const lightbox = document.createElement('div')
    lightbox.style.position = 'fixed'
    lightbox.style.zIndex = '100'
    lightbox.style.paddingTop = '5vh'
    lightbox.style.left = '0'
    lightbox.style.top = '0'
    lightbox.style.height = '100%'
    lightbox.style.width = '100%'
    lightbox.style.display = 'none'
    lightbox.style.backgroundColor = 'black'
    images.forEach((item, index) => {
      const close = document.createElement('span')
      const txtNode = document.createTextNode('×')
      close.appendChild(txtNode)
      const image = document.createElement('img')
      close.style.cursor = 'pointer'
      close.style.color = '#FFF'
      close.style.position = 'absolute'
      close.style.top = '10px'
      close.style.right = '25px'
      close.style.fontSize = '45px'
      close.style.fontWeight = '700'
      close.style.display = 'none'
      image.src = item.src
      image.style.position = 'relative'
      image.style.maxHeight = '90vh'
      image.style.display = 'none'
      image.style.margin = 'auto'
      image.style.zIndex = '100'
      lightbox.appendChild(close)
      lightbox.appendChild(image)
      item.addEventListener('click', () => {
        close.style.display = 'block'
        lightbox.style.display = 'block'
        image.style.display = 'block'
      })
      close.addEventListener('click', () => {
        close.style.display = 'none'
        image.style.display = 'none'
        lightbox.style.display = 'none'
      })
    })
    document.getElementById('timeline-section').appendChild(lightbox)
  },
  computed: mapGetters(['allMasters'])
}
</script>

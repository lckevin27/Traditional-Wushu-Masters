<template>
  <div class="timeline">
    <a href="/" class="backToHome">◀ 回到主页</a>
    <div class="scrolling-nav">
      <ul>
        <li><a href='#人物生平'>人物生平</a></li>
        <li v-for="tlc in allMasters[$route.params.name].timelineContents" v-bind:key="tlc.tlTitle"><a v-bind:href='`#${tlc.tlTitle}`'>{{ tlc.tlTitle }}</a></li>
      </ul>
    </div>
    <Intro id="人物生平"/>
    <TimelineSection/>
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
        if (this.y < this.coordList[this.curNum] + 5) {
          this.unhighlight()
          this.navList[this.curNum].style.color = '#FFF'
          this.curNum = this.navList[this.curNum - 1] ? this.curNum - 1 : this.curNum
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
    hideImages: function (imgs) {
      imgs.forEach(item => {
        item.style.display = 'none'
      })
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
      this.coordList.push(item.getBoundingClientRect().top + window.scrollY - 30)
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
    lightbox.style.zIndex = '10'
    lightbox.style.paddingTop = '100px'
    lightbox.style.left = '0'
    lightbox.style.top = '0'
    lightbox.style.height = '100%'
    images.forEach((item, index) => {
      const image = document.createElement('img')
      image.src = item.src
      image.style.maxHeight = '90vh'
      image.style.display = 'none'
      lightbox.appendChild(image)
      item.addEventListener('click', () => {
        image.style.display = 'block'
      })
    })
    document.getElementById('人物生平').appendChild(lightbox)
  },
  computed: mapGetters(['allMasters'])
}
</script>

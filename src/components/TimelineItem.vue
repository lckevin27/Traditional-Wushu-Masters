<template>
    <li>
      <div class="timeline-content">
        <h3 class="date">{{ tlc.date }}</h3>
        <h1>{{ tlc.tlTitle }}</h1>
        <p v-html="tlc.tlText"></p>
      </div>
    </li>
</template>

<script>
export default {
  props: ['tlc'],
  mounted () {
    const imgs = document.querySelectorAll('div.media img')
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener('click', (e) => {
        imgs[i].style.height = '100%'
      })
    }
  }
}
</script>

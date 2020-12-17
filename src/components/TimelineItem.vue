<template>
    <li>
      <div class="timeline-content">
        <h3 v-bind:id='`${tlc.tlTitle}`' class="date">{{ tlc.date }}</h3>
        <h1>{{ tlc.tlTitle }}</h1>
        <p v-html="tlc.tlText"></p>
      </div>
    </li>
</template>

<script>
export default {
  props: ['tlc']
}
</script>

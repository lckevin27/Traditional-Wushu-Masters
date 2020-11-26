<template>
    <li>
      <div class="timeline-content">
        <h3 class="date">{{ tlc.date }}</h3>
        <h1>{{ tlc.tlTitle }}</h1>
        <p>{{ tlc.tlText }}</p>
      </div>
    </li>
</template>

<script>
export default {
  props: ['tlc']
}
</script>

<template>
  <div class="skills page">
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">Primary</v-chip>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
  name: 'Skills',
  methods: {
    animateIt: (sender) => {
      const t1 = new TimelineMax()
      t1.to('#animate', 0.25, {
        width: '95vw',
        height: '95vh',
        top: '2.5vh',
        left: '2.5vw',
        backgroundColor: '#1976d2'
      })
    }
  },
  mounted () {
  }
}
</script>

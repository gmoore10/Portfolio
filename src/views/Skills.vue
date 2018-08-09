<template>
  <div class="skills page" style="position: relative">
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">Primary</v-chip>
  </div>
</template>

<script>
import { TimelineMax, TweenLite } from 'gsap'

export default {
  name: 'Skills',
  methods: {
    animateIt: (sender) => {
      const t1 = new TimelineMax()
      t1.to('#animate', 0.25, {
        display: 'block',
        width: '95vw',
        height: '95vh',
        top: '2.5vh',
        left: '2.5vw',
        backgroundColor: '#1976d2',
        x: 0,
        y: 0
      })
      const tw1 = new TweenLite();
      tw1.to('#texttest', 2, {text:"This is the new text", ease:Linear.easeNone});
    }
  },
  mounted () {
  }
}
</script>

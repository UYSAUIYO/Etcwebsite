<template>
  <v-fab 
      v-show="showScrollTopButton"
      color="primary"
      bottom="15"
      right="15"
      small
      @click="scrollToTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-fab>
</template>

<script>
export default {
  data() {
    return {
      showScrollTopButton: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.showScrollTopButton = window.scrollY > 100;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
</script>

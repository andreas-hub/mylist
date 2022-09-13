<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script lang="ts">
import TheWelcome from '../components/TheWelcome.vue';

export default {
  name: 'HomeView',
  components: {TheWelcome},
  setup() {
    return {
    };
  },
  mounted() {
    console.log('hi');
  }
};
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <el-button @click="couterStore.increment">count++</el-button>
  <HelloWorld msg="Vite + Vue" />
</template>
<script setup lang="ts">
import { useCounterStore } from '@/store/counter';
import HelloWorld from './components/HelloWorld.vue';
defineOptions({
  name: 'App'
});
const couterStore = useCounterStore();
</script>
<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

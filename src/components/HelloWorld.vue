<!--
 * @Author: pengwenlei pwl330109371@gmail.com
 * @Date: 2023-03-20 11:52:49
 * @LastEditors: pengwenlei pwl330109371@gmail.com
 * @LastEditTime: 2023-03-20 16:27:14
-->
<script setup lang="ts">
import { ref } from 'vue'
import getImg from '../utils/imgUtil'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
 <img :src="getImg('1.png')" />
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

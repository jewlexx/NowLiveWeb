<template>
  <div class="container">
    <h1 v-if="likes > 50">
      {{ likes }} likes!
      <img
        src="https://cdn.vox-cdn.com/thumbor/rxRdQlRmEhXPGiOTAoZeiMhluYM=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10838149/poggers.jpg"
        height="25em"
      />
    </h1>
    <h1 v-else-if="likes > 0">{{ likes }} likes!</h1>
    <h1 v-else>Nobody liked it :(</h1>
    <button @click="likes++">👍</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// eslint-disable-next-line prefer-const
let likes = 0
export default Vue.extend({
  data() {
    return { likes }
  },
})
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

<template>
  <div>

    <h2>
      v-cloack
    </h2>

    <p v-cloack>
      {{ message }}
    </p>

  </div>
</template>

<script>
export default {
  name: 'VHtml',
  data: () => {
    return {
      message: 'Hello Vue.js!'
    }
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>

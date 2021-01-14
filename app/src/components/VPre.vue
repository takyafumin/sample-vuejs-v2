<template>
  <div>

    <p v-pre>
      {{ message }}
    </p>

  </div>
</template>

<script>
export default {
  name: 'VPre',
  data: () => {
    return {
      message: 'Hello Vue.js!'
    }
  }
}
</script>

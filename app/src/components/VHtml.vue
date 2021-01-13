<template>
  <div>

    <p>
      {{ message }}
    </p>

    <p v-html="message"></p>

  </div>
</template>

<script>
export default {
  name: 'VHtml',
  data: () => {
    return {
      message: 'Hello <span style="color:red">Vue.js!</span>'
    }
  }
}
</script>

<template>
  <div>

    {{ message }}

    <p v-text="message"></p>

    <p>
      "{{ message }}"
    </p>

  </div>
</template>

<script>
export default {
  name: 'VText',
  data: () => {
    return {
      message: 'Hello Vue.js!'
    }
  }
}
</script>

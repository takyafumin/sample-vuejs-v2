<template>
  <div>

    <p v-once>
      {{ message }}
    </p>

    <button v-on:click="clickHandler">
      Click!
    </button>

  </div>
</template>

<script>
export default {
  name: 'VOnce',
  data: () => {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    clickHandler: function (event) {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

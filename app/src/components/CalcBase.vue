<template>
  <div>

    <p>
      {{ message.split('').reverse().join('') }}
    </p>

    <p>
      {{ reversedMessage }}
    </p>

    <p>
      {{ reversedMessageMethod() }}
    </p>

  </div>
</template>

<script>
export default {
  name: 'CalcBase',
  data: () => {
    return {
      message: 'Hello Vue.js!!'
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reversedMessageMethod: function () {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>

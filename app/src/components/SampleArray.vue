<template>
  <div>
    <ul v-for="(value, key) in colors" v-bind:key="key">
      <li>{{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SampleArray',
  data: () => {
    return {
      colors: [
        'red',
        'green',
        'blue'
      ]
    }
  }
}
</script>

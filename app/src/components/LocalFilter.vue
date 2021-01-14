<template>
  <div>

    <h2>
      Mustache
    </h2>

    <p>{{ price | numberFormat }}</p>

    <h2>
      v-bind
    </h2>

    <input type="text" v-bind:value="price | numberFormat">

  </div>
</template>

<script>
export default {
  name: 'LocalFilter',
  data: () => {
    return {
      price: 2980000
    }
  },
  filters: {
    numberFormat: function (value) {
      return value.toLocaleString()
    }
  }
}
</script>

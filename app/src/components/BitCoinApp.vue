<template>
  <div>
    <h2>Bitcoin Price</h2>
    <ul v-cloak>
      <li v-for="(rate, currency) in bpi" v-bind:key="currency">
        {{ currency }}: {{ rate.rate_float | currencyDecimal }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BitCoinApp',
  data: () => {
    return {
      bpi: null
    }
  },
  mounted: function () {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(function (response) {
        this.bpi = response.data.bpi
      }.bind(this))
  },
  filters: {
    currencyDecimal (value) {
      return value.toFixed(2)
    }
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>

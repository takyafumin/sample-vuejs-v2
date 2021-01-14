<template>
  <div>

    <p>{{ jpyPrice | toUSD | toCurrency }}</p>

  </div>
</template>

<script>
export default {
  name: 'LocalFilter',
  data: () => {
    return {
      jpyPrice: 298000
    }
  },
  filters: {
    toUSD: function (jpy) {
      return jpy / 100
    },
    toCurrency: function (value) {
      return value.toLocaleString()
    }
  }
}
</script>

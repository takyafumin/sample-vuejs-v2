<template>
  <div>
    <pre>{{ $data }}</pre>
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
  }
}
</script>

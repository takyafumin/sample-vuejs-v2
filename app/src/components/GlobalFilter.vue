<template>
  <div>

    <h2>
      Mustach
    </h2>
    <p>
      {{ price | numFormat }}
    </p>

  </div>
</template>

<script>
export default {
  name: 'GlobalFilter',
  data: () => {
    return {
      price: 29800
    }
  }
}
</script>

<template>
  <div>
    <p>{{ text | readMore(20, '...') }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => {
    return {
      text: 'Hello World! My Name is Takafumi Fukai. This is a sample of Vue JS!'
    }
  },
  filters: {
    readMore: function (text, length, suffix) {
      return text.substring(0, length) + suffix
    }
  }
}
</script>

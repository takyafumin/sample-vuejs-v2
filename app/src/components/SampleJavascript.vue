<template>
  <div>

    <p>
      {{ message }}
    </p>

    <p>
      {{ number + 1}}
    </p>

    <p>
      {{ message.split('').reverse().join('') }}
    </p>

    <p>
      {{ ok ? 'YES' : 'NO' }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'VText',
  data: () => {
    return {
      message: 'Hello Vue.js!',
      number: 100,
      ok: true
    }
  }
}
</script>

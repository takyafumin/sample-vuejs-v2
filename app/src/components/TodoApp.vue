<template>
  <div>
    <h2>TODO List</h2>

    <form v-on:submit.prevent>
      <input type="text" v-model="newItem">
      <button v-on:click="addItem">
        Add
      </button>
    </form>

    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="index">
        <input type="checkbox" v-model="todo.isDone">
        <span v-bind:class="{ done: todo.isDone }">{{ todo.item }}</span>
        <button v-on:click="deleteItem(index)">
          delete
        </button>
      </li>
    </ul>

    <pre>{{ $data }}</pre>

  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data: () => {
    return {
      newItem: '',
      todos: []
    }
  },
  methods: {
    addItem: function (event) {
      if (this.newItem === '') {
        return
      }

      // タスクを配列に追加
      var todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo)

      // 入力欄をクリア
      this.newItem = ''
    },
    deleteItem: function (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}
li > span.done {
  text-decoration: line-through;
}
</style>

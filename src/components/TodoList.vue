<template>
    <ul>
        <TodoItem
            v-for="(item, index) in todoList"
            :task="item.task"
            :isCompleated="item.isCompleated"
            :key="item.id"
            :index="index"
        />
    </ul>
</template>

<script>

import TodoItem from './TodoItem.vue'

export default {
    name: 'TodoList',
    components: {
        TodoItem,
    },
    computed: {
        todoList() {
            return this.$store.getters.getToDoList;
        }
    }
}
</script>
<style>
    ul{
        display: grid;
        align-self: center;
        justify-content: center;
    }
</style>
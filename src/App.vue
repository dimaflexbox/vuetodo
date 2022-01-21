<template>
    <div id="app">
        <TodoForm 
            @add-todo="handleAddToDo"
        />
        <TodoList
            @edit-toggle="handleEdit"
        />
        </div>
</template>

<script>
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

export default {
    name: 'App',
    components: {
        TodoForm,
        TodoList
    },
    methods: {
        handleAddToDo: function(newTodo) {
            this.todoList.push(newTodo);
        },
        handleEdit: function (editField, index) {
            this.todoList[index].task = editField;
        },
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

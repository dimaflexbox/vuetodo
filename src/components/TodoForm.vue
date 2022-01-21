<template>
    <div>
        <input 
            type="text"
            v-model="newTodo"
            placeholder="Enter task">
        <button type="button" @click="handleAddTodo">Add</button>
    </div>
</template>

<script>

export default {
    name: 'TodoForm',
    data() {
        return {
            newTodo: '',
        }
    },
    methods: {
        handleAddTodo: function() {
            this.$store.dispatch('actionToggleAdd', this.newTodo); // action
            this.newTodo = "";
        }
    },
}
</script>
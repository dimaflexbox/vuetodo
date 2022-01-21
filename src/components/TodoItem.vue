<template>
    <li>
        <h3 v-if="!isEditing" @click="taskEdit('nonButton')" :class="{'strikedText': isChecked}">{{ task }}</h3>
        <input 
            v-model="editField" 
            ref="editField"
            type="text"
            v-show="isEditing"
        >
        <input 
            type="checkbox"
            v-model="isChecked"
            @change="changeCheckbox"
            >
            <button type="button"  @click="hanldeRemoveTask">Delete</button>
            <button type="button" v-if="!isEditing" @click="taskEdit">Edit</button>
            <button type="button" v-if="isEditing" @click="taskSave">Save</button>
    </li>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'TodoItem',
    props: {
        task: String,
        isCompleated: Boolean,
        index: Number,
    },
    data() {
        return {
            isChecked: this.isCompleated,
            isEditing: false,
            editField: this.task,
        }
    },
    methods: {
        changeCheckbox: function () {
            this.$store.commit('toggleCheckbox', {index: this.index, isChecked: this.isChecked});
        },
        hanldeRemoveTask: function () {
            this.$store.commit('removeTodo', this.index);
        },
        taskEdit: function (nonButton) {
            this.isEditing = true;
            if (nonButton === 'nonButton'){
                Vue.nextTick(() => {
                    this.$refs.editField.select();
                });
            }
        },
        taskSave: function () {
            this.$store.commit('toggleSave', {index: this.index, editField: this.editField})
            this.isEditing = false;
        },
    },
}
</script>

<style>
    li{
        display: flex;
        align-items: center;
    }
    .strikedText{
        text-decoration: line-through;
    }
</style>
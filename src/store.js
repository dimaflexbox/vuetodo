import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todoList: [
            {
                task: 'Task 1',
                isCompleated: false,
                id: uuidv4(),
            },
            {
                task: 'Task 2',
                isCompleated: false,
                id: uuidv4(),
            },
            {
                task: 'Task 3',
                isCompleated: false,
                id: uuidv4(),
            },
        ],
    },
    getters: {
        getToDoList(state) {
            return state.todoList;
        },
    },
    mutations: {
        removeTodo(state, index) {
            state.todoList.splice(index, 1);
        },
        toggleCheckbox(state, payload) {
            state.todoList[payload.index].isCompleated = payload.isChecked;
        },
        toggleSave(state, payload) {
            state.todoList[payload.index].task = payload.editField;
        },
        toggleAdd(state, newTodo){
            state.todoList.push({
                task: newTodo,
                isCompleated: false,
                id: uuidv4(),
            });
        }
    },
    actions: {
        actionToggleAdd(context, newTodo) {
            context.commit('toggleAdd', newTodo);
        }
    }
});
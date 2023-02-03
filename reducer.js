import Storage from "./localStorage.js";

const init = {
    todos: Storage.get() || [],
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed,
    },
    edit: null,
}


const actions = {
    add(state, args) {
        const [newTodo] = args; 
        console.log(newTodo)
        if (newTodo) {
            state.todos.push({
                title: newTodo,
                completed: false
            });
            Storage.set(state.todos);
        }
    },
    toggle(state, index) {
        const [destrucIndex] = index;
        state.todos[destrucIndex].completed = !state.todos[destrucIndex].completed;
        Storage.set(state.todos);
    },
    toggleAll(state, completed) {
        const [completedAll] = completed;
        state.todos.forEach(todo => todo.completed = completedAll);
        Storage.set(state.todos);
    },
    delete(state, index) {
        const [destrucIndex] = index;
        state.todos.splice(destrucIndex,1);
        Storage.set(state.todos);
    },
    switchSelected(state, type) {
        const [typeSelected] = type;
        state.filter = typeSelected;
        Storage.set(state.todos);
    },
    clearCompleted(state, index){
        const [listClearCompletedIndex] = index;
        for (let i = listClearCompletedIndex.toString().length - 1 ; i >=0 ; i--) {
            state.todos.splice(listClearCompletedIndex.toString()[i] - 1,1);
        }
        Storage.set(state.todos);
    },
    editing(state, index) {
        const [editingIndex] = index;
        console.log(editingIndex)
        //nth-child chay tu 1
    //    const liTagEditing = document.querySelector(`.todo-list :nth-child(${editingIndex + 1})`);
    //    console.log(liTagEditing)
        state.edit = editingIndex;
    },
    submitEditing(state, value) {
        const [valueInput, index] = value;
        state.todos[index].title = valueInput;
        state.edit = null;
        Storage.set(state.todos);
    }
}

export default function reducer(state = init, action, args) {
   actions[action] && actions[action](state, args);
   return state;
}
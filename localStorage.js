const Storage = {
    get() {
        return JSON.parse(localStorage.getItem('todolist'));
    },
    set(todos) {
            // const todoListArr = [];
            // const tagTodoList = document.querySelectorAll(".todo-list li")
            // if (tagTodoList) {
            //     tagTodoList.forEach(element => {
            //         todoListArr.push({
            //             title: element.innerText,
            //             completed: element.classList.contains('completed'),
            //         })
            //     })
            // }
            localStorage.setItem('todolist', JSON.stringify(todos));
    }
}
export default Storage;
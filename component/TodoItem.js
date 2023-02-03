import html from "../core.js";

const TodoItem = (todo, index, edit) => {
  console.log(edit);
  return html`
    <li class="${todo.completed && 'completed'} ${index === edit && !todo.completed && 'editing'}">
      <div class="view">
        <input 
          class="toggle" 
          type="checkbox" 
          ${todo.completed && 'checked'} 
          onchange="dispatch('toggle', ${index})"
        />
        <label 
          ondblclick="dispatch('editing', ${index})">${todo.title}
        </label>
        <button 
          class="destroy"
          onclick="dispatch('delete', ${index})"
        >
        </button>
      </div>
      <input 
        class="edit" 
        value="${todo.title}" 
        onkeyup="event.keyCode === 13 && dispatch('submitEditing', this.value, ${index})"
      />
    </li>
  `;
};

export default TodoItem;

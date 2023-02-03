import html from "../core.js";
import TodoItem from './TodoItem.js';
import {connect} from '../store.js';


const TodoList = ({todos, filter, filters, edit}) => {
  console.log(todos)
  return html`
    <section class="main">
      <input 
        id="toggle-all" 
        class="toggle-all" 
        type="checkbox" 
        onchange="dispatch('toggleAll', this.checked)"
        ${todos.every(todo => filters['completed'](todo) === true) && 'checked'}
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos.filter(element => filters[filter](element) === true).map((todo, index) => {
          return TodoItem(todo, index, edit)
        })}
      </ul>
    </section>
  `;
};

export default connect()(TodoList);

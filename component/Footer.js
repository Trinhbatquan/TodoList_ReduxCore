import html from "../core.js";
import {connect} from '../store.js';

const Footer = ({todos, filter, filters}) => {
  return html`
    <footer class="footer">
      <span class="todo-count">
          <strong>${todos.filter(todo => filters['active'](todo) === true).length}</strong> 
          item left
      </span>
      <ul class="filters">
        ${Object.keys(filters).map(type => html`
          <li>
            <a 
              class="${filter === type && 'selected'}" 
              href="#"
              onclick="dispatch('switchSelected', '${type}')"
            >
              ${type[0].toUpperCase() + type.slice(1)}
            </a>
        </li>
        `)}
       
      </ul>
      <button 
        class="clear-completed"
        ${todos.filter(todo => !filters['active'](todo)).length === 0 && 'style="display: none;"'}
        onclick="dispatch('clearCompleted', ${todos.map((todo,index) => filters['completed'](todo) && index+1)})"
      >
        Clear completed
      </button>
    </footer>
  `;
};

export default connect()(Footer);

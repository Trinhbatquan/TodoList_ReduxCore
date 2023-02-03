import html from "../core.js";
import {connect} from '../store.js';


import Header from './Header.js';
import TodoList from "./TodoList.js";
import Footer from './Footer.js';
import Notification from "./Notification.js";

const connector = connect();
const App = ({todos}) => {
    return html`
    <section class="todoapp">
    ${Header()}
    ${todos.length > 0 && TodoList()}
    ${todos.length > 0 && Footer()}
    ${Notification()}
    </section>
    `
}

export default connector(App);
import { LitElement, html, css } from 'lit-element';
import './todo-list.js';

const name = 'FES'
const footerTemplate = html` 
  <footer>Made with love by ${name}</a></footer>
`;

class TodoApp extends LitElement {
  static get styles(){
    return css`
    :host {
      display:block;
      height: 94vh; 
      background-repeat: no-repeat;
      background-size: cover;
      margin: 0;
      padding: 1ren;
      width: 100%;
      background-repeat: no-repeeat;
      background-size: cover;
      background: rgb(168,255,0);
      background: linear-gradient(170deg, rgba(168,255,0,1) 0%, rgba(0,255,175,1) 314, rgba(0,224,255,1) 100%);
      
    }
    h1{
      text-align: center;
      color: white
      
    }
    `}

  static get properties() {
    return { 
      todos: { type: Array },
    };
  }

  constructor() {
    super();
    this.todos = [
      {text:'Do A',finished:true},
      {text:'Do B',finished:false},
      {text:'Do C',finished:true}
      ];
  }

  render() {
    const finishedCount = this.todos.filter(e => e.finished).length;
    const unfinishedCount = this.todos.length - finishedCount;
    
    return html`
    <h1>Todo App</h1>

    <input id="addTodoInput" placeholder="Name" />
    <button @click=${this._addTodo}>Añadir
    </button>

    <todo-list
      .todos="${this.todos}"
      @change-todo-finished="${this._changeTodoFinished}"
      @remove-todo="${this._removeTodo}">
      </todo-list>
       
      
      <div class="status">
        <div>Total Finished: ${finishedCount}</div>
        <div>Total unfinished: ${unfinishedCount}</div>
      </div>
    ${footerTemplate}
    `;
  }

  _addTodo(){
    const input = this.shadowRoot.getElementById('addTodoInput');
    const text = input.value;
    input.value = '';

    this.todos = [...this.todos, { text, finished: false}];
  
    //this.todos.push({text,finished:false});
    //this.requestUpdate();
  }
  _removeTodo(e){
    this.todos = this.todos.filter(todo => todo !== e.detail);
    }
  _changeTodoFinished(e){
    const { changeTodo, finished } = e.detail;
      this.todos = this.todos.map(todo => {
        if (todo != changedTodo){
          return todo;
        }
        return { ...changedTodo, finished};
      });
  }
}

customElements.define('todo-app', TodoApp);

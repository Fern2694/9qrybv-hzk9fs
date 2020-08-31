import {LitElement, html, css} from 'lit-element';

class TodoList extends LiteElement{
  static get properties() {
    return{
      todos:{ type: Array},
  };
}

  static get styles(){
    return css `
    :host {
      color: blue;
    }

    ol {
      list-style: none;
      padding: 0;
    }

    button{
      background-color: transparent;
      border: none;
    }
    li{
      background: white;
      border-button: 1px solid lightgray;
      display flex;
      justify-content: space-between;
      line-height: 2ren;
      padding: 1ren;
      text-align: left;
      width: 88%;
    }
    `;
  }

  render(){
    if(!this.todos){
      return html``;
    }
    return html`
    <ol>
      ${this.todos.map(
        todo => html`
        <li>
          <input
            type="checkbox"
            .checked=${todo.finished}
            @change=${e => this._changeTodoFinished(e, todo)}
            />
            ${todo,text} 
            <button @click=${() => this._removeTodo(todo)}>X<button>
          </li>
          `,
        )}
      </ol>
      `;
  }
  _changeTodoFinished(e, changeTodo){
    const eventDetails = { changeTodo, finished: e.target.checked};
    this.dispatchEvent(new CustomEvent('change-todo-finished', {detail: eventDetails }));
  }
  _removeTodo(item) {
    this.dispatchEvent(new CustomEvent
    ('remove-todo', { detail: item }));
  
  }
}

customElements.define('todo-list', TodoList);
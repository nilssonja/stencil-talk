import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import { TodoItem } from './TodoList';
import { Fragment } from '../../utils/utils'

@Component({
  tag: 'jn-todo-list',
  styleUrl: 'my-component.css',
  shadow: false
})
export class TodoList {
  @Prop() items: TodoItem[] = [];

  newName: string;
  newDescription: string;

  @Event() addItem: EventEmitter
  @Event() completeItem: EventEmitter<number>
  @Event() uncompleteItem: EventEmitter<number>

  handleOnSubmit(e) {
    e.preventDefault();
    this.addItem.emit({
      name: this.newName,
      description: this.newDescription,
      done: false
    });
  }

  handleNameChange(event) {
    this.newName = event.target.value;
  }

  handleDescriptionChange(event) {
    this.newDescription = event.target.value
  }

  render() {
    return (
      <Host>
        <ul>
          {this.items.map( ({name, description, done}, index) => {
            const Text = done ? 'del' : 'span'
            return (
            <Fragment>
              <li>
                <Text>{name}: {description}</Text>
              </li>
              <input
                type="checkbox"
                checked={done}
                onChange={(event: Event) => {
                  const target = event.target as HTMLInputElement
                  target.checked ? this.completeItem.emit(index) : this.uncompleteItem.emit(index)
                }}

              >
                {done ? 'uncomplete' : 'complete'}
              </input>
            </Fragment>
          )}
        )}
        </ul>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <label style={{display: 'block'}}>
            Name: 
            <input 
              id="name-input" 
              type="text" 
              onInput={(e) => this.handleNameChange(e) }
            />
          </label>
          <label style={{display: 'block'}}>
            Description:
            <textarea 
              id="description-textarea" 
              onInput={(e) => this.handleDescriptionChange(e) }
            />
          </label>
          <button>Add Item</button>
        </form>
      </Host>
    );
  }
}

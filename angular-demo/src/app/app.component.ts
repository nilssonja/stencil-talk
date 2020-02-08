import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  items = [{
    name: 'Item One',
    description: 'This is a description for Item One',
    done: false
  },
  {
    name: 'Item Two',
    description: 'This is a description for Item Two',
    done: false
  }]

  addItem = (event) => {
    const newItem = event.detail
    this.items = [...this.items, newItem]
  }

  completeItem = ({detail}) => {
    const itemIndex = detail
    this.items = this.items.map( (item, index) => {
      item.done = index === itemIndex ? true : item.done
      return item
    })
  }

  uncompleteItem = ({detail}) => {
    const itemIndex = detail
    this.items = this.items.map( (item, index) => {
      item.done = index === itemIndex ? false : item.done
      return item
    })
  }
}

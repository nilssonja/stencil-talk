import React from 'react';
import './App.css';

// import { JnTodoList } from './components/components'


class App extends React.Component {

  state = {
    items: [
      {
        name: 'Item One',
        description: 'This is a description for Item One',
        done: false
      },
      {
        name: 'Item Two',
        description: 'This is a description for Item Two',
        done: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
{/*         
  // @ts-ignore */}
        <jn-toggle-button></jn-toggle-button>
      {/* 
  // @ts-ignore */}
       {/* <jn-todo-list
          items={this.state.items}
        /> */}
        {/* <JnTodoList 
          items={this.state.items}
          onAddItem={(event) => {
            const newItem = event.detail
            this.setState({items : [...this.state.items, newItem]})
          }}
          onCompleteItem={(event) => {
            const itemIndex = event.detail
            const newItems = this.state.items.map((item, index) => {
              item.done = index === itemIndex ? true : item.done
              return item
            })
            this.setState({items: newItems})
          }}
          onUncompleteItem={(event) => {
            const itemIndex = event.detail
            const newItems = this.state.items.map((item, index) => {
              item.done = index === itemIndex ? false : item.done
              return item
            })
            this.setState({items: newItems})
          }}
        /> */}
    </div>
    )
  }
}
// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <JnTodoList 
//       items={[
//         {
//           name: 'Item One',
//           description: 'This is a description for Item One',
//           done: false
//         },
//         {
//           name: 'Item Two',
//           description: 'This is a description for Item Two',
//           done: false
//         }
//       ]}
//     />
//     </div>
//   );
// }

export default App;

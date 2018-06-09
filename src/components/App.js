import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello'
import Todo from './todo/todo'
import Header from './Header/Header'

class App extends React.Component {
    render() {
      return (
        // <div className="shopping-list">
        <Todo/>
        // <Header/>
        //   {/* <h1>Shopping List for {this.props.name}</h1>
        //   <ul>
        //     <li>Instagram</li>
        //     <li>WhatsApp</li>
        //     <li>Oculus</li>
        //   </ul>
        // </div> */}
      );
    }
  }
  export default App;
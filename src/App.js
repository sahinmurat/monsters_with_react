import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json(res))
      .then(users => this.setState({ monsters: users }))
  }
  // There is two usage for props to transfer. This usage works too
  // <CardList >
  //    {this.state.monsters.map(monster => (
  //      <h1 key={monster.id}> {monster.name} </h1>
  // 	 ))}
  // </CardList>

render() {
  return (
    <div className="App">
      <CardList monsters={this.state.monsters} />
    </div>
  );
}
}

export default App;
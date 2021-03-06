import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
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

  const {monsters, searchField } = this.state;
  const filterMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
    <input 
    type='search' 
    onChange={e => this.setState({ searchField : e.target.value }) }
    placeholder='serach monster!' />
      <CardList monsters={filterMonsters} />
    </div>
  );
}
}

export default App;
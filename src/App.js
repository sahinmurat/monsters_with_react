import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'
import SearcBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json(res))
      .then(users => this.setState({ monsters: users }))
  }
  handleChange= e  => {
    this.setState({searchField: e.target.value})
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
      <h1>Monsters Rolodex</h1>
      <SearcBox placeholder='search monsters' handleChange={this.handleChange}/>
      <CardList monsters={filterMonsters} />
    </div>
  );
}
}

export default App;
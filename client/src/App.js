import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './PlayerList'
import NavBar from './NavBar';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  };


  componentDidMount(){ 
  axios 
        .get('http://localhost:5000/api/players')
        .then(res => {
          console.log(res)
          this.setState({
            data: res.data
          });
        })
        .catch(err => console.log(err));
      }

render() {
  return (
<div className='App'>
  <NavBar/>
    {this.state.data.map(player => (
      <PlayerList name={player.name} country={player.country} searches={player.searches} />
    ))}
</div>
  );
}
}

export default App;
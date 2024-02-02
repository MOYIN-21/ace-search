import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      name: 'MO YIN OLUWA'
    }
  }
  render(){

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello i'm {this.state.name} </h1>
          <button onClick={() =>{
            this.setState({
              name:"Moyinoluwa"
            },
            () => {
              console.log(this.log)
            }
            )
          }}>
            Change name
          </button>
        </header>
      </div>

    );
  };
}

export default App;

import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = { data: "" };
	}
	
	fecthData(){
    fetch("blog")
        .then(res => res.text())
        .then(res => this.setState({ data: res }));
	}

	componentWillMount(){
    this.fecthData();
	}

  render(){
		return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React,{this.state.data}
        </a>
      </header>
    </div>
  );
}
} 

export default App;

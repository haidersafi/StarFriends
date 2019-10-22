import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      people:[]
    }
  }
 componentDidMount(){
  fetch('https://swapi.co/api/people').then(response=>response.json()).then(data=>this.setState({people:data.results}))


 }
  render()
  {
    const {people}=this.state;
 return !people.length?<h1>Loading</h1>:<div><List people={people} /></div>
  
}
}

export default App;

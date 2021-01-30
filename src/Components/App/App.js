import './App.css';
import React from 'react';
import { Itemlist } from '../ItemList/Itemlist';

export class App extends React.Component{
  constructor(props){
    super(props);
  }

  
  render(){
    return (
      <div className="App">
        <div className = "header">
          <h1>Recipe Finder</h1>
        </div>
        <Itemlist></Itemlist>

      </div>
    );
  }
  
}

export default App;

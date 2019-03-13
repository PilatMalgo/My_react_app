import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import ListContainer from './container/ListContainer';
import Title from './component/Title';

console.clear();

class App extends Component{

  render(){
    // Render JSX
    return (
			<div class="container">
			<div id="container" class="col-md-8 col-md-offset-2">
			<Title />
      <div class="list">
		<ListContainer />
      </div>
		</div>
		</div>
    );
  }
}

export default App;

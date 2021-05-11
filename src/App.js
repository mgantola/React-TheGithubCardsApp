import Form from './components/Form';
import CardList from './components/CardList';
import React from 'react';
import './App.css';
import testData from "./TestData";
import './styles/Style.css';

class App extends React.Component {
  state = {
    profiles: testData,
  };
  
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

export default App;


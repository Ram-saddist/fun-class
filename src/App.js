import React from 'react';
import './App.css';
import Class from './Class';
import Displayingarrayaxios from './Displayingarrayaxios';
import In from './In';

{/*class App extends React.Component{
	constructor(){
		super();
		this.state={
			name:"abhi"
		}
	}
	render(){
		setInterval(()=>{
			this.setState({name:"johny"})
		},3000)
	  return (
	    <div className="App">
	      {this.state.name}
	      {/*<Class/><hr/>
	      
	      <In/>*/
	      <Class/>
	      /*<Displayingarrayaxios/>
	    </div>
	  );
	}
}*/}
function App(){
	return(
		<div className="App"><Class/></div>
	)
}
export default React.memo(App);

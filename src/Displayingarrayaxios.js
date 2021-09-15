import React from 'react';
import axios from 'axios'

export default class Displayingarrayaxios extends React.Component{
	constructor(){
		super();
		this.state={
			json:[],
			name:''
		}
	}
	componentDidMount(){
		axios.get("http://localhost:5000").then(response=>{
			console.log(response.data);
			console.log(response.data.host);
			this.setState({
				json:response.data
			})
		});

	}
	render(){
		return(
		  <div>	
			<h1>Json from the Displayingarrayaxios component</h1>
			<p>{this.state.name}</p>
			{
				this.state.json.map(g=>(
						  <div>	
							<p>Host::{g.host}</p>
							<p>User::{g.user}</p>
							<p>Pass::{g.password}</p>
							<p>DB::{g.database}</p>
						  </div>
						)
				)
			}
			{console.log(this.state.json)}
		  </div>
		) 
	}
}
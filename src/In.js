import React from 'react'

export default class In extends React.Component{
	state={
		user:"",
		password:""
	}
	handle=(e)=>{
		
		this.setState({
			[e.target.name]:e.target.value	
		})
		
	}
	render(){
		return(
		 <div>
		 	<input type="text" name="user" 
				onChange={this.handle}/><br/><br/>
			<input type="text" name="password" 
				onChange={this.handle}/>
			<p>{this.state.user}</p>
			<button>Submit</button>
		 </div>
		)
	}
}
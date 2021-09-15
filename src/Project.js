import React from 'react';
import ReactPlayer from 'react-player'

class Project extends React.Component{
	constructor(props){
		super(props)
		this.state={
			vid:null
		};
	}
	render(){
		return(
			<div>
				
				<video
                  src="https://assets.polestar.com/video/test/polestar-1_09.mp4"
	              type="video/mp4" controls="controls" 
	            />
			</div>
		);
	}
}
export default Project;

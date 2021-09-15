import React from "react";
import {useState,useEffect} from 'react';
import Constructor from "./Constructor";

/*class Class extends React.Component{
	constructor(){
		super()
		this.state={
			name:"qwerty",
			age:20
		}
	}
	render(){
		setTimeout(()=>{
			this.setState({name: "antony"});
		},2000)
		return(
			<div>
				<p>This a class example</p>
				<p>Name is:{this.state.name}</p>
				<p>Age is:{this.state.age}</p>
				<Constructor/>
			</div>
		)
	}
}*/
function Class(){
	const [change,setChange]= useState("ravi");
	const [bk,setBKChange]=useState([]);
	const [name,setName]=useState("");
	const dis=()=>{

		setChange("teja");
	};
	const send=()=>{
		fetch(`http://localhost:2000/student/add?name=${name}`)
		.catch(err=> console.error(err))
		setName("");
	}
	useEffect(()=>{
		fetch("http://localhost:5000/getdata")
		.then(res=>res.json())
		.then(d=> setBKChange(d))
	},[setBKChange]);
	return(
		<div>
			<p>class component</p>
			<p>{change}</p>
			<button onClick={dis}>button</button>
			{
				bk.map(h=>(
					console.log(h.host)
				))
			}
			<input type="text"
				onChange={((e)=>setName(e.target.value))}
				value={name}
				placeholder="enter name"
			/>
			<button onClick={send}>send data</button>
		</div>
	)
}
export default React.memo(Class); 
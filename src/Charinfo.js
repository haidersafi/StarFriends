import React,{Component} from 'react';

class Charinfo extends Component{
	constructor(props)
	{
		super(props)
		this.state={isExpanded:false}
	}
	isOpen=()=>{
		this.setState({isExpanded:true})
	}
	isClose=()=>{
		this.setState({isExpanded:false})
	}
	render()
	{const {gender,birth_year,hair_color}=this.props.p
		if(!this.state.isExpanded){
			return <p className='btn btn-info' onClick={this.isOpen}>Show Info</p>
		}
		else
		{
			return (
			<div>
			<p className='btn btn-danger' onClick={this.isClose}>Hide Info</p>
			<div className="container"><ul className='lead text-warning'>
			<li>Gender: {gender}</li>
			<li>BirthYear: {birth_year}</li>
			<li>HairColor: {hair_color}</li></ul></div>

			</div>)
		}
	}
}

export default Charinfo
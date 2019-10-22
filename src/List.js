import React from 'react';
import Charinfo from './Charinfo'

const List=({people})=>{
console.log(people)
return(
	<div>
	{
people.map(p=>{
	return(<div className="text-warning display-3 border border-primary mb-1" key={p.url}>
		<h3>{p.name}</h3>
		<Charinfo p={p}/>
		</div>)
})
	}
	</div>)
}
export default List
import React, { Component } from 'react';
import './SearchResult.css';

function ShowCelebrityDetail(props){
	let detail = props.detail;
	return (
		<div className="container">
			<h3 className="container-title">NO: {detail.rank}</h3>
			<h3>Name: {detail.name}</h3>
			<h3>Net Worth: {detail.netWorth}</h3>
			<h3>Age: {detail.age}</h3>
			<h3>Country of Birth: {detail.country}</h3>
		</div>
	);
}

class SearchResult extends Component {
	constructor(props){
		super(props);
	}

	render(){
		let results;
		console.log("data is: "+ this.props.data);
		if(this.props.data.length >0){
			results = this.props.data.map((item,i)=>
				<ShowCelebrityDetail detail = {item} key={i} />
			)
		}else{
			results = 
			<div className="container">
				<p className="container-title"> No Result Found </p>
			</div>
		}
		return(
			<div>
				{results}
			</div>
		)
	}
}

export default SearchResult;

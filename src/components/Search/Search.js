import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

	constructor(){
		super();
		this.state = {
			value:''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	changeValue = (e) => {
	    this.setState({
	        searchkey : e.target.value
	     })
	}

	handleChange = (e) => {
	 if (e.which === 13){

	 	this.props.selectSearchKey(this.state.searchkey);
	 }
	}

	render(){
		return(
			<div>
			  <div className="col-sm-6 form-group search-group">
			    <label>Search:</label>
			    <input className="form-control" type="text" value={this.searchkey} onChange={this.changeValue} onKeyPress={this.handleChange}/>

			  </div>
			</div>
		)
	}
}

export default Search;

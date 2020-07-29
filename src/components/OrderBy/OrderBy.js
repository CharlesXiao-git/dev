import React, { Component } from 'react';
import './OrderBy.css';

class OrderBy extends Component {

	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		let selectValue = event.target.value;
		this.props.selectOrderBy(selectValue);
	}
	render(){
		return(
			<div>
			  <div className="col-sm-6 form-group order-by-group">
			    <label>Order By:</label>
			    <select className="form-control" onChange={this.handleChange}>
			      <option>rank</option>
			      <option>age</option>
			      <option>name</option>
			    </select>
			  </div>
			</div>
		)
	}
}

export default OrderBy;

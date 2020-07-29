import React, { Component } from 'react';
import './Converter.css';

class Converter extends Component {
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		let selectValue = event.target.value;
		this.props.selectCurrency(selectValue);
	}

	render(){
		return(
			<div>
			  <div className="col-sm-6 form-group currency-converter-group">
			    <label>Currency Converter:</label>
			    <select className="form-control" onChange={this.handleChange}>
			      <option value='US'>US Dollar</option>
			      <option value='AU'>AU Dollar</option>
			      <option value='ER'>Euro Dollar</option>
			    </select>
			  </div>
			</div>
		)
	}

}

export default Converter;

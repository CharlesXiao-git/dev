import React, { Component } from 'react';
import './BirthPlace.css';
import {getAllBirthPlace} from '../../api/BirthPlaceApi.js';
import {API_END_POINT,BIRTH_PLACE} from '../../const/constants.js';

class BirthPlace extends Component {

	constructor(){
		super();
		this.state = {
			birthPlaceList: ['Show All']
		}
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){
		getAllBirthPlace(API_END_POINT + BIRTH_PLACE.GET_ALL_BIRTHPLACE)
		.then(		
			(response)=>{
				    if(response.ok){
		                response.json().then((json)=>{
		                    this.setState({'birthPlaceList' : this.state.birthPlaceList.concat(json)})
		                })
		            }
				
			})
		.catch(
			(error)=>{ console.log(error) }
		)
	}

	handleChange(event){
		let selectValue = event.target.value;
		this.props.selectBirthPlace(selectValue);
	}

	render(){
		const birthPlaceListOptions = this.state.birthPlaceList.map(birthPlace => 
			  <option key={birthPlace}>{birthPlace}</option>
			)
		return(
			<div>
			  <div className="col-sm-6 form-group birth-place-group">
			    <label >Birthplace:</label>
			    <select className="form-control" onChange={this.handleChange}>
					{birthPlaceListOptions}
			    </select>
			  </div>
			</div>
		)
	}

}

export default BirthPlace;	
import React, { Component } from 'react';
import {getHeader} from '../../api/HeaderApi.js';
import {API_END_POINT,HEADER} from '../../const/constants.js';

class Header extends Component {
	constructor(){
		super();
		this.state ={
		  "pageTitleH1": "",
		  "pageTitleH2": "",
		  "description": "",
		  "referenceLink": ""
		}
	}

	componentDidMount(){
		getHeader(API_END_POINT + HEADER.GET_HEADER)
		.then(		
			(response)=>{
				    if(response.ok){
		                response.json().then((json)=>{
		                    this.setState({pageTitleH1 : json.pageTitleH1,
		                    			  pageTitleH2 : json.pageTitleH2,
		                    			  description: json.description,
		                    			  referenceLink: json.referenceLink
		                	})
		                })
		            }				
			})
		.catch(
			(error)=>{ console.log(error) }
		)
	}

	render() {
	 	return(
	 		<div>
		 		<h1 className="title">{this.state.pageTitleH1} </h1>
		 		<h3 className="rickList" >{this.state.pageTitleH2}</h3>
		 		<h5>{this.state.description}</h5>
		 		<h6>{this.state.referenceLink}</h6>
	 		</div>
	 	)
	 }
}

export default Header;
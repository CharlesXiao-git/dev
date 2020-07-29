import React, { Component } from 'react';
import BirthPlace from '../BirthPlace/BirthPlace.js';
import Converter from '../Converter/Converter.js';
import Search from '../Search/Search.js';
import SearchResult from '../SearchResult/SearchResult.js';
import OrderBy from '../OrderBy/OrderBy.js';
import './Content.css';
import {getAllCelebrity,searchCelebrity} from '../../api/CelebrityApi.js';
import {API_END_POINT,CELEBRITY} from '../../const/constants.js';


class Content extends Component {
	constructor(){
		super();
		this.state = {
			birthplace:'',
			currency:'US',
			search:'',
			orderby:'',
			searchResultList: []
		}
	}

	componentDidMount(){
		getAllCelebrity(API_END_POINT + CELEBRITY.GET_ALL_CELEBRITY)
		.then(		
			(response)=>{
				    if(response.ok){
		                response.json().then((json)=>{
		                    this.setState({'searchResultList' : json})
		                })
		            }			
			})
		.catch(
			(error)=>{ console.log(error) }
		)
	}

	searchByBirthPlace(selectbirthplace){
		console.log('start search by ; ' + selectbirthplace );
		var params = {
			birthplace: selectbirthplace,
			currency: this.state.currency,
			search:this.state.search,
			orderby:this.state.orderby
		}
		this.searchCelebrity(params);
	}

	selectCurrency(selectCurrency){
		var params = {
			birthplace:this.state.birthplace,
			currency: selectCurrency,
			search:this.state.search,
			orderby:this.state.orderby
		}
		this.searchCelebrity(params);
	}

	searchBySearchKey(selectsearchkey){
		var params = {
			birthplace: this.state.birthplace,
			currency: this.state.currency,
			search:selectsearchkey,
			orderby:this.state.orderby
		}
		this.searchCelebrity(params);
	}

	searchByOrderBy(selectorderby){
		var params = {
			birthplace: this.state.birthplace,
			currency: this.state.currency,
			search:this.state.search,
			orderby:selectorderby
		}
		this.searchCelebrity(params);
	}

	searchCelebrity(params){
		searchCelebrity(API_END_POINT + CELEBRITY.SEARCH_CELEBRITY, params).
		then(		
			(response)=>{
				    if(response.ok){
		                response.json().then((json)=>{
		                    this.setState({'searchResultList' : json})
		                })
		            }				
			})
		.catch(
			(error)=>{ console.log(error) }
		)
	}

	render(){
		return(
				<div className="row">
					<div className="col-sm-12 search-header">
						<BirthPlace selectBirthPlace={this.searchByBirthPlace.bind(this)}/>
						<Converter selectCurrency={this.selectCurrency.bind(this)}/>
						<Search selectSearchKey={this.searchBySearchKey.bind(this)}/>
						<OrderBy selectOrderBy={this.searchByOrderBy.bind(this)}/>
					</div>
					<div className="col-sm-12 search-body">
						<SearchResult data={this.state.searchResultList}/>
					</div>
				</div>
		)
	}

}

export default Content;
var express = require("express");
var router = express.Router();
var fs=require('fs');
var path = require('path');
var file = path.join(__dirname, 'data.json');

function getcountries(){
	var countries = new Set();
	var DATA=JSON.parse(fs.readFileSync(file));
	DATA.celebrityList.map(celebrity=>{
	countries.add(celebrity.country);
	})
	return countries;
}

router.use("/getHeader",function (req,res) {
	console.log(req.body);
	var header=JSON.parse(fs.readFileSync(file));
	header.usDollarValue = '';
	header.australianDollarValue = '';
	header.euroValue = '';
	header.celebrityList = '';
	console.log(header);
  	return res.json(header);
})

router.use("/birthplace/listAll",function (req,res) {
	console.log(req.body);
	var contries = [...getcountries()];
  	return res.json(contries);
})

router.use("/celebrity/listAll",function (req,res) {
	console.log(req.body);
	var DATA=JSON.parse(fs.readFileSync(file));
	var netWorth;
	var results = DATA.celebrityList;
	results.map(e => {
		netWorth = numFormat(e.netWorth) ;
		return  e.netWorth ='$USD ' + netWorth;
	});
  	return res.json(results);
})


router.use("/celebrity/searchCelebrity",function (req,res) {
    console.log('start searchCelebrity ...');
	console.log(req.body);
	var params = req.query;
	var birthplace = params.birthplace;
	console.log("birthplace is :"+birthplace);
	var results;
	var DATA=JSON.parse(fs.readFileSync(file));

	if(birthplace && birthplace.trim().length && birthplace !=='Show All'){
		results = DATA.celebrityList.filter(e => { return e.country == birthplace });
	}else{
		results = DATA.celebrityList;
	}

	var currency = params.currency;
	var search = params.search;
	console.log("results length is :"+results.length);
	console.log("search is :"+search);
	if(search){
		results = results.filter(e => {return e.rank == search}).concat(
				  results.filter(e => {return e.name.match(new RegExp(search))})
			      ).concat(
			      	results.filter(e => {return e.age == search})
			      )
	}

	var currency= params.currency;
	console.log("currency is :"+currency);
	var netWorth;
	results.map(e => {
		if(currency == 'AU'){
			netWorth = numFormat(e.netWorth * DATA.australianDollarValue) ;
			return  e.netWorth ='$AU ' + netWorth ;
		}else if (currency == 'ER'){
			netWorth = numFormat(e.netWorth * DATA.euroValue) ;
			return  e.netWorth ='$EURO ' + netWorth;
		}else{
			netWorth = numFormat(e.netWorth) ;
			return  e.netWorth ='$USD ' + netWorth;
		}
	});
	console.log (results);
	console.log("currency is :"+currency);
	var orderby = params.orderby;
	console.log("orderby is :"+orderby);
  	return res.json(results.sort((a,b) => { 
  		if(orderby == 'age'){
  			return a.age - b.age;
  		}else if(orderby == 'name'){
  			return a.name > b.name;
  		}else{
  			return a.rank - b.rank;
  		}
  	}));
})

function numFormat(num)
{ 
	var res=num.toString().replace(/\d+/, function(n){ 
	return n.replace(/(\d)(?=(\d{3})+$)/g,function($1){
	 return $1+","; }); 
	})
	return res; 
}

module.exports = router;
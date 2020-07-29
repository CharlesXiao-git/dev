import {get,getByParams} from '../utils/commonAjax.js';


export const getAllCelebrity = (url)=>{
	return get(url);
};

export const searchCelebrity = (url,searchData)=>{
	return getByParams(url,searchData);
};
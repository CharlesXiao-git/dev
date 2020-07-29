import {get} from '../utils/commonAjax.js';


export const getHeader = (url)=>{
	return get(url);
};
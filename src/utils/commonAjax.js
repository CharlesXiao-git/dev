export const get = (url) =>{
		console.log(url);
		return fetch(url,
						{ 
							method:"GET", 
							credentials: 'include'
						}
					)
}

export const getByParams = (url,params) =>{
		console.log("getByData params is: " + params);
		if (params) {
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        console.log("getByData url is: " + url);
		return fetch(url,
						{ 
							method:"GET", 
							credentials: 'include'
						}
					)
}

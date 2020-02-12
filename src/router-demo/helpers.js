export const helperService = {
    getQueryParams
};

function getQueryParams (urlQueryString) {
	var queryParams = {};
	var queryString = urlQueryString.substring(1);
    var keyValuePairs = queryString.split('&');
    keyValuePairs.forEach(keyValuePair => {
        let keyValuePairArray = keyValuePair.split('=');
        queryParams[keyValuePairArray[0]] = keyValuePairArray[1];
    });
	return queryParams;
};


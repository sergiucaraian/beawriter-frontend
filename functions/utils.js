function makeRequest(fnCallback, serviceName, requestType, content)
{
	var xhr = new XMLHttpRequest();
	var url = "http://188.166.0.172:8090/beaw/apirpc";
	var json = createJSONRequestObject(serviceName, content);

	xhr.onreadystatechange = function()
	{
    	if (xhr.readyState == 4 && xhr.status == 200)
		{
        	fnCallback(JSON.parse(xhr.responseText));
    	}
	}

	xhr.open(requestType, url, true);
	xhr.send(JSON.stringify(json));
}


function createJSONRequestObject(serviceName, content) {
	return {
		"operation": serviceName,
		"params": content
	}
}

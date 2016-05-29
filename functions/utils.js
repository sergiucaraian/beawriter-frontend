function makeRequest (serviceName, requestType, content) {

	var xhr = new XMLHttpRequest();
	var url = "http://188.166.0.172:8090/beaw/apirpc";
	var json = createJSONRequestObject(serviceName, content);

	xhr.onreadystatechange = function()
	{
    	if (xhr.readyState == 4 && xhr.state == 200)
		{
        	return JSON.parse(xhr.responseText);
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


function registerUser() {

	var registerButton = document.getElementById("buttonReg");
	registerButton.onclick = function () {

	var JSONObject = new Object();
	var array = [];

	JSONObject.username = document.getElementById("username").value;
	JSONObject.password = document.getElementById("password").value;
	JSONObject.firs_tname = document.getElementById("first_name").value;
	JSONObject.last_name = document.getElementById("last_name").value;
	JSONObject.email = document.getElementById("email").value;
	JSONObject.ocupation = document.getElementById("ocupation").value;

	if (allRequiredFieldsAreCompleted(JSONObject)) {
		var content = JSON.stringify(JSONObject);
		makeRequest("UserAuth.authenticate", "POST", content);
	}
	}

}

function allRequiredFieldsAreCompleted(obj) {
	//to be added
	return true
}

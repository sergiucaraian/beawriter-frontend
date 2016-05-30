function registerUser()
{
	var registerButton = document.getElementById("buttonReg");

    registerButton.addEventListener(
        "click",
        function()
        {
            var objUserData = {};

            objUserData.username = document.getElementById("username").value;
        	objUserData.password = document.getElementById("password").value;
        	objUserData.first_name = document.getElementById("first_name").value;
        	objUserData.last_name = document.getElementById("last_name").value;
        	objUserData.email = document.getElementById("email").value;
        	objUserData.ocupation = document.getElementById("ocupation").value;
			
			
			if (allRequiredFieldsAreCompleted(objUserData, "register")) 
			{
            if(true)
            {
                makeRequest(
                    function(mxResponse)
                    {
                        if (mxResponse.message != null) {
							document.getElementById("registerMessage").innerHTML = mxResponse.message;
						} else {
							window.location.assign("login.html");
						}
                    },
                    "UserService.create",
                    "POST",
                    objUserData
                );
            }
        } else {
			document.getElementById("registerMessage").innerHTML = "Please complete all required fields";
		}
		}
    )
}

function loginUser()
{
	var loginButton = document.getElementById("buttonReg");

    loginButton.addEventListener(
        "click",
        function()
        {
            var objUserData = {};

            objUserData.username = document.getElementById("username").value;
        	objUserData.password = document.getElementById("password").value;
			
			if (allRequiredFieldsAreCompleted(objUserData, "login")) 
			{
            if(true)
            {
                makeRequest(
                    function(mxResponse)
                    {
                        if (mxResponse.message != null) {
							document.getElementById("registerMessage").innerHTML = mxResponse.message;
						} else {
							setCookie("user_hash", mxResponse.hash, 5);
							setCookie("user_id", mxResponse, 5);
							window.location.assign("main.html");
						}
                    },
                    "AuthService.authenticate",
                    "POST",
                    objUserData
                );
            }
        } 
		else {
			document.getElementById("registerMessage").innerHTML = "Please complete all fields";
		}
		}
    )
}




function allRequiredFieldsAreCompleted(obj, type) {
	
	if (type == "register") {
		if (obj.username == "" || obj.password == "" || obj.first_name == "" || obj.last_name == "" || obj.email == ""
		|| obj.username == null || obj.password == null || obj.first_name == null || obj.last_name == null || obj.email == null) {
			return false;
		}
	} else if (type == "login") {
		if (obj.username == "" || obj.password == ""
		|| obj.username == null || obj.password == null)
		return false;
	}
	
	return true;
}

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

            if(true)
            {
                makeRequest(
                    function(mxResponse)
                    {
                        console.log(mxResponse);
                    },
                    "UserService.create",
                    "POST",
                    objUserData
                );
            }
        }
    )
}


function allRequiredFieldsAreCompleted(obj) {
	//to be added
	return true
}

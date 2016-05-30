function makeRequest(fnCallback, serviceName, requestType, content)
{
	var xhr = new XMLHttpRequest();
	var url = "http://188.166.0.172:8090/beaw/apirpc";
	var json = createJSONRequestObject(serviceName, content);
	xhr.withCredentials = true;

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

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var cook = getCookie(cname);
    if (cook != "") {
		return true;
	} else {
		return false;
	}
}

function checkUserStatus() {
	var anchor ;
	if (checkCookie("user_hash")) {
		anchor = document.getElementById("LogIn");
		anchor.innerHTML = "LogOut";
		anchor.href = "";
		anchor.id = "LogOut"
		setLogOut(anchor);
	}
}

function setLogOut(elem) {
	elem.addEventListener(
        "click",
        eventFunc = function()
        {
            if(true)
            {
                makeRequest(
                    function(mxResponse)
                    {
							setCookie("user_hash", "");
							elem.innerHTML = "LogIn";
							elem.setAttribute("href");
							elem.href = "login.html";
							elem.href = "LogIn";
							elem.removeEventListener("click", eventFunc, true);
                    },
                    "AuthService.authenticate",
                    "POST",
                    ""
                );
            }
        }
    )
}

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

function removeAllCookies() {
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++)
	setCookie(cookies[i].split("=")[0], "", -1);
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
                //makeRequest(
                    //function(mxResponse)
                    //{
							setCookie("user_hash", "");
							elem.innerHTML = "LogIn";
							elem.setAttribute("href");
							elem.href = "login.html";
							elem.href = "LogIn";
							removeAllCookies();
							elem.removeEventListener("click", eventFunc, true);
                 //   },
                   // "AuthService.authenticate",
                   // "POST",
                   // ""
                //);
            }
        }
    )
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function addReviews(story_id) {

	var containerDiv = document.getElementById("container-div");


		/*makeRequest(
                    function(mxResponse)
                    {
						for (var i = 0; i < mxResponse.length; i++)
						{

						var wrapDiv = document.createElement("div");
						wrapDiv.classList.add("wrap");

						var imgPhoto = document.createElement("img");
						imgPhoto.id = "user_img";
						imgPhoto.src = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHBxKgVDCHbUAXpmGjk0WmmCbm2Fnkpdt3707m3ZcsATS6BPVAKbmb7oM";

						var divComment = document.createElement("div");
						divComment.classList.add("comment");
						divComment.setAttribute("data-owner", "Hidden user");
						var pComment = document.createElement("p");
						pComment.innerHTML = mxResponse[i].comment;
						divComment.appendChild(pComment);
						var ulElem = document.createElement("ul");
						ulElem.classList.add("postscript");
						ulElem.style.listStyleType = "none";
						var liReview = document.createElement("li");
						var liButton = document.createElement("li");
						var liDate = document.createElement("li");
						liDate.classList.add("date");
						var textNode = document.createTextNode(mxResponse[i].created_at);
						liDate.appendChild(textNode);
						var inputReview = document.createElement("input");
						inputReview.type = "text";

						liReview.appendChild(inputReview);

						var buttonReview = document.createElement("button");
						buttonReview.id = mxResponse[i].author_id;

						var buttonTextNode = document.createTextNode("Reward Review");
						buttonReview.appendChild(buttonTextNode);

						liButton.appendChild(buttonReview);

						ulElem.appendChild(liReview);
						ulElem.appendChild(liButton);
						ulElem.appendChild(liDate);

						divComment.appendChild(ulElem);

						wrapDiv.appendChild(imgPhoto);

						wrapDiv.appendChild(divComment);

						containerDiv.appendChild(wrapDiv);
						}
                    },
                    "FeedbackService.readFeedbackResponse",
                    "POST",
                    story_id
                );*/
}

function init_page(strPage)
{
    if(strPage === "story")
    {
        init_page_story();
    }

	if(strPage === "main")
	{
		init_page_main();
	}

    if(strPage === "login")
    {
        init_page_login();
    }

    if(strPage === "register")
    {
        init_page_register();
    }

    if(strPage === "dashboard")
    {
        init_page_dashboard();
    }

    if(strPage === "storycreate")
    {
        init_page_storycreate();
    }
}

function init_page_main()
{
	init_menubar();
	init_maincontent();
}


function init_page_story()
{
    init_menubar();
<<<<<<< HEAD
    init_story_stats();
=======
>>>>>>> e200cd7623060dce64480078e47cd9d9c5fd350e
    init_title_input();
    init_editor();
	addReviews(1);
}

function init_page_login()
{
    init_menubar();
    init_loginform();
}


function init_page_register()
{
    init_menubar();
    init_regform();
}


function init_page_dashboard()
{
    init_menubar();
    init_dashboard_content();
}


function init_page_storycreate()
{
    init_menubar();
    init_storycreate_content();
}


function init_menubar()
{
    var elDivBody = document.getElementById("body-content");
    var objMenubar = new Menubar();
    elDivBody.appendChild(objMenubar.container());
    checkUserStatus();
}

function init_storycreate_content()
{
    var elDivBody = document.getElementById("body-content");
    var objStoryCreate = new StoryCreate();
    elDivBody.appendChild(objStoryCreate.container());
}


function init_dashboard_content()
{
    var elDivBody = document.getElementById("body-content");
    var objDashboard = new Dashboard();
    elDivBody.appendChild(objDashboard.container());
}


function init_maincontent()
{
	if (document.getElementById("LogIn") == null)
		window.location.assign("dashboard.html");
	var elDivBody = document.getElementById("body-content");
	var objMainContent = new MainContent();
	elDivBody.appendChild(objMainContent.container());
	loginUser();

}


function init_editor()
{
    // Create editor wrapper
    var elDivBody = document.getElementById("body-content");

    var config = {
        theme: 'snow'
    };

    var objEditor = new Editor(config);
    objEditor.initialize();

    elDivBody.appendChild(objEditor.container());
}

function init_loginform()
{
    var elDivBody = document.getElementById("body-content");

    var objMainContent = new Registration();

    elDivBody.appendChild(objMainContent.container_log_in());

	loginUser();
}

function init_regform()
{
    var elDivBody = document.getElementById("body-content");

    var objMainContent = new Registration();

    elDivBody.appendChild(objMainContent.container_registration());

	registerUser();
}

function init_title_input()
{
    var elDivBody = document.getElementById("body-content");

    var elDivWrapper = document.createElement("div");

    var elDiv = document.createElement("div");
    elDiv.classList.add("form-group", "editor-title-input-wrapper");

    var elSpan = document.createElement("span");
    elSpan.classList.add("input-group-addon");
    elSpan.innerHTML = "Title";
    elDiv.appendChild(elSpan);

    var elInput = document.createElement("input");
    elInput.classList.add("editor-title-input-field", "form-control");
    elInput.type = "text";
    elDiv.appendChild(elInput);

    elDivWrapper.appendChild(elDiv);
    elDivBody.appendChild(elDivWrapper);
}

function init_story_stats()
{
    var elDivBody = document.getElementById("body-content");

    var elDivWrapper = document.createElement("div");

    var elDiv = document.createElement("div");

    var elSpan = document.createElement("span");
    elSpan.classList.add("input-group-addon");
    elSpan.innerHTML = "Points";
    elDiv.appendChild(elSpan);

    var elInput = document.createElement("input");
    elInput.classList.add("editor-title-input-field", "form-control");
    elInput.type = "text";
    elInput.disabled = true;
    elDiv.appendChild(elInput);

    elDivWrapper.appendChild(elDiv);

    var elDivMessagesWrapper = document.createElement("div");

    var elSpanMessages = document.createElement("span");
    elSpanMessages.innerHTML = "No messages yet";
    elDivMessagesWrapper.appendChild(elSpanMessages);
    elDivWrapper.appendChild(elDivMessagesWrapper);

    elDivBody.appendChild(elDivWrapper);
}

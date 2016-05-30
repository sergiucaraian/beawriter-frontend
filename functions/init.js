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
}

function init_page_main()
{
	init_menubar();
	init_maincontent();
}


function init_page_story()
{
    init_menubar();
    init_editor();
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


function init_menubar()
{
    var elDivBody = document.getElementById("body-content");
    var objMenubar = new Menubar();
    elDivBody.appendChild(objMenubar.container());
}


function init_dashboard_content()
{
    var elDivBody = document.getElementById("body-content");
    var objDashboard = new Dashboard();
    elDivBody.appendChild(objDashboard.container());
}


function init_maincontent()
{
	var elDivBody = document.getElementById("body-content");
	var objMainContent = new MainContent();
	elDivBody.appendChild(objMainContent.container());
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
}

function init_regform()
{
    var elDivBody = document.getElementById("body-content");

    var objMainContent = new Registration();

    elDivBody.appendChild(objMainContent.container_registration());

	registerUser();

}

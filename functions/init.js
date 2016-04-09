function init_page(strPage)
{
    if(strPage === "main")
    {
        init_page_main();
    }
}


function init_page_main()
{
    init_menubar();
    init_editor();
}


function init_menubar()
{
    var elDivBody = document.getElementById("body-content");

    var objMenubar = new Menubar();

    elDivBody.appendChild(objMenubar.container());
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


function init_editor_toolbar()
{

}

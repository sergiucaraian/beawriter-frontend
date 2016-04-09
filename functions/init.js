function init_page(strPage)
{
    if(strPage === "main")
    {
        init_page_main();
    }
}


function init_page_main()
{
    init_editor();
}


function init_editor()
{
    // Create editor wrapper
    var elDivBody = document.getElementById("body-content");

    var elDivEditorWrapper = document.createElement("div");
    elDivEditorWrapper.id = "editor-wrapper";
    elDivBody.appendChild(elDivEditorWrapper);

    var elDivEditorToolbar = document.createElement("div");
    elDivEditorToolbar.id = "editor-toolbar";

    var elButtonBold = document.createElement("button");
    elButtonBold.classList.add("ql-bold");
    var elButtonItalic = document.createElement("button");
    elButtonItalic.classList.add("ql-italic");

    elDivEditorToolbar.appendChild(elButtonBold);
    elDivEditorToolbar.appendChild(elButtonItalic);

    var objTextEditor = new Quill(elDivEditorWrapper);
    objTextEditor.addModule('toolbar', {container: elDivEditorToolbar});
}

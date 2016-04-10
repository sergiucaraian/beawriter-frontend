function Editor(objConfig)
{
    this.objConfig = objConfig;
}
Editor.prototype = {

    elDivContainer: null,
    elDivToolbar: null,
    elDivContent: null,
    objEditor: null,
    objConfig: null,


    container: function()
    {
        return this.elDivContainer;
    },


    initialize: function()
    {
        this.elDivContainer = document.createElement("div");
        this.elDivContainer.classList.add("editor-container");

        this.generate_toolbar();
        this.elDivContainer.appendChild(this.elDivToolbar);

        this.elDivContent = document.createElement("div");
        this.elDivContent.classList.add("editor-content-wrapper");

        this.elDivContainer.appendChild(this.elDivContent);

        this.objEditor = new Quill(this.elDivContent, this.objConfig);

        this.initialize_moodules();
    },


    generate_toolbar: function()
    {
        this.elDivToolbar = document.createElement("div");
        this.elDivToolbar.classList.add("editor-toolbar");

        var elSpanGroup = document.createElement("span");
        elSpanGroup.classList.add("ql-format-group");
        this.elDivToolbar.appendChild(elSpanGroup);


        // Font
        var elSelectFont = document.createElement("select");
        elSelectFont.classList.add("ql-font");

        var elOptionSansSerif = document.createElement("option");
        elOptionSansSerif.value = "sans-serif";
        elOptionSansSerif.innerHTML = "Sans Serif";
        elOptionSansSerif.selected = true;
        elSelectFont.appendChild(elOptionSansSerif);

        var elOptionSerif = document.createElement("option");
        elOptionSerif.value = "serif";
        elOptionSerif.innerHTML = "Serif";
        elSelectFont.appendChild(elOptionSerif);

        var elOptionMonospace = document.createElement("option");
        elOptionMonospace.value = "monospace";
        elOptionMonospace.innerHTML = "Monospace";
        elSelectFont.appendChild(elOptionMonospace);

        elSpanGroup.appendChild(elSelectFont);


        // Font size
        var elSelectSize = document.createElement("select");
        elSelectSize.classList.add("ql-size");

        var elOption10px = document.createElement("option");
        elOption10px.value = "10px";
        elOption10px.innerHTML = "Small";
        elSelectSize.appendChild(elOption10px);

        var elOption13px = document.createElement("option");
        elOption13px.value = "13px";
        elOption13px.innerHTML = "Normal";
        elOption13px.selected = true;
        elSelectSize.appendChild(elOption13px);

        var elOption18px = document.createElement("option");
        elOption18px.value = "18px";
        elOption18px.innerHTML = "Large";
        elSelectSize.appendChild(elOption18px);

        var elOption32px = document.createElement("option");
        elOption32px.value = "32px";
        elOption32px.innerHTML = "Huge";
        elSelectSize.appendChild(elOption32px);

        elSpanGroup.appendChild(elSelectSize);


        // Text formating
        var elSpanGroup = document.createElement("span");
        elSpanGroup.classList.add("ql-format-group");
        this.elDivToolbar.appendChild(elSpanGroup);

        var elSpanBold = document.createElement("span");
        elSpanBold.classList.add("ql-format-button");
        elSpanBold.classList.add("ql-bold");
        elSpanBold.title = "Bold";
        elSpanGroup.appendChild(elSpanBold);

        var elSpanItalic = document.createElement("span");
        elSpanItalic.classList.add("ql-format-button");
        elSpanItalic.classList.add("ql-italic");
        elSpanItalic.title = "Italic";
        elSpanGroup.appendChild(elSpanItalic);

        var elSpanUnderline = document.createElement("span");
        elSpanUnderline.classList.add("ql-format-button");
        elSpanUnderline.classList.add("ql-underline");
        elSpanUnderline.title = "Underline";
        elSpanGroup.appendChild(elSpanUnderline);

        var elSpanStrikethrough = document.createElement("span");
        elSpanStrikethrough.classList.add("ql-format-button");
        elSpanStrikethrough.classList.add("ql-strike");
        elSpanStrikethrough.title = "Strikethrough";
        elSpanGroup.appendChild(elSpanStrikethrough);


        // Text elements
        var elSpanGroup = document.createElement("span");
        elSpanGroup.classList.add("ql-format-group");
        this.elDivToolbar.appendChild(elSpanGroup);

        var elSpanList = document.createElement("span");
        elSpanList.classList.add("ql-format-button");
        elSpanList.classList.add("ql-list");
        elSpanList.title = "List";
        elSpanGroup.appendChild(elSpanList);

        var elSpanBullet = document.createElement("span");
        elSpanBullet.classList.add("ql-format-button");
        elSpanBullet.classList.add("ql-button");
        elSpanBullet.title = "Bullet";
        elSpanGroup.appendChild(elSpanBullet);


        // Text Alignment
        var elSelectAlign = document.createElement("align");
        elSelectAlign.classList.add("ql-align");
        elSelectAlign.title = "Text Alignment";

        var elOptionLeft = document.createElement("option");
        elOptionLeft.value = "left";
        elOptionLeft.label = "Left";

        var elOptionCenter = document.createElement("option");
        elOptionCenter.value = "center";
        elOptionCenter.label = "Center";

        var elOptionRight = document.createElement("option");
        elOptionRight.value = "right";
        elOptionRight.label = "Right";

        var elOptionJustify = document.createElement("option");
        elOptionJustify.value = "justify";
        elOptionJustify.label = "Justify";


        // Links
        var elSpanLink = document.createElement("span");
        elSpanLink.classList.add("ql-format-button");
        elSpanLink.classList.add("ql-link");
        elSpanLink.title = "Link";
    },


    initialize_moodules: function()
    {
        if(!this.objEditor)
        {
            return;
        }

        this.objEditor.addModule(
            'toolbar',
            {
                container: this.elDivToolbar
            }
        );
    }
};

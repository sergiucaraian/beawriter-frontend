function Menubar()
{
    this.elDivContainer = document.createElement("div");
    this.elDivContainer.classList.add("menubar", "container")
}

Menubar.prototype =
{
    elDivContainer: null,
    elAnchorLogo: null,
	elUList: null,

    // Aici pui functii
    container: function()
    {
		this.initialize();
        return this.elDivContainer;
    },

    initialize: function()
    {
        this.elAnchorLogo = document.createElement("a");
		this.elAnchorLogo.classList.add("home-logo");
		this.setAnchorHref(this.elAnchorLogo, "main.html");

		this.addImage("../assets/pictures/home-logo.jpg");

		this.elUList = document.createElement("ul");
		this.elUList.classList.add("menu");

		this.generateListElement(4);

		this.elDivContainer.appendChild(this.elAnchorLogo);
		this.elDivContainer.appendChild(this.elUList);
    },

	addImage: function(src)
	{
		var image = document.createElement("img");
		image.src = src;
		image.width = 40;
		image.height = 40;
		this.elAnchorLogo.appendChild(image);
	},

	generateListElement: function(n)
	{
        var objPages = {
            "Dashboard": "dashboard.html",
            "Stories": "story.html",
            "LogIn": "login.html"
        };

		for(var strPageName in objPages)
		{
            if(objPages.hasOwnProperty(strPageName))
            {
                var texNode = document.createTextNode(strPageName);
                var li = document.createElement("li");
                var anchor = document.createElement("a");
				anchor.id = strPageName;
                this.setAnchorHref(anchor,objPages[strPageName]);
                anchor.appendChild(texNode);
                li.appendChild(anchor);
                this.elUList.appendChild(li);
            }
		}
	},

	setAnchorHref: function(anchor, href)
	{
		anchor.href = href;
	}
};

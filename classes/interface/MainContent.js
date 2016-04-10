function MainContent()
{
    this.elDivContainer = document.createElement("div");
}

MainContent.prototype = {
    
    elDivRow: null,
    elDivRegistration: null,
	elDivWrapper: null,
	elDivForm: null,
	elDivContent: null,
	elFormLogin: null,

    
    container: function()
    {
		this.initialize();
        return this.elDivContainer;
    },

    initialize: function()
    {
		this.elDivContainer.classList.add("container");
		this.elDivContainer.classList.add("back-theme");
		
        this.elDivRow = document.createElement("div");
		this.elDivRow.classList.add("row");
		
		this.elDivRegistration = document.createElement("div");
		this.elDivRegistration.classList.add("back-reg");
		this.elDivRegistration.classList.add("col-xs-4");
		
		this.elDivWrapper = document.createElement("div");
		this.elDivWrapper.classList.add("wrapper");
		
		this.elDivForm = document.createElement("div");
		this.elDivForm.classList.add("form-container");
		
		this.elDivContent = document.createElement("div");
		this.elDivContent.classList.add("back-content");
		this.elDivContent.classList.add("col-xs-4");
		
		this.elFormLogin = document.createElement("form");
		this.elFormLogin.classList.add("form");
		
		this.createForm(this.elFormLogin);
		this.createContent(this.elDivContent);
		this.combineElements();
		
    },
	
	createForm: function(form)
	{
		var input_text = document.createElement("input");
		input_text.type = "text";
		input_text.placeholder = "Username";
		form.appendChild(input_text);
		
		var input_password = document.createElement("input");
		input_password.type = "password";
		input_password.placeholder = "Password";
		form.appendChild(input_password);
		
		var button = document.createElement("button");
		button.type = "submit";
		button.id = "login-button";
		var textNode1 = document.createTextNode("Log In");
		button.appendChild(textNode1);
		form.appendChild(button);
		
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));
		
		var anchor = document.createElement("a");
		anchor.href = "#";
		var textNode2 = document.createTextNode("Sign up now");
		anchor.appendChild(textNode2);
		form.appendChild(anchor);
	},
	
	createContent: function(elDiv)
	{
		var h1 = document.createElement("h1");
		this.setText(h1, "Be A Writer Today, Not Tomorrow");
		
		var p = document.createElement("p");
		this.setText(p, "Do you like or love to write and don't know if you " +
		"have talent? Join this community now and become part of this "+
		"beautiful project where you can develop your " +
        "skills and recive quality criticism. Help others and participate in amazing contests where you can win wonderful prizes !");
		
		elDiv.appendChild(h1);
		elDiv.appendChild(p);
	},
	
	setText: function(element, text)
	{
		var textNode = document.createTextNode(text);
		element.appendChild(textNode);
	},
	
	combineElements: function()
	{
		this.elDivForm.appendChild(this.elFormLogin);
		this.elDivWrapper.appendChild(this.elDivForm);
		this.elDivRegistration.appendChild(this.elDivWrapper);
		this.elDivRow.appendChild(this.elDivRegistration);
		this.elDivContainer.appendChild(this.elDivRow);
		this.elDivRow.appendChild(this.elDivContent);
		
	}
	
	
};

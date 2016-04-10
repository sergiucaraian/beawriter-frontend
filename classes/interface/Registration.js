/**
 * Created by Alexandru on 10.04.2016.
 */
function Registration()
{
    this.elDivContainer = document.createElement("div");
    this.elImgLogo = document.createElement("img");
    this.elH1 = document.createElement("h1");
    this.elFormReg = document.createElement("form");
}

Registration.prototype = {

    LabelNameArrayReg : ["Username","First Name","Last Name","Email","Password"],
    IdNameArrayReg : ["username","firstname","lastname","email","password"],
    TypeArrayReg : ["text","text","text","email","text"],

    LabelNameArrayLog : ["Username","Password"],
    IdNameArrayLog : ["username","password"],
    TypeArrayLog : ["text","text"],


    container_log_in: function()
    {
        this.initialize();
        this.createForm(this.elFormReg, this.LabelNameArrayLog, this.IdNameArrayLog, this.TypeArrayLog);
        this.setText(this.elH1,"Log In");
        this.combineEl("Don't have an account ?", "Sign up", "register.html");
        return this.elDivContainer;
    },

    container_registration: function()
    {
        this.initialize();
        this.createForm(this.elFormReg, this.LabelNameArrayReg, this.IdNameArrayReg, this.TypeArrayReg);
        this.setText(this.elH1,"Create Account");
        this.combineEl("Already have an account ?", "Log in", "login.html");
        return this.elDivContainer;
    },

    initialize: function()
    {
        this.elDivContainer.classList.add("registration");

        this.addImage(this.elImgLogo, "../assets/pictures/home-logo.jpg");

        this.elFormReg.classList.add("reg-form");
    },

    addImage: function(img, src)
    {
        img.src = src;
    },


    createForm: function(form, LabelArray, IdArray, TypeArray)
    {
        for (var i = 0; i < LabelArray.length; i++) 
        {
            var elLabel = document.createElement("label");
            var elInput = document.createElement("input");
            var elSpan = document.createElement("span");
            var textNode = document.createTextNode(LabelArray[i]);
            
            elSpan.appendChild(textNode);
            elInput.id = IdArray[i];
            elInput.name = IdArray[i];
            elInput.type = TypeArray[i];
            elInput.required = true;
            
            elLabel.appendChild(elSpan);
            elLabel.appendChild(elInput);
            form.appendChild(elLabel);
        }

        elLabel = document.createElement("label");
        elLabel.appendChild(document.createElement("br"));

        elInput = document.createElement("input");
        elInput.type = "submit";
        elInput.value = "Send";
        elInput.classList.add("button");

        form.appendChild(elInput);
        
    },


    setText: function(element, text)
    {
        var textNode = document.createTextNode(text);
        element.appendChild(textNode);
    },


    combineEl : function(Ptext, Atext, href) {

        var elP = document.createElement("p");
        this.setText(elP, Ptext);

        var elAnchor = document.createElement("a");
        this.setText(elAnchor, Atext);
        elAnchor.href = href;

        this.elDivContainer.appendChild(this.elH1);
        this.elDivContainer.appendChild(this.elImgLogo);
        this.elDivContainer.appendChild(this.elFormReg);
        this.elDivContainer.appendChild(elP);
        this.elDivContainer.appendChild(elAnchor);
    }

};


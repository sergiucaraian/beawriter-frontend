function StoryCreate()
{
    this.elDivContainer = document.createElement("div");
    this.elDivContainer.classList.add("storycreate", "container");
	this.elInputTitle = document.createElement("input");
	this.elInputCategory = document.createElement("input");
	this.elInputGoal = document.createElement("input");
	this.elSelectPrivacy = document.createElement("select");
}

StoryCreate.prototype = {

	elDivWrapper: null,
	elDivContent: null,

    container: function()
    {
		this.initialize();
        return this.elDivContainer;
    },

    initialize: function()
    {
        var elSpanPageTitle = document.createElement("span");
        elSpanPageTitle.innerHTML = "Create a new story";
		elSpanPageTitle.id = "spanPageTitle";
        this.elDivContainer.appendChild(elSpanPageTitle);

        var elDivWrapper = document.createElement("div");
        var elLabelTitle = document.createElement("span");
        elLabelTitle.classList.add("input-group-addon");
        elLabelTitle.innerHTML = "Title";
        elDivWrapper.appendChild(elLabelTitle);
        this.elInputTitle.type = "text";
        this.elInputTitle.classList.add("form-control");
        elDivWrapper.appendChild(this.elInputTitle);
        this.elDivContainer.appendChild(elDivWrapper);
		
		var elDivWrapper = document.createElement("div");
        var elLabelCategory = document.createElement("span");
        elLabelCategory.classList.add("input-group-addon");
        elLabelCategory.innerHTML = "Category";
        elDivWrapper.appendChild(elLabelCategory);
        
        this.elInputCategory.type = "text";
        this.elInputCategory.classList.add("form-control");
        elDivWrapper.appendChild(this.elInputCategory);
        this.elDivContainer.appendChild(elDivWrapper);

        var elDivWrapper = document.createElement("div");
        var elLabelGoal = document.createElement("span");
        elLabelGoal.classList.add("input-group-addon");
        elLabelGoal.innerHTML = "Goal";
        elDivWrapper.appendChild(elLabelGoal);
        
        this.elInputGoal.type = "text";
        this.elInputGoal.classList.add("form-control");
        elDivWrapper.appendChild(this.elInputGoal);
        this.elDivContainer.appendChild(elDivWrapper);
		
		var elDivWrapper = document.createElement("div");
        var elLabelPrivacy = document.createElement("span");
        elLabelPrivacy.classList.add("input-group-addon");
        elLabelPrivacy.innerHTML = "Privacy";
        elDivWrapper.appendChild(elLabelPrivacy);
        
		this.elSelectPrivacy.id = "selectPrivacy";
		var elOption1 = document.createElement("option");
		elOption1.setAttribute("value", "Private");
		elOption1.appendChild(document.createTextNode("Private"));
		var elOption2 = document.createElement("option");
		elOption2.setAttribute("value", "Public");
		elOption2.appendChild(document.createTextNode("Public"));
		elOption2.selected = true;
		this.elSelectPrivacy.appendChild(elOption1);
		this.elSelectPrivacy.appendChild(elOption2);
        this.elSelectPrivacy.classList.add("form-control");
        elDivWrapper.appendChild(this.elSelectPrivacy);
        this.elDivContainer.appendChild(elDivWrapper);
		
		var elDivWrapper = document.createElement("div");
		var elButton = document.createElement("button");
		elButton.appendChild(document.createTextNode("Create"));
		elButton.id = "make-story";
		elDivWrapper.appendChild(elButton);
		this.elDivContainer.appendChild(elDivWrapper);
		
		var self = this;
		
		elButton.addEventListener(
        "click",
        function()
        {
            var objStory = {};
			var objContent = {};

        	objStory.category = self.elInputCategory.value;
			objStory.goal = self.elInputGoal.value;
			objStory.privacy  = self.elSelectPrivacy.options[self.elSelectPrivacy.selectedIndex].value;
			
			objContent.title = self.elInputTitle.value;
			objContent.content = "";
			
			objStory.content = objContent;
			
			
            if(true)
            {
                makeRequest(
                    function(mxResponse)
                    {			
					   var story_id = mxResponse.story_id;
                       var nIndx = window.location.href.indexOf("story.html");
					   window.location.href = window.location.href.substring(0,nIndx) + "story.html?id=" + story_id;
                    },
                    "StoryService.create",
                    "POST",
                    objStory
                );
            }
        } 
    );
		
		 
		
    }
};

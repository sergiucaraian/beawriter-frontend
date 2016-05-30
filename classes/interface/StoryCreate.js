function StoryCreate()
{
    this.elDivContainer = document.createElement("div");
    this.elDivContainer.classList.add("storycreate", "container");
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
        this.elDivContainer.appendChild(elSpanPageTitle);

        var elDivWrapper = document.createElement("div");
        var elLabelTitle = document.createElement("span");
        elLabelTitle.classList.add("input-group-addon");
        elLabelTitle.innerHTML = "Title";
        elDivWrapper.appendChild(elLabelTitle);
        var elInputTitle = document.createElement("input");
        elInputTitle.type = "text";
        elInputTitle.classList.add("form-control");
        elDivWrapper.appendChild(elInputTitle);
        this.elDivConainer.appendChild(elDivWrapper);

        var elDivWrapper = document.createElement("div");
        var elLabelGoal = document.createElement("span");
        elLabelGoal.classList.add("input-group-addon");
        elLabelGoal.innerHTML = "Goal";
        elDivWrapper.appendChild(elLabelGoal);
        var elInputGoal = document.createElement("input");
        elInputGoal.type = "text";
        elInputGoal.classList.add("form-control");
        elDivWrapper.appendChild(elInputGoal);
        this.elDivConainer.appendChild(elDivWrapper);
    }
};

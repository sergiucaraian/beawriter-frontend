function Message(int x)
{
    this.elDivContainer = document.createElement("div");
    this.elDivContainer.classList.add("reviewMessage");
	this.ReviewId = x;
}

Dashboard.prototype = {

    elDivRow: null,
	elDivWrapper: null,
	elDivContent: null,

    objUser: null,
    arrReviews: null,


    container: function()
    {
		this.initialize();
        return this.elDivContainer;
    },


    initialize: function()
    {
        var self = this;

        // Make requests
        makeRequest(
            function(mxResponse)
            {
                self.arrReviews = mxResponse;
            },
            "FeedbackService.readByIdFeedbackResponse",
            "POST",
			this.ReviewId
            );

        makeRequest(
            function(mxResponse)
            {
                self.objUser = mxResponse;
            },
            "UserService.readById",
            "POST",
            {
            }
        );

        this.arrReviews = [];

        this.generateHeader();
        this.generateStoriesTable();
    },




    generateStoriesTable: function()
    {
        var elDivTableWrapper = document.createElement("div");
        elDivTableWrapper.classList.add("dashboard-table-stories-wrapper");

        var elTableStories = document.createElement("table");
        elTableStories.classList.add("dashboard-table-stories");

        for(var i=0; i<this.arrStories.length; i++)
        {
            var elTrStory = this.generateStoryRow(i);
            elTableStories.appendChild(elTrStory);
        }

        elDivTableWrapper.appendChild(elTableStories);
        this.elDivContainer.appendChild(elDivTableWrapper);
    },


    generateStoryRow: function(nStoryIndex)
    {
        var elTr = document.createElement("tr");
        var elTd = document.createElement("td");

        var elDivContent = document.createElement("div");

        var elSpanTitle = document.createElement("span");
        elSpanTitle.innerHTML = "The title of the story";
        elDivContent.appendChild(elSpanTitle);

        var elSpanPointsLabel = document.createElement("span");
        elSpanPointsLabel.innerHTML = "Points:";
        elDivContent.appendChild(elSpanPointsLabel);

        var elSpanPointsValue = document.createElement("span");
        elSpanPointsValue.innerHTML = 1523;
        elDivContent.appendChild(elSpanPointsValue);

        var elSelectVisibility = document.createElement("select");
        var elOptionPublic = document.createElement("option");
        elOptionPublic.text = "Public";
        elSelectVisibility.add(elOptionPublic);
        var elOptionPrivate = document.createElement("option");
        elOptionPrivate.text = "Private";
        elSelectVisibility.add(elOptionPrivate);
        elDivContent.appendChild(elSelectVisibility);

        var elButtonEditStory = document.createElement("button");
        elButtonEditStory.addEventListener(
            "click",
            function()
            {
                var nIndx = window.location.href.indexOf("dashboard");
                window.location.href = window.location.href.substring(0,nIndx) + "story.html?id=100";
            }
        );
        elDivContent.appendChild(elButtonEditStory);

        elTd.appendChild(elDivContent);
        elTr.appendChild(elTd);
        return elTr;
    },
};

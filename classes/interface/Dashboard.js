function Dashboard()
{
    this.elDivContainer = document.createElement("div");
    this.elDivContainer.classList.add("dashboard", "container");
}

Dashboard.prototype = {

    elDivRow: null,
	elDivWrapper: null,
	elDivContent: null,

    objUser: null,
    arrStories: [],
    arrStoriesStats: [],

    bFetchedUser: false,
    bFetchedUserStats: false,
    bStartedToRenderStoryTable: false,
    bFetchedStories: false,

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
                makeRequest(
                    function(mxResponse2)
                    {
                        self.arrStories = mxResponse2;
                        console.log(mxResponse2);
                        self.bFetchedStories = true;

                        // FilterStories
                        self.generateStoriesTable();
                    },
                    "StoryService.read",
                    "POST",
                    {
                        "user_id": "@me"
                    }
                );

                self.objUser = mxResponse;
                console.log(mxResponse);
                self.bFetchedUser = true;
                self.generateHeader();
            },
            "UserService.readById",
            "POST",
            {
                "user_id": "@me"
            }
        );

        makeRequest(
            function(mxResponse)
            {
                self.objUserStats = mxResponse;
                console.log(mxResponse);
                self.bFetchedUserStats = true;
                self.generateHeader();
            },
            "UserStatsService.readById",
            "POST",
            {
                "user_id": "@me"
            }
        )
    },


    generateHeader: function()
    {
        if(!this.bFetchedUser || !this.bFetchedUserStats)
            return;

        var elDivHeader = document.createElement("div");
        elDivHeader.classList.add("dashboard-header");

        var elSpanName = document.createElement("span");
        elSpanName.innerHTML = this.objUser["name"];
        elDivHeader.appendChild(elSpanName);

        var elSpanPointsLabel = document.createElement("span");
        elSpanPointsLabel.innerHTML = "Points: ";
        elDivHeader.appendChild(elSpanPointsLabel);

        var elSpanPointsValue = document.createElement("span");
        elSpanPointsValue.innerHTML = this.objUserStats["num_of_points"];
        elDivHeader.appendChild(elSpanPointsValue);

        var elSpanLevelLabel = document.createElement("span");
        elSpanLevelLabel.innerHTML = "Level: ";
        elDivHeader.appendChild(elSpanLevelLabel);

        var elSpanLevelValue = document.createElement("span");
        elSpanLevelValue.innerHTML = this.objUserStats["xp_level"];
        elDivHeader.appendChild(elSpanLevelValue);

        var elButtonEditStory = document.createElement("button");
        elButtonEditStory.innerHTML = "Create story"

        elButtonEditStory.addEventListener(
            "click",
            function()
            {
                var nIndx = window.location.href.indexOf("dashboard");
                window.location.href = window.location.href.substring(0,nIndx) + "storycreate.html";
            }
        );
        elDivHeader.appendChild(elButtonEditStory);

        this.elDivContainer.appendChild(elDivHeader);

        this.bGeneratedHeader = true;
        this.generateStoriesTable()
    },


    generateStoriesTable: function()
    {
        var self =  this;

        if(!this.bGeneratedHeader || !this.bFetchedStories || this.bStartedToRenderStoryTable)
            return;

        this.bStartedToRenderStoryTable = true;

        var elDivTableWrapper = document.createElement("div");
        elDivTableWrapper.classList.add("dashboard-table-stories-wrapper");

        var elTableStories = document.createElement("table");
        elTableStories.classList.add("dashboard-table-stories");

        for(var i=0; i<this.arrStories.length; i++)
        {
            (function(i) {
            makeRequest(
                function(mxResponse)
                {
                    self.arrStoriesStats[i] = mxResponse;
                    console.log(mxResponse);
                    var elTrStory = self.generateStoryRow(i);
                    elTableStories.appendChild(elTrStory);
                },
                "StoryStatsService.readById",
                "POST",
                {
                    "story_stats_id": self.arrStories[i]["story_stats_id"]
                }
            )
            })(i);
        }

        elDivTableWrapper.appendChild(elTableStories);
        this.elDivContainer.appendChild(elDivTableWrapper);
    },


    generateStoryRow: function(nStoryIndex)
    {
        var self = this;

        var elTr = document.createElement("tr");
        var elTd = document.createElement("td");

        var elDivContent = document.createElement("div");

        var elSpanTitle = document.createElement("span");
        elSpanTitle.innerHTML = this.arrStories[nStoryIndex]["title"];
        elDivContent.appendChild(elSpanTitle);

        var elSpanPointsLabel = document.createElement("span");
        elSpanPointsLabel.innerHTML = "Points:";
        elDivContent.appendChild(elSpanPointsLabel);

        var elSpanPointsValue = document.createElement("span");
        elSpanPointsValue.innerHTML = this.arrStoriesStats[nStoryIndex]["total_points"];
        elDivContent.appendChild(elSpanPointsValue);

        var elSpanDificultyLabel = document.createElement("span");
        elSpanDificultyLabel.innerHTML = "Dificulty:";
        elDivContent.appendChild(elSpanDificultyLabel);

        var elSpanDificultyValue = document.createElement("span");
        elSpanDificultyValue.innerHTML = this.arrStoriesStats[nStoryIndex]["difficulty"];
        elDivContent.appendChild(elSpanDificultyValue);

        var elSelectVisibility = document.createElement("select");
        var elOptionPublic = document.createElement("option");
        elOptionPublic.text = "Public";
        elSelectVisibility.add(elOptionPublic);
        var elOptionPrivate = document.createElement("option");
        elOptionPrivate.text = "Private";
        elSelectVisibility.add(elOptionPrivate);
        elDivContent.appendChild(elSelectVisibility);

        var elButtonEditStory = document.createElement("button");
        elButtonEditStory.innerHTML = "Write this story."

        elButtonEditStory.addEventListener(
            "click",
            function()
            {
                var nIndx = window.location.href.indexOf("dashboard");
                window.location.href = window.location.href.substring(0,nIndx) + "story.html?id=" + self.arrStories[nStoryIndex]["story_id"];
            }
        );
        elDivContent.appendChild(elButtonEditStory);

        elTd.appendChild(elDivContent);
        elTr.appendChild(elTd);
        return elTr;
    },
};

function Toolbar()
{
    // Aici e constructorul
    this.elDivContainer = document.createElement("div");
}

Toolbar.prototype = {
    // Aici ai variabile
    elDivContainer: null,


    // Aici pui functii
    container: function()
    {
        return this.elDivContainer;
    }
}

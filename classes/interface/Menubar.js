function Menubar()
{
    // Aici e constructorul
    this.elDivContainer = document.createElement("div");
}

Menubar.prototype = {
    // Aici ai variabile
    elDivContainer: null,


    // Aici pui functii
    container: function()
    {
        return this.elDivContainer;
    }
}

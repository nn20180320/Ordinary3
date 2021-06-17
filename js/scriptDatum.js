$(document).ready(function ()
{
    var datum = new Date();
    $("#datum").html("Datum: " + datum.getDate() + ". " + (datum.getMonth()+1) + ". " + datum.getFullYear() + ".");
    
});

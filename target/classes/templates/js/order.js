$(document).ready(function() {
    var recipeName = localStorage.getItem("recipe");
    if (recipeName)
    {
        $("#dish").val(recipeName);
    }
    else
    {
        window.location.href = "/";
    }
});
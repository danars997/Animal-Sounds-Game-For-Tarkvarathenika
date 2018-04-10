$(document).ready(function() {
    var recipeName = localStorage.getItem("recipe");
    if (recipeName)
    {
        localStorage.removeItem("recipe");
    }
    else
    {
        window.location.href = "/";
    }
});
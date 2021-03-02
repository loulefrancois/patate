$("#header").load("header.html");

$(document).ready(function () {
    if ($(window).width() >= 1090) {

        var gridDeuxHeight = $("#premierContainer #FR").outerHeight(true) + "px";
        $("#secondContainer").css("margin-top", gridDeuxHeight);

    }
});

$(document).ready(function () {
    if ($(window).width() <= 1089) {
        
        var descriptionProjetMarginTop = $("#premierContainer .grid_8").outerHeight(true) + 80 ;
        
        $("#description_projet").css("margin-top", descriptionProjetMarginTop);
        
        
        var secondContainerMarginTop = $("#description_projet").outerHeight(true) + $("#premierContainer .grid_8").outerHeight(true) + "px";
        $("#secondContainer").css("margin-top", secondContainerMarginTop);
        
    }
});

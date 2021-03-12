$("#header").load("../header.html");



$(document).ready(function () {
    if ($(window).width() >= 1090) {

        // Marges page projet 2nd container

        $(document).ready(marginTopSecondContainer);
        $(window).on('resize', marginTopSecondContainer);

        function marginTopSecondContainer() {
            var gridDeuxHeight = $("#premierContainer #FR").outerHeight(true) + "px";
            $("#secondContainer").css("margin-top", gridDeuxHeight);
        }

        // Image index
        $("h1").mouseover(function () {
            $(this).parent().find("img").css({
                "opacity": "1",
                "transition": "opacity 0.2s ease-in-out"
            });
            $("img").not($(this).parent().find("img")).css({
                "opacity": "0"
            });
        });

        $("h1").mouseout(function () {
            $(this).parent().find("img").css({
                "opacity": "0"
            });

        });

        $(document).mousemove(function (e) {

            var imagePositionX = e.pageX + 15;
            var imagePositionY = e.pageY + 15;

            $("img").css({
                "left": imagePositionX,
                "top": imagePositionY
            });
        });

    };

});


$(document).ready(function () {
    if ($(window).width() <= 1089) {

        var descriptionProjetMarginTop = $("#premierContainer .grid_8").outerHeight(true) + 120;

        $("#description_projet").css("margin-top", descriptionProjetMarginTop);
        $("#premierContainer .grid_8").outerHeight(true) + 80 + "px";
        $("#secondContainer").css("margin-top", secondContainerMarginTop);


    }
});


// À Propos

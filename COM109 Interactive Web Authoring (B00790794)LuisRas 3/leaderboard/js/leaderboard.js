$(document).ready(function () {

    //Hide error message only make it appear if the user enters invalid data
    $(".error").hide();
    //Hide racer information only appear when the 'Add New Racer' button is clicked
    $("#racer_information").hide();
    //This will animate the lists of data 
    //This will be used to make the leaderboard dynamic for the new added list of information
    //inputted by the user in the 'form'
    var current_leaderboard = 1;
    var current_motion = 40;
    //When the .container is clicked 
    //This will get the #racer_id_'s and will display them on the web page one by one per click
    //The animation is used to slide the #racer_id_'s from the left to the right
    $(".container").on("click", function(){
        $("#racer_id_" + current_leaderboard).animate({ 
            left: current_motion + '%'
        });

        current_leaderboard += 1;
        current_motion -= 4;
    });
    //In the racer form when the submit button is clicked
    //if error = false then hide the error

    $('#racer_form').on("submit", function (evt) {
        evt.preventDefault();

        error = false;
        $(".error").hide();

        var points = $("#points_racer").val(); //create variable for points
        var name = $("#name_racer").val(); //create variable for name of the racers

        //This error will display only if the length of the name inputted is less than 4
        if (name.length < 4) {
            $("#error_racer").show();
            error = true;
        }
        //This error will display only if points entered is not between 1 and 45
        if (points < 0 || points > 45) {
            $("#error_points").show();
            error = true;
        }
        //This error will show first to notify if the user that they entered and invalid input
        if (error)
            alert("Invalid Input!, Please enter valid data to each textbox in order data to be saved");
        //If no error has been detected then 
        //This will get the current .racer length and +1 and +item everytime new data is entered
        //This will basically add new data to the already existing row of data 
        //with the same css style and animation
        else {
            console.log("Both inputs are valid to be submitted:" + points);
            item = $('.racer').length + 1;
            console.log("DIV length:" + item);
            $(".leaderboard_menu").append('<div class="racer p-3 mb-2 bg-dark text-white"  id="racer_id_' + item + '"> <img src="images/flag_icon.png" alt="flag"> ' + name + '<p>' + points + ' points</p></div>');
        }

    });

    //This will slide/open the footer add new racer data input menu 
    //The animation is a slideToggle that will allow the menu to either slide up or down per mouse click
    //and the slide animation is set to slow to make the animation smooth
    $("#add_info").click(function () {
        event.stopImmediatePropagation();
        $("#racer_information").slideToggle("slow");
    })
});

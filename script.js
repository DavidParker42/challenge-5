// look at stating the text areas when save button is clicked, local storage
// look at what hour it is, apply styling of past present or future
// getting items out of local storage

$(document).ready(function(){
//    save button click
    $(".saveBtn").on("click", function(){
        // looks at parent element and its attribute- ID
        var time = $(this).parent().attr("id");
        var value = $(this).siblings(".description").val();
        // puts items into storage
        localStorage.setItem(time, value);
    })
    // manipulating classes based on what time it is
    function timeCheck(){
        var currentHour = moment().hours();
        // gets time from id within this class
        $(".time-block").each(function(){
            var blockHour = parseInt ($(this).attr("id"));
            // if block hours is less than current hour it is given class= past
            if (blockHour < currentHour){
                $(this).addClass("past")
            }else if (blockHour === currentHour){
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    timeCheck();
    // interval that runs the timecheck function
    var interval = setInterval(timeCheck, 60000);
    // dispay current date into hour heading
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // get data out of local storage when the page is loaded
    // duplicate line 41 for all timeblock hours
    $("#6 .description").val(localStorage.getItem("6"));
    $("#7 .description").val(localStorage.getItem("7"));
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
}) 

// timecheck funcition is not changing color, not picking up the classes.
// text areas need to be smaller
//  save icons are gone at certian screen widths
// local storage save
// time is not showing up
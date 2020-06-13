$(document).ready(function () {

    var curDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
    $("#currentDay").html(curDate);

    for (var hour = 9; hour < 18; hour++) {
        timeSlot(hour);
    }
});

function timeSlot(p) {


    var present = parseInt(moment().hour())


    var inputClassname = ''
    if (p > present) {
        inputClassname = 'future';
       
    }
    else if (p == present) {
        inputClassname = 'present';
        
    }
    else {
        inputClassname = 'past';
    }



    if (p > 12) {
        var formattedHour = p - 12;
        p = (formattedHour + 'pm');
    }
    else {
        p = (p + 'am');
    }



    var row = $('<div>').attr('hour', p);
    row.addClass("row").addClass('time-block');
    $('.container').append(row);

    var timeColumn = $('<div>');
    timeColumn.addClass("col-md-2 hour");
    timeColumn.text(p);

    row.append(timeColumn);

    var inputColumn = $('<input>')
    inputColumn.attr('id', p);
    inputColumn.addClass("col-md-8 description " + inputClassname);
    inputColumn.val(getDescriptionForTimeSlot("", p));
    row.append(inputColumn);


    var saveColumn = $('<button>').attr('id', 'icon');
    saveColumn.attr('hour', p);
    saveColumn.addClass("col-md-2 far fa-save fa-2x saveBtn");
    row.append(saveColumn);


}

function getDescriptionForTimeSlot(day, hour) {
    var storage = localStorage.getItem('get');
    console.log("getter", storage);
    if (storage == undefined){
        return '';
    }
    storage = JSON.parse(storage);
    var slotDescription = storage[hour];

    if (hour == undefined) {
        return "";
    }
    return slotDescription;
}

$(document).on('click', '.saveBtn', function (event) {

    event.preventDefault();
    event.stopPropagation();
    hourClicked = $(this).attr('hour');
    userInput = $('#' + hourClicked).val();


    localStorage.setItem("get", JSON.stringify(userInput));

});

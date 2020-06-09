


$(document).ready(function () {

    var curDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
    $("#currentDay").html(curDate);



    for (var hour = 9; hour < 18; hour++) {

        if(hour > 12){
            var formattedHour = hour - 12;
            timeSlot(formattedHour + 'pm' );
        }
        else {
            timeSlot(hour + 'am');
        }
        

       

    }


});

function timeSlot(p) {

    var present = moment().hour()
    console.log('this is present! hour!', present)
    console.log('this is the hpur of row we r building!!', p)
    var inputClassname = ''
    if(p > present){
        inputClassname = 'future';
        //console.log(p,"future");
    }
    else if(p == present){
        inputClassname = 'present';
       // console.log(p,"past")
    }
    else{
        inputClassname = 'past';
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
    row.append(inputColumn);

    
    var saveColumn = $('<button>').attr('id', 'icon');
    saveColumn.attr('hour', p);
    saveColumn.addClass("col-md-2 far fa-save fa-2x saveBtn");
    row.append(saveColumn);


}

$(document).on('click', '.saveBtn', function(){
    
    var get = localStorage.getItem('get');

    

     hourClicked = $(this).attr('hour');
     userInput = $('#' + hourClicked).val()
     userInput.textContent = get;
    
    localStorage.setItem("get", JSON.stringify(userInput));

    console.log(localStorage.setItem("get", JSON.stringify(userInput)));

    console.log(userInput);
    
    console.log(localStorage.getItem("get"));
    
    console.log('this is the horu we clicked!', $(this).attr('hour'))
    
    console.log('this is what htey typed for tha thour!!', $('#' + hourClicked).val())
});







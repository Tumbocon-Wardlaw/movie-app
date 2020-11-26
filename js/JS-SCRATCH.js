function addNewMovie (){
    var formData = {
        'title'              : $('input[name=title]').val(),
        'rating'             : $('input[name=rating]').val(),
        // 'superheroAlias'    : $('input[name=superheroAlias]').val()
    };

    // process the form
    $.ajax({
        type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url         : apiURL, // the url where we want to POST
        data        : formData, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode          : true
    })
        // using the done promise callback
        .done(function(data) {

            // log data to the console so we can see
            console.log(data);

            // here we will handle errors and validation messages
        });

    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
}
// $("form").on("submit", function(event){
//     event.preventDefault();
//
//     var formValues= $(this).serialize();
//
//     $.post("process_form.php", formValues, function(data){
//         // Display the returned data in browser
//         $("#result").html(data);
//     });
// });
$('#movie-form').on("submit", function(event) {
    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)
    event.preventDefault();
    var formData = {
        'title'              : $('input[name=title]').value(),
        'rating'             : $('input[name=rating]').value(),
        // 'superheroAlias'    : $('input[name=superheroAlias]').val()
    };

    // process the form
    $.ajax({
        type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url         : apiURL, // the url where we want to POST
        data        : formData, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode          : true
    })
        // using the done promise callback
        .done(function(data) {

            // log data to the console so we can see
            console.log(data);

            // here we will handle errors and validation messages
        });

    // stop the form from submitting the normal way and refreshing the page
    return false;
});

// });

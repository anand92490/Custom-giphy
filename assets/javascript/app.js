

var topics = ["basketball", "football", "soccer", "baseball", "cricket", "ice hockey", "volleyball", "gymnastics", "snow boarding", "rock climbing"];


for (var i = 0; i < topics.length; i ++){

    var button = $("<button>").text(topics[i]);
    button.attr("data-sports", topics[i]);
    button.addClass("sports-button");
    $("#all-button").append(button);

}

$("#addGifButton").on("click", function (event){
    event.preventDefault();

    var gifInput = $("#newGifInput").val().trim();
    topics.push(gifInput);

    var createdButton = $("<button>").text(gifInput);
    createdButton.attr("data-sports", gifInput);
    createdButton.addClass("sports-button");
    $("#all-button").append(createdButton);
    $("#addGifButton").val('');


});


$(document).on("click", ".sports-button", function(){

    var sports = $(this).attr("data-sports");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
    sports + "&api_key=9VWlgUKAcI4cFF4RvU5XEr0z0BgEUd2Q&limit=10";

    $.ajax({ url: queryURL, method:"GET"})
    .then(function(response){
        // console.log(queryURL);
        // console.log(response);

        var results = response.data;
        // console.log(results);
        var resultDiv = $("<div class='displayResult'>");

        for (var j = 0; j < results.length; j++){

            var innerDiv = $("<div class='displayResult'>")

            var rating = results[j].rating;

            var p = $("<p>").text("Rating: " + rating);
            
            var sportsImage = $("<img class = 'result'>");
            sportsImage.attr("src", results[j].images.fixed_height.url);
            sportsImage.attr("data-state", "still");
            sportsImage.attr("data-still", results[j].images.fixed_height_still.url);
            sportsImage.attr("data-animate", results[j].images.fixed_height.url);

            innerDiv.prepend(sportsImage);
            innerDiv.prepend(p);
            resultDiv.prepend(innerDiv);
        
        }

        $("#all-button").prepend(resultDiv);


    });
});

$(document).on("click", ".result", function(){
    var state = $(this).attr("data-state");
    // console.log(state);

    if (state === "still"){
        $(this).attr("src", $(this).attr("data-animate")); 
        $(this).attr("data-state", "animate");  

      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }

});


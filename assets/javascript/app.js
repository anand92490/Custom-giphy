

var topics = ["basketball", "football", "soccer", "baseball", "cricket", "ice hockey", "volleyball", "gymnastics", "snow boarding", "swimming"];


for (var i = 0; i < topics.length; i ++){

    var button = $("<button>").text(topics[i]);
    button.attr("data-sports", topics[i]);
    button.addClass("sports-button");
    $("#all-button").append(button);

}


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

            innerDiv.prepend(p);
            innerDiv.prepend(sportsImage);
            resultDiv.prepend(innerDiv);
        
        }

    })
});

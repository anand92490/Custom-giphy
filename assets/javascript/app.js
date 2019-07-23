

var topics = ["basketball", "football", "soccer", "baseball", "cricket", "ice hockey", "volleyball", "gymnastics", "snow boarding", "swimming"];


for (var i = 0; i < topics.length; i ++){

    var button = $("<button>").text(topics[i]);
    button.attr("data-sports", topics[i]);
    button.addClass("sports-button");
    $("#all-button").append(button);

}

$("#addGifButton").on("click", function(event){
    event.preventDefault();

    var sports = $(this).attr("data-sports");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
    sports + "&api_key=9VWlgUKAcI4cFF4RvU5XEr0z0BgEUd2Q&limit=10";

    $.ajax({ url: queryURL, method:"GET"})
    .then(function(response){
        // console.log(queryURL);
        // console.log(response);

        var result = response.data;

        for (var j = 0; j < result.length; j++){

            var sportsDiv = $("<div>");

            var p = $("p").text("Rating: " + result[i].rating);
            
            var sportsImage = $("<img>");
            sportsImage.attr("src", result[i].images.fixed_height.url);

            sportsDiv.append(p);
            sportsDiv.append(sportsImage);

            $("#SportsGroup").prepend(sportsDiv);
        
        }


    })
});

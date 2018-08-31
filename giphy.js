$(document).ready(function() {
    var topics = ["instruments", "cars", "cartoons","tools", "michael jackson", "penguins", "weight lifting", "running", "cats", "the fox and the hound", "fresh prince", "dogs", "goofy", "mickey mouse", "lion king"];
    // console.log(topics);


$("button").on("click", function() {
    
    var topics = $(this).attr("data-topics");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=VAIhhrnQIW6OlsWo19MciPoUOaeX94Es&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
        
    })
    .then(function(response) {
        // console.log(queryURL);
         // console.log(response);
         var results = response.data;

         for (var i = 0; i < results.length; i++) {

            var topics = $("<div>");
           

            var p = $("<p>").text("Rating: " + results[i].rating);

            var topicImage = $("<img>");

            topicImage.attr("src", results[i].images.fixed_height.url);
            
            topicImage.attr("data-animate", results[i].images.fixed_height.url);
            topicImage.attr("data-state", results[i].images.fixed_height.url);
            topicImage.attr("data-state", "still");


                //$(document).on("click", function () {
                    // var state = $(this).attr("data-state");  (found this online but didn't work for me)
            // if (state === "still"){
            //     $(this).attr("src", $(this).attr("data-animate"));
            //     $(this).attr("data-state", "animate");

            // } else {
            //     $(this).attr("src", $(this).attr("data-still"));
            //     $(this).attr("data-state", "still");
            // }
            topics.append(p);
            topics.append(topicImage);

            $("#gifs-appear-here").prepend(topics);
         }
    
    });
    
});
})
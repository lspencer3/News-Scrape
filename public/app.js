$(document).ready(function() {
$.ajax({
    method: "GET",
    url: "/articles"
  })
.done(function(data) {
      console.log(data)
      for (var i = 0; i < data.length; i++){
        var newATag = $("<a>")
        var titleP = $("<p>")
        var titlePtxt = data[i].title
        var link = data[i].link

        titleP.html(titlePtxt)
        newATag.attr("href",link)

        newATag.append(titleP)
        $("#articles").prepend(newATag)
      }
    });

  // Whenever someone clicks scrape button
$(document).on("click", "#scrape", function() {
  // Empty the notes from the note section
 //$("#notes").empty();
    // With that done, add the article information to the page
  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/scrape"
  })
    // With that done, add the article information to the page
    .done(function(data) {
      console.log(data)
      for (var i = 0; i < data.length; i++){
        var newATag = $("<a>")
        var titleP = $("<p>")
        var titlePtxt = data[i].title
        var link = data[i].link

        titleP.html(titlePtxt)
        newATag.attr("href",link)

        newATag.append(titleP)
        $("#articles").prepend(newATag)
      }
    });
});
})

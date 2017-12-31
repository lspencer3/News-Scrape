

// Whenever someone clicks a p tag
$(document).on("click", "#scrape", function() {
  // Empty the notes from the note section
  $("#notes").empty();

  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/scrape"
  })
    // With that done, add the note information to the page
    .done(function(data) {
      console.log(data)
    });
});



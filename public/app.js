$(document).ready(function() {

$.ajax({
    method: "GET",
    url: "/articles"
  })
.done(function(data) {
      console.log(data)
      for (var i = 0; i < data.length; i++){
        var newDiv = $("<div>")
        var newATag = $("<a>")
        var titleP = $("<p>")
        var title = data[i].title
        var link = data[i].link

        var notesBut = $("<button>")
        notesBut.html("Add Notes")
        notesBut.attr("class","notes")
        notesBut.attr("id",i)

        var saveBut = $("<button>")
        saveBut.html("Save Article")
        saveBut.attr("id","save")

        titleP.html(title)
        newATag.attr("href",link)

        newATag.append(titleP)
        newDiv.append(newATag)
        newDiv.append(saveBut)
        newDiv.append(notesBut)
        $("#articles").prepend(newDiv)
      }
    });

$(document).on("click", ".notes", function() {
    var modal = document.getElementById("myModal")
    modal.style.display = "block"

    var span = document.getElementById("close")
    span.onclick = function() {
    modal.style.display = "none";

  }

})

var submit = document.getElementById("submit")
    submit.onclick = function(){
      console.log("hello")
    }

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

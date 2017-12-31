
var mongoose = require("mongoose");


var axios = require("axios");
var cheerio = require("cheerio");

var db = require("../models/article");

var array = [];

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/scraped_articles", {
  useMongoClient: true
});

// Routes
module.exports = function (app){
// A GET route for scraping the abcnews website
  app.get("/articles", function(req,res){
     console.log("route working")
    db.article
            .find({})
            .then(function(dbArticle) {
              res.json(dbArticle)
      })
  })

	app.get("/scrape", function(req, res) {
  		// First, we grab the body of the html with request
  		axios.get("http://abcnews.go.com/").then(function(response) {
    		// Then, we load that into cheerio and save it to $ for a shorthand selector
    		var $ = cheerio.load(response.data);

    		$("li.headlines-li").each(function(i, element) {
    
      			// Save an empty result object
      			var result = {};

      			var text = $(element).find("a").text();

      			var link = $(element).find("a").attr("href");

      			result.title = text
      			result.link = link

      			//console.log(text)
     			 db.article
    			.find({ title: text })
    			.then(function(dbArticle) {
	    			if(dbArticle.length > 0){
		    			console.log("already in database!")
              console.log(i,text, link)
		    			res.send("already in database!");
	   				}
	    			else {
              console.log("this code is running to add a new article to mongo")
              console.log(i,text, link)
				    	/*array.push(result)
				    	db.article
				    	.create(result)
				    	.then(function(dbArticle){
				    		res.send(dbArticle)
				    	})*/
   					}
    			})
    		});
  		});
	});
}

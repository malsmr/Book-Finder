var express 		= require('express');
 		app 				= express();
 		bodyParser 	= require('body-parser');
 		mongoose 		= require('mongoose');
    booksSearch = require('google-books-search');
    Book        = require('./models/book');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

// Connect to Mongoose
mongoose.set('debug', true);
mongoose.connect('mongodb://mongo/bookstore');
var db = mongoose.connection;

//Search for Books in Google API
app.get('/api/books/search/:_title', (req, res) => {
  var title = req.params._title;
  var books = [];
    console.log("Searching for Book in Google API for " + title);

    booksSearch.search( title , function(error, results) {
      if ( ! error ) {
          if( results !== "undefined" && results.length > 0){
            for( var i = 0; i < results.length ; i++){
              var newBook = new Book();
              newBook.title = results[i].title;
              newBook.genre = results[i].categories;
              newBook.description = results[i].description;
              newBook.author = results[i].authors;
              newBook.publisher = results[i].publisher;
              newBook.image_url  = results[i].thumbnail;
              newBook.publish_date = results[i].publishedDate;
              books.push(newBook);
              newBook.save(function(err , Book) {
                if(err){
                  throw err;
                } else {
                  console.log("Book added!");
                }
              });
            }
          }
      } else {
          throw error;
      }
      console.log(results);
      res.json(books);
    });
  });

// Search for Books by Author or Publisher
app.post('/api/books/lookup/', (req, res) => {
  var lookup = req.body;
  console.log(lookup);
  Book.find( lookup , (err, Book) => {
      if (err) {
            console.error(err);
            res.json(null);
      } else {
          res.json(Book);
      }
    });
});

app.listen(3000);
console.log('Running on port 3000... Access the application on: http://localhost:3000');

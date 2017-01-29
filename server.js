// Standard stuff
var express = require( 'express' );
var mongoose = require( 'mongoose' );
var path = require( 'path' );
var User = require( './models/user' );
var Author = require( './models/author' );
var logger = require( 'morgan' );
var bodyParser = require( 'body-parser' );
var app = express();

app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

// Mongoose stuffß

mongoose.connect( 'mongodb://localhost/embedded-docs' );


// new author
var ASmith = new Author({
  name: "Andy Smith",
  age: "50",
  books: [
          {
            title: "As the Stomach Turns",
            Date: new Date()
          }
        ]
});

ASmith.save();

ASmith.books.push({
  title: 'As the Stomach Turns',
  year: new Date()
})

// Update
Author.findOneAndUpdate(
  { name: 'Andy Smith'},
  { name: 'ASmith'},
  function(err, author) {
    if (err) {
      console.log(err)
    } else {
      console.log(Author.name + ' Did anything update?')
    }
  });


//update
Author.update(
{_id: '"588e6761eff677bf6dded155"'},
  {books:[{
    title: 'Life is not so bad, YES it is!',
    Date: new Date()
  }]},
  function(err) {
    console.log(err)
  })



//new user
// var joe = new User({
//   name: "Joe Bookreader",
//   addresses: [
//               {
//                 street: "123 Fake Street",
//                 city: "Faketon",
//                 state: "MA",
//                 zip: "12345"
//               },
//               {
//                 street: "1 Some Other Street",
//                 city: "Boston",
//                 state: "MA",
//                 zip: "12345"
//               }
//              ]
// });

// joe.addresses.push({
//     street: '100 Main St',
//     city: 'Los Angeles',
//     state: 'CA',
//     zip: 90007
// });

// joe.save();






"use strict";

var db = require('./../../config/db');

var mongoose = require('mongoose');

var Article = db.Articles;

var faker = require('faker');

var article = [new Article({
  title: "Variables and Mutability in Rust",
  user_id: '1212121212',
  body: faker.lorem.paragraphs(),
  category: faker.lorem.word(),
  tag: faker.lorem.word(),
  publications: faker.lorem.word(),
  comments: [{
    text: faker.lorem.words(),
    user_id: '23222e2e23e2',
    votes: '2323'
  }],
  status: 'new'
})];
var done = 10;

for (var i = 0; i < article.length; i++) {
  article[i].save(function (err, result) {
    console.log(result);
    console.log(err);
    done++;

    if (done === article.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
const db = require('./../../config/db');
const mongoose = require('mongoose');
const Article = db.Articles;
var faker = require('faker');
var article = [
    new Article(
        {
            title: faker.lorem.words(),
            user_id : '1212121212',
            body : faker.lorem.paragraphs(),
            category: faker.lorem.word(),
            tag: faker.lorem.word(),
            publications: faker.lorem.word(),
            comments : [
              { 
                  text : faker.lorem.words(),
                  user_id :'23222e2e23e2', 
                  votes : '2323' 
                },
            ],
            status: 'new'
        }
    )
];

var done = 10;

for (let i = 0; i < article.length; i++) {
    article[i].save((err, result) => {
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
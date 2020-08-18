const mongoose = require('mongoose');

const Schema = new mongoose().Schema;


const Article = new Schema({
    title: {
        type: String,
        required:[true, 'please provide a title'],
        trim: true,
        maxlength: [150, 'title must be less 150 chars']
    },
    user_id : {type: String, required: true},
    body : {type: String},
    category: {type: String, maxlength:[40, 'category name must less than 40 characters']},
    tag: {type: String, maxlength: [30,'tag name can not be greater than 30 characters']},
    comments : [
      { 
          text : {type: String},
          user_id :{type: String}, 
          votes : {type:String} 
        },
    ]
});

module.exports = mongoose.model('Article',Article);
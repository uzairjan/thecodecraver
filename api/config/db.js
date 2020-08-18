const mongoose = require("mongoose");

 mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

module.exports = {
  Articles: require("../model/schema/Article"),
};

const      fs = require("fs"),
         path = require("path"),
  models_path = path.join(__dirname, '../models'),
    my_models = fs.readdirSync(models_path),
     mongoose = require("mongoose");

module.exports = function(db_name){
  console.log("db_name is", db_name);
  mongoose.connect(`mongodb://localhost/${db_name}`);
}

for(let file of my_models){
  if(file.endsWith(".js")){
    require(path.join(models_path, file));
  }
}
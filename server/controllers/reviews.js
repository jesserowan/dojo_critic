const mongoose = require('mongoose'),
     Videogame = mongoose.model("Videogame"),
        Review = mongoose.model('Review');

class Reviews {
  create(req, res){
    let r = new Review(req.body);
    r.save(err => {
      if(err){
        res.json({"status": "not ok", "errors": err});
      } else {
        Videogame.findOneAndUpdate({_id: req.params._id}, {$push: {reviews: r}}, err => {
          if(err){
            res.json({"status": "not ok", "errors": err});
          } else {
            res.json({"status": "ok"});
          }
        })
      }
    })
  }
}

module.exports = new Reviews();
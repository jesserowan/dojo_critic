const mongoose = require('mongoose'),
     Videogame = mongoose.model("Videogame");

class Videogames {
  getAll(req, res){
    Videogame.find({}, (err, games) => {
      if(err){
        res.json({status: "not ok", errors: err});
      }else{
        res.json({status: "ok", games: games});
      }
    });
  }
  create(req, res){
    let game = new Videogame(req.body);
    game.save( err => {
      if(err){
        res.json({status: "not ok", errors: err});
      }else{
        res.json({status: "ok"});
      }
    });
  }
  getOne(req, res){
    Videogame.findOne({_id: req.params._id}, (err, game) => {
      if(err){
        res.json({status: "not ok", errors: err});
      }else{
        res.json({status: "ok", game: game});
      }
    });
  }
  delete(req, res){
    Videogame.findOneAndRemove({_id: req.params._id}, err => {
      if(err){
        res.json({status: "not ok", errors: err});
      }else{
        res.json({status: "ok"});
      }
    });
  }
  update(req, res){
    Videogame.findOneAndUpdate({_id: req.params._id}, req.body, { runValidators: true }, err => {
      if(err){
        res.json({status: "not ok", errors: err});
      }else{
        res.json({status: "ok"});
      }
    });
  }
}

module.exports = new Videogames();
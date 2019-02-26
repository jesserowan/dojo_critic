const Videogames = require("../controllers/videogames"),
         Reviews = require("../controllers/reviews");

module.exports = function(app){
  // videogames routes
  app.get('/videogames', Videogames.getAll);
  app.post('/videogames', Videogames.create);
  app.get('/videogames/:_id', Videogames.getOne);
  app.put('/videogames/:_id', Videogames.update);
  app.delete('/videogames/:_id', Videogames.delete);
  // TODO reviews routes
  app.post('/review/:_id', Reviews.create);
};
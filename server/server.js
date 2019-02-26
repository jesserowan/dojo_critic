const express = require("express"),
         port = 8000,
         path = require("path"),
           bp = require('body-parser'),
          app = express(),
         cors = require('cors');

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(bp.json());

app.use(cors());

require("./utils/mongoose")("videogames");
require("./utils/routes")(app);

app.all('*', (req, res, next) => {
  res.sendFile(path.resolve('./client/build/index.html'));
});

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
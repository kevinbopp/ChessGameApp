const { app } = require("./server.js");
const mongodb = require("mongodb");

const port = process.env.PORT || 8000

const mongoose = require("mongoose");
const { User, Friend, Game } = require("./chessSchema.js");

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async client => {
    console.log('Connected to MongoDB')
    // Start your application or perform database operations here
    app.listen(port, () => {
      console.log(`listening on ports ${port}`)
    })
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error)
  })

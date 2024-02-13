const mongoose = require('mongoose');
const { User, Friend, Game } = require('./chessSchema');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Sample Users
const users = [
  new User({
    userID: 0,
    email: 'test0@example.com',
    username: 'TestUser0',
    password: 'password',  // replace this with a hash in production
    rating: 1200,
  }),
  // room for more users
];

// Sample Friends
const friends = [
  new Friend({
    userID: 0,
    friendID: 1,
    username: 'TestFriend1',
    email: 'test1@example.com',
    rating: 1300,
  }),
  // room for friends
];

// Sample Games
const games = [
  new Game({
    gameID: 0,
    game: ['e4', 'e5', 'Nf3'],
    players: ['TestUser0', 'TestFriend1'],
    color: 'White',
    winner: null,
    whiteTime: 300,
    blackTime: 300,
  }),
  // room for more games
];

// Save the sample data to the database
let done = 0;
for (let i = 0; i < users.length; i++) {
  users[i].save(function(err, result) {
    done++;
    if (done === users.length) {
      exit();
    }
  });
}

for (let i = 0; i < friends.length; i++) {
  friends[i].save(function(err, result) {
    done++;
    if (done === friends.length) {
      exit();
    }
  });
}

for (let i = 0; i < games.length; i++) {
  games[i].save(function(err, result) {
    done++;
    if (done === games.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}

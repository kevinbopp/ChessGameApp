const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  userID: Number,
  email: String,
  username: String,
  password: String,  // ensure this is hashed in the actual code
  rating: Number
}, { autoIndex: true });

// Friend Schema Old
/*
const friendSchema = new mongoose.Schema({
  userID: Number,
  friendID: Number,
  username: String,
  email: String,
  rating: Number
}, { autoIndex: true });
*/

// New Friend Schema
const friendSchema = new mongoose.Schema({
  userA: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userB: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  establishedAt: { type: Date, default: Date.now },
});

// Index to ensure alphabetical order by username
friendSchema.index({ username: 1 });

// Game Schema
const gameSchema = new mongoose.Schema({
  gameID: Number,
  game: [String],
  players: [String],
  color: String,  // true represents White, false represents Black
  winner: String,  // can be "White", "Black", "Draw", or null for in-progress games
  whiteTime: Number,
  blackTime: Number
}, { autoIndex: true, timestamps: true });

// Define models
const User = mongoose.model('User', userSchema);
const Friend = mongoose.model('Friend', friendSchema);
const Game = mongoose.model('Game', gameSchema);

// Export models
module.exports = { User, Friend, Game };

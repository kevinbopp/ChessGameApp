const express = require("express");
const router = express.Router();
const { Game } = require("../chessSchema");

// POST /api/games/add
router.post("/add", async (req, res) => {
  try {
    // Extract game data from the request body
    const { gameID, game, players, color, winner, whiteTime, blackTime } = req.body;

    // Create a new game
    const newGame = new Game({
      gameID,
      game,
      players,
      color,
      winner,
      whiteTime,
      blackTime,
    });

    // Save the new game to the database
    await newGame.save();

    // Return a response indicating successful addition of game
    const responseMessage = {
      message: "Game added successfully",
      game: newGame,
    };
    res.status(200).json(responseMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add game" });
  }
});

// DELETE /api/games/:gameID
router.delete("/:gameID", async (req, res) => {
  try {
    const { gameID } = req.params;

    // Find and delete the game
    const deletedGame = await Game.findOneAndDelete({ gameID });

    if (!deletedGame) {
      return res.status(404).json({ error: "Game not found" });
    }

    // Return a response indicating successful deletion of game
    const responseMessage = {
      message: "Game deleted successfully",
      deletedGame,
    };
    res.status(200).json(responseMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete game" });
  }
});

// PUT /api/games/:gameID
router.put("/:gameID", async (req, res) => {
  try {
    const { gameID } = req.params;
    const { game, players, color, winner, whiteTime, blackTime } = req.body;

    // Find the game and update its details
    const updatedGame = await Game.findOneAndUpdate(
      { gameID },
      { game, players, color, winner, whiteTime, blackTime },
      { new: true }
    );

    if (!updatedGame) {
      return res.status(404).json({ error: "Game not found" });
    }

    // Return a response indicating successful update of game
    const responseMessage = {
      message: "Game updated successfully",
      game: updatedGame,
    };
    res.status(200).json(responseMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update game" });
  }
});

// GET /api/games/search
router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;

    // Find games that match the search query
    const games = await Game.find({ $text: { $search: query } });

    // Return the search results
    res.status(200).json({ games });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to search games" });
  }
});

// POST /api/games/:gameID/moves
router.post("/:gameID/moves", async (req, res) => {
    try {
      const { gameID } = req.params;
      const { moves } = req.body;
  
      // Find the game and update its moves
      const updatedGame = await Game.findOneAndUpdate(
        { gameID },
        { $push: { game: { $each: moves } } },
        { new: true }
      );
  
      if (!updatedGame) {
        return res.status(404).json({ error: "Game not found" });
      }
  
      // Return a response indicating successful update of moves
      const responseMessage = {
        message: "Moves added successfully",
        game: updatedGame,
      };
      res.status(200).json(responseMessage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to add moves" });
    }
  });
  
// GET /api/games/:gameID/moves
router.get("/:gameID/moves", async (req, res) => {
    try {
      const { gameID } = req.params;
  
      // Find the game and retrieve its moves
      const game = await Game.findOne({ gameID });
      if (!game) {
        return res.status(404).json({ error: "Game not found" });
      }
  
      const moves = game.game;
  
      // Return the moves
      res.status(200).json({ moves });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to retrieve moves" });
    }
  });
  
// POST /api/games/:gameID/times
router.post("/:gameID/times", async (req, res) => {
    try {
      const { gameID } = req.params;
      const { whiteTime, blackTime } = req.body;
  
      // Find the game and update its times
      const updatedGame = await Game.findOneAndUpdate(
        { gameID },
        { whiteTime, blackTime },
        { new: true }
      );
  
      if (!updatedGame) {
        return res.status(404).json({ error: "Game not found" });
      }
  
      // Return a response indicating successful update of times
      const responseMessage = {
        message: "Times updated successfully",
        game: updatedGame,
      };
      res.status(200).json(responseMessage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update times" });
    }
  });
  
// GET /api/games/:gameID/times
router.get("/:gameID/times", async (req, res) => {
    try {
      const { gameID } = req.params;
  
      // Find the game and retrieve its times
      const game = await Game.findOne({ gameID });
      if (!game) {
        return res.status(404).json({ error: "Game not found" });
      }
  
      const { whiteTime, blackTime } = game;
  
      // Return the times
      res.status(200).json({ whiteTime, blackTime });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to retrieve times" });
    }
  });

module.exports = router;

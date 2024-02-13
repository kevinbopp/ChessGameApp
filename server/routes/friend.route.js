const express = require("express");
const router = express.Router();
const { User, Friend } = require("../chessSchema");

// POST /api/friends/add
router.post("/add", async (req, res) => {
  try {
    // Extract user ID and friend ID from the request body
    const { userID, friendID } = req.body;

    // Check if the user IDs are valid
    const user = await User.findById(userID);
    const friend = await User.findById(friendID);
    if (!user || !friend) {
      return res.status(404).json({ error: "User or friend not found" });
    }

    // Check if the friendship already exists
    const existingFriendship = await Friend.findOne({
      $or: [
        { userA: userID, userB: friendID },
        { userA: friendID, userB: userID },
      ],
    });
    if (existingFriendship) {
      return res.status(409).json({ error: "Friendship already exists" });
    }

    // Create a new friendship
    const newFriendship = new Friend({
      userA: userID,
      userB: friendID,
      establishedAt: Date.now(),
    });

    // Save the new friendship to the database
    await newFriendship.save();

    // Return a response indicating successful addition of friend
    const responseMessage = {
      message: "Friend added successfully",
      friendship: newFriendship,
    };
    res.status(200).json(responseMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add friend" });
  }
});

// DELETE /api/friends/delete
router.delete("/:id", async (req, res) => {
  try {
    const userID = req.params.id; // Extract the user ID from the request parameter

    // Check if the user ID is valid
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find and delete the friendships where the user is involved
    const deletedFriendships = await Friend.deleteMany({
      $or: [{ userA: userID }, { userB: userID }],
    });

    if (deletedFriendships.deletedCount === 0) {
      return res.status(404).json({ error: "No friendships found" });
    }

    // Return a response indicating successful deletion of friends
    const responseMessage = {
      message: "Friends deleted successfully",
      deletedCount: deletedFriendships.deletedCount,
    };
    res.status(200).json(responseMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete friends" });
  }
});

// PUT /api/friends/edit
router.put("/edit", async (req, res) => {
  try {
    const { friendshipID, updatedData } = req.body;

    // Check if the friendship ID is valid
    const existingFriendship = await Friend.findById(friendshipID);
    if (!existingFriendship) {
      return res.status(404).json({ error: "Friendship not found" });
    }

    // Update the friendship with the new data
    Object.assign(existingFriendship, updatedData);

    // Save the updated friendship to the database
    const updatedFriendship = await existingFriendship.save();

    // Return a response indicating successful update of friend
    const responseMessage = {
      message: "Friend updated successfully",
      friendship: updatedFriendship,
    };
    res.status(200).json(responseMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update friend" });
  }
});

// GET /api/friends/search?query=John
router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;

    // Find friends that match the search query
    const friends = await Friend.find()
      .populate({
        path: "userA",
        match: { username: { $regex: new RegExp(query, "i") } },
        select: "-_id username" // Exclude the _id field and select only the username
      })
      .populate({
        path: "userB",
        match: { username: { $regex: new RegExp(query, "i") } },
        select: "-_id username" // Exclude the _id field and select only the username
      })
      .exec();

    // Return the search results
    res.status(200).json({ friends });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to search friends" });
  }
});


module.exports = router;

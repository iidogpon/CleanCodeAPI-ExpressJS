// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { readFriendsFromFile, writeFriendsToFile, findFriendIndex } = require('./friendService');

const app = express();
app.use(bodyParser.json());

// API Endpoints
app.get('/friends', async (req, res) => {
    const friends = await readFriendsFromFile();
    res.json(friends);
});

app.post('/friends', async (req, res) => {
    const friends = await readFriendsFromFile();
    const newFriend = { id: friends.length + 1, ...req.body };
    friends.push(newFriend);
    await writeFriendsToFile(friends);
    res.status(201).send(newFriend);
});

app.patch('/friends/:id', async (req, res) => {
    let friends = await readFriendsFromFile();
    const friendIndex = findFriendIndex(friends, req.params.id);

    if (friendIndex >= 0) {
        friends[friendIndex] = { ...friends[friendIndex], ...req.body };
        await writeFriendsToFile(friends);
        res.send(friends[friendIndex]);
    } else {
        res.status(404).send({ message: 'Friend not found' });
    }
});

app.delete('/friends/:id', async (req, res) => {
    let friends = await readFriendsFromFile();
    friends = friends.filter(friend => friend.id.toString() !== req.params.id);

    await writeFriendsToFile(friends);
    res.send({ message: `Friend with id ${req.params.id} is deleted` });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

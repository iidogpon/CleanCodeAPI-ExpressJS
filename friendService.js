// friendsData.js
const fs = require('fs-extra');

const FRIENDS_FILE = './friends.txt';

const readFriendsFromFile = async () => {
    try {
        const data = await fs.readFile(FRIENDS_FILE, 'utf8');
        return JSON.parse(data).friends;
    } catch (error) {
        console.error('Error reading the friends file:', error);
        return [];
    }
};

const writeFriendsToFile = async (friends) => {
    try {
        await fs.writeFile(FRIENDS_FILE, JSON.stringify({ friends }), 'utf8');
    } catch (error) {
        console.error('Error writing to the friends file:', error);
    }
};

const findFriendIndex = (friends, id) => friends.findIndex(friend => friend.id.toString() === id);

module.exports = {
    readFriendsFromFile,
    writeFriendsToFile,
    findFriendIndex,
};

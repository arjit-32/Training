const request = require('supertest');
const assert = require('assert');
const express = require('express');
const exp = require('constants');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second
app.use(express.json());

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000*60*60)

app.use((req, res, next) => {
    const userId = req.headers['user-id']; // get the user-id from the headers
    if (!userId) {
        res.status(404).json({ msg: 'user-id not found' });
        return;
    }
    if (!numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId] = 1;
    } else {
        numberOfRequestsForUser[userId]++; // increment the number of requests for the user
    }
    if (numberOfRequestsForUser[userId] > 5) {
        res.status(404).json({ msg: 'rate limit exceeded' });
        return;
    }
    next();
});


app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john', numberOfRequestsForUser: numberOfRequestsForUser});
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

// module.exports = app;

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
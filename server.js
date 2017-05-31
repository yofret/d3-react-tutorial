"use strict";

const express = require('express');
const _ = require('lodash');



var port = process.env.PORT || 3000;

/**
 * Express!
 */
const app = express();
const router = express.Router();


app.use(express.static('./public'));

app.listen(port, () => {
    console.log('Listening...');
});


module.exports = app;

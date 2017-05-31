"use strict";

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const compiler = webpack(config);
const _ = require('lodash');



var port = process.env.PORT || 3000;

/**
 * Express!
 */
const app = express();
const router = express.Router();


app.use(express.static('./public'));

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.public,
    stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));


app.listen(port, () => {
    console.log('Listening...');
});


module.exports = app;

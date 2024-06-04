'use strict';

const express = require('express');
const eventControll = require('../controllers/eventController');
const emailer= require("../controllers/emailer");
const { getGoogleReviews } = require('../controllers/googlereviews');
const router = express.Router();

router.get('/unsubscribe/:id/:status', eventControll.unsubscribe);
router.get('/enquiry/:firstname/:lastname/:email/:phone/:eventdate', eventControll.enquiry);
router.get('/getCamps', emailer.getcamps);
router.post('/email', emailer.sendmail);
router.get('/getreviews', emailer.getGoogleReviews);

module.exports = {
    routes: router
}
"use strict";

const mongoose = require('mongoose');

const kickstarterSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            trim: true,
        },
        ID: {
            type: Number,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        category: {
            type: String,
            trim: true,
        },
        main_category: {
            type: String,
            trim: true,
        },
        currency: {
            type: String,
            trim: true,
        },
        deadline: {
            type: String,
            trim: true,
        },
        goal: {
            type: Number,
            trim: true,
        },
        launched: {
            type: String,
            trim: true,
        },
        pledged: {
            type: Number,
            trim: true,
        },
        state: {
            type: String,
            trim: true,
        },
        backers: {
            type: Number,
            trim: true,
        },
        country: {
            type: String,
            trim: true,
        },
        "usd pledged": {
            type: Number,
            trim: true,
        },
        usd_pledged_real: {
            type: Number,
            trim: true,
        },
        usd_goal_real: {
            type: Number,
            trim: true,
        },
    },
    {
        collection: 'KickStarter'
    }
);

module.exports = mongoose.model('KickStarter', kickstarterSchema);
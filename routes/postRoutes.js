

const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.post("/", async (req, res) => {
    try {

        const post = await Post.create(req.body);

        res.status(201).json(post);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
});

router.get("/", async (req, res) => {
    try {

        const posts = await Post.find()
            .populate("user","-password");

        res.status(200).json(posts);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
});

module.exports = router;
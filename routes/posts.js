const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/', (req, res) => {
    res.send("We are on posts")
});
router.get('/specific', (req, res) => {
    res.send("Specific posts")
});
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    })
    console.log("yes", post)
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (error) {
        console.log("err", error)
        res.json({message: error})
    }
    console.log("nee", savedPost)
});

module.exports = router
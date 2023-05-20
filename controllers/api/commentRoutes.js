const router = require("express").Router();
const { BlogPost, Comment, User } = require("../../models");

// CREATE Comment
router.post("/", async (req, res) => {
  try {
    const comment = await Comment.create({
      comment_body: req.body.comment_body,
      blogPost_id: req.body.blogPost_id,
      user_id: req.session.user_id || req.body.user_id,
    });

    res.status(200).json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// *************Possibly re-write file***************

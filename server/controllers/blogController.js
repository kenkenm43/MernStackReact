// Contact database / process database
const slugify = require("slugify");
const Blogs = require("../models/blogs");
//save data
exports.create = (req, res) => {
  const { title, content, author } = req.body;
  const slug = slugify(title);

  //validate title content
  switch (true) {
    case !title:
      return res.status(400).json({ error: "Please take a title" });
      break;
    case !content:
      return res.status(400).json({ error: "Please take a content" });
      break;
  }
  //save data
  Blogs.create({ title, content, author, slug }, (err, blog) => {
    if (err) {
      res.status(400).json({ error: "duplicate content" });
    }
    res.json(blog);
  });
};

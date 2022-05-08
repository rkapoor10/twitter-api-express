exports.getPosts = async (req, res) => {
  // add json data
  const posts = [
    { title: "Title", id: "1", description: "Description" },
    { title: "Title", id: "1", description: "Description" },
    { title: "Title", id: "1", description: "Description" },
    { title: "Title", id: "1", description: "Description" },
  ];

  res.send({ success: true, posts: posts });
};

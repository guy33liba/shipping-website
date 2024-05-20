import express from "express"
const app = express()

const posts = [
  { username: "Kyle", title: "Post 1" },
  { username: "Jim", title: "Post 1" },
]

app.get("/posts", (req, res) => {
  res.send(posts)
})

app.listen(3000)

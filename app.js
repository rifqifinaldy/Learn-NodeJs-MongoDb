const express = require("express");
const mongoose = require("mongoose");
const blogsRoutes = require("./routes/blogRoutes");

// Express App
const app = express();

// connect to mongoDB
const dbURI =
  "mongodb+srv://rifqifinaldy:25maret1997@cluster0.socjk.mongodb.net/rifqif_blogs?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
app.use("/blogs", blogsRoutes);

// 404
app.use((req, res) => {
  res.status(404).render("404", { title: "404 Not Found" });
});

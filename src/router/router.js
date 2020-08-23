import express, { Router } from "express";

const ROUTER = express.Router();

ROUTER.get("/", (req, res) => {
  console.log("Request Webpage Loding");
  res.render("index");
});

ROUTER.get("/about", (req, res) => {
  console.log("Request Webpage Loding");
  res.render("about");
});

export default ROUTER;

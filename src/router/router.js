import express, { Router } from "express";

const ROUTER = express.Router();

ROUTER.get("/", (req, res) => {
  res.render("index");
  console.log("Request Webpage Loding");
});

ROUTER.get("/about", (req, res) => {
  res.render("about");
  console.log("Request Webpage Loding");
});

export default ROUTER;

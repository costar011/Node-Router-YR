import express, { Router } from "express";

const ROUTER = express.Router();

ROUTER.get("/", (req, res) => {
  console.log("Request Webpage Loding");
  res.render("index");
});

export default ROUTER;

const express = require("express");
const router = express.Router();

const blogController= require("../controllers/blogController");
const commentController = require("../controllers/commentController");
const messageController = require("../controllers/messageController");
const portfolioController = require("../controllers/portfolioController");
const productController = require("../controllers/productController");


// BlogController
router.get("/one", blogController.create);
router.get("/two", blogController.read);
router.get("/three", blogController.delete);
router.get("/four", blogController.update);

// commentController
router.get("/five", commentController.create);
router.get("/six", commentController.read);
router.get("/seven", commentController.delete);
router.get("/eight", commentController.update);

// messageController
router.get("/nine", messageController.create);
router.get("/ten", messageController.read);
router.get("/eleven", messageController.delete);
router.get("/twelve", messageController.update);

// portfolioController
router.get("/thirteen", portfolioController.create);
router.get("/fourteen", portfolioController.read);
router.get("/fifteen", portfolioController.delete);
router.get("/sixteen", portfolioController.update);

// productController
router.get("/seventeen", productController.create);
router.get("/eighteen", productController.read);
router.get("/ninteen", productController.delete);
router.get("/twenty", productController.update);






module.exports= router
const express = require("express");
const router = express.Router();

const userController= require("../controllers/userController");
const postController = require("../controllers/postController");
const adminController = require("../controllers/adminController");
const subAdminController = require("../controllers/subAdminController");


// userController
router.get("/one", userController.create);
router.get("/two", userController.read);
router.get("/three", userController.delete);
router.get("/four", userController.update);

// postController
router.get("/five", postController.create);
router.get("/six", postController.read);
router.get("/seven", postController.delete);
router.get("/eight", postController.update);

// adminController
router.get("/nine", adminController.create);
router.get("/ten", adminController.read);
router.get("/eleven", adminController.delete);
router.get("/twelve", adminController.update);

// subAdminController
router.get("/thirteen", subAdminController.create);
router.get("/fourteen", subAdminController.read);
router.get("/fifteen", subAdminController.delete);
router.get("/sixteen", subAdminController.update);


module.exports= router
var express = require('express');
var router = express.Router();

var homeController = require("../controllers/home-controller")

/* GET home page. */
router.get("/", homeController.index );
router.get("/teacher", homeController.showTeacher );
router.get("/:id", homeController.show );
router.post("/", homeController.create );
router.put("/:id", homeController.update );
router.delete("/:id", homeController.destroy );

module.exports = router;

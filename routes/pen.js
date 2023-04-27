// var express = require('express');
// var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('pen', { title: 'Search Results Pen' });
// });

// module.exports = router;

var express = require('express');
const pen_controllers= require('../controllers/pen');
var router = express.Router();
/* GET costumes */
router.get('/', pen_controllers.pens_view_all_Page);
/* GET detail costume page */
router.get('/detail', pen_controllers.pens_view_one_Page);
module.exports = router;


/* GET create pen page */
router.get('/create', pen_controllers.pen_create_Page);
/* GET create update page */
router.get('/update', secured , pen_controllers.pen_update_Page);
/* GET delete costume page */
router.get('/delete', pen_controllers.pen_delete_Page);

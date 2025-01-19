const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js")
const {isLoggedIn, isReviewAuthor,validateReview} = require("../middleware.js");
const reviewController = require("../controllers/review.js");

//reviews
//post review route
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.create));
  
//delete review route
router.delete("/:reviewId",isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
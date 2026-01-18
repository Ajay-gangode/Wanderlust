const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});




// router.route a way to make code compact by combining same path's
// 1st Index Route + Create Route "/"
// Before -->
/*   Index Route
     router.get("/", wrapAsync(listingController.index));
     Create Route
     router.post("/", validateListing,isLoggedIn, wrapAsync(listingController.createListing)); */
//After Combining

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, validateListing,upload.single('listing[image]'), wrapAsync(listingController.createListing));

//New Route
router.get("/new",isLoggedIn, (listingController.renderNewForm));


// Same for Show + Update + Delete "/:id"

/*  Show Route
    router.get("/:id", wrapAsync(listingController.showListings));
    Update Route
    router.put("/:id", validateListing, isLoggedIn, isOwner, wrapAsync(listingController.updateListing));
    Delete Route 
    router.delete('/:id', isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));  */


//Category
router.get("/category/:category",wrapAsync(listingController.showCategoryListings));
 

router
    .route("/:id")
    .get(wrapAsync(listingController.showListings))
    .put( isLoggedIn, isOwner,upload.single('listing[image]'),validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));


//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));



module.exports = router;
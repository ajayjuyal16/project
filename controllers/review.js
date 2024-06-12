const Listing=require("../models/listing");
const Review=require("../models/review");

module.exports.createReview=async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review({
      comment: req.body.review.comment,
      rating: req.body.review.rating
  });
  newReview.author=req.user._id;
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  req.flash("success","New Review Created!");
  res.redirect(`/listings/${listing._id}`);
}
module.exports.destroyReview=async (req, res) => {
  const { id, reviewId } = req.params;
  const listing = await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }, { new: true });
  const deletedReview = await Review.findByIdAndDelete(reviewId);
  if (deletedReview) {
    await listing.save();
  }
  req.flash("success","Review Deleted!");
  res.redirect(`/listings/${id}`);
}
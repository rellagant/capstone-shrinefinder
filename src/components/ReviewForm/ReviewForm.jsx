import "./ReviewForm.scss";
import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
import { ShrineFinderApi } from "../../utils/shrinesapi";

const api = new ShrineFinderApi();

export default function ReviewForm({ shrineId, onSuccess }) {
  const validate = (review) => {
    const newErrors = {};
    if (!review.rating) newErrors.rating = "Rating is required.";
    if (!review.comment) newErrors.comment = "Comment is required.";
    if (!review.reviewer) newErrors.reviewer = "Name is required.";
    return newErrors;
  };

  const [review, setReview] = useState({
    rating: "",
    comment: "",
    reviewer: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(review);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTimeout(() => {
        setErrors({});
      }, 3000);
      return;
    }

    try {
      const response = await api.postReview(shrineId, review);
      // toast.success("Review submitted successfully");
      onSuccess(response.data);
      setReview({
        rating: "",
        comment: "",
        reviewer: "",
      });
      setErrors({});
    } catch (error) {
      // toast.error("Error submitting review.");
      console.error("Error submitting review:", error);
    }
  };

  return (
    <section className="review-form-container">
      <h1 className="review-form-title">Submit a Review</h1>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="review-form__group">
          <label className="review-form__rating" htmlFor="input_number">
            Rating
          </label>
          <input
            className="review-form__field"
            type="number"
            id="rating"
            name="rating"
            value={review.rating}
            onChange={handleChange}
            placeholder="1-5..."
            min="1"
            max="5"
          />
          {errors.rating && (
            <div className="review-form__error">{errors.rating}</div>
          )}
        </div>
        <div className="review-form__group">
          <label htmlFor="comment">Comment</label>
          <textarea
            className="review-form__text"
            id="comment"
            name="comment"
            placeholder="Add your review here"
            value={review.comment}
            onChange={handleChange}
          />
          {errors.comment && (
            <div className="review-form__error">{errors.comment}</div>
          )}
        </div>
        <div className="review-form__group">
          <label htmlFor="reviewer">Reviewer</label>
          <textarea
            className="review-form__name"
            type="text"
            id="reviewer"
            name="reviewer"
            placeholder="Name"
            value={review.reviewer}
            onChange={handleChange}
          />
          {errors.reviewer && (
            <div className="review-form__error">{errors.reviewer}</div>
          )}
        </div>
        <div className="review-form__buttons">
          <button className="review-form__submit" type="submit">
            Submit Review
          </button>
          {/* <ToastContainer /> */}
        </div>
      </form>
    </section>
  );
}

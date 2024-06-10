import "./ReviewForm.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ShrineFinderApi } from "../../utils/shrinesapi";

const api = new ShrineFinderApi();

export default function ReviewForm({ shrineId, onSuccess }) {
  const [review, setReview] = useState({
    rating: "",
    comment: "",
    reviewer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!review.rating || !review.comment || !review.reviewer) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await api.postReview(shrineId, review);
      toast.success("Review submitted successfully");
      onSuccess(response);
      setReview({
        rating: "",
        comment: "",
        reviewer: "",
      });
    } catch (error) {
      toast.error("Error submitting review.");
      console.error("Error submitting review:", error);
    }
  };

  return (
    <section className="review-form-container">
    <h1 className="review-form-title">Submit a Review</h1>
    <form onSubmit={handleSubmit} className="review-form">
      <div className="review-form__group">
        <label htmlFor="rating">Rating</label>
        <input
          className="review-form__field"
          type="number"
          id="rating"
          name="rating"
          value={review.rating}
          onChange={handleChange}
          min="1"
          max="5"
        />
      </div>
      <div className="review-form__group">
        <label htmlFor="comment">Comment</label>
        <textarea
          className="review-form__comment"
          id="comment"
          name="comment"
          placeholder="Add your review here"
          value={review.comment}
          onChange={handleChange}
        />
      </div>
      <div className="review-form__name">
        <label htmlFor="reviewer">Reviewer</label>
        <input
          type="text"
          id="reviewer"
          name="reviewer"
          placeholder="Name goes here"
          value={review.reviewer}
          onChange={handleChange}
        />
      </div>
      <div className="review-form__buttons">
        <button type="submit">Submit Review</button>
        <ToastContainer />
      </div>
    </form>
  </section>
);
}

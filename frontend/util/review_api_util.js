export const fetchReviews = (id) => (
  $.ajax({
    type: 'get',
    url: `/api/listings/${id}/reviews`,
  })
)

export const fetchReview = (id, id2) => (
  $.ajax({
    type: 'get',
    url: `/api/listings/${id}/reviews/${id2}`
  })
)

export const createReview = (id, review) => (
  $.ajax({
    type: 'post',
    url: `/api/listings/${id}/reviews/`,
    data: { review }
  })
)

export const deleteReview = (review) => (
    $.ajax({
      type: 'delete',
      url: `/api/reviews/${review.id}`
    })
)

export const updateReview = (review) => (
  $.ajax({
    type: 'patch',
    url: `/api/reviews/${review.id}`,
    data: { review }
  })
)

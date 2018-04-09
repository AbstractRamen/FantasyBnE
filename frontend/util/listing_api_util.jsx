export const fetchListings = () => (
  $.ajax({
    type: 'get',
    url: '/api/listings',
  })
)

export const fetchListing = (id) => (
  $.ajax({
    type: 'get',
    url: `/api/listings/${id}`
  })
)

export const createListing = (listing) => (
  $.ajax({
    type: 'post',
    url: `/api/listings/`,
    data: { listing }
  })
)

export const deleteListing = (listing) => (
    $.ajax({
      type: 'delete',
      url: `/api/listings/${listing.id}`
    })
)

export const updateListing = (listing) => (
  $.ajax({
    type: 'patch',
    url: `/api/listings/${listing.id}`,
    data: { listing }
  })
)

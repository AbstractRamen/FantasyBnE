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

export const createListing = (formData , callback) => (
  $.ajax({
    type: 'post',
    url: `/api/listings/`,
    contentType: false,
    processData: false,
    dataType: 'json',
    data: formData,
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

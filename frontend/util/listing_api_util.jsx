export const fetchListings = () => (
  $.ajax({
    type: 'get',
    url: 'api/listing',
  })
)

export const fetchListing = (id) => (
  $.ajax({
    type: 'get',
    url: `api/listing/${id}`
  })
)

export const createListing = (listing) => (
  $.ajax({
    type: 'post',
    url: 'api/user/listing',
    data: { listing }
  })
)

export const deleteListing = (listing) => (
    $.ajax({
      type: 'delete',
      url: `api/user/listing/${listing.id}`
    })
)

export const updateListing = (listing) => (
  $.ajax({
    type: 'patch',
    url: `api/user/listing/${listing.id}`,
    data: { listing }
  })
)

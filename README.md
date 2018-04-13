# FantasyBnE (Bed and Escape)

## Visit [FantasyBnE](https://fantasy-bne.herokuapp.com/#/)!

Fantasy BnE is a full-stack web application inspired by [AirBnB](https://www.airbnb.com). To implement its listing, review, and file features, the applicatoin uses technologies including Rails, PostgreSQL, React.js, Redux, and AWS S3 storage. The project was designed, implemented, and seen in most of its current state over a span of 10 days. Though the current application is a simplified version of its inspiration-- it will gain more features over time.

## Features

- Backend to frontend user authentication
    - Passwords are salted by BCrypt
    - Demo account/login for easy sight preview

    <picture of nav bar>

- Create listings to show to the rest of the world
- Review listings by other people and see what others before have said

#### Authentication and protected actions
- Users are able to create persistent accounts, sign-in, and sign-out
- User-specific actions are protected and prompt unlogged visitors to log in

#### Listings

- Users can create, view, and access listings
- Listings are highlighted and can be accessed via a homepage "spotlight"
- Listing creation is protected and prompts users to login upon submit
- File attachment via AWS allow for visual assets to be uploaded for listings

#### Reviews

- Users can create and view reviews for individual listings
- Reviews are protected and can only be created by logged-in users

## Challenges

#### Design: Simplifying and customizing design
**Problem:**  Due to its nature of being a simplified model of AirBnB, many core features and assets of the original are not available for visual display in FantasyBnE. This presents a large challenge in how best to stay true to the visual theme and UX present in the current AirBnB without leaving large visual gaps for missing features.

**Chosen Solution:** One of the most important developments in AirBnB has been their recent foray into local experiences and restaurants and this is communicated across in their current layout. Since FantasyBnE only focuses listings, a top priority became distilling the current AirBnB UX to only its listing components and visualizing that in a simple workflow. I combined this with the wireframes available in this Github's wiki to refine not just the application's actual functionality but its aesthetic faithfulness to the original site.

#### Technical: Rendering and information requests
**Problem:** Some pages had very nested data requests. For example, a listing show page had to have not just information about itself through a fetchListing query, but also would immediately require information about all of its reviews-- of which would require also a query to all of their authors for their profile picture. This made logic harder to follow and created the need for a lot of boilerplate code for very small one-time-use items.

**Chosen Solution:** Grab the information from the first query. By taking advantage of the Rails associations within the controller, information of the model's associations could be sent along in the original action. This decreased the amount of fetches per listing show page from O(n) per review the listing had to grab a user picture for-- to O(1) where there was only one to fetch the specific listing and a second to grab all of its listings.

#### User Value/Prioritization: What's the most important?
**Problem:** AirBnB has a lot of functionality, but I wanted to focus only on the essentials in the timespan set. Important planning had to be made to determine what was quintessentially AirBnb, and what exactly was the service it provided.

**Chosen Solution:** This question really forced a reevaluation of the popular service. Was booking really necessary? Was address? What was crucial and what was just "really really nice to have"? The conclusion I came to was that AirBnB at its core was a double-sided market, a place to connect hosts and guests. The most important thing then was that host had a way to communicate the details of their listings and guests had a way to find them. This led me to focus on listings and reviews. Listings gave hosts a way to showcase info and provide contact, while reviews allowed for guests to provide criticism and/or warn others.

## Future Improvements

- Listing index for users to edit, view, and/or delete their created listings
- Edit and delete for user reviews
- Google maps to geocode the address provided in listings
- Google maps visual for location visualization
- Booking feature to book listings for segments of time
- Booking index for users to manage their bookings (edit/view/delete)

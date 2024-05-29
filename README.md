# ArrowFlicks

The application is designed for searching and rating movies. It provides access to movie information through TMDB API (VPN may be necessary).

Design: https://www.figma.com/design/VkLZt5T4dZQQ3cEhWcnhyG/Movie-Search-App?node-id=0-1&t=8Z48hoDuIDbMThXV-0

Deploy: https://arrow-flicks-yumentsel.vercel.app

## Tech Stack:

- Next JS
- TypeScript
- Mantine UI

## Features

### "Movie Search" Page

- View available movies with filters.
- Click on a movie for detailed information.
- Rate movies by clicking their stars, saving them.
- Unrate movies by clicking the star again and confirming.

### "Rated" Page

- View and edit rated movies and their ratings.
- Search rated movies by title.
- Unrate movies by clicking the star and confirming.
- Click on a movie for detailed information.

### "Movie" Page

- View movie details.

## Additional Features

- Display a loader while waiting for server response.
- Show an empty state if movie lists are empty.
- Implement pagination.
- Proxy all requests to TMDB API.
- Validate filter values on both client and server sides.
- The minimum page width for correct display is 320px.

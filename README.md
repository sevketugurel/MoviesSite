# Movie Site Project (Frontend)

## Overview

This project is a simple movie browsing website that uses The Movie Database (TMDb) API to fetch and display popular movies. Users can search for specific movies, view their posters, and navigate to a page for more details and reviews.

## Features

- **Popular Movies Display**: On loading, the site fetches and displays popular movies based on their popularity.
- **Search Functionality**: Users can search for specific movies using the search bar.
- **Dynamic Content**: Movie data, including posters and titles, is dynamically added to the webpage.
- **Responsive Design**: The layout adjusts for various screen sizes.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.

```bash
git clone https://github.com/yourusername/movie-site.git
cd movie-site
```

3. Ensure you have a valid API key from [TMDb](https://www.themoviedb.org/).
4. Create a `config.js` file in the root directory and add your API key.

```javascript
// config.js
export const APIKEY = 'your_api_key_here';
```

## Usage

1. Open `index.html` in your preferred web browser.

2. The main section will display popular movies on initial load.

3. Use the search bar to find specific movies by their title.

## Code Explanation

### API Configuration

The `APILINK` is constructed using the TMDb API for fetching popular movies. The `IMG_PATH` is the base URL for movie posters.

```javascript
const APILINK = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key="${api.APIKEY}"`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
```

### Main Functionality

- **Return Movies Function**: Fetches movie data from the API and dynamically creates HTML elements to display the movies.

```javascript
function returnMovies(url){
  fetch(url).then(res => res.json())
    .then(function(data){
      data.results.forEach(element => {
        // Create elements
        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');

        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');

        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');

        const image = document.createElement('img');
        image.setAttribute('class', 'thumbnail');
        image.setAttribute('id', 'image');

        const title = document.createElement('h3');
        title.setAttribute('id', 'title');

        const center = document.createElement('center');

        // Set content
        title.innerHTML = `${element.title}<br><a href="movie.html?id=${element.id}&title=${element.title}" class="button">Reviews</a>`;
        image.src = IMG_PATH + element.poster_path;

        // Append elements
        center.appendChild(image);
        div_card.appendChild(center);
        div_card.appendChild(title);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);

        main.appendChild(div_row);
      });
    });
}
```

- **Event Listener**: Listens for the form submission, fetches search results, and updates the display.

```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});
```

## Dependencies

- **TMDb API**: Used to fetch movie data.
- **HTML & CSS**: For structuring and styling the webpage.
- **JavaScript**: For fetching data and dynamically updating the webpage content.


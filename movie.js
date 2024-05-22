const APILINK = "http://localhost:8000/api/v1/reviews/";

const main = document.getElementById("section");


returnMovies(APILINK);

function returnMovies(url) {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data.results);
      const div_row = document.createElement('div');
      div_row.setAttribute('class', 'row');

      data.results.forEach((element, index) => {
        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');

        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');

        const image = document.createElement('img');
        image.setAttribute('class', 'thumbnail');
        image.setAttribute('id', 'image');

        const title = document.createElement('h3');
        title.setAttribute('id', 'title');

        const center = document.createElement('center');

        title.innerHTML = `${element.title}`;
        image.src = IMG_PATH + element.poster_path;

        center.appendChild(image);
        div_card.appendChild(center);
        div_card.appendChild(title);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);

        if ((index + 1) % 4 === 0) {
          main.appendChild(div_row.cloneNode(true));
          div_row.innerHTML = '';
        }
      });

      if (div_row.innerHTML !== '') {
        main.appendChild(div_row);
      }
    });
}

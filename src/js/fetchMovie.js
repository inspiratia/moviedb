import fetchMovieDetail from './fetchMovieDetail.js';
const resultBox = document.getElementById('result');
const detailModal = document.getElementById('movieDataModalBody');
const fetchMovie = (url, searchQuery) => {
    fetch(url + '&s=' + searchQuery)
        .then(response => response.json())
        .then(responseJSON => {
            updateDOM(responseJSON);
            addCardEventListener(url);
        })
        .catch(err => console.log(err));
};

const updateDOM = (responseJSON) => {
    if (responseJSON.Response === 'False') {
        resultBox.innerHTML = '<div class="col m-auto text-center"><h3>No results</h3></div>';
    } else {
        resultBox.innerHTML = '';
        responseJSON.Search.forEach(movie => {
            resultBox.innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 mb-4">
                    <movie-card
                        title="${movie.Title}"
                        year="${movie.Year}"
                        type="${movie.Type}"
                        poster="${getPoster(movie)}"
                        imdbID="${movie.imdbID}">
                    </movie-card>
                <div>`;
        });
    }
}

const addCardEventListener = (url) => {
    const cardList = document.querySelectorAll('movie-card img');
    for (const card of cardList) {
        card.addEventListener('click', (event) => {
            detailModal.innerHTML = '';
            fetchMovieDetail(url, event.target.getAttribute('alt'));
        });
    }
};

const getPoster = movie => {
    if (movie.Poster !== 'N/A') {
        return movie.Poster;
    }
    return 'https://media.comicbook.com/files/img/default-movie.png';
};

export {
    fetchMovie,
    detailModal
};
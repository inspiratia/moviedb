import {detailModal} from './fetchMovie.js';
const getRatings = (responseJSON) => {
    let html = '';
    responseJSON.Ratings.forEach(rating => {
        html += `<p><strong>★ ${rating.Value}</strong> (${rating.Source})</p>`;
    })
    return html;
};

const updateModal = (responseJSON) => {
    detailModal.innerHTML = `
                <div class="row">
                <div class="col-12 col-lg-4 text-center">
                    <img class="w-100" src="${getPoster(responseJSON)}" alt="${responseJSON.Title}">
                </div>
                <div class="col-12 col-lg-8">
                    <table class="w-100 table">
                        <tr>
                            <th scope="row">Title</th>
                            <td>${responseJSON.Title}</td>
                        </tr>
                        <tr>
                            <th scope="row">Year</th>
                            <td>${responseJSON.Year}</td>
                        </tr>
                        <tr>
                            <th scope="row">Released</th>
                            <td>${responseJSON.Released}</td>
                        </tr>
                        <tr>
                            <th scope="row">Runtime</th>
                            <td>${responseJSON.Runtime}</td>
                        </tr>
                        <tr>
                            <th scope="row">Genre</th>
                            <td>${responseJSON.Genre}</td>
                        </tr>
                        <tr>
                            <th scope="row">Director</th>
                            <td>${responseJSON.Director}</td>
                        </tr>
                        <tr>
                            <th scope="row">Writer</th>
                            <td>${responseJSON.Writer}</td>
                        </tr>
                        <tr>
                            <th scope="row">Actors</th>
                            <td>${responseJSON.Actors}</td>
                        </tr>
                        <tr>
                            <th scope="row">Plot</th>
                            <td>${responseJSON.Plot}</td>
                        </tr>
                        <tr>
                            <th scope="row">Language</th>
                            <td>${responseJSON.Language}</td>
                        </tr>
                        <tr>
                            <th scope="row">Country</th>
                            <td>${responseJSON.Country}</td>
                        </tr>
                        <tr>
                            <th scope="row">Awards</th>
                            <td>${responseJSON.Awards}</td>
                        </tr>
                        <tr>
                            <th scope="row">Ratings</th>
                            <td>
                                ${getRatings(responseJSON)}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>`;
};

const fetchMovieDetail = (url, imdbID) => {
    fetch(url + '&i=' + imdbID)
        .then(response => response.json())
        .then(responseJSON => updateModal(responseJSON))
        .catch(err => console.log(err));
};

const getPoster = movie => {
    if (movie.Poster !== 'N/A') {
        return movie.Poster;
    }
    return 'https://media.comicbook.com/files/img/default-movie.png';
};

export default fetchMovieDetail;
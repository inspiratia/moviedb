import 'bootswatch/dist/cyborg/bootstrap.min.css';
import './bootstrap.min.js';
import '../css/stylesheet.css';
import MovieCard from './components/MovieCard.js';
import { fetchMovie } from './fetchMovie.js';

const queryInput = document.getElementById('query-input');
const searchButton = document.getElementById('search-button');
const searchSection = document.getElementById('search');
const resultSection = document.querySelector('main .container');
const url = 'https://api.themoviedb.org/3/movie/550?api_key=1ed7483f103e23ce60c10e7f0299529c';


searchButton.addEventListener('click', () => {
    fetchMovie(url, queryInput.value);
    searchSection.style.paddingTop = '5vh';
    resultSection.style.marginTop = '-65vh';
});

queryInput.addEventListener("keyup", (event) => {
    const enterButtonCode = 13;
    if (event.keyCode === enterButtonCode) {
        event.preventDefault();
        searchButton.click();
    }
});


customElements.define('movie-card', MovieCard);
class MovieCard extends HTMLElement {
    connectedCallback() {
        this.title = this.getAttribute('title');
        this.year = this.getAttribute('year');
        this.type = this.getAttribute('type');
        this.poster = this.getAttribute('poster');
        this.imdbID = this.getAttribute('imdbID');
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card">
            <img src="${this.poster}" class="card-img-top" alt="${this.imdbID}"  data-toggle="modal" data-target="#movieDataModal">
            <div class="card-body">
                <h6 class="card-text"><strong>${this.title}</strong></h6>
                <p class="card-text">Year : ${this.year}<br>Type : ${this.type}</p>
            </div>
        </div>`;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }

    static get observedAttributes() {
        return [];
    }
}

export default MovieCard;
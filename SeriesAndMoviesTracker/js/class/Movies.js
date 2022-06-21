export default class Movies {
    constructor() {
        this.movies = []  // Almacena las peliculas
    }

    // Guardar una pelicula
    createMovie(movieData) {
        this.movies = [...this.movies, movieData]

        // Guardar peliculas en localStorage
        localStorage.setItem('movies', JSON.stringify(this.movies))
    }

    // Getter de movies
    getMovies() {
        return this.movies
    }

    // Cargar los datos de las peliculas desde localStorage
    loadData(movies) {
        movies.forEach(movie => this.createMovie(movie))
        console.log(this.movies);
    }
}
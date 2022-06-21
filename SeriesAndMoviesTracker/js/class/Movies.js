export default class Movies {
    constructor() {
        this.movies = []  // Almacena las peliculas
    }

    // Guardar una pelicula
    createMovie(movieData) {
        this.movies = [...this.movies, movieData]
    }

    getMovies() {
        return this.movies
    }
}
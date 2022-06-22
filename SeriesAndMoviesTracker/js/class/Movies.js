export default class Movies {
    constructor() {
        this.movies = []  // Almacena las peliculas
    }

    // Cargar los datos de las peliculas desde localStorage
    loadData(movies) {
        movies.forEach(movie => this.createMovie(movie))
    }

    // Guardar una pelicula
    createMovie(movieData) {
        this.movies = [...this.movies, movieData]

        // Guardar peliculas en localStorage
        localStorage.setItem('movies', JSON.stringify(this.movies))
    }

    // Actualizar un pelicula por su ID
    updateMovie(newMovieData){
        // Buscar la pelicula por su ID
        this.movies = this.movies.map(movie => movie.id === newMovieData.id ? newMovieData : movie)

        // Guardar cambios en localStorage
        localStorage.setItem('movies', JSON.stringify(this.movies))
    }

    // Getter de movies
    getMovies() {
        return this.movies
    }
}
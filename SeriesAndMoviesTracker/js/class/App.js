import UI from './UI.js';
import {movieForm, 
        serieForm,
        showDataBtn} from '../selectors.js'
import Movies from './Movies.js';
import Series from './Series.js';

export default class App {
    constructor() {
        this.startApp();
    }

    // Iniciar la App
    startApp() {
        // Instanciar clases
        const ui = new UI();
        const movies = new Movies();
        const series = new Series();

        // Registrar pelicula
        movieForm.addEventListener('submit', e => {
            e.preventDefault()

            // Obtener datos del form
            const movieData = ui.getMovieFromForm()

            // Guardar pelicula
            movies.createMovie(movieData)
        })

        // Resgistrar serie
        serieForm.addEventListener('submit', e => {
            e.preventDefault()

            // Obtener datos del form
            const seriesData = ui.getSeriesFromForm()

            series.createSeries(seriesData)
        })

        // Mostrar elementos guardados
        showDataBtn.addEventListener('click', () => {
            // Limpiar elementos existentes del DOM
            ui.clearHTML()

            const moviesList = movies.getMovies()  // Obtener el listado de peliculas guardadas
            ui.showMovies(moviesList)  // Mostrar peliculas
    
            const seriesList = series.getSeries()  // Obtener el listado de series guardadas
            ui.showSeries(seriesList)  // Mostrar series
        })
    }
}
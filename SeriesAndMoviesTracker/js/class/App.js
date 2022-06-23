import UI from './UI.js';
import {movieForm, 
        serieForm,
        showMovies,
        registerMovie,
        showDataBtn,
        showSeries} from '../selectors.js'
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

        // Cargar datos desde localStorage
        document.addEventListener('DOMContentLoaded', () => {
            // Obtener datos
            const moviesData = JSON.parse(localStorage.getItem('movies'))
            const seriesData = JSON.parse(localStorage.getItem('series'))

            // Cargar datos de las peliculas en la App
            if (moviesData) {
                movies.loadData(moviesData)
            }

            // Cargar datos de las series en la App
            if (seriesData) {
                series.loadData(seriesData)
            }
        })

        // ********** CREATE **********
        // Registrar pelicula
        movieForm.addEventListener('submit', e => {
            e.preventDefault()

            // Verificar si el boton esta en modo crear o actualizar
            const buttonStatus = e.target.children[2].value

            if (buttonStatus === 'Registrar') {  // Registrar pelicula
                // Obtener datos del form
                const movieData = ui.getMovieFromForm()
    
                // Guardar pelicula
                movies.createMovie(movieData)
            } else if (buttonStatus === 'Actualizar') {  // Actualizar pelicula
                // Obtener datos nuevos
                const newMovieData = ui.getMovieFromForm()

                // Leer el ID de la pelicula actualizar del LocalStorage
                const idToUpdate = localStorage.getItem('idMovieToUpdate')
                // Pasar el ID de la pelicula actualizar a los datos nuevos
                newMovieData.id = Number(idToUpdate)

                // Actualizar la pelicula correspondiente
                movies.updateMovie(newMovieData)

                // Reseterar el ID de la pelicula a actualizar
                localStorage.removeItem('idMovieToUpdate')

                // Cambiar texto del botón de 'Actualizar' a 'Registrar'
                ui.changeButtonRole('Registrar', 'movie')
            }
        })

        // Resgistrar serie
        serieForm.addEventListener('submit', e => {
            e.preventDefault()

            // Verificar si el boton esta en modo crear o actualizar
            const buttonStatus = e.target.children[4].value
            console.log(buttonStatus);
            if (buttonStatus === 'Registrar') {  // Registrar serie
                // Obtener datos del form
                const seriesData = ui.getSeriesFromForm()
    
                series.createSeries(seriesData)
            } else if (buttonStatus === 'Actualizar') {  // Actualizar serie
                // Obtener datos nuevos
                const newSeriesData = ui.getSeriesFromForm()

                // Leer el ID de la serie a actualizar del LocalStorage
                const idToUpdate = localStorage.getItem('idSerieToUpdate')
                // Pasar el ID de la serie a actualizar a los datos nuevos
                newSeriesData.id = Number(idToUpdate)

                // Actualizar la serie correspondiente
                series.updateSeries(newSeriesData)

                // Reseterar el ID de la serie a actualizar
                localStorage.removeItem('idSerieToUpdate')

                // Cambiar texto del botón de 'Actualizar' a 'Registrar'
                ui.changeButtonRole('Registrar', 'series')
            }
        })

        // ********** READ **********
        // Mostrar elementos guardados
        showDataBtn.addEventListener('click', () => {
            // Limpiar elementos existentes del DOM
            ui.clearHTML()

            const moviesList = movies.getMovies()  // Obtener el listado de peliculas guardadas
            ui.showMovies(moviesList)  // Mostrar peliculas
    
            const seriesList = series.getSeries()  // Obtener el listado de series guardadas
            ui.showSeries(seriesList)  // Mostrar series
        })

        // ********** UPDATE y DELETE **********
        // Actualizar o eliminar pelicula
        showMovies.addEventListener('click', e => {
            // Verificar si se esta presionando el boton de editar
            if (e.target.classList.contains('edit-btn')) {
                // Obtener el ID de la pelicula a actualizar
                const idToUpdate = ui.updateMovie(e)

                // Guardar el ID en localStorage para que este disponible al editar la pelicula
                localStorage.setItem('idMovieToUpdate', idToUpdate)

                // Cambiar texto del botón de 'Registrar' a 'Actualizar'
                ui.changeButtonRole('Actualizar', 'movie')
            }
            // Verificar si se esta presionando el boton de eliminar
            else if (e.target.classList.contains('delete-btn')) {
                // Obtener el ID de la pelicula a eliminar
                const idToDelete = ui.deleteMovie(e)

                if (idToDelete) {
                    // Eliminar pelicula
                    movies.deleteMovie(Number(idToDelete))

                    // Actualizar los elementos mostrados en la vista
                    ui.clearHTML()
                    ui.showMovies(movies.getMovies())
                    ui.showSeries(series.getSeries())
                }
            }
        })

        // Actualizar serie
        showSeries.addEventListener('click', e => {
            // Verificar si se esta presionando el boton de editar
            if (e.target.classList.contains('edit-btn')) {
                // Obtener el ID de la serie a actualizar
                const idToUpdate = ui.updateSeries(e)
 
                // Guardar el ID en localStorage para que este disponible al editar la serie
                localStorage.setItem('idSerieToUpdate', idToUpdate)
 
                // Cambiar texto del botón de 'Registrar' a 'Actualizar'
                ui.changeButtonRole('Actualizar', 'series')
            }
        })
    }
}
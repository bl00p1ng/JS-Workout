import {showMovies, 
        showSeries,
        movieName,
        seenStatusMovie,
        pendingStatusMovie,
        serieName,
        finishedStatusSerie,
        pendingStatusSerie,
        season,
        episode,
        showDataBtn} from '../selectors.js'

export default class UI {
    // Obtener los datos del formulario de peliculas
    getMovieFromForm() {
        // Validar el estado de la pelicula
        let movieStatus

        if (seenStatusMovie.checked === true) {
            movieStatus = 'Vista'
        } else if (pendingStatusMovie.checked === true) {
            movieStatus = 'Pendiente'
        }

        const movieData = {
            name: movieName.value,
            status: movieStatus
        }

        // Activar el boton para mostrar los datos guardados
        showDataBtn.removeAttribute('disabled')

        return movieData
    }

    // Obtener los datos del formulario de series
    getSeriesFromForm() {
        let serieStatus = ''
        
        // Validar el estado de la serie
        if (finishedStatusSerie.checked === true) {
            serieStatus = 'Finalizada'
        } else if (pendingStatusSerie.checked === true) {
            serieStatus = 'Pendiente'
        }

        const seriesData = {
            name: serieName.value,
            season: parseInt(season.value),
            episode: parseInt(episode.value),
            status: serieStatus
        }

        // Activar el boton para mostrar los datos guardados
        showDataBtn.removeAttribute('disabled')

        return seriesData
    }

    // Mostrar peliculas guardadas en la vista
    showMovies(moviesList) {
        showMovies.classList.add('show')

        moviesList.forEach(movie => {
            // Div que alberga los datos de la pelicula
            const movieView = document.createElement('div')
            movieView.classList.add('movie-view')
            
            // Título de la película
            const movieTitle = document.createElement('h4')
            movieTitle.textContent = movie.name
            
            // Estado de la pelicula
            const movieStatus = document.createElement('span')
            movieStatus.textContent = movie.status
            
            // Agregar el titulo y el estado al DIV movieView
            movieView.appendChild(movieTitle)
            movieView.appendChild(movieStatus)
    
            // Agregar el movieView al DOM
            showMovies.appendChild(movieView)
            console.log('holi');
        })
    }

    // Mostrar series guardadas en la vistas
    showSeries(seriesList) {
        showSeries.classList.add('show')

        seriesList.forEach(series => {
            // Div que alberga los datos de la serie
            const serieView = document.createElement('div')
            serieView.classList.add('serie-view')
            
            // Título de la serie
            const serieTitle = document.createElement('h4')
            serieTitle.textContent = series.name
    
            // Temporada
            const season = document.createElement('p')
            season.textContent = 'Temporada: ' + series.season
    
            // Episodio
            const episode = document.createElement('p')
            episode.textContent = 'Último episodio visto: ' + series.episode
    
            // Estado de la serie
            const serieStatus = document.createElement('span')
            serieStatus.textContent = series.status
    
            // Agregar elementos al DIV serieView
            serieView.appendChild(serieTitle)
            serieView.appendChild(season)
            serieView.appendChild(episode)
            serieView.appendChild(serieStatus)
    
            // Agregar el serieView al DOM
            showSeries.appendChild(serieView)
        })
    }

    // Eliminar peliculas/series existentes en el DOM
    clearHTML() {
        // Eliminar peliculas existentes
        while (showMovies.firstElementChild) {
            showMovies.removeChild(showMovies.firstElementChild)
        }

        // Eliminar series existentes
        while (showSeries.firstElementChild) {
            showSeries.removeChild(showSeries.firstElementChild)
        }
    }
}
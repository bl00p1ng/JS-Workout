import {showMovies, 
        showSeries,
        movieName,
        seenStatusMovie,
        pendingStatusMovie,
        registerMovie,
        serieName,
        finishedStatusSerie,
        pendingStatusSerie,
        season,
        episode,
        registerSerie,
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
            id: Date.now(),
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
            id: Date.now(),
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
            movieView.dataset.id = movie.id
            
            // Título de la película
            const movieTitle = document.createElement('h4')
            movieTitle.textContent = movie.name
            
            // Estado de la pelicula
            const movieStatus = document.createElement('span')
            movieStatus.textContent = movie.status

            // Botón de editar
            const editBtn = document.createElement('button')
            editBtn.classList.add('edit-btn')
            editBtn.innerHTML = '<span class="edit-icon"><svg class="w-6 h-6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></span> Editar'

            // Botón de eliminar
            const deleteBtn = document.createElement('button')
            deleteBtn.classList.add('delete-btn')
            deleteBtn.innerHTML = '<span class="delete-icon"><svg class="w-6 h-6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span> Eliminar'
            
            // Agregar el titulo, el estado, el boton de editar y eliminar al DIV movieView
            movieView.appendChild(movieTitle)
            movieView.appendChild(movieStatus)
            movieView.appendChild(editBtn)
            movieView.appendChild(deleteBtn)
    
            // Agregar el movieView al DOM
            showMovies.appendChild(movieView)
        })
    }

    // Mostrar series guardadas en la vista
    showSeries(seriesList) {
        showSeries.classList.add('show')

        seriesList.forEach(series => {
            // Div que alberga los datos de la serie
            const serieView = document.createElement('div')
            serieView.classList.add('serie-view')
            serieView.dataset.id = series.id
            
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

            // Botón de editar
            const editBtn = document.createElement('button')
            editBtn.classList.add('edit-btn')
            editBtn.innerHTML = '<span class="edit-icon"><svg class="w-6 h-6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></span> Editar'

            // Botón de eliminar
            const deleteBtn = document.createElement('button')
            deleteBtn.classList.add('delete-btn')
            deleteBtn.innerHTML = '<span class="delete-icon"><svg class="w-6 h-6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span> Eliminar'
    
            // Agregar elementos al DIV serieView
            serieView.appendChild(serieTitle)
            serieView.appendChild(season)
            serieView.appendChild(episode)
            serieView.appendChild(serieStatus)
            serieView.appendChild(editBtn)
            serieView.appendChild(deleteBtn)
    
            // Agregar el serieView al DOM
            showSeries.appendChild(serieView)
        })
    }

    // Actualizar pelicula
    updateMovie(e) {
        // Obtener los datos actuales de la pelicula
        const currentId = e.target.parentNode.attributes[1].value
        const currentName = e.target.parentNode.children[0].textContent
        const currentStatus = e.target.parentNode.children[1].textContent

        // Reemplazar los campos del form con los datos actuales
        movieName.value = currentName

        // Modificar el input radio en base al estado
        if (currentStatus === 'Vista') {
            pendingStatusMovie.removeAttribute('checked')
            seenStatusMovie.setAttribute('checked', true)
        } else if (currentStatus === 'Pendiente') {
            seenStatusMovie.removeAttribute('checked')
            pendingStatusMovie.setAttribute('checked', true)
        }

        return currentId
    }

    // Actualizar serie
    updateSeries(e) {
        // Obtener los datos actuales de la serie
        const currentId = e.target.parentNode.attributes[1].value
        const currentName = e.target.parentNode.children[0].textContent
        const currentSeason = e.target.parentNode.children[1].textContent.replace(/[^0-9]/g, '')
        const currentEpisode = e.target.parentNode.children[2].textContent.replace(/[^0-9]/g, '')
        const currentStatus = e.target.parentNode.children[3].textContent

        // Reemplazar los campos del form con los datos actuales
        serieName.value = currentName
        season.value = currentSeason
        episode.value = currentEpisode

        // Modificar el input radio en base al estado
        if (currentStatus === 'Finalizada') {
            pendingStatusSerie.removeAttribute('checked')
            finishedStatusSerie.setAttribute('checked', true)
        } else if (currentStatus === 'Pendiente') {
            finishedStatusSerie.removeAttribute('checked')
            pendingStatusSerie.setAttribute('checked', true)
        }

        return currentId
    }

    // Eliminar pelicula
    deleteMovie(e) {
        // Comprobar con el usuario la eliminación de la pelicula
        const confirmDelete = confirm('¿Deseas eliminar esta película?')

        if (confirmDelete) {
            // Obtener el ID de la película a eliminar
            const idToDelete = e.target.parentNode.attributes[1].value
            return idToDelete
        } else {
            return null
        }
    }

    // Eliminar serie
    deleteSeries(e) {
        // Comprobar con el usuario la eliminación de la serie
        const confirmDelete = confirm('¿Deseas eliminar esta serie?')

        if (confirmDelete) {
            // Obtener el ID de la serie a eliminar
            const idToDelete = e.target.parentNode.attributes[1].value
            return idToDelete
        } else {
            return null
        }
    }

    // Cambiar el texto del boton de registrar
    changeButtonRole(btnText, type) {
        if (type === 'movie') {
            registerMovie.value = btnText
        } else if (type === 'series') {
            registerSerie.value = btnText
        }
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
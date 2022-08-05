import {showMovies, 
        showSeries,
        movieName,
        seenStatusMovie,
        pendingStatusMovie,
        registerMovie,
        serieName,
        finishedStatusSerie,
        pendingStatusSerie,
        serieSeason,
        serieEpisode,
        registerSerie} from '../selectors.js'

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
            season: parseInt(serieSeason.value),
            episode: parseInt(serieEpisode.value),
            status: serieStatus
        }

        return seriesData
    }

    // Mostrar peliculas guardadas en la vista
    showMovies(moviesList) {
        showMovies.classList.add('show')

        moviesList.forEach(movie => {
            // Div que alberga los datos de la pelicula
            const movieView = document.createElement('div')
            movieView.classList.add('movie-view', 
                                    'card', 
                                    'std-y-spacing')

            // Título de la película
            const movieTitle = document.createElement('h4')
            movieTitle.classList.add('subtitle', 
                                     'card-title', 
                                     'center-align', 
                                     'std-bottom-spacing', 
                                     'reset-margins')
            movieTitle.textContent = movie.name
            
            // Estado de la pelicula
            const movieStatus = document.createElement('p')
            movieStatus.innerHTML = `Estado: <span>${movie.status}</span>`

            // Agregar una clase para dar estilos según si la película ha sido vista o no
            if (movie.status === 'Vista') {
                movieStatus.classList.add('seen')
            } else {
                movieStatus.classList.add('pending')
            }

            // Botón de editar
            const editBtn = document.createElement('button')

            // Guardar el id para usarlo al editar la película
            editBtn.dataset.id = movie.id

            editBtn.classList.add('edit-btn', 
                                  'btn', 
                                  'modal-trigger', 
                                  'center-xy', 
                                  'sm-y-spacing', 
                                  'waves-effect', 
                                  'waves-light')

            // Propiedad para accionar la funcionalidad del boton
            editBtn.dataset.role = 'edit'
            editBtn.dataset.target = 'register-movie-modal'

            editBtn.innerHTML = `
                <svg 
                    data-role="edit"
                    data-id="${movie.id}"
                    class="w-6 h-6" 
                    data-darkreader-inline-stroke="" 
                    fill="none" 
                    stroke="currentColor" 
                    style="--darkreader-inline-stroke: currentColor;" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    ></path>
                </svg> 
                <span 
                    data-role="edit" 
                    data-id="${movie.id}"
                >
                    Editar
                </span>
            `

            // Botón de eliminar
            const deleteBtn = document.createElement('button')

            // Guardar el id para usarlo al eliminar la película
            deleteBtn.dataset.id = movie.id

            deleteBtn.classList.add('delete-btn', 
                                    'btn', 
                                    'center-xy', 
                                    'sm-y-spacing', 
                                    'waves-effect', 
                                    'waves-light')

            // Propiedad para accionar la funcionalidad del boton
            deleteBtn.dataset.role = 'delete'

            deleteBtn.innerHTML = `
                <svg 
                    data-role="delete"
                    data-id="${movie.id}"
                    class="w-6 h-6" 
                    data-darkreader-inline-stroke="" 
                    fill="none" 
                    stroke="currentColor" 
                    style="--darkreader-inline-stroke: currentColor;" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                </svg> 
                <span 
                    data-role="delete"
                    data-id="${movie.id}"
                >
                    Eliminar
                </span>
            `
            
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
            serieView.classList.add('serie-view', 
                                    'card', 
                                    'std-y-spacing')
            serieView.dataset.id = series.id
            
            // Título de la serie
            const serieTitle = document.createElement('h4')
            serieTitle.classList.add('subtitle', 
                                     'card-title', 
                                     'center-align', 
                                     'std-bottom-spacing', 
                                     'reset-margins')
            serieTitle.textContent = series.name
    
            // Temporada
            const season = document.createElement('p')
            season.textContent = 'Temporada: ' + series.season
    
            // Episodio
            const episode = document.createElement('p')
            episode.textContent = 'Último episodio visto: ' + series.episode
    
            // Estado de la serie
            const serieStatus = document.createElement('span')
            serieStatus.innerHTML = `Estado: <span>${series.status}</span>`

            // Agregar una clase para dar estilos según si la película ha sido vista o no
            if (series.status === 'Finalizada') {
                serieStatus.classList.add('seen')
            } else {
                serieStatus.classList.add('pending')
            }

            // Botón de editar
            const editBtn = document.createElement('button')
            editBtn.classList.add('edit-btn', 
                                  'btn', 
                                  'modal-trigger', 
                                  'center-xy', 
                                  'sm-y-spacing', 
                                  'waves-effect', 
                                  'waves-light')

            // Propiedad para accionar la funcionalidad del boton
            editBtn.dataset.role = 'edit'
            // Guardar el id para usarlo al editar la serie
            editBtn.dataset.id = series.id
            // ID del modal que se abrirá al hacer click
            editBtn.dataset.target = 'register-serie-modal'

            editBtn.innerHTML = `
                <svg 
                    data-role="edit"
                    data-id="${series.id}"
                    class="w-6 h-6" 
                    data-darkreader-inline-stroke="" 
                    fill="none" 
                    stroke="currentColor" 
                    style="--darkreader-inline-stroke: currentColor;" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    ></path>
                </svg> 
                <span 
                    data-role="edit"
                    data-id="${series.id}"
                >
                    Editar
                </span>
            `

            // Botón de eliminar
            const deleteBtn = document.createElement('button')
            deleteBtn.classList.add('delete-btn', 
                                    'btn', 
                                    'center-xy', 
                                    'sm-y-spacing', 
                                    'waves-effect', 
                                    'waves-light')

            // Propiedad para accionar la funcionalidad del boton
            deleteBtn.dataset.role = 'delete'
            // Guardar el id para usarlo al borraar la serie
            deleteBtn.dataset.id = series.id

            deleteBtn.innerHTML = `
                <svg 
                    data-role="delete"
                    data-id="${series.id}"
                    class="w-6 h-6" 
                    data-darkreader-inline-stroke="" 
                    fill="none" 
                    stroke="currentColor" 
                    style="--darkreader-inline-stroke: currentColor;" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                </svg> 
                <span 
                    data-role="delete"
                    data-id="${series.id}"
                >
                    Eliminar
                </span>
            `
    
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
    updateMovie(idToUpdate) {
        // Obtener los datos actuales de la pelicula
        const moviesData = JSON.parse(localStorage.getItem('movies'))
        const currentMovieData = moviesData.filter(movie => movie.id === idToUpdate)

        // Reemplazar los campos del form con los datos actuales
        const {name, status} = currentMovieData[0]
        movieName.value = name

        // Modificar el input radio en base al estado
        if (status === 'Vista') {
            pendingStatusMovie.removeAttribute('checked')
            seenStatusMovie.setAttribute('checked', true)
        } else if (status === 'Pendiente') {
            seenStatusMovie.removeAttribute('checked')
            pendingStatusMovie.setAttribute('checked', true)
        }
    }

    // Actualizar serie
    updateSeries(idToUpdate) {
        // Obtener los datos actuales de la serie
        const seriesData = JSON.parse(localStorage.getItem('series'))
        const currentSeriesData = seriesData.filter(series => series.id === idToUpdate)

        // Reemplazar los campos del form con los datos actuales
        const {name, status, season, episode} = currentSeriesData[0]
        serieName.value = name
        serieSeason.value = season
        serieEpisode.value = episode

        // Modificar el input radio en base al estado
        if (status === 'Finalizada') {
            pendingStatusSerie.removeAttribute('checked')
            finishedStatusSerie.setAttribute('checked', true)
        } else if (status === 'Pendiente') {
            finishedStatusSerie.removeAttribute('checked')
            pendingStatusSerie.setAttribute('checked', true)
        }
    }

    // Eliminar pelicula
    deleteMovie(e) {
        // Comprobar con el usuario la eliminación de la pelicula
        const confirmDelete = confirm('¿Deseas eliminar esta película?')

        if (confirmDelete) {
            // Obtener el ID de la película a eliminar
            const idToDelete = e.target.dataset.id
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
            const idToDelete = e.target.dataset.id
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

    // Mostrar un mensaje que indique que no hay registros en la DB
    noData(msg, element) {
        element.classList.add('show')

        const noDataMessage = document.createElement('p')
        noDataMessage.classList.add('center-align')
        noDataMessage.textContent = msg

        element.appendChild(noDataMessage)
    }
}
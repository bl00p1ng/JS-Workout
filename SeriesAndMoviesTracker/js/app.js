// ********* CREATE *********

// Identificar si se va a registrar una pelicula o serie
const movie = document.querySelector('.movie button')
const serie = document.querySelector('.serie button')

movie.addEventListener('click', showMovieForm);
serie.addEventListener('click', showSerieForm);

// Mostrar el formulario de registro correspondiente
// Formulario para registrar película
const movieForm = document.querySelector('.movie_form')
// Formulario para registrar película
const serieForm = document.querySelector('.serie_form')

// Prevenir envio del form
movieForm.addEventListener('submit', e => e.preventDefault())
serieForm.addEventListener('submit', e => e.preventDefault())


function showMovieForm() {
    movieForm.classList.remove('hidden')
    movieForm.classList.add('show')
}

function showSerieForm() {
    serieForm.classList.remove('hidden')
    serieForm.classList.add('show')
}

let movies = []  // Almacena las peliculas
let series = []  // Almacena las series

// Peliculas
const registerMovie = document.querySelector('.register-movie')

// Registrar pelicula
const movieName = document.querySelector('.movie_name')
const seenStatusMovie = document.querySelector('#seen_status_movie')
const pendingStatusMovie = document.querySelector('#pending_status_movie')

// Guardar una pelicula
registerMovie.addEventListener('click', () => {
    movieStatus = ''
    
    if (seenStatusMovie.checked === true) {
        movieStatus = 'Vista'
    } else if (pendingStatusMovie.checked === true) {
        movieStatus = 'Pendiente'
    }
    
    movies.push({type: 'movie', name: movieName.value, movieStatus: movieStatus})

    // Activar el boton para mostrar los datos guardados
    showDataBtn.removeAttribute('disabled')

})


// Series
const registerSerie = document.querySelector('.register-serie')

const serieName = document.querySelector('.serie_name')
const season = document.querySelector('.season')
const episode = document.querySelector('.episode')
const finishedStatusSerie = document.querySelector('#finished_status_serie')
const pendingStatusSerie = document.querySelector('#pending_status_series')

// Guardar una serie
registerSerie.addEventListener('click', () => {
    serieStatus = ''

    if (finishedStatusSerie.checked === true) {
        serieStatus = 'Finalizada'
    } else if (pendingStatusSerie.checked === true) {
        serieStatus = 'Pendiente'
    }

    series.push({type: 'serie', name: serieName.value, season: parseInt(season.value), episode: parseInt(episode.value), serieStatus: serieStatus})
    
    // Activar el boton para mostrar los datos guardados
    showDataBtn.removeAttribute('disabled')
})

// ********* READ *********

// Mostrar datos en el DOM
const showData = document.querySelector('.show-data')
const showMovies = document.querySelector('.show-movies')
const showSeries = document.querySelector('.show-series')
const showDataBtn = document.querySelector('.show-data-btn')

showDataBtn.addEventListener('click', () => {
    // Deshabilitar boton para evitar duplicados
    showDataBtn.setAttribute("disabled", true)

    // Eliminar los elementos ya existentes el el DOM para evitar duplicados
    if (document.querySelector('.movie-view')) {
        document.querySelectorAll('.movie-view').forEach(element => element.remove())
    }
    if (document.querySelector('.serie-view')) {
        document.querySelectorAll('.serie-view').forEach(element => element.remove())
    }

    // Unificar peliculas y series en un array
    let db = [...movies, ...series]
    
    for(let element of db) {
        // Mostrar pelicula
        if(element.type === 'movie') {
            showMovies.classList.add('show')
            
            // Div que alberga los datos de la pelicula
            const movieView = document.createElement('div')
            movieView.classList.add('movie-view')
            
            // Título de la película
            const movieTitle = document.createElement('h4')
            movieTitle.textContent = element.name
            
            // Estado de la pelicula
            const movieStatus = document.createElement('span')
            movieStatus.textContent = element.movieStatus
            
            // Agregar el titulo y el estado al DIV movieView
            movieView.appendChild(movieTitle)
            movieView.appendChild(movieStatus)

            // Agregar el movieView al DOM
            showMovies.appendChild(movieView)
        } else if(element.type === 'serie') {
            showSeries.classList.add('show')
            
            // Div que alberga los datos de la serie
            const serieView = document.createElement('div')
            serieView.classList.add('serie-view')
            
            // Título de la serie
            const serieTitle = document.createElement('h4')
            serieTitle.textContent = element.name

            // Temporada
            const season = document.createElement('p')
            season.textContent = 'Temporada: ' + element.season

            // Episodio
            const episode = document.createElement('p')
            episode.textContent = 'Último episodio visto: ' + element.episode

            // Estado de la serie
            const serieStatus = document.createElement('span')
            serieStatus.textContent = element.serieStatus

            // Agregar elementos al DIV serieView
            serieView.appendChild(serieTitle)
            serieView.appendChild(season)
            serieView.appendChild(episode)
            serieView.appendChild(serieStatus)

            // Agregar el serieView al DOM
            showSeries.appendChild(serieView)
        }
    }
})
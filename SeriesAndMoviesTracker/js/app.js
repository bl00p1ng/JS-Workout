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

// Capturar el texto ingresado en el form
let db = []  // Almacena los datos registrados
let movies = []  // Almacena las peliculas
let series = []  // Almacena las series

// Peliculas
const registerMovie = document.querySelector('.register-movie')

// Registrar pelicula
const movieName = document.querySelector('.movie_name')
const movieStatus = document.querySelector('#seen_status_movie')

registerMovie.addEventListener('click', () => {
    movies.push({name: movieName.value, movieStatus: movieStatus.value})
    console.log(movies);
})


// Series
const serieName = document.querySelector('.serie_name').textContent
const season = parseInt(document.querySelector('.season').textContent)
const episode = parseInt(document.querySelector('.episode').textContent)

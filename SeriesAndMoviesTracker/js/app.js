// Identificar si se va a registrar una pelicula o serie
const movie = document.querySelector('.movie button')
const serie = document.querySelector('.serie button')

movie.addEventListener('click', showMovieForm);
serie.addEventListener('click', showSerieForm);

// Mostrar el formulario de registro correspondiente
function showMovieForm() {
    movie.classList.remove('hidden')
    movie.classList.add('show')
    console.log(movie.classList);
}

function showSerieForm() {
    serie.classList.remove('hidden')
    serie.classList.add('show')
    console.log(serie.classList);
}

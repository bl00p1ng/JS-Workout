export default class Series {
    constructor() {
        this.series = []  // Almacena las series
    }

    // Guardar una serie
    createSeries(seriesData) {
        this.series = [...this.series, seriesData]

        // Guardar series en localStorage
        localStorage.setItem('series', JSON.stringify(this.series))
    }

    // Getter de series
    getSeries() {
        return this.series
    }

    // Cargar los datos de las peliculas desde localStorage
    loadData(series) {
        series.forEach(serie => this.createSeries(serie))
        console.log(this.series);
    }
}
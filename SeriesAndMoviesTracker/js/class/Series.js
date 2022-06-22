export default class Series {
    constructor() {
        this.series = []  // Almacena las series
    }

    // Cargar los datos de las peliculas desde localStorage
    loadData(series) {
        series.forEach(serie => this.createSeries(serie))
    }

    // Guardar una serie
    createSeries(seriesData) {
        this.series = [...this.series, seriesData]

        // Guardar series en localStorage
        localStorage.setItem('series', JSON.stringify(this.series))
    }

    // Actualizar una serie por su ID
    updateSeries(newSeriesData) {
        // Buscar la serie por su ID
        this.series = this.series.map(serie => serie.id === newSeriesData.id ? newSeriesData : serie)

        // Guardar cambios en localStorage
        localStorage.setItem('series', JSON.stringify(this.series))
    }

    // Getter de series
    getSeries() {
        return this.series
    }
}
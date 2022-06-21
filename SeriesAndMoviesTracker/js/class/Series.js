export default class Series {
    constructor() {
        this.series = []  // Almacena las series
    }

    // Guardar una serie
    createSeries(seriesData) {
        this.series = [...this.series, seriesData]
    }

    getSeries() {
        return this.series
    }
}
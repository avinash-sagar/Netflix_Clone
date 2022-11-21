const API_KEY = "6c4d8e161d332a258364a8a4d46116b0"
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=18`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10751`,
    fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_geners=14`,
}
export default requests;        
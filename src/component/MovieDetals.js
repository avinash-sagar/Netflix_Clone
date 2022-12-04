import React from 'react'
import requests from '../requests'
import { Banner } from './Banner'
import { Row } from './MovieList'

export const MovieDetals = () => {
    return (
        <>
            <Banner />
            <Row title={"Netflix Original"} isLarge fetchURL={requests.fetchNetflixOriginal} />
            <Row title={"Trending Movies"} fetchURL={requests.fetchTrending} />
            <Row title={"Top Rated Movies"} fetchURL={requests.fetchTopRated} />
            <Row title={"Action Movies"} fetchURL={requests.fetchActionMovies} />
            <Row title={"Comedy Movies"} fetchURL={requests.fetchComedyMovies} />
            <Row title={"Horror Movies"} fetchURL={requests.fetchHorrorMovies} />
            <Row title={"Romantic Movies"} fetchURL={requests.fetchRomanceMovies} />
            <Row title={"Top Documentries"} fetchURL={requests.fetchDocumentries} />
        </>
    )
}

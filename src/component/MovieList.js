import React, { useEffect, useState } from 'react'
import instance from '../axios';
import "./MovieList.css"
import YouTube from "react-youtube"
import movieTrailer from 'movie-trailer'
const baseURL = "https://image.tmdb.org/t/p/w500/"

export const Row = ({ title, fetchURL, isLarge }) => {
    const [movies, setMovies] = useState();
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        async function getMovieDetails() {
            try {
                await instance({
                    url: `${fetchURL}`
                })
                    .then((res) => {
                        console.log("movie", res.data)
                        setMovies(res.data.results);
                    })
            }
            catch (err) {
                console.log(err)
            }
        }
        getMovieDetails()
    }, [fetchURL])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    }
    const handleClick = (movie) => {
        console.log(movie)
        if (trailerUrl) {
            setTrailerUrl("")
        }
        else {
            movieTrailer(movie?.name || movie?.title || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get("v"))
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <div style={{ margin: '10px' }} >
            <h2>{title} </h2>
            <div className={'row_posters'} >
                {
                    movies &&
                    movies?.map((movie) => {
                        return (
                            <img
                                key={movie?.id}
                                onClick={() => handleClick(movie)}
                                className={!isLarge ? 'row_poster' : 'row_poster1'}
                                src={`${baseURL}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                            />
                        )
                    })
                }
            </div>
            {trailerUrl ? <YouTube videoId={trailerUrl} opts={opts} /> : null}
        </div>
    )
};

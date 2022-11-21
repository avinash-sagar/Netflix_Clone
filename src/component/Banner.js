import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import instance from '../axios'
import requests from '../requests'
import "./Banner.css"
import movieTrailer from 'movie-trailer'
export const Banner = () => {
    const [movies, setMovies] = useState([]);
    const [movieUrl, setMovieUrl] = useState('')
    useEffect(() => {
        async function getBanner() {
            try {
                await instance({
                    url: `${requests.fetchNetflixOriginal}`
                }).then((res) => {
                    setMovies(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)])
                })
            }
            catch (e) {
                console.log(e)
            }
        }
        getBanner()

    }, [requests.fetchNetflixOriginal])
    function truncate(str) {
        return str?.length > 300 ? str?.substring(0, 300) + "..." : str;
    }
    const opts = {
        height: '450',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
        , zIndex: 2
    }
    const handleClick = (movie) => {
        console.log(movie)
        if (movieUrl) {
            setMovieUrl("")
        } else {
            movieTrailer(movie.name || "")
                .then((url) => {
                    const newUrl = new URLSearchParams(new URL(url).search)
                    setMovieUrl(newUrl.get("v"))
                })
                .catch(err => {

                })
        }
    }
    return (
        <div style={{
            backgroundSize: "cover",
            backgroundImage: `url( "https://image.tmdb.org/t/p/original/${movies?.backdrop_path
                }")`,
            backgroundPosition: 'center center',
            height: '60vh',
            fontSize: '50px',
            width: "100%",
            backgroundRepeat: 'no-repeat',
            objectFit: "contain",
        }} >
            <div className='banner-div' >
                <div className='banner' >
                    <h3>{movies?.name || movies?.original_name}  </h3>
                    <div className='btns' >
                        <button className='btn' onClick={() => handleClick(movies)} >
                            {movieUrl ? "Stop" : "Play"}
                        </button>
                        <button className='btn1' > My List </button>
                    </div>
                    <p>{truncate(movies?.overview)} </p>

                </div>
            </div>
            <div className='faded-bottom' />
            {movieUrl ?
                <YouTube
                    className='youTube_player'
                    style={{
                        position: "absolute",
                        top: '20px',
                        width: '70%',
                        left: '10%'
                    }}
                    opts={opts}
                    videoId={movieUrl}
                /> : null
            }
        </div>
    )
}   

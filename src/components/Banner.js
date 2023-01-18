import React, { useEffect, useState } from 'react'
import instance from '../instance'
import requests from '../request'
import './Banner.css'


function Banner() {


    const [movies, setmovies] = useState([])

    async function fetchmovies() {
        const request = await instance.get(requests.fetchNetflixOriginals)
        setmovies(request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)]);
    }

    console.log(movies);

    useEffect(() => {
        fetchmovies()
    }, [])
    
    // to cut off the discription of movies
    function truncate(str,n){
     return str?.length>n ? str?.substr(0,n-1)+"......" : str
    }

    return (
        <div className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                backgroundPosition: "center"

            }}
        >
            <div className='content'>

                <h1 className='title'>
                    {movies?.name}
                </h1>
                <h1 className='description'>
                {truncate(movies?.overview, 150)} 
                </h1>

            </div>
        </div>
    )
}

export default Banner
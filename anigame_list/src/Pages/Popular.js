import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Anime from '../Components/Anime';
import Navbar from '../Components/Navbar';
//import { db } from '../../../Models/Anime';

export default function Popular() {

    const [results, setResults] = useState([])
    const [database, setDatabase] = useState([]);
    //let results;
    /*
    fetch("https://gogoanime.consumet.stream/popular")
    .then((response) => response.json())
    .then((animelist) => {
        results = animelist;
    });
*/
    useEffect(() => {
        fetch("https://gogoanime.consumet.stream/popular")
        .then((response) => response.json())
        .then((animelist) => setResults(animelist))
       
      
    },[]);

    useEffect(() => {
        fetch('http://localhost:8080/anime')
        .then((response) => response.json())
        .then((dbinfo) => setDatabase(dbinfo));
    },[])  ;

    const isPresent = (anime) => {
        let present = false;
        console.log(database.length)
        for (let i = 0; i < database.length; i++) {
            console.log('heyyyyyyyyyyyyyyyyyyyyyyyy');
            console.log(JSON.parse(database[i].anime[0]));
            console.log(JSON.stringify(anime));
            //console.log(database[i]);
            //console.log(anime.animeId);
            var c = (JSON.stringify(database[i].anime)).indexOf(anime.animeId);
            console.log(c);
            if(JSON.parse(database[i].anime[0]).animeId == anime.animeId) {
                present = true;
            }
        }
        return present;
    }

    //console.log('data',consoles);

    //console.log(results);
    /*
    {results.length > 0 && (
        <ul>
            {results.map(anime => (
                <li>{anime.animeTitle}</li>
            ))}
        </ul>
    )}
    */
   

  return (
    <>
    <Navbar/>
    {results.length > 0 && (
        <ul>
            {results.map((anime) => (
                <div class='popular'>
                <li><Anime anime={anime}/></li>
                <div>
                <form action = "http://localhost:8080/anime/saveanime" method="POST">
                    <input required type="hidden" name="id" id="id" class="form-control"  value={JSON.stringify(anime)}></input>
                    <button type="submit" name="anime "id="anime" value="hi there" disabled={isPresent(anime)}>Add to Watchlist</button>
                </form>
                <form action = "http://localhost:8080/anime/saveanimewatched" method="POST">
                <input required type="hidden" name="id" id="id" class="form-control"  value={JSON.stringify(anime)}></input>
                    <button id={anime} disabled={isPresent(anime)}>Add to Watched</button>
                </form>
                </div>
                </div>
            ))}
        </ul>
    )}
    </> 
  )
}

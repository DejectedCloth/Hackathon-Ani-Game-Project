import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Anime from "./Anime";
import '../App.css';

export default function AnimeSearch() {

    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("");
    const [database, setDatabase] = useState([]);

    const onChange = e => {
        e.preventDefault();
        setSearch(e.target.value);
        
        //var url = "https://gogoanime.consumet.stream/search?keyw="+e.target.value;

        fetch("https://gogoanime.consumet.stream/search?keyw="+e.target.value)
        .then((response) => response.json())
        .then((animelist) => setResults(animelist));
    }

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


  return (
    <>
    <Navbar/>
        <div class="search-Content">
            <div class="anime-input">
                <input type="text" placeholder="search an anime" value={search} onChange={onChange}/>
            </div>
            {results.length > 0 && (
                <ul>
                    {results.map(anime => (
                        <div class='popular'>
                        <li id={anime.animeId}><Anime anime={anime}/></li>
                        <form action = "http://localhost:8080/anime/saveanime" method="POST">
                            <input required type="hidden" name="id" id="id" class="form-control"  value={JSON.stringify(anime)}></input>
                            <button type="submit" name="anime "id="anime" value="hi there" disabled={isPresent(anime)}>Add to Watchlist</button>
                        </form>
                        <form action = "http://localhost:8080/anime/saveanimewatched" method="POST">
                            <input required type="hidden" name="id" id="id" class="form-control"  value={JSON.stringify(anime)}></input>
                            <button id={anime} disabled={isPresent(anime)}>Add to Watched</button>
                        </form>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    </>
  )
}

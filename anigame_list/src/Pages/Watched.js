import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import Anime from '../Components/Anime';

export default function Watched() {

    const [database, setDatabase] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/anime')
        .then((response) => response.json())
        .then((dbinfo) => setDatabase(dbinfo));
    },[]);
    console.log(database);
  return (
    <>
    <Navbar/>
    {database.length > 0 && (
        <div>
            {database.map((animes) => {
                if(animes.watched === true) {
                    return <>
                        <Anime anime={JSON.parse(animes.anime[0])}/>
                        <form action = "http://localhost:8080/anime/swapwatchlist" method="POST">
                            <input required type="hidden" name="id" id="id" class="form-control"  value={animes._id}></input>
                            <button type="submit" name="anime "id="anime">Switch to WatchList</button>
                        </form>
                        <form action = "http://localhost:8080/anime/deletewatched?_method=DELETE" method="POST">
                            <input required type="hidden" name="id" id="id" class="form-control"  value={animes._id}></input>
                            <button type="submit" class="btn btn-primary">Remove</button>
                        </form>
                    </>
                } else {
                    return null
                }
            })}
        </div>
    )}

</>
  )
}

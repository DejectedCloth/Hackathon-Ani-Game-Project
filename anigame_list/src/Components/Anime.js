import React from 'react'

export default function Anime({anime}) {
    console.log(anime);
  return (
    <div class='container'>
        <div class='image'>
            <img src={anime.animeImg} alt={anime.animeTitle} height="275" width="200"></img>
        </div>
        <div>
            <h2>{anime.animeTitle}</h2>
            <h3>{anime.releasedDate}</h3>
        </div>
    </div>
  )
}

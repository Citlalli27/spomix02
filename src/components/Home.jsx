import React from 'react'
import ArtistContainer from './ArtistContainer'
import SongContainer from './SongContainer'
import Artist from './Artist'
import dataArtist from '../artist.json'
import Song from './Song'
import dataSong from '../song.json'
import NavbarHome from './NavbarHome'
import Sidebar from './Sidebar'


const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#2d2965] via-[#4b477f] to-rose-500 text-white '>
      <NavbarHome />
      <div className='flex '>
      <Sidebar/>
        <div className='flex flex-col '>
          <ArtistContainer>
            {dataArtist.map(artista=> 
              <Artist 
              name={artista.name}
              imagen={artista.imagen}/>
              
              )}
          </ArtistContainer>

          <SongContainer>
            {
              dataSong.map(song=>
                <Song
                artist={song.artist}
                song={song.song}
                imagen={song.imagen} />
                )}
          </SongContainer>
        </div>
        
      </div>   
    </div>
  )
}

export default Home

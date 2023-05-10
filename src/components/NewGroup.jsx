import React from 'react'
import NavbarHome from './NavbarHome'
import Sidebar from './Sidebar'
import ArtistContainer from './ArtistContainer'
import SongContainer from './SongContainer'
import Artist from './Artist'
import dataArtist from '../artist.json'
import Song from './Song'
import dataSong from '../song.json'
import GroupsContainer from './GroupsContainer'
import Group from './Group'


const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#2d2965] via-[#4b477f] to-rose-500 text-white '>
      <NavbarHome />
    <div className='flex'>
      <Sidebar />
      <GroupsContainer>
    
      </GroupsContainer>
    </div>
      
      </div>   
    
  )
}

export default Home

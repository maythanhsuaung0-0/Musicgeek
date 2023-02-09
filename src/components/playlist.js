import React from 'react'
import Playlistdata from './playlistdata'
import songs from '../data/songs'
function Playlist() {
  return (
    <div className='grid gap-3 2xl:gap-5'>
        <Playlistdata head={true} ttl={'title'} artist={'Singer'} album={'Album'}/>
        {songs.map((e,i)=><Playlistdata key={i} id={i} cover={e.url} ttl={e.ttl} artist={e.singer} album={e.album} time={e.time}/>)}
    </div>
  )
}

export default Playlist
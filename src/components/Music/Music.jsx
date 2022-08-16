import { useEffect, useState } from 'react'
import axios from "axios"
import SongCard from "./SongCard"

const Music = () => {
    const [songRender, setSongRender] = useState()

    useEffect(() => {
      axios.get("/getsongs").then((res) => {
        setSongRender(res.data);
      });
    }, []);
    console.log(songRender);

    const songDisplay = (songs) => {
      return (
        <SongCard
          songs={songs.tracks}
        />
      );
    };
    return (
        <div className="musicContainer">
            <h1>This is the Music Page</h1>
            {songDisplay}
        </div>
    )
}
export default Music; 

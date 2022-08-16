import { useState } from 'react'

const SongCard = (props) => {
    return (
        <div className="song-card-master">
            <div className="song-card-child">
                <div className="song-content">{props.songs}</div>
            </div>
        </div>
    )
}
export default SongCard;
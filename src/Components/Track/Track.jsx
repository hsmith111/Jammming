import './Track.css';
import React, { useState } from 'react';

function Track({ songs }) {

    function handleClickToAddSong() {

}
    return (
        <div>
            {songs.map((song) => (
                <div key={song.id}>
                <p>
                    <strong>{song.name}</strong>
                    <br />
                    <em>{song.artist}</em>
                    <br />
                    {song.album}
                </p>
                <button>+</button>
                <hr />
                </div>
            ))} 
        </div>
    );
}

export default Track;
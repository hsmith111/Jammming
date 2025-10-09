import './Tracklist.css';
import React, { useState } from 'react';
import Track from '../Track/Track';

function Tracklist({customPlaylist, setCustomPlaylist}) {

    function handleClickToSavePlaylist() {

    }

    return (
        <div className="box tracklist">
            <>
            <input type="text" className="tracklistName" placeholder="Add playlist name..." />
            <button className="saveButton" >Save to Spotify</button>
            <Track 
                songs={customPlaylist} 
                customPlaylist={customPlaylist}
                setCustomPlaylist={setCustomPlaylist}
                isInTracklist={true}
                />
            </>
        </div>
    );
}

export default Tracklist;
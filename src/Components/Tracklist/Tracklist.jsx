import './Tracklist.css';
import React, { useState } from 'react';
import Track from '../Track/Track';

function Tracklist({customPlaylist, setCustomPlaylist}) {

    return (
        <div className="box tracklist">
            <>
            <input type="text" className="tracklistName" placeholder="Tracklist" />
            <Track 
                songs={customPlaylist} 
                customPlaylist={customPlaylist}
                setCustomPlaylist={setCustomPlaylist}
                isInTracklist={true}
                />
            <button className="saveButton" >Save to Spotify</button>
            </>
        </div>
    );
}

export default Tracklist;
import './Tracklist.css';
import React, { useState } from 'react';
import Track from '../Track/Track';

function Tracklist({customPlaylist}) {

    return (
        <div className="box tracklist">
            <>
            <h2>Tracklist</h2>
            <Track 
                songs={customPlaylist} 
                customPlaylist={customPlaylist}
                />
            <button >Save to Spotify</button>
            </>
        </div>
    );
}

export default Tracklist;
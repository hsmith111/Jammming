import './Tracklist.css';
import React, { useState } from 'react';
import Track from '../Track/Track';

function Tracklist({customPlaylist, setCustomPlaylist}) {

    return (
        <div className="box tracklist">
            <>
            <h2>Tracklist</h2>
            <Track 
                songs={customPlaylist} 
                customPlaylist={customPlaylist}
                setCustomPlaylist={setCustomPlaylist}
                isInTracklist={true}
                />
            <button >Save to Spotify</button>
            </>
        </div>
    );
}

export default Tracklist;
import './SearchResults.css';
import Track from '../Track/Track';
import React, { useState } from 'react';

function SearchResults({ songs, customPlaylist, setCustomPlaylist}) {

    return (
        <div className="box searchResults">
            <h2>Search Results</h2>
            <Track 
                songs={songs} 
                setCustomPlaylist={setCustomPlaylist} 
                customPlaylist={customPlaylist} 
                isInTracklist={false}
                />
        </div>
    );
}

export default SearchResults;
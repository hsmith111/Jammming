import './SearchResults.css';
import Track from '../Track/Track';
import React, { useState } from 'react';

function SearchResults({customPlaylist, setCustomPlaylist}) {
    const [songs, setSongs] = useState([
            {
            name: "Hearing Double",
            artist: "Jason Mraz",
            album: "Look For The Good",
            id: "1",
        },
            {
            name: "Unwritten",
            artist: "Natasha Bedingfield",
            album: "Unwritten",
            id: "2",
        },
            {
            name: "Be Kind to Yourself",
            artist: "Andrew Peterson",
            album: "The Burning Edge of Dawn",
            id: "3",
        },
        {
            name: "What If",
            artist: "Cody Fry",
            album: "The End",
            id: "4",
        },
            {
            name: "You Belong With Me",
            artist: "Taylor Swift",
            album: "Fearless",
            id: "5",
        },
            {
            name: "The Heart of Life",
            artist: "John Mayer",
            album: "Continuum",
            id: "6",
        }
    ]);

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
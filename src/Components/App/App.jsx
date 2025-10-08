import './App.css'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Tracklist from '../Tracklist/Tracklist';
import React, {useState} from 'react';

function App() {
    const [customPlaylist, setCustomPlaylist] = useState([]);

    return (
    <>
    <h1>Jammming</h1>
    <div>
        <SearchBar />
    </div>
    <div className="container">
        {/* <Playlist /> */}
        <SearchResults customPlaylist={customPlaylist} setCustomPlaylist={setCustomPlaylist} />
        <Tracklist customPlaylist={customPlaylist} setCustomPlaylist={setCustomPlaylist} />
    </div>
    </>
 );
}

export default App
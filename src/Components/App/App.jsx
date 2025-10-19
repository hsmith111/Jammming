import './App.css'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Tracklist from '../Tracklist/Tracklist';
import React, {useState} from 'react';

function App() {
    const [customPlaylist, setCustomPlaylist] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    console.log("App searchResults state:", searchResults);

    return (
    <>
    <h1>Jammming</h1>
    <div>
        <SearchBar setSearchResults={setSearchResults} />
    </div>
    <div className="container">
        {/* <Playlist /> */}
        <SearchResults songs={searchResults} 
                setCustomPlaylist={setCustomPlaylist} 
                customPlaylist={customPlaylist}  />
        <Tracklist customPlaylist={customPlaylist} setCustomPlaylist={setCustomPlaylist} />
    </div>
    </>
 );
}

export default App;
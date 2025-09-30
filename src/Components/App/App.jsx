import './App.css'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Tracklist from '../Tracklist/Tracklist';
import Track from '../Track/Track';

function App() {
 return (
    <>
        <SearchResults />
        <SearchBar />
        <Playlist />
        <Tracklist />
        <Track />
    </>
 );
}

export default App
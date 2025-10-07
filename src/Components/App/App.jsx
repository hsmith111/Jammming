import './App.css'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Tracklist from '../Tracklist/Tracklist';
import Track from '../Track/Track';

function App() {
 return (
    <>
    <h1>Jammming</h1>
    <div>
        <SearchBar />
    </div>
    <div className="container">
        {/* <Playlist /> */}
        <SearchResults />
        <Tracklist />
    </div>
    </>
 );
}

export default App
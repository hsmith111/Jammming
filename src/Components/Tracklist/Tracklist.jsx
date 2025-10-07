import './Tracklist.css';
import Track from '../Track/Track';

function Tracklist() {
    return (
        <div className="box tracklist">
            <h2>Tracklist</h2>
            <Track />
            <button >Save to Spotify</button>
        </div>
    );
}

export default Tracklist;
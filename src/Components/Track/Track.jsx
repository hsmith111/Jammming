import './Track.css';

function Track({ songs, customPlaylist, setCustomPlaylist, isInTracklist }) {
    const handleClickToAddSong = (song) => {
        if (!customPlaylist.includes(song)) {

            setCustomPlaylist([...customPlaylist, song]);
        }
}

    const handleClickToRemoveSong = (songToRemove) => {
        setCustomPlaylist(prevTracklist => prevTracklist.filter(song => song.id !== songToRemove.id));
    }
    return (
        <div>
            {songs.map((song) => (
                <div key={song.id}>
                <p>
                    <strong>{song.name}</strong>
                    <br />
                    <em>{song.artist}</em>
                    <br />
                    {song.album}
                </p>
                {!isInTracklist ? 
                    <button className="addSongButton" onClick={() => handleClickToAddSong(song)}>+</button> :
                    <button className="removeSongButton" onClick={() => handleClickToRemoveSong(song)}>x</button>
                }
                <hr />
                </div>
            ))} 
        </div>
    );
}

export default Track;
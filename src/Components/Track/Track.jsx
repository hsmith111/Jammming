import './Track.css';

function Track({ songs, customPlaylist, setCustomPlaylist, isInTracklist }) {
    const handleClickToAddSong = (song) => {
        if (!customPlaylist.some(existingSong => existingSong.id === song.id)) {
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
                    <div className="trackInfoLayout">
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
                    </div>
                    <hr />
                </div>
            ))} 
        </div>
    );
}

export default Track;
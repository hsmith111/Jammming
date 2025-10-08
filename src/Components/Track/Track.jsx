import './Track.css';

function Track({ songs, customPlaylist, setCustomPlaylist }) {
    console.log(customPlaylist);
    const handleClickToAddSong = (song) => {
        setCustomPlaylist([...customPlaylist, song]);
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
                <button onClick={() => handleClickToAddSong(song)}>+</button>
                <hr />
                </div>
            ))} 
        </div>
    );
}

export default Track;
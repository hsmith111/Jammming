import './Track.css';

function Track() {
    const songInfo = {
        name: "Hearing Double",
        artist: "Jason Mraz",
        album: "Look For The Good",
        id: "",
    };
    return (
        <div>
            <p>{songInfo.name}</p>
            <p>{songInfo.artist}</p>
            <p>{songInfo.album}</p>
        </div>
    );
}

export default Track;
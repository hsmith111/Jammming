import './Track.css';

function Track() {
    const songs = [
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
    }
];
    return (
        <div>
            {songs.map((song) => (
            <p key={song.id}><strong>{song.name}</strong>
            <br />
            <em>{song.artist}</em>
            <br />
            {song.album}</p>
            ))} 
        </div>
    );
}

export default Track;
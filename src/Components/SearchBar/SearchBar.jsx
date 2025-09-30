import './SearchBar.css';

function SearchBar() {
    return (
        <>
            <form>
                {/* <label>🔍 Find Song: </label> */}
                <input type="text" placeholder="🔍 Enter song title" />
                <button>Search</button>
            </form>
        </>
    );
}

export default SearchBar;
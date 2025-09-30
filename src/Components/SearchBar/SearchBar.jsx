import './SearchBar.css';

function SearchBar() {
    return (
        <>
            <h1>Search Bar Component</h1>
            <form>
                <label>🔍 Find Song: </label>
                <input type="text" />
                <button>Search</button>
            </form>
        </>
    );
}

export default SearchBar;
import './SearchBar.css';

function SearchBar() {
    return (
        <>
            <form>
                <label>🔍 Find Song: </label>
                <input type="text" />
                <button>Search</button>
            </form>
        </>
    );
}

export default SearchBar;
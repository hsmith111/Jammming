import './SearchBar.css';
import React, { useState, useEffect } from 'react';
import { generateCodeVerifier, generateCodeChallenge } from '../../pkce.js';

function SearchBar({ setSearchResults }) {
    const [token, setToken] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const CLIENT_ID = '7d670a33860f4f9a9561628cdd368b8e';
    const REDIRECT_URI = 'https://jammming-hs.netlify.app/';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const SCOPES = 'user-read-private user-read-email playlist-modify-public';

   useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log('URL code:', code);

    if (code) {
        const codeVerifier = localStorage.getItem('pkce_code_verifier');
        console.log('Using token:', token);

        fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: CLIENT_ID,
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: REDIRECT_URI,
                code_verifier: codeVerifier,
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log("Token data:", data);
                setToken(data.access_token);
                localStorage.setItem('token', data.access_token);
                setSearchResults([]);
                window.history.replaceState({}, document.title, '/');
            });
    } else {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            setToken(savedToken);
            setSearchResults([]);
        }
    }
}, []);

    async function login() {
        const codeVerifier = generateCodeVerifier();
        const codeChallenge = await generateCodeChallenge(codeVerifier);
        localStorage.setItem('pkce_code_verifier', codeVerifier);

        const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES)}&code_challenge_method=S256&code_challenge=${codeChallenge}`;

        window.location = authUrl;
    }

    const searchSpotify = (event) => {
    event.preventDefault();

    if (!token) {
        console.warn("No access token. Please log in to Spotify.");
        alert("Please log in to Spotify before searching.");
        return;
    }

    if (!searchTerm.trim()) {
        console.warn("Search term is empty.");
        return;
    }

    const encodedQuery = encodeURIComponent(searchTerm);
    const searchURL = `https://api.spotify.com/v1/search?q=${encodedQuery}&type=track`;

    fetch(searchURL, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Spotify API error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(jsonResponse => {
        if (jsonResponse.tracks && jsonResponse.tracks.items) {
            setSearchResults(jsonResponse.tracks.items);
            console.log("Search results:", jsonResponse.tracks.items);
        } else {
            console.log("No tracks found.");
            setSearchResults([]);
        }
    })
    .catch(error => {
        console.error("Spotify search failed:", error);
        alert("Failed to fetch songs. Make sure you're logged in and try again.");
    });
};
    return (
        <>
            {!token ? (
                <button onClick={login} className="loginButton">Login to Spotify</button>
            ) : (
            <form onSubmit={searchSpotify} >
                <input type="text" id="search" placeholder="🔍 Enter song title" onChange={e => setSearchTerm(e.target.value)} value={searchTerm} />
                <button type="submit" className="searchButton" disabled={!searchTerm.trim()}>Search</button>
            </form>
            )

        }
            </>
        );
} 
export default SearchBar;

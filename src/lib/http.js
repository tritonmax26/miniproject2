import react from 'react';
import axios from "axios"

const http = axios.create({
    baseURL: "https://moviesdatabase.p.rapidapi.com",   
    headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    }

});

export default http

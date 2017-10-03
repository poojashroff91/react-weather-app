
import axios from 'axios';
const API_KEY = '189ede493d9b84370ee75e85cd798609';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

//Application state holds all the app data
//We can only change the state with reducers and actions
//Dispatch an action creator which will make the Ajax Request

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
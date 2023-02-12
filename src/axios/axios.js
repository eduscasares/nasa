import axios from "axios";

export const api_key = 'FKZNcXQQ2LCN5pcMWcqf9b4uWhwoXLf9xk0cfrqf';

export const nasaAPI = axios.create({
    baseURL: 'https://api.nasa.gov/planetary',
});
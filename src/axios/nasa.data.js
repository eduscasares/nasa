import { nasaAPI, api_key } from "./axios";

function randomizer(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

export async function NasaDataWeekly() {

    // day = randomizer(1, 30); 
    // month = randomizer(1, 12);
    // year = randomizer(2000, 2020);

    const date = new Date();
    let week = 7;
    let last = new Date(date.getTime() - (week * 24 * 60 * 60 * 1000));

    let dayAgo = last.getDate();
    let monthAgo = last.getMonth();
    let yearAgo = last.getFullYear();

    let currDay = date.getDate();
    let currMonth = date.getMonth();
    let currYear = date.getFullYear();

    try {

        const response = await nasaAPI.get(`apod?api_key=${ api_key }&start_date=${yearAgo}-${monthAgo}-${dayAgo}&end_date=${currYear}-${currMonth}-${currDay}`);
        
        return response;

    } catch (error) {
        
        console.log(error)

    }

}
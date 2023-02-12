import axios from "axios";

function randomizer(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

export async function NasaData() {

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

        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=FKZNcXQQ2LCN5pcMWcqf9b4uWhwoXLf9xk0cfrqf&start_date=${currYear}-${currMonth}-${currDay}&end_date=${yearAgo}-${monthAgo}-${dayAgo}`);

        console.log(response)
        
        return response;

    } catch (error) {
        
        console.log(error)

    }

}
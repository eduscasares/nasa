import axios from "axios";

function randomizer(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

export async function NasaData(day, month, year) {

    day = randomizer(1, 30); 
    month = randomizer(1, 12);
    year = randomizer(2000, 2020);

    try {

        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=FKZNcXQQ2LCN5pcMWcqf9b4uWhwoXLf9xk0cfrqf&date=${year}-${month}-${day}`);
        
        return response;

    } catch (error) {
        
        NasaData(day, month, year);

    }

}
import axios from "axios";

export async function NasaData() {

    try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=FKZNcXQQ2LCN5pcMWcqf9b4uWhwoXLf9xk0cfrqf');
        
        return response;

    } catch (error) {
        return console.log(error);
    }

}
import axios from "axios";

export const NasaData = () => {

    axios.get( 'https://api.nasa.gov/planetary/apod?api_key=FKZNcXQQ2LCN5pcMWcqf9b4uWhwoXLf9xk0cfrqf' )
        .then( response => {
            console.log( response )
        })
        .catch( error => console.log( error ) )

}
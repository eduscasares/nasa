import { useState, useEffect } from 'react';
import '../../styles/planet.scss';
import '../../utilities/utilities';
import close from '../../assets/close.svg';
import { NasaData } from '../../axios/nasa.data';
import NewPlanet from '../pure/NewPlanet';
import DateSelector from '../pure/DateSelector';
import Spinner from '../pure/Spinner';
import right from '../../assets/right.svg'


const ListItem = () => {

    const [planets, setPlanet] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        NasaData().then( response => {

            const aux = [...planets];
            aux.push( response )
            setPlanet( aux )
            
            setTimeout(() => {
                setLoading( false )
            }, 1000);

        })

    }, [])
   

    function addPlanet() {

        NasaData().then( response => {

            const aux = [...planets];
            aux.push( response )
            setPlanet( aux )

        })

    }
    
    function deletePlanet(planet) {

        const index = planets.indexOf(planet);
        const aux = [...planets];
        aux.splice(index, 1);
        setPlanet(aux)

    }

    return (

        <>
            <div className='planets flex gap-6 overflow-x-scroll' id='planets'>

                {

                    loading === true ? 

                    <Spinner /> : 

                        planets.length === 0 ?

                            <p>Add a new planet by clicking the button below!</p> :

                            planets.map( (element, index) => {

                                return (
        
                                    <article key={ index } className='relative z-10 flex flex-col justify-end rounded-xl p-5 min-w-full h-full overflow-hidden shadow-md'>
        
                                        <img onClick={ () => deletePlanet(element) } className='close absolute z-10 top-5 right-5 cursor-pointer w-6' src={ close } alt="Close" />
        
                                        <img className='absolute top-0 left-0 w-full h-full object-cover z-0' src={ element.data.url } alt={ element.data.title } />
        
                                        <div className='meta-info relative z-10'>
        
                                            <h2 className='text-xl font-bold mb-2'>{ element.data.title }</h2>
                                            <p>{ element.data.date }</p>
        
                                        </div>
        
                                    </article>
        
                                )
        
                            })



                }

            </div>

            <div className='flex items-center gap-12 mt-10'>

                <NewPlanet handleClick={ addPlanet } />
                { planets.length > 3 ? <img className='lateral-bounce w-6' src={ right } alt="Right" /> : null }

                <DateSelector />

            </div>
        </>
        
    );
}

export default ListItem;

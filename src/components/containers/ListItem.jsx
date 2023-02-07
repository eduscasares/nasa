import { useState, useEffect } from 'react';
import '../../styles/planet.scss';
import '../../utilities/utilities';
import close from '../../assets/close.svg';
import { NasaData } from '../../axios/nasa.data';
import NewPlanet from '../pure/NewPlanet';

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

                    loading === true ? <p>Cargando...</p> : 

                    planets.map( (element, index) => {

                        return (

                            <article key={ index } className='relative z-10 flex flex-col justify-end rounded-xl p-5 min-w-full h-full overflow-hidden shadow-md'>

                                <img onClick={ () => deletePlanet(element) } className='close absolute z-10 top-5 right-5 cursor-pointer w-6' src={ close } alt="Close" />

                                <img className='absolute top-0 left-0 w-full h-full object-cover z-0' src={ element.data.url } alt={ element.data.title } />

                                <div className='meta-info relative z-10'>

                                    <h2 className='text-xl font-bold mb-2'>{ element.data.title }</h2>
                                    {/* <p>{ element.data.explanation }</p> */}

                                </div>

                            </article>

                        )

                    })

                }

            </div>

            <NewPlanet handleClick={ addPlanet } />
        </>
        
    );
}

export default ListItem;

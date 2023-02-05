import React from 'react';
import '../../styles/planet.scss';
import '../../utilities/utilities'

const ListItem = () => {
    return (
        <div className='planets flex gap-6 overflow-x-scroll' id='planets'>

            {/* //TODO: Aquí debemos incluir un mapeo del estado trayendo la información obtenida con AXIOS */}

            <article className='relative z-10 flex flex-col justify-end rounded-xl p-5 w-full h-full overflow-hidden shadow-md'>

                <img className='absolute top-0 left-0 w-full h-full object-cover z-0' src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2111&q=80" alt="Earth planet" />
                

                <div className='relative z-10'>

                    <h2 class='text-xl font-bold mb-2'>Earth planet</h2>
                    <p>Planet description</p>
                </div>

            </article>
            <article className='relative z-10 flex flex-col justify-end rounded-xl p-5 w-full h-full overflow-hidden shadow-md'>

                <img className='absolute top-0 left-0 w-full h-full object-cover z-0' src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2111&q=80" alt="Earth planet" />
                

                <div className='relative z-10'>

                    <h2 class='text-xl font-bold mb-2'>Earth planet</h2>
                    <p>Planet description</p>
                </div>

            </article>
            <article className='relative z-10 flex flex-col justify-end rounded-xl p-5 w-full h-full overflow-hidden shadow-md'>

                <img className='absolute top-0 left-0 w-full h-full object-cover z-0' src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2111&q=80" alt="Earth planet" />
                

                <div className='relative z-10'>

                    <h2 class='text-xl font-bold mb-2'>Earth planet</h2>
                    <p>Planet description</p>
                </div>

            </article>
            <article className='relative z-10 flex flex-col justify-end rounded-xl p-5 w-full h-full overflow-hidden shadow-md'>

                <img className='absolute top-0 left-0 w-full h-full object-cover z-0' src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2111&q=80" alt="Earth planet" />
                

                <div className='relative z-10'>

                    <h2 class='text-xl font-bold mb-2'>Earth planet</h2>
                    <p>Planet description</p>
                </div>

            </article>
            <article className='relative z-10 flex flex-col justify-end rounded-xl p-5 w-full h-full overflow-hidden shadow-md'>

                <img className='absolute top-0 left-0 w-full h-full object-cover z-0' src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2111&q=80" alt="Earth planet" />
                

                <div className='relative z-10'>

                    <h2 class='text-xl font-bold mb-2'>Earth planet</h2>
                    <p>Planet description</p>
                </div>

            </article>
            <article className='relative z-10 flex flex-col justify-end rounded-xl p-5 w-full h-full overflow-hidden shadow-md'>

                <img className='absolute top-0 left-0 w-full h-full object-cover z-0' src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2111&q=80" alt="Earth planet" />
                

                <div className='relative z-10'>

                    <h2 class='text-xl font-bold mb-2'>Earth planet</h2>
                    <p>Planet description</p>
                </div>

            </article>
            <article className='relative z-10 flex flex-col justify-end rounded-xl p-5 w-full h-full overflow-hidden shadow-md'>

                <img className='absolute top-0 left-0 w-full h-full object-cover z-0' src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2111&q=80" alt="Earth planet" />
                

                <div className='relative z-10'>

                    <h2 class='text-xl font-bold mb-2'>Earth planet</h2>
                    <p>Planet description</p>
                </div>

            </article>
            <article className='relative z-10 flex flex-col justify-end rounded-xl p-5 w-full h-full overflow-hidden shadow-md'>

                <img className='absolute top-0 left-0 w-full h-full object-cover z-0' src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2111&q=80" alt="Earth planet" />
                

                <div className='relative z-10'>

                    <h2 class='text-xl font-bold mb-2'>Earth planet</h2>
                    <p>Planet description</p>
                </div>

            </article>

            

        </div>
        
    );
}

export default ListItem;

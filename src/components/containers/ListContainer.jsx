import ListItem from '../pure/ListItem';
import { RocketLaunchIcon } from '@heroicons/react/24/solid'

const ListContainer = () => {
    return (
        <>

            <ListItem />

            <button className='btn-primary flex py-4 px-5 mt-4 rounded-xl bg-slate-800 text-white transition-opacity duration-150 hover:opacity-80'>
                <RocketLaunchIcon className='w-6 mr-3' />
                Obtain new planet
            </button>

        </>
    );
};

export default ListContainer;

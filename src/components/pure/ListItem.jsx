import React from 'react';

const ListItem = () => {
    return (
        <div className='flex flex-col border border-gray-200 rounded p-5'>
            <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Earth planet" />
            <h2>Earth planet</h2>
            <p>Planet description</p>
        </div>
    );
}

export default ListItem;

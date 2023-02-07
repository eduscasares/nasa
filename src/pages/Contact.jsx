import React from 'react';

const Contact = () => {
    return (
        <div className='self-start mb-16'>
        <h1 className="text-2xl lg:text-6xl font-bold mb-5 md:text-5xl sm:text-2xl">
            Ready to start a new project?
        </h1>
            
        <p className='text-lg font-thin md:text-2xl tracking-wider sm:text-lg text-white mb-6'>Email me:
            <a href="mailto:eduardo.scasares@gmail.com" className='text-lg font-bold md:text-2xl tracking-wider sm:text-lg text-white' to={ '/contact' }> eduardo.scasares@gmail.com</a>
        </p>
        
    </div>
    );
}

export default Contact;

import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom';

const Button: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Link to="#" className='hover:bg-blue-600 bg-blue-500 p-big px-4 py-4 rounded-[.1rem] text-white'>
            {children}
        </Link>
    )
}

export default Button;

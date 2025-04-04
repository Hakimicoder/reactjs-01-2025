import React, { PropsWithChildren } from 'react'

const Card: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='dark card-dark hover: px-6 py-8 rounded-[.1rem] text-white shadow-md'>
            {children}
        </div>
    )
}

export default Card;
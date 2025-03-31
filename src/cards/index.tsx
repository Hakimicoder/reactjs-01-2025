import React, { PropsWithChildren } from 'react'

const Card: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='dark px-6 py-8 rounded-lg text-white shadow-md'>
            {children}
        </div>
    )
}

export default Card;

// const Card = () => {
//   return (
//     <div className="dark px-6 py-8 rounded-lg text-white">
//         <h2 className="title-big mb-4 text-blue-500 font-bold">Card Title</h2>
//         <p className="p-big">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, sint quam temporibus fugit aliquam aut sapiente asperiores officia, consectetur totam iste facilis inventore earum esse aspernatur eligendi molestiae veritatis! Doloremque.</p>

//         <div className="mt-12 mb-6">
//               <Link to="/Home" className="bg-blue-500 rounded-sm hover:bg-blue-600 text-white px-8 py-4 p-sm capitalize">read more</Link>
//         </div>
//     </div>
//   )
// };

// export default Card;
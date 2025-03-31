import React from 'react'
// import { idText } from 'typescript';

let elements = [
    { name: 'Attendance', icon: '🎇', value: 1},
    { name: 'Liste de classe', icon: '🎁', value: 2},
    { name: 'Timetable', icon: '🎨', value: 3},
    { name: 'Examens', icon: '🎇', value: 4},
    { name: 'Calendrier', icon: '🎇', value: 5},
    { name: 'Nouveautés', icon: '🎇', value: 6},
    { name: 'Exercices', icon: '🎇', value: 7},
    { name: "Résulats des examens", icon: '🎇', value: 8},
    { name: 'Réglages', icon: '⚙', value: 9},
    { name: 'Configurations', icon: '🎇', value: 10 }
]

const AdminInterface = () => {
    return (
        <>
            <div className="sidebar m-h-screen dark w-[15%] white fixed h-screen">
                <ul className='p-big px-4 py-4'>
                    <li className='uppercase font-bold flex justify-between items-center mb-8'>Shool <span className='burger flex flex-col gap-2'>
                        <div className='h-[.1rem] w-[2rem] bg-white'></div>
                        <div className='h-[.1rem] w-[2rem] bg-white'></div>
                        <div className='h-[.1rem] w-[2rem] bg-white'></div>
                        </span></li>
                </ul>
                <ul className=''>
                    <li className="px-4 py-2 p-big flex items-center uppercase font-bold gap-4 active"><span>🏚</span> Home</li>
                </ul>
                    <hr className="mb-6 mt-4" />

                <ul className='grid col-span-1'>
                    {elements.map(function(elements, index) {
                        return<li 
                            className='px-4 py-2 hover:primary-blue w-full p-big flex items-center gap-4 cursor-pointer'
                            key={index}><span>{elements.icon}</span> {elements.name}</li>
                })}
            </ul>
        </div >
    </>
  )
};
export default AdminInterface;
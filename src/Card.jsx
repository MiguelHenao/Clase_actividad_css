import { useState } from 'react';

export default function Card (){

    const [darkmode, setDarkmode] = useState(false);

    const toggletheme = () => setDarkmode(!darkmode);


    return (
        <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg">
            <img src="https://i.pravatar.cc/150?img=7" alt="avatar" className="rounded-full w-32 h-32 mx-auto"/>
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center">SARN HUY </h2>
            <p className="mt-2 text-gray-600 text-center"> Ing  civil End apasionado por lo penes </p>
            <button 
                onClick={toggletheme}
                className={`mt-4 px-4 py-2 rounded transition duration-300 
                    ${darkmode ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-400'}`}>
                CAMBIAR <AMBIENTE></AMBIENTE> COLOR
            </button>
        </div>
    )
}
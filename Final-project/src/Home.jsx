import React from 'react'
import Conversation from './Assets/img/Conversation.svg'
import Handstand from './Assets/img/Handstand.svg'
import Looking from './Assets/img/Looking.svg'
import Showing from './Assets/img/Showing.svg'
import Sitting from './Assets/img/Sitting.svg'
import Stand from './Assets/img/Stand.svg'

export default function Home() {
    return (
        <div className=" w-full h-screen main-container  flex justify-center items-center">
            <div className="w-3/4 h-auto flex flex-col justify-center bg-gray-100 rounded-lg">
                <div className="w-full h-20 bg-indigo-500 text-2xl text-white flex justify-start p-6 font-semibold rounded-t-lg ">
                    <p className="pr-4">Ana María Díaz Solorio </p>
                    <p>Exp: 259404</p>
                </div>    
                <div className="w-full h-auto flex flex-row flex-wrap justify-center items-center p-8 space-x-4 space-y-4">
                    <div className=" h-40 bg-indigo-400  flex rounded-lg mt-4 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                        <div className="w-auto h-auto text-lg font-bold text-white flex items-center justify-center p-10">
                            <p>Calculadora</p>
                        </div>
                        <div className="w-auto h-auto flex  justify-center content-center">
                            <img src={Conversation} alt="Conversation" width="150px" height="100px" />
                        </div>
                    </div>
                    <div className=" h-40 bg-indigo-400 rounded-lg">
                        <div className="w-full h-40 bg-indigo-400 flex flex-row rounded-lg transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                            <div className="w-auto h-auto text-lg font-bold text-white flex items-center justify-center p-10">
                                <p>Tienda</p>
                            </div>
                            <div className="w-auto h-auto flex justify-center content-center">
                                <img src={Handstand} alt="Conversation" width="150px" height="100px" />
                            </div>
                        </div>
                    </div>
                    <div className=" h-40 bg-indigo-400 rounded-lg ">
                        <div className="w-full h-40 bg-indigo-400 flex flex-row rounded-lg transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                            <div className="w-auto h-auto text-lg font-bold text-white flex items-center justify-center p-10">
                                <p>Interfaz <br></br> Disney</p>
                            </div>
                            <div className="w-auto h-auto flex justify-center content-center">
                                <img src={Looking} alt="Conversation" width="150px" height="150px" />
                            </div>
                        </div>
                    </div>
                    <div className=" h-40 bg-indigo-400 rounded-lg ">
                        <div className="w-full h-40 bg-indigo-400 flex flex-row rounded-lg transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                            <div className="w-auto h-auto text-lg font-bold text-white flex items-center justify-center p-10">
                                <p>Interfaz <br></br> Twitter</p>
                            </div>
                            <div className="w-auto h-auto flex justify-center">
                                <img src={Showing} alt="Conversation" width="150px" height="150px" />
                            </div>
                        </div>
                    </div>
                    <div className=" h-40 bg-indigo-400 rounded-lg ">
                        <div className="w-full h-40 bg-indigo-400 flex flex-row rounded-lg transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                            <div className="w-auto h-auto text-lg font-bold text-white flex items-center justify-center p-10">
                                <p>Conciertos</p>
                            </div>
                            <div className="w-auto h-auto flex justify-content mr-4">
                                <img src={Sitting} alt="Conversation" width="100px" height="100px" />
                            </div>
                        </div>
                    </div>
                    <div className=" h-40 bg-indigo-400 rounded-lg ">
                        <div className="w-full h-40 bg-indigo-400 flex flex-row rounded-lg transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                            <div className="w-auto h-auto text-lg font-bold text-white flex items-center justify-center p-10">
                                <p>Cine</p>
                            </div>
                            <div className="w-auto h-auto flex justify-center mr-4 ">
                                <img src={Stand} alt="Conversation" width="100px" height="100px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

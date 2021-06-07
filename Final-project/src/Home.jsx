import React from 'react'
import Conversation from './Assets/img/Conversation.svg'
import Handstand from './Assets/img/Handstand.svg'

export default function Home() {
    return (
        <div className=" w-full h-screen main-container  flex justify-center items-center">
            <div className="w-11/12 h-auto flex flex-col justify-center bg-gray-100 rounded-lg">
                <div className="w-full h-20 bg-red-200 text-2xl flex justify-start p-6 font-semibold">
                    <p className="pr-4">Ana María Díaz Solorio </p>
                    <p>Exp: 259404</p>
                </div>    
                <div className="w-full h-auto flex flex-row flex-wrap p-8 space-x-4 space-y-4">
                    <div className=" h-40 bg-indigo-400 flex flex-row ">
                        <div className="w-auto h-auto text-lg font-bold text-white flex items-center justify-center p-10">
                            <p>Calculadora</p>
                        </div>
                        <div className="w-auto h-auto">
                            <img src={Conversation} alt="Conversation" width="150px" height="100px" />
                        </div>
                    </div>
                    <div className=" h-40 bg-indigo-400 ">
                        <div className="w-full h-40 bg-indigo-400 flex flex-row ">
                            <div className="w-auto h-auto text-lg font-bold text-white flex items-center justify-center p-10">
                                <p>Calculadora</p>
                            </div>
                            <div className="w-auto h-auto">
                                <img src={Handstand} alt="Conversation" width="150px" height="100px" />
                            </div>
                        </div>
                    </div>
                    <div className=" h-40 bg-indigo-400 ">
                        <div className="w-1/2 h-40 bg-indigo-400 flex flex-row ">
                            <div className="w-auto h-auto text-lg font-bold text-white flex items-center justify-center p-10">
                                <p>Calculadora</p>
                            </div>
                            <div className="w-auto h-auto">
                                <img src={Conversation} alt="Conversation" width="150px" height="100px" />
                            </div>
                        </div>
                    </div>
                    <div className=" h-40 bg-indigo-400 ">
                        <div className="w-1/2 h-40 bg-indigo-400 flex flex-row ">
                            <div className="w-auto h-auto text-lg font-bold text-white flex items-center justify-center p-10">
                                <p>Calculadora</p>
                            </div>
                            <div className="w-auto h-auto">
                                <img src={Conversation} alt="Conversation" width="150px" height="100px" />
                            </div>
                        </div>
                    </div>
                    <div className=" h-40 bg-indigo-400 ">
                        <div className="w-1/2 h-40 bg-indigo-400 flex flex-row ">
                            <div className="w-auto h-auto text-lg font-bold text-white flex items-center justify-center p-10">
                                <p>Calculadora</p>
                            </div>
                            <div className="w-auto h-auto">
                                <img src={Conversation} alt="Conversation" width="150px" height="100px" />
                            </div>
                        </div>
                    </div>
                    <div className=" h-40 bg-indigo-400 ">
                        <div className="w-1/2 h-40 bg-indigo-400 flex flex-row ">
                            <div className="w-auto h-auto text-lg font-bold text-white flex items-center justify-center p-10">
                                <p>Calculadora</p>
                            </div>
                            <div className="w-auto h-auto">
                                <img src={Conversation} alt="Conversation" width="150px" height="100px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

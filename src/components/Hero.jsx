import React from 'react'
import girl from '../assets/girl.svg'
import '../App.css'
const Hero = () => {
    return (
        <div className="w-full bg-orange-50 pt-8 pb-20 px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-orange-500">Studying</span> <span className="text-indigo-900">Online</span> is now<br />much easier
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Skilline is an interesting platform that will teach<br />you in more an interactive way
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 font-medium">
                            Join for free
                        </button>
                        <button className="px-2 py-3 flex items-center text-gray-700 hover:text-orange-500">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2 shadow-sm">
                                <span className="text-orange-500 text-xs">▶</span>
                            </div>
                            <span className="font-medium">Watch how it works</span>
                        </button>
                    </div>
                </div>

                <div className="  md:w-1/2 relative">
                    <div className="hero1 bg-white p-3 rounded-lg absolute top-[338px] right-[262px] shadow-md flex items-center z-10">
                        <div className="bg-orange-100 p-2 rounded-md mr-2">
                            <div className="w-5 h-5 bg-orange-500 rounded-sm flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-800 font-bold text-sm">Congratulations</p>
                            <p className="text-gray-500 text-xs">Your admission completed</p>
                        </div>
                    </div>
                    <div className="relative w-full h-96">
                        <div className="w-full h-full flex items-center justify-center">
                            <img src={girl} alt="" className="object-contain w-[420px] mb-[100px]" />
                        </div>
                    </div>
                    <div className="absolute top-64 right-8 w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-16 text-center">
                <p className="text-gray-500 mb-8">Trusted by 5,000+ Companies Worldwide</p>
                <div className="flex flex-wrap justify-center gap-8 opacity-50">
                    <div className="w-24 h-8 flex items-center justify-center">
                        <p className="text-gray-400 font-medium">Google</p>
                    </div>
                    <div className="w-24 h-8 flex items-center justify-center">
                        <p className="text-gray-400 font-medium">NETFLIX</p>
                    </div>
                    <div className="w-24 h-8 flex items-center justify-center">
                        <p className="text-gray-400 font-medium">Airbnb</p>
                    </div>
                    <div className="w-24 h-8 flex items-center justify-center">
                        <p className="text-gray-400 font-medium">Amazon</p>
                    </div>
                    <div className="w-24 h-8 flex items-center justify-center">
                        <p className="text-gray-400 font-medium">Facebook</p>
                    </div>
                    <div className="w-24 h-8 flex items-center justify-center">
                        <p className="text-gray-400 font-medium">Grab</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero
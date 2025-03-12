import React from 'react'
import Btn1 from './btn/btn'
import Btn2 from './btn/btn2'
const Header = () => {
    return (
        <>
            <header className="w-full py-5 px-8 flex items-center justify-between bg-orange-50">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">S</span>
                        </div>
                        <span className="text-xl font-bold text-blue-500 ml-1">Skilline</span>
                    </div>
                </div>

                <nav className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-700 hover:text-orange-500">Home</a>
                    <a href="#" className="text-gray-700 hover:text-orange-500">Company</a>
                    <a href="#" className="text-gray-700 hover:text-orange-500">Blog</a>
                    <a href="#" className="text-gray-700 hover:text-orange-500">About Us</a>
                </nav>

                <div className="flex items-center space-x-3">
                    <Btn1/>
                    <Btn2/>
                </div>
            </header>
        </>

    );
}

export default Header
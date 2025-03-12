import React from 'react'

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
                    <button className="px-6 py-2 text-gray-700 bg-white rounded-full shadow-sm hover:bg-gray-100">Login</button>
                    <button className="px-6 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-600">Sign Up</button>
                </div>
            </header>
        </>

    );
}

export default Header
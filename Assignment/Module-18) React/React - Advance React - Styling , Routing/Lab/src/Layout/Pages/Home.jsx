import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-between relative bg-gray-900 overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            {/* Foreground Content */}
            <div className="relative z-20 flex flex-col justify-between min-h-screen">
                <Header />
                <div className="text-emerald-100 flex flex-col items-center justify-center px-6">
                    <h1 className="text-5xl font-bold mb-4">Welcome to React Router Demo</h1>
                    <p className="text-xl mb-8 text-emerald-100 max-w-xl text-center">
                        This is a demo app to showcase routing and styling in a React application using Tailwind CSS.
                    </p>
                    <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 px-6 rounded-xl shadow-lg transition">
                        Get Started
                    </button>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home

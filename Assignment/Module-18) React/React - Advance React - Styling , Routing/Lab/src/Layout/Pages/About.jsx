import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function About() {
    return (
        <>
             <div className="min-h-screen flex flex-col justify-between bg-gray-50">
                <Header />
                <div className="text-emerald-900  py-16 px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">About This App</h2>
                        <p className="text-lg text-emerald-700 mb-12">
                            This project demonstrates the use of React Router with Tailwind CSS. It's a lightweight
                            single-page application with multiple routes.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl shadow p-6">
                                <h3 className="text-xl font-semibold mb-2">🚀 React Router</h3>
                                <p className="text-gray-600">Handles page routing without full page reloads.</p>
                            </div>
                            <div className="bg-white rounded-xl shadow p-6">
                                <h3 className="text-xl font-semibold mb-2">🎨 Tailwind CSS</h3>
                                <p className="text-gray-600">Utility-first CSS for fast and modern UI styling.</p>
                            </div>
                            <div className="bg-white rounded-xl shadow p-6">
                                <h3 className="text-xl font-semibold mb-2">⚙️ Reusable Components</h3>
                                <p className="text-gray-600">Each page is a component making development modular.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default About

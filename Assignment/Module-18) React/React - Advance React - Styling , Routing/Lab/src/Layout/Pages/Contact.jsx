import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function Contact() {
    return (
        <>
        <div className="min-h-screen flex flex-col justify-between bg-white">
            <Header />
            <div className=" text-emerald-900  flex items-center justify-center px-6 py-16">
                <div className="w-full max-w-2xl bg-gray-100 rounded-xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Your message..."
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 px-6 rounded-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
            </div>
        </>
    )
}

export default Contact

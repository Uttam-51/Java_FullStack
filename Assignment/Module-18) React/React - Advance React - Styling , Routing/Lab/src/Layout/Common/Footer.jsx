import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-emerald-950 text-gray-400 text-center py-6">
                <p>&copy; {new Date().getFullYear()} Uttam Bavarva. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer

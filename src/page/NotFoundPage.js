import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-custom bg-gray-100 text-gray-800">
            <h1 className="text-9xl font-bold">404</h1>
            <p className="text-2xl mt-4">Sorry, the page you're looking for cannot be found.</p>
            <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                Go back to Home
            </a>
        </div>
    );
};

export default NotFoundPage;

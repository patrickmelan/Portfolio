import React from 'react';

const Card = ({ title, description, image }) => {
    return (
        <div className="w-full rounded overflow-hidden shadow-lg m-4 bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-turqoise">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
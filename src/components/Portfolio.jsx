import React from 'react';
import Card from './Card';

const Portfolio = () => {
    return (
        <div id="pricing" className="flex justify-center font-radio w-full h-screen overflow-none">
            <div className="flex justify-center text-center">
                <div className="flex flex-col w-full items-center ">
                    <div className="p-4">
                        <p className="text-turqoise text-2xl font-mono">Portfolio</p>
                    </div>

                    <Card title="RoverReach" description="Description 1" image="image1.jpg" />
                    <Card title="Habiteer" description="Description 2" image="image2.jpg" />
                    <Card title="The Eagle Tavern" description="Description 3" image="image3.jpg" />

                </div>
            </div>
            
        </div>
    );
};

export default Portfolio;


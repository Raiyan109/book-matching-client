import React from 'react';
import Form from '../components/Form'
import bgImg from '../assets/pexels-miguel-á-padriñán-1111317.jpg'

const Hero = () => {
    return (
        <section className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="flex flex-col items-center justify-center h-full py-16 px-8 bg-gradient-to-r from-#0b0c10 to-#1f2833">
                <div className="text-white text-6xl font-bold mb-4">Find Your Next Favorite Book</div>
                <div className="text-white text-xl font-light mb-8">Discover new books that match your reading preferences</div>
                <a href="#" className="bg-#66fcf1 px-8 py-4 text-white font-bold rounded hover:bg-#45a29e">Start Reading</a>
                <Form />

            </div>

        </section>

    );
};

export default Hero;
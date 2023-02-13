import React from 'react';

import Hero from './Hero';
import Navbar from './Navbar';
import SearchResults from './SearchResults';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <SearchResults />
        </div>
    );
};

export default Home;
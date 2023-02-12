import React from 'react';
import './SearchResult.css'

const SearchResult = ({ book }) => {
    const { title } = book

    return (
        <div class="flex flex-col items-center w-64 p-4 border border-gray-300 rounded-lg m-4">
            <h3 class="text-lg font-bold mt-4">{title}</h3>
        </div>
    );
};

export default SearchResult;
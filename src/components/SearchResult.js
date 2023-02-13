import React from 'react';
import { useBooksContext } from '../hooks/useBooksContext';


const SearchResult = ({ book }) => {
    const { dispatch } = useBooksContext()

    const handleClick = async () => {
        const response = await fetch('/api/books/' + book._id, {
            method: 'DELETE'
        })
        const json = response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_BOOK', payload: json })
        }
    }
    return (
        <div className="flex justify-between items-center w-64 p-4 border border-gray-300 rounded-lg m-4">
            <h3 className="text-lg font-bold mt-4">{book.title}</h3>
            <span onClick={handleClick} className="text-red-300 bg-red-900 rounded-md p-1 cursor-pointer">Delete</span>
        </div>
    );
};

export default SearchResult;
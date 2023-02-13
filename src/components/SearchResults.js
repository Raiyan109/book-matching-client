import React, { useEffect } from 'react';
import SearchResult from './SearchResult';
import { useBooksContext } from '../hooks/useBooksContext';

const SearchResults = () => {
    const { books, dispatch } = useBooksContext()

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('/api/books')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_BOOKS', payload: json })
                console.log(json)
            }
        }
        fetchBooks()
    }, [])
    return (
        <div className='flex justify-center items-center bg-cyan-500'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4'>
                {books && books.map((book) => (
                    <SearchResult key={book._id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
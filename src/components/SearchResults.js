import React, { useEffect, useState } from 'react';
import SearchResult from './SearchResult';

const SearchResults = () => {
    const [books, setBooks] = useState(null)

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('/api/books')
            const json = await response.json()

            if (response.ok) {
                setBooks(json)
                console.log(json)
            }
        }
        fetchBooks()
    }, [])
    return (
        <div className='grid sm:grid-cols-2'>
            {books && books.map((book) => (
                <SearchResult key={book._id} book={book} />
            ))}
        </div>
    );
};

export default SearchResults;
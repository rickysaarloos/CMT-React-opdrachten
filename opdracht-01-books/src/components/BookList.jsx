import { useState } from 'react';
import Book from './Book.jsx';


function BookList()     {
    const [books, setBooks] = useState ([
        { id: 1, 
            title: 'Harry Potter the sorcerers stone', 
            author: 'JK Rowling', 
            img: '/images/book-1.png' },

        { id: 2, 
            title: 'Fantasy VI', 
            author: 'Geronimo Stilton', 
            img: '/images/book-2.png' },

        { id: 3, 
            title: 'The Hunger Games', 
            author: 'Suzanne Collins', 
            img: '/images/book-3.png' },
    ]);


    return (
        <div className="book-list">
            {books.map((book) => (  
                <Book key={book.id} {...book} />
            ))}
        </div>
    );
}


export default BookList;
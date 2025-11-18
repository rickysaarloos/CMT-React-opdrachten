import { useState } from 'react';
import Book from './Book.jsx';

function BookList() {
  const [searchTerm, setSearchTerm] = useState("");

  const [books, setBooks] = useState([
    { id: 1, title: 'Harry Potter the sorcerers stone', author: 'JK Rowling', img: '/images/book-1.png' },
    { id: 2, title: 'Fantasy VI', author: 'Geronimo Stilton', img: '/images/book-2.png' },
    { id: 3, title: 'The Hunger Games', author: 'Suzanne Collins', img: '/images/book-3.png' },
  ]);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
   
      <input
        type="text"
        placeholder="Zoek een boek..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      
      <div className="book-list">
        {filteredBooks.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;

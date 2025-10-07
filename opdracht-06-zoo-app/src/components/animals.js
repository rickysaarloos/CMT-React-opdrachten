import { useState } from 'react';
import Animal from './Card.jsx';


function AnimalList()     {
    const [Animal, setAnimals] = useState ([
        { id: 1, 
            title: 'Harry Potter the sorcerers stone', 
            description: 'JK Rowling', 
            img: '/images/book-1.png' },

        { id: 2, 
            title: 'Fantasy VI', 
            description: 'Geronimo Stilton', 
            img: '/images/book-2.png' },

        { id: 3, 
            title: 'The Hunger Games', 
            description: 'Suzanne Collins', 
            img: '/images/book-3.png' },
    ]);


    return (
        <div className="Animal-List">
            {animal.map((animal) => (
                <Animal 
                    key={animal.id} {...animal}
                    
                 
                />
            ))}
        </div>
    );
}


export default AnimalList;
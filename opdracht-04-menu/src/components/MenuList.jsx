import { useState } from "react";
import menu from '../data.js';
import Menu from './menu.jsx';  

function MenuList() {
    const [items, setItems] = useState(menu);

    return (
        <div className="menu-list">
            {items.map((item) => (
                <Menu key={item.id} item={item} />
            ))}
        </div>
    );
}


 

export default MenuList;
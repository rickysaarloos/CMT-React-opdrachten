import { useState } from "react";
import menu from '../data.js';


function MenuList() {
    const [items, setItems] = useState(menu);
    return (
        <div className="menu-list">
            {items.map((item) => (  
                <div key={item.id} className="menu-item">
                    <img src={item.img} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p className="price">€{item.price}</p>
                    <p className="desc">{item.desc}</p>
                </div>
            ))}
        </div>
    );
}
 

export default MenuList;
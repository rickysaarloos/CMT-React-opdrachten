function Menu({ item }) {
    return (
        <div className="menu-item">
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p className="price">€{item.price}</p>
            <p className="desc">{item.desc}</p>
        </div>
    );
}

export default Menu;
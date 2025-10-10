import { useNavigate } from "react-router-dom";    


function Card({ name, img, description, id }) {
    const navigate = useNavigate();
    
    const handleCliclk = () => {
        navigate(`/animal/${id}`);
    }
    
    return (
        <div className="card" onClick={() => navigate(`/animal/${id}`)}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
            <p>{description}</p>
        </div>
    );
}

export default Card;
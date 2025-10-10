import { Link, useParams } from "react-router-dom";
import animals from '../components/animals.jsx'; 


function DetailPage  () {
    const { id } = useParams();
    const animal = animals.find((animal) => animal.id === parseInt(id));
    if (!animal) {
        return <div> <h1>Animal not found</h1>;
    <Link to="/">home</Link>
</div>
    };


return (
    <div className="detail-page">
        
         <Link to="/">terug</Link>
         <h1>{animal.name} alt</h1>
            <img src={animal.img} alt={animal.name} />
             <p>{animal.species}</p>
            <p>{animal.description}</p>

    </div>





        )};

        
export default DetailPage;
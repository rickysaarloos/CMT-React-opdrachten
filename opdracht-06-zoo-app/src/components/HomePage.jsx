import animals from '../components/animals.jsx'; 
import Card from '../components/Card.jsx'; 
import '../App.css';





function Home() {
    return (
        
        <div className="home">
       <h1>Zoo app</h1>
       <div className="card-container">
        {animals.map((animal) => (
            <Card key={animal.id} {...animal} />
        ))}
       </div>





        </div>  




    );
};

export default Home;
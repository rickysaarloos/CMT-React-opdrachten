const Animal = ({ title, description, img }) => {
  return (
    <div className="Animal"> 
        
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={img} alt={title} />
    </div>
  );
}

export default Animal
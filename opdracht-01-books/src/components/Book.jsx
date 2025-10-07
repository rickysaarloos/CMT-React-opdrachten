const Book = ({ title, author, img }) => {
  return (
    <div className="book"> 
        
        <h2>{title}</h2>
        <p>{author}</p>
        <img src={img} alt={title} />
    </div>
  );
}
export default Book
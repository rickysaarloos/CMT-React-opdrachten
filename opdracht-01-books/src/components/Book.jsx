const Book = ({ title, author, img }) => {
  return (
    <div className="book"> 
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>by {author}</p>
    </div>
  );
}
export default Book
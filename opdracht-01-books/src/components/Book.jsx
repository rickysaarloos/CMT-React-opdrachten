const Book = ({ title, author, year }) => {
  return (
    <div className="book"> 
        <img src="\CMT-React-opdrachten\opdracht-01-books\public\images" alt="" />
        <h2>{title}</h2>
        <p>by {author} ({year})</p>
    </div>
  );
}
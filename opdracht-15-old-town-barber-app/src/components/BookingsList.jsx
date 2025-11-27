function BookingList({ items }) {
  if (items.length === 0)
    return <p className="text-center italic">Nog geen afspraken.</p>;
 
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">Jouw Afspraken</h2>
      <ul className="space-y-3">
        {items.map((a, i) => (
          <li key={i} className="border p-3 rounded bg-[#f7f1e8]">
            <div className="font-bold">{a.service.name}</div>
            <div>Datum: {a.date}</div>
            <div>Tijd: {a.time}</div>
            <div>Prijs: €{a.service.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
 

export default BookingList;
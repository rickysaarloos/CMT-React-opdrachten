function ShopInfo() {
  const services = [
    { name: "Knippen", price: 20, duration: 30 },
    { name: "Baard Trim", price: 15, duration: 20 },
    { name: "Knippen + Baard", price: 30, duration: 50 },
  ];
 
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">Shop Info</h2>
      <p><strong>Adres:</strong> Old Town Barber Shop</p>
      <p><strong>Openingstijden:</strong> 09:00 - 18:00</p>
 
      <h3 className="text-xl font-semibold mt-4 mb-2">Services</h3>
      <ul className="space-y-2">
        {services.map((s) => (
          <li key={s.name} className="border p-2 rounded bg-[#f7f1e8]">
            <div className="font-bold">{s.name}</div>
            <div>Prijs: €{s.price}</div>
            <div>Duur: {s.duration} min</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default ShopInfo
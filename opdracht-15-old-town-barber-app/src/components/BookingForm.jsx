import { useState } from "react";
import { toast } from "react-toastify";
 
function BookingForm({ user, onBook }) {
  const services = [
    { name: "Knippen", price: 20, duration: 30 },
    { name: "Baard Trim", price: 15, duration: 20 },
    { name: "Knippen + Baard", price: 30, duration: 50 },
  ];
 
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    service: "",
    date: "",
    time: "",
  });
 
  const submit = (e) => {
    e.preventDefault();
 
    if (!form.service || !form.date || !form.time) {
      toast.error("Alle velden zijn verplicht!");
      return;
    }
 
    const serviceData = services.find((s) => s.name === form.service);
 
    onBook({ ...form, service: serviceData, reminderShown: false });
  };
 
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">Nieuwe Afspraak</h2>
      <form onSubmit={submit} className="space-y-3">
        <select
          className="border p-2 rounded w-full"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        >
          <option value="">Kies een service</option>
          {services.map((s) => (
            <option key={s.name} value={s.name}>
              {s.name} - €{s.price}
            </option>
          ))}
        </select>
 
        <input
          type="date"
          className="border p-2 rounded w-full"
          min={new Date().toISOString().split("T")[0]}
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
 
        <input
          type="time"
          className="border p-2 rounded w-full"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />
 
        <button className="bg-[#3b2416] text-white w-full p-2 rounded">
          Boek Afspraak
        </button>
      </form>
    </div>
  );
}
 
export default BookingForm;
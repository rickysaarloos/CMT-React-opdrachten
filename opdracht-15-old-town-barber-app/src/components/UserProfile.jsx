import { useState } from "react";
import { toast } from "react-toastify";
 
function UserProfile({ onSave }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (!form.name || !form.email || !form.phone) {
      toast.error("Alle velden zijn verplicht!");
      return;
    }
 
    onSave(form);
  };
 
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">Profiel Instellen</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="border p-2 rounded w-full"
          placeholder="Naam"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
 
        <input
          className="border p-2 rounded w-full"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
 
        <input
          className="border p-2 rounded w-full"
          placeholder="Telefoon"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
 
        <button className="bg-[#3b2416] text-white w-full p-2 rounded">
          Opslaan
        </button>
      </form>
    </div>
  );
}

export default UserProfile;
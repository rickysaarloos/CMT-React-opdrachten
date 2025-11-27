import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
import UserProfile from "./components/UserProfile";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingsList";
import ShopInfo from "./components/ShopInfo";
 
function App() {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
 

  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    const storedAppointments = localStorage.getItem("appointments");
 
    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedAppointments) setAppointments(JSON.parse(storedAppointments));
  }, []);
 

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
 
      appointments.forEach((appt) => {
        const apptDate = new Date(`${appt.date}T${appt.time}`);
        const diff = (apptDate - now) / 1000 / 60; 
 
        if (diff > 0 && diff < 15 && !appt.reminderShown) {
          toast.info(
            `Reminder: jouw afspraak voor ${appt.service.name} is binnen 15 minuten!`
          );
 
          const updated = appointments.map((a) =>
            a === appt ? { ...a, reminderShown: true } : a
          );
 
          setAppointments(updated);
          localStorage.setItem("appointments", JSON.stringify(updated));
        }
      });
    }, 30000);
 
    return () => clearInterval(interval);
  }, [appointments]);
 
  const saveUser = (data) => {
    localStorage.setItem("userProfile", JSON.stringify(data));
    setUser(data);
    toast.success("Profiel opgeslagen!");
  };
 
  const addAppointment = (appt) => {
    const updated = [...appointments, appt].sort(
      (a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
    );
 
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
    toast.success("Afspraak geboekt!");
  };
 
  return (
    <div className="min-h-screen bg-[#f4ece2] text-[#3b2416] p-6 font-serif">
      <ToastContainer />
      <h1 className="text-4xl font-bold text-center mb-6">Old Town Barber</h1>
 
      {!user ? (
        <UserProfile onSave={saveUser} />
      ) : (
        <>
          <ShopInfo />
          <BookingForm user={user} onBook={addAppointment} />
          <BookingList items={appointments} />
        </>
      )}
    </div>
  );
}
 
export default App;
// BookingForm Component - datum input voorbeeld
// de rest van het formulier en component maak je zelf
<div>
  <label className="block font-medium mb-1">Datum *</label>
  <input
    type="date"
    value={formData.date}
    onChange={(e) => setFormData(prev => ({...prev, date: e.target.value}))}
    min={new Date().toISOString().split('T')[0]}
    className="w-full p-2 border rounded"
  />
</div>
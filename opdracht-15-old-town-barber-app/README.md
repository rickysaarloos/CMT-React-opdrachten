# Old Town Barber App

## 🎯 Doel

Bouw een eenvoudige React barbier applicatie met localStorage. Focus op de essentials: profiel maken, afspraken boeken, en alles bekijken.

**Geschatte tijd:** 3-4 uur  
**Moeilijkheidsgraad:** Gemiddeld

## 🚀 Wat ga je maken?

Een eenvoudig barbier booking systeem met:

### **Core Functionaliteit:**
- 👤 User profiel setup (eerste keer)
- 💇‍♂️ Afspraak boeken voor jezelf
- 📋 Overzicht van je eigen boekingen
- 🏪 Shop info met services en prijzen
- 🔔 Toast notificaties + afspraak reminders
- ⏰ Reminder als je afspraak binnen 15 minuten is
- 💾 Alles opgeslagen in localStorage

## 📋 Requirements

### **Must Have:**

1. **User Profile Setup**
   - Formulier bij eerste bezoek (naam, email, telefoon)
   - Validatie op alle velden
   - localStorage: `userProfile` object

2. **Shop Info Sectie**
   - Vaste shop informatie (naam, openingstijden)
   - Services lijst met prijzen en duur
   - Mooi geformateerd overzicht

3. **Afspraak Boeken**
   - Formulier prefilled met user data
   - Service selectie dropdown
   - Datum picker (alleen toekomst)
   - Tijd selectie dropdown
   - localStorage: `appointments` array

4. **Boekingen Overzicht**
   - Lijst van alle afspraken
   - Sorteer op datum (chronologisch)
   - Toon service name, datum, tijd, prijs

5. **Toast Notificaties & Reminders**
   - Success bij nieuwe booking
   - Success bij profiel opslaan/bewerken
   - Error bij validatie problemen
   - **Reminder toast als je afspraak binnen 15 minuten is**
   - Gebruik react-toastify

## 🏗️ Project Setup

### **Dependencies:**
```bash
npm install react-toastify
```

### **Eenvoudige Structuur:**
```
src/
├── components/
│   ├── UserProfile.jsx
│   ├── ShopInfo.jsx  
│   ├── BookingForm.jsx
│   └── BookingsList.jsx
├── utils/
│   └── localStorage.js
├── App.jsx
└── App.css
```

### **localStorage Helper Functions:**

Maak utility functions voor:
- `getUserProfile()` - load profile met try/catch
- `setUserProfile(profile)` - save profile 
- `getAppointments()` - load appointments array met try/catch
- `setAppointments(appointments)` - save appointments array
- Alle functions moeten default values returnen bij errors

## 💻 App Layout & Flow

### **First Time User:**
- Check of userProfile bestaat in localStorage
- Zo nee: toon alleen UserProfile component met welkomst tekst
- Na profiel aanmaken: ga naar main app

### **Main App Layout:**
```
+--------------------------------------------------+
| Header: Old Town Barber         [Profiel btn] |
+--------------------------------------------------+
| [UserProfile component - alleen als btn clicked]|
+--------------------------------------------------+
| Left Column:          | Right Column:           |
| - ShopInfo           | - BookingsList          |
| - BookingForm        |   (alle afspraken)      |
+--------------------------------------------------+
```

### **Shop Data (hardcoded):**
Je mag zelf kiezen: services en prijzen, maar gebruik deze structuur:
```javascript
const shopData = {
  name: "Old Town Barber",
  hours: "Ma-Za: 9:00 - 18:00",
  services: [
    { id: 1, name: "Knipbeurt", price: 25, duration: 30 },
    { id: 2, name: "Baard trimmen", price: 15, duration: 15 },
    { id: 3, name: "Knip + Baard", price: 35, duration: 45 },
    { id: 4, name: "Haar wassen", price: 10, duration: 15 }
  ]
};
```

## 🧩 Wat ga je bouwen?

### **1. UserProfile Component**
Een formulier waar gebruiker naam, email en telefoon invult. Bij eerste keer gebruik voor setup, later voor bewerken.

### **2. ShopInfo Component**  
Toon je shop naam, openingstijden en een mooie lijst van services met prijzen.

### **3. BookingForm Component**
Een formulier waar gebruiker een afspraak kan boeken:
- Dropdown met services 
- Datum kiezen (alleen toekomst)
- Tijd kiezen uit opties
- Eventueel opmerkingen

### **4. BookingsList Component**
Toon alle geboekte afspraken op datum gesorteerd, met totaal bedrag.

## 💾 localStorage 

**Wat moet je opslaan:**
- User profiel (naam, email, telefoon)
- Alle afspraken in een array

**Wanneer opslaan:**
- Profiel: als user het invult/bewerkt
- Afspraken: elke keer als er een nieuwe bijkomt

**Tip:** Maak helper functies om localStorage makkelijker te maken!

## 🔔 Reminder Feature

**Simpel idee:** 
- Bij elke refresh: check of er een afspraak binnen 15 minuten is
- Zo ja: toon een toast "Reminder: Knipbeurt om 14:30!"

## 📱 Hoe ziet het eruit?

**Eerste keer:**
```
Welkom bij Old Town Barber!
[Profiel formulier]
```

**Daarna:**
```
Old Town Barber                    [Profiel knop]

Shop Info              |  Mijn Afspraken (3)
- Knipbeurt €25       |  📅 15 Jan 14:30 - Knipbeurt €25  
- Baard trim €15      |  📅 22 Jan 16:00 - Knip+Baard €35
                      |  📅 29 Jan 10:00 - Haar wassen €10
Boek Afspraak         |  
[Service dropdown]    |  Totaal: €70
[Datum picker]        |
[Tijd dropdown]       |
[Boek knop]          |
```

## ✅ Wat moet werken?

**localStorage Test:**
- Refresh pagina → je profiel en afspraken zijn er nog
- Browser sluiten en openen → alles nog steeds er

**App Flow:**
- Eerste keer: profiel maken
- Daarna: afspraken boeken en zien
- Profiel bewerken via knop

**Reminders:**
- Boek afspraak voor over 10 minuten → refresh → reminder!
- Boek afspraak voor morgen → refresh → geen reminder

**Notificaties:**
- Groene toast bij success (boeken, profiel opslaan)
- Rode toast bij fouten (lege velden)

## 🎯 Success!

Als je dit hebt:
- ✅ localStorage werkt (data blijft na refresh)
- ✅ Kan afspraken boeken en zien
- ✅ Reminders werken  
- ✅ Toast notificaties

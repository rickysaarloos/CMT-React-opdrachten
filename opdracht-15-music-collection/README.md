# Opdracht: Personal Music Collection met localStorage

## 📋 Opdracht Omschrijving

Je gaat een **Personal Music Collection** maken waarbij alle data wordt opgeslagen in localStorage. De app onthoudt al je favorite songs, music preferences, en instellingen, zelfs als je de browser sluit!

**Geschatte tijd:** 2-3 uur  
**Moeilijkheidsgraad:** Gemiddeld

## 🎯 Leerdoelen

Na deze opdracht kun je:
- ✅ localStorage gebruiken om verschillende soorten data op te slaan
- ✅ Arrays en objecten opslaan/ophalen uit localStorage
- ✅ User preferences implementeren (dark mode + music prefs)
- ✅ Error handling toepassen bij localStorage

## 🚀 Wat ga je maken?

Een music collection app met de volgende onderdelen:

### 1. **Music Profile**
- Je naam en favorite genre
- Wordt opgeslagen als object in localStorage
- Welkomstbericht met persoonlijke info

### 2. **Song Collection**
- Voeg songs toe met titel, artiest, en genre
- Markeer songs als "favorite" ⭐
- Verwijder songs uit collectie
- Alle songs opgeslagen als array van objecten

### 3. **Dark Mode**
- Toggle tussen dark/light mode (perfect voor late night listening!)
- Voorkeur opgeslagen in localStorage

## 📋 Requirements

### **Minimum Requirements:**

1. **Music Profile Setup**
   - Formulier voor je naam en favorite genre
   - Welkomstbericht: "Hallo [naam], hier is je [genre] collectie!"
   - Edit knop om naam/genre te wijzigen
   - Object opslaan in localStorage

2. **Song Collection**
   - Input fields voor song titel, artiest, en genre
   - "Add Song" knop
   - Lijst van alle songs tonen
   - "Favorite" toggle per song (⭐)
   - "Delete" knop per song
   - Array van objecten in localStorage

3. **Dark Mode Toggle**
   - Switch tussen dark en light mode
   - Voorkeur opgeslagen in localStorage
   - CSS classes aanpassen

4. **Data Persistentie**
   - Alle data blijft bewaard na browser refresh
   - Error handling als localStorage data corrupt is

### **Bonus Features:**

5. **Song Search**
   - Zoek door song titels of artiesten
   - Filter lijst terwijl je typt

6. **Music Statistics**
   - Toon totaal aantal songs
   - Toon aantal favorites
   - Meest voorkomende genre

## 🏗️ Project Structuur

```
music-collection/
├── src/
│   ├── components/
│   │   ├── MusicProfile.jsx
│   │   ├── SongList.jsx
│   │   ├── AddSong.jsx
│   │   └── DarkModeToggle.jsx
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## 💡 Starter Code Suggesties

### App.jsx Setup
```jsx
import { useState, useEffect } from 'react';
import MusicProfile from './components/MusicProfile';
import SongList from './components/SongList';
import AddSong from './components/AddSong';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">🎵 My Music Collection</h1>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>
        
        <div className="space-y-8">
          <MusicProfile />
          <AddSong />
          <SongList />
        </div>
      </div>
    </div>
  );
}

export default App;
```

### localStorage Helper
```jsx
// utils/storage.js
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading ${key}:`, error);
      return defaultValue;
    }
  },
  
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving ${key}:`, error);
    }
  }
};
```

## 📝 Stap-voor-Stap Aanpak

### **Stap 1: Project Setup (20 min)**
1. Maak nieuw React project met Vite
2. Installeer Tailwind CSS
3. Maak components folder
4. Test dat alles werkt

### **Stap 2: Dark Mode Toggle (30 min)**
1. Maak DarkModeToggle component
2. localStorage voor dark mode voorkeur
3. CSS classes aanpassen
4. Test dat voorkeur blijft bewaard

### **Stap 3: Music Profile (40 min)**
1. Maak MusicProfile component
2. Formulier voor naam en favorite genre
3. localStorage voor profile object
4. Welkomstbericht met muziekstijl

### **Stap 4: Add Song Component (30 min)**
1. Maak AddSong component
2. Formulier met titel, artiest, en genre
3. Validatie (titel en artiest verplicht)
4. Song object maken en opslaan

### **Stap 5: Song List (40 min)**
1. Maak SongList component
2. Songs ophalen uit localStorage
3. Songs weergeven met favorite toggle
4. Delete functionaliteit per song

### **Stap 6: Testing & Polish (20 min)**
1. Error handling controleren
2. Empty states toevoegen (geen songs)
3. Browser refresh testen


## 🧪 Test Scenarios

1. ✅ Voeg music profile toe → refresh → nog steeds zichtbaar
2. ✅ Wissel dark mode → refresh → nog steeds dark mode  
3. ✅ Voeg 3 songs toe → markeer 1 als favorite → refresh → data correct
4. ✅ Probeer lege song titel → krijg je foutmelding?

## 🏆 Beoordelingscriteria

### **Technische Implementatie (70%)**
- ✅ localStorage correct gebruikt voor alle data
- ✅ React state management goed toegepast
- ✅ Formulieren werken correct
- ✅ Error handling aanwezig

### **Functionaliteit (20%)**
- ✅ Alle requirements werken
- ✅ Data persisteert na refresh

### **Design (10%)**
- ✅ Nette styling met muziek thema
- ✅ Dark mode werkt goed

## 💡 Hints & Tips

### **localStorage Structuur:**
```jsx
// Music profile object
{
  name: "Jan",
  favoriteGenre: "Rock"
}

// Songs array
[
  {
    id: 1640995200000,
    title: "Bohemian Rhapsody",
    artist: "Queen", 
    genre: "Rock",
    isFavorite: true
  },
  {
    id: 1640995300000,
    title: "Imagine",
    artist: "John Lennon",
    genre: "Rock", 
    isFavorite: false
  }
]

// Dark mode boolean
true // of false
```

### **Song ID's:**
```jsx
// Gebruik timestamp voor unieke ID's
const newSong = {
  id: Date.now(),
  title: title,
  artist: artist,
  genre: genre,
  isFavorite: false
};
```

### **Genre Suggestions:**
```jsx
const genres = ["Rock", "Pop", "Hip-Hop", "Jazz", "Electronic", "Folk", "R&B", "Country"];

// In je form:
<select value={genre} onChange={(e) => setGenre(e.target.value)}>
  {genres.map(g => <option key={g} value={g}>{g}</option>)}
</select>
```

### **Error Handling:**
```jsx
// Check of data geldig is
const songs = storage.get('songs', []);
if (!Array.isArray(songs)) {
  setSongs([]);
}
```

## 📚 Benodigde Kennis

- ✅ React Components & useState/useEffect
- ✅ Forms & Event Handling  
- ✅ Lists & Keys
- ✅ localStorage API
- ✅ JSON.stringify/parse
- ✅ Basic Tailwind CSS

## 🎉 Veel Succes!

Focus op de core functionaliteit eerst, maak het daarna mooier. localStorage is het belangrijkste leerprincipe hier!

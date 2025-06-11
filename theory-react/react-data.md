# React - Data

## Waarom Externe Data?

Uiteindelijk als je bezig bent met React, zul je merken dat de data die jij moet tonen en stylen uit een **database** komt. Dit kan een API zijn of zoals we gewend zijn met oefenen, uit een bestand.

In plaats van data hardcoded in je component te typen, haal je het op uit:
- Een JavaScript bestand (.js)
- Een JSON bestand (.json) met een server
- Een echte API/database

## Methode 1: Data uit JavaScript Bestand

### Stap 1: Data bestand maken

Maak een bestand `data.js` in je src folder:

```javascript
// data.js
export const menuItems = [
  { id: 1, name: "Pizza Margherita", price: 12.50, category: "pizza" },
  { id: 2, name: "Pasta Carbonara", price: 14.00, category: "pasta" },
  { id: 3, name: "Caesar Salade", price: 9.50, category: "salade" }
];
```

### Stap 2: Data importeren en gebruiken

```jsx
// MenuList.jsx
import { useState } from 'react';
import { menuItems } from './data.js'; // Import de data

const MenuList = () => {
  const [menu, setMenu] = useState(menuItems); // Laad data in useState

  return (
    <div>
      <h2>Menu ({menu.length} items)</h2>
      {menu.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>€{item.price}</p>
          <p>Categorie: {item.category}</p>
        </div>
      ))}
    </div>
  );
};
```

## Methode 2: Data uit JSON Bestand met Server

### Stap 1: JSON bestand maken

Maak een folder `data` in je **project root** (niet in src!):

```
mijn-project/
├── src/
├── node_modules/
├── data/
│   └── data.json    ← Hier!
└── package.json
```

In `data/data.json`:

```json
{
  "menu": [
    { "id": 1, "name": "Pizza Margherita", "price": 12.50, "category": "pizza" },
    { "id": 2, "name": "Pasta Carbonara", "price": 14.00, "category": "pasta" },
    { "id": 3, "name": "Caesar Salade", "price": 9.50, "category": "salade" }
  ]
}
```

### Stap 2: JSON Server starten

In je terminal:

```bash
npx json-server --watch data/data.json --port 8000
```

Nu draait je server op: `http://localhost:8000/menu`

### Stap 3: Data fetchen met useEffect

```jsx
// MenuList.jsx
import { useState, useEffect } from 'react';

const MenuList = () => {
  const [menu, setMenu] = useState([]); // Start met lege array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('http://localhost:8000/menu');
        const data = await response.json();
        setMenu(data); // Sla data op in useState
        setLoading(false);
      } catch (error) {
        console.error('Error fetching menu:', error);
        setLoading(false);
      }
    };

    fetchMenu();
  }, []); // Runt 1 keer bij component mount

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Menu ({menu.length} items)</h2>
      {menu.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>€{item.price}</p>
          <p>Categorie: {item.category}</p>
        </div>
      ))}
    </div>
  );
};
```

## Verschil tussen de Methodes

| JavaScript Bestand | JSON Bestand + Server |
|---|---|
| ✅ Simpel en snel | ✅ Realistischer (echte API) |
| ✅ Geen server nodig | ✅ Data kan wijzigen |
| ❌ Data is statisch | ❌ Server moet draaien |
| ❌ Minder realistisch | ❌ Complexer |

## Belangrijke Regels

1. **useEffect altijd gebruiken bij fetch** - anders infinite loops
2. **Loading state toevoegen** - gebruikers zien dat er iets gebeurt
3. **Error handling** - wat als de server niet reageert?
4. **Lege array als startwaarde** bij fetching - voorkomt crashes
5. **Keys niet vergeten** bij het mappen door data

## Veelgemaakte Fouten

❌ **Fout - fetch zonder useEffect:**
```jsx
const Component = () => {
  const [data, setData] = useState([]);
  
  fetch('/api/data').then(response => setData(response)); // Infinite loop!
  
  return <div>{data.length}</div>;
}
```

✅ **Goed - fetch in useEffect:**
```jsx
const Component = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('/api/data').then(response => setData(response)); // Veilig!
  }, []);
  
  return <div>{data.length}</div>;
}
```

❌ **Fout - geen loading state:**
```jsx
const [menu, setMenu] = useState(null);

return (
  <div>
    {menu.map(item => <div key={item.id}>{item.name}</div>)} {/* Crash! menu is null */}
  </div>
);
```

✅ **Goed - wel loading check:**
```jsx
const [menu, setMenu] = useState([]);
const [loading, setLoading] = useState(true);

if (loading) return <div>Loading...</div>;

return (
  <div>
    {menu.map(item => <div key={item.id}>{item.name}</div>)} {/* Veilig! */}
  </div>
);
```

❌ **Fout - JSON server verkeerde poort:**
```jsx
fetch('http://localhost:3000/menu') // React draait op 3000, json-server op 8000!
```

✅ **Goed - juiste poort:**
```jsx
fetch('http://localhost:8000/menu') // json-server poort
```

## Handy Tips

- **Console.log je data** om te zien wat je krijgt
- **JSON-server is alleen voor oefenen** - echte projecten gebruiken echte API's
- **Network tab in browser** gebruiken om fetch requests te zien
- **Loading states maken apps professioneler**

## Volgende Stappen

Na het ophalen van data wil je vaak:
- Data **filteren** (bijvoorbeeld alleen pizza's)
- Data **sorteren** (op prijs, naam, etc.)
- **CRUD operaties** (Create, Read, Update, Delete)
- **Zoek functionaliteit** toevoegen
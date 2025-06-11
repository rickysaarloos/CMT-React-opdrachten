# React - useEffect

## Waarom heb je useEffect nodig?

Stel je wilt iets doen zodra je component wordt geladen. Je zou misschien denken: "Ik roep gewoon een functie aan!"

❌ **Dit gaat fout:**
```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  
  // Dit zorgt voor een infinite loop!
  setCount(count + 1);
  
  return <div>Count: {count}</div>;
};
```

**Probleem:** Elke keer dat je `setCount` aanroept, rendert het component opnieuw. Bij elke render wordt `setCount` weer aangeroepen. Dit veroorzaakt een **infinite loop**!

## Wat is useEffect?

De **useEffect** is een React Hook die ervoor zorgt dat code wordt uitgevoerd op het **juiste moment** - niet bij elke render.

Om useEffect te gebruiken moet je het eerst importeren:

```jsx
import { useEffect } from "react";
```

Of samen met useState:

```jsx
import { useState, useEffect } from "react";
```

## Basis Syntax

Een useEffect heeft **twee parameters**:
1. **Function** - de code die je wilt uitvoeren
2. **Dependency array** - wanneer de code moet worden uitgevoerd

```jsx
useEffect(() => {
  // Code die je wilt uitvoeren
}, []); // Dependency array
```

## Wanneer wordt useEffect uitgevoerd?

### 1. Bij elke render (gevaarlijk!)
```jsx
useEffect(() => {
  console.log('Dit runt bij elke render');
}); // Geen dependency array
```

### 2. Eén keer bij component mount
```jsx
useEffect(() => {
  console.log('Dit runt maar 1 keer');
}, []); // Lege dependency array
```

### 3. Wanneer specifieke waarde verandert
```jsx
useEffect(() => {
  console.log('Count is veranderd!');
}, [count]); // Runt alleen als count verandert
```

## Praktisch Voorbeeld: Console Message

✅ **Dit werkt goed:**
```jsx
const Welcome = () => {
  const [message, setMessage] = useState("Hallo!");

  useEffect(() => {
    console.log('Component is geladen!');
    setMessage("Welkom op de website!");
  }, []); // Runt maar 1 keer

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
```

## Data Fetching Voorbeeld

```jsx
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fake data ophalen (alsof het van een API komt)
    const userData = [
      { id: 1, name: "Jan" },
      { id: 2, name: "Lisa" },
      { id: 3, name: "Tom" }
    ];
    setUsers(userData);
  }, []); // Runt maar 1 keer bij laden

  return (
    <div>
      <h2>Gebruikers:</h2>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};
```

## Simpel Voorbeeld: Title Wijzigen

```jsx
const PageTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Je hebt ${count} keer geklikt`;
  }, [count]); // Runt elke keer als count verandert

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Klik mij
      </button>
    </div>
  );
};
```

## Belangrijke Regel

***Gebruik useEffect altijd wanneer je data fetcht!***

Anders krijg je infinite loops en performance problemen.

## Veelgemaakte Fouten

❌ **Fout - data fetchen zonder useEffect:**
```jsx
const Component = () => {
  const [data, setData] = useState([]);
  
  fetchData().then(setData); // Infinite loop!
  
  return <div>{data.length}</div>;
}
```

✅ **Goed - data fetchen met useEffect:**
```jsx
const Component = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData().then(setData); // Veilig!
  }, []);
  
  return <div>{data.length}</div>;
}
```

❌ **Fout - verkeerde dependency:**
```jsx
useEffect(() => {
  fetchUserData(userId).then(setUser);
}, []); // userId mist in dependency array!
```

✅ **Goed - juiste dependency:**
```jsx
useEffect(() => {
  fetchUserData(userId).then(setUser);
}, [userId]); // userId staat in dependency array
```

## Wanneer gebruik je useEffect?

- **Data fetchen** van een API
- **Timer/interval** starten
- **Event listeners** toevoegen
- **Document title** wijzigen
- **Cleanup** wanneer component unmount

## Handy Tips

- **Lege dependency array `[]`** = runt 1 keer bij mount
- **Geen dependency array** = runt bij elke render (meestal niet gewenst)
- **Met dependencies `[count, name]`** = runt als een van deze waarden verandert
- **Console.log** om te zien wanneer useEffect runt
- **Loading states** gebruiken bij data fetching

## Wat betekent "Render"?

**Render** = het opnieuw tekenen/weergeven van je component op het scherm. Dit gebeurt automatisch wanneer:
- De component voor het eerst wordt geladen
- De state verandert (bijvoorbeeld door `setState`)
- De props veranderen

## Wat betekent "Component Mount"?

**Mount** = wanneer een component voor de **eerste keer** wordt geladen en op de pagina wordt getoond. Dit gebeurt maar 1 keer per component.

## Wat is een React Hook?

Een **React Hook** is een speciale functie die begint met "use" (zoals `useState`, `useEffect`). Hooks geven je extra functionaliteit in je components, zoals:
- `useState` - voor het bijhouden van data
- `useEffect` - voor het uitvoeren van code op het juiste moment
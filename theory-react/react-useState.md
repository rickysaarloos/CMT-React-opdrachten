# React - useState

## Wat is useState?

De **useState** is een JavaScript Hook dat gebruikt wordt om een bepaalde status te updaten binnen een component.

Om de useState te gebruiken moet je dat eerst - in het component waar je het wilt gebruiken - importeren:

```jsx
import { useState } from "react";
```

## Hoe werkt useState?

In je component ga je de useState aanmaken. Een useState heeft **twee waardes**:
* De **huidige status**
* De **functie** die de huidige status update

```jsx
import { useState } from "react";

const FavoriteColor = () => {
  const [color, setColor] = useState("red");
}
```

**Color** is de huidige status met als waarde "red", dit komt omdat je in de useState een default waarde mee geeft. Dit hoeft uiteraard niet, je mag het ook leeg laten, dan is de huidige status leeg.

Met **setColor** kun je de huidige status veranderen, bijvoorbeeld naar "blue".

## Voorbeeld 1: Kleur Wijzigen

```jsx
const FavoriteColor = () => {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  )
}
```

Door op de button te klikken wijzig je met **setColor** de status van **color** naar 'blue' of 'green'.
De tekst verandert dan naar *"My favorite color is blue!"* of *"My favorite color is green!"*.

## Voorbeeld 2: Data Array met Objecten

useState wordt veel gebruikt voor het beheren van data, zoals een lijst met gebruikers:

```jsx
const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Jan", age: 25 },
    { id: 2, name: "Lisa", age: 30 },
    { id: 3, name: "Tom", age: 22 }
  ]);

  return (
    <div>
      <h2>Gebruikers ({users.length})</h2>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} - {user.age} jaar</p>
        </div>
      ))}
    </div>
  );
};
```

## Voorbeeld 3: Input Field

```jsx
const NameInput = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Hallo {name}!</h2>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Vul je naam in..."
      />
    </div>
  );
};
```

## Belangrijke Regels

1. **useState geeft altijd een array terug** met 2 elementen: `[waarde, setterFunctie]`
2. **Naamgeving**: als je state `name` heet, dan heet de setter `setName`
3. **State is immutable** - verander de state nooit direct, gebruik altijd de setter functie
4. **Spread operator** `[...users, newUser]` voor het toevoegen aan arrays
5. **Filter method** `users.filter(...)` voor het verwijderen uit arrays

## Veelgemaakte Fouten

❌ **Fout - state direct wijzigen:**
```jsx
const [users, setUsers] = useState([]);
users.push(newUser); // Werkt niet!
```

✅ **Goed - setter functie gebruiken:**
```jsx
const [users, setUsers] = useState([]);
setUsers([...users, newUser]); // Werkt wel!
```

❌ **Fout - verkeerde destructuring:**
```jsx
const [setColor, color] = useState("red"); // Verkeerde volgorde!
```

✅ **Goed - juiste volgorde:**
```jsx
const [color, setColor] = useState("red"); // Eerst waarde, dan setter
```

❌ **Fout - setter functie aanroepen in render:**
```jsx
const Component = () => {
  const [count, setCount] = useState(0);
  setCount(count + 1); // Infinite loop!
  return <div>{count}</div>;
}
```

✅ **Goed - setter in event handler:**
```jsx
const Component = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

## Handy Tips

- **console.log je state** om te zien wat erin zit
- **Gebruik de React Developer Tools** om state changes te volgen

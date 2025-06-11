# React - Lists & Keys

## Wat zijn Lists?

In React maak je vaak gebruik van **lists** oftewel lijstjes, hiermee wordt een normale array of een array met objecten bedoeld. Om door een array te lopen en elk item in een array op het scherm te tonen gebruik je een **loop**.

In React gebruiken we daarvoor de **map()** methode.

## Basis Voorbeeld: Simpele Array

```jsx
const FruitList = () => {
  const fruits = ["Appel", "Banaan", "Sinaasappel"];

  return (
    <div>
      <h2>Fruit lijst:</h2>
      {fruits.map(fruit => (
        <p>{fruit}</p>  // Dit geeft een warning!
      ))}
    </div>
  );
};
```

## Voorbeeld met Components

```jsx
const Person = ({ name }) => {
  return <p>Naam: {name}</p>;
};

const PeopleList = () => {
  const people = [
    { id: 1, name: "Jan" },
    { id: 2, name: "Lisa" },
    { id: 3, name: "Tom" }
  ];

  return (
    <div>
      <h2>Mensen:</h2>
      {people.map(person => (
        <Person name={person.name} />  // Dit geeft een warning!
      ))}
    </div>
  );
};
```

Wanneer je de code runt, zul je alle namen zien, alleen in je **console** zie je een foutcode.

## Waarom Keys?

React wilt namelijk dat elk item uit een array **uniek** is. Hierdoor moet je altijd de **key-attribute** meegeven. Vaak plaats je daar het **id** van een object.

**Waarom heeft React dit nodig?**
- React moet weten welk item is veranderd, toegevoegd of verwijderd
- Zonder keys moet React alle items opnieuw renderen
- Met keys kan React alleen de gewijzigde items updaten (veel sneller!)

## Oplossing: Keys Toevoegen

✅ **Simpele array met key:**
```jsx
const FruitList = () => {
  const fruits = ["Appel", "Banaan", "Sinaasappel"];

  return (
    <div>
      <h2>Fruit lijst:</h2>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>  // Key toegevoegd!
      ))}
    </div>
  );
};
```

✅ **Array met objecten (beste manier):**
```jsx
const PeopleList = () => {
  const people = [
    { id: 1, name: "Jan" },
    { id: 2, name: "Lisa" },
    { id: 3, name: "Tom" }
  ];

  return (
    <div>
      <h2>Mensen:</h2>
      {people.map(person => (
        <Person key={person.id} name={person.name} />  // ID als key!
      ))}
    </div>
  );
};
```

## Praktisch Voorbeeld: Todo List

```jsx
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Boodschappen doen", done: false },
    { id: 2, text: "Code schrijven", done: true },
    { id: 3, text: "Sport", done: false }
  ]);

  return (
    <div>
      <h2>Todo's:</h2>
      {todos.map(todo => (
        <div key={todo.id}>
          <input 
            type="checkbox" 
            checked={todo.done}
            onChange={() => {/* toggle functie */}}
          />
          <span>{todo.text}</span>
        </div>
      ))}
    </div>
  );
};
```

## Key Regels

1. **Keys moeten uniek zijn** binnen de lijst
2. **Gebruik het ID** als je dat hebt (beste optie)
3. **Index alleen als laatste optie** - kan problemen geven bij wijzigingen
4. **Keys moeten stabiel zijn** - gebruik geen random numbers!

## Veelgemaakte Fouten

❌ **Fout - geen key:**
```jsx
{users.map(user => (
  <div>{user.name}</div>  // Console warning!
))}
```

✅ **Goed - wel key:**
```jsx
{users.map(user => (
  <div key={user.id}>{user.name}</div>  // Geen warning!
))}
```

❌ **Fout - index bij veranderlijke lijst:**
```jsx
{users.map((user, index) => (
  <div key={index}>{user.name}</div>  // Problemen bij toevoegen/verwijderen!
))}
```

✅ **Goed - unieke ID:**
```jsx
{users.map(user => (
  <div key={user.id}>{user.name}</div>  // Stabiel en uniek!
))}
```

❌ **Fout - random key:**
```jsx
{users.map(user => (
  <div key={Math.random()}>{user.name}</div>  // Elke render nieuwe key!
))}
```

## Handy Tips

- **Console altijd checken** - React waarschuwt je voor missende keys
- **ID gebruiken wanneer mogelijk** - dat is de beste practice
- **Index alleen voor statische lijsten** die nooit veranderen
- **Keys zijn alleen voor React** - ze verschijnen niet in je HTML
- **Elk item in een map() heeft een key nodig** - anders warning!
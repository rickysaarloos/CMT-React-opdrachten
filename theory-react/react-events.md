# React - Events

## Wat zijn Events?

Net als HTML-DOM events, kan React acties uitvoeren op basis van gebruikersgebeurtenissen.

React heeft dezelfde events als HTML: click, change, mouseover etc. Het voordeel is nu dat je **geen eventListener in JavaScript meer hoeft toe te voegen**.

## React Events Syntax

React events schrijf je met **camelCase** syntax:
- **onClick** in plaats van **onclick**
- **onChange** in plaats van **onchange**
- **onMouseOver** in plaats van **onmouseover**

En de event handlers zijn geschreven binnen **curly braces**:
- **onClick={clickHandler}** in plaats van **onclick="clickHandler()"**

## Eenvoudig Voorbeeld

```jsx
const Button = () => {
  const handleClick = () => {
    alert('Button werd geklikt!');
  };

  return (
    <button onClick={handleClick}>
      Klik mij!
    </button>
  );
};
```

## Event Handler Direct Inline

Voor simpele acties kun je de functie ook direct inline schrijven:

```jsx
const Button = () => {
  return (
    <button onClick={() => alert('Geklikt!')}>
      Klik mij!
    </button>
  );
};
```

## Verschillende Events

```jsx
const EventDemo = () => {
  const handleClick = () => console.log('Geklikt!');
  const handleMouseOver = () => console.log('Muis eroverheen!');
  const handleChange = (e) => console.log('Input veranderd:', e.target.value);

  return (
    <div>
      <button onClick={handleClick}>Klik mij</button>
      <p onMouseOver={handleMouseOver}>Hover over mij</p>
      <input onChange={handleChange} placeholder="Type hier..." />
    </div>
  );
};
```

## Event Object

Elke event handler krijgt automatisch een **event object** mee:

```jsx
const InputField = () => {
  const handleChange = (event) => {
    console.log('Nieuwe waarde:', event.target.value);
  };

  return (
    <input 
      onChange={handleChange} 
      placeholder="Type iets..."
    />
  );
};
```

## Praktisch Voorbeeld: Form Input

```jsx
const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Voorkomt pagina refresh
    alert('Formulier verzonden!');
  };

  const handleNameChange = (event) => {
    console.log('Naam getypt:', event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Je naam" 
        onChange={handleNameChange}
      />
      <button type="submit">Verzenden</button>
    </form>
  );
};
```

## Veelgemaakte Fouten

❌ **Fout - functie direct aanroepen:**
```jsx
<button onClick={alert('Hallo')}>Klik mij</button>  // Wordt direct uitgevoerd!
```

✅ **Goed - functie als referentie:**
```jsx
<button onClick={() => alert('Hallo')}>Klik mij</button>  // Wordt uitgevoerd bij klik
```

❌ **Fout - gewone JavaScript syntax:**
```jsx
<button onclick="handleClick()">Klik mij</button>  // Kleine letters + quotes
```

✅ **Goed - React syntax:**
```jsx
<button onClick={handleClick}>Klik mij</button>  // camelCase + curly braces
```

❌ **Fout - vergeten event parameter:**
```jsx
const handleSubmit = () => {
  event.preventDefault();  // event is undefined!
};
```

✅ **Goed - event als parameter:**
```jsx
const handleSubmit = (event) => {
  event.preventDefault();  // Nu werkt het wel!
};
```

## Belangrijke Regels

1. **Gebruik camelCase**: `onClick`, niet `onclick`
2. **Gebruik curly braces**: `{handleClick}`, niet `"handleClick()"`
3. **Event object is eerste parameter** van je handler functie
4. **Arrow functions** voor inline handlers: `onClick={() => doSomething()}`
5. **Functie referentie** doorgeven, niet aanroepen: `onClick={myFunc}`, niet `onClick={myFunc()}`

## Handy Tips

- **Console.log is je vriend** - gebruik het om te zien wat er gebeurt
- **Event.target.value** geeft je de waarde van input velden
- **Event.preventDefault()** voorkomt standaard browser gedrag (bijv. form submit)
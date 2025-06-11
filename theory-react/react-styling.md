# React - Styling

## Styling in React

Styling toepassen in React kan op **verschillende manieren**.

## camelCased Property Names

Waar je op moet letten is het volgende: je bent gewend om de **class-attribute** te gebruiken, alleen zal React dit niet begrijpen. In React gebruik je **camelCased property names**, dit houdt in dat je **className** ipv **class** gebruikt.

❌ **Fout - gewone HTML:**
```jsx
<div class="container">  {/* class werkt niet in React! */}
  <h1>Mijn titel</h1>
</div>
```

✅ **Goed - React syntax:**
```jsx
<div className="container">  {/* className gebruiken */}
  <h1>Mijn titel</h1>
</div>
```

## App.css

Wanneer je React installeert zie je dat er een **App.css** bestand is, hier kun je al je CSS schrijven zoals je gewend bent. Importeer het bestand (als dat nog niet is gedaan) in je **App.jsx** en het werkt zoals je gewend bent.

```jsx
// App.jsx
import './App.css'; // CSS bestand importeren

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Mijn React App</h1>
      <button className="btn btn-primary">Klik mij</button>
    </div>
  );
};
```

```css
/* App.css */
.app {
  text-align: center;
  padding: 20px;
}

.title {
  color: blue;
  font-size: 2rem;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}
```

## Inline Styling

Je kunt ook **inline styles** gebruiken met JavaScript objecten:

```jsx
const MyComponent = () => {
  const titleStyle = {
    color: 'red',
    fontSize: '24px',
    textAlign: 'center'
  };

  return (
    <div>
      <h1 style={titleStyle}>Inline gestylde titel</h1>
      <p style={{ color: 'blue', margin: '10px' }}>
        Paragraph met inline styling
      </p>
    </div>
  );
};
```

**Let op bij inline styling:**
- Gebruik **camelCase** voor CSS properties: `fontSize` ipv `font-size`
- Waarden moeten **strings** zijn: `'24px'` ipv `24px`
- **Object notation** gebruiken: `{{ color: 'red' }}`

## Overzicht Styling Methodes

| Methode | Gebruik | Voordelen | Nadelen |
|---------|---------|-----------|---------|
| **App.css** | Globale styling | Eenvoudig, zoals gewend | Alles globaal |
| **Inline Styling** | Kleine aanpassingen | Direct in component | Niet herbruikbaar |

## Veelgemaakte Fouten

❌ **Fout - class gebruiken:**
```jsx
<div class="container">Content</div>  // Error!
```

✅ **Goed - className gebruiken:**
```jsx
<div className="container">Content</div>  // Werkt!
```

❌ **Fout - CSS property names:**
```jsx
<div style={{ font-size: '20px' }}>Text</div>  // Error!
```

✅ **Goed - camelCase:**
```jsx
<div style={{ fontSize: '20px' }}>Text</div>  // Werkt!
```

❌ **Fout - CSS import vergeten:**
```jsx
// Component.jsx
const Component = () => {
  return <div className="my-class">Content</div>;  // CSS werkt niet!
};
```

✅ **Goed - CSS importeren:**
```jsx
// Component.jsx
import './Component.css';  // CSS importeren!

const Component = () => {
  return <div className="my-class">Content</div>;
};
```

## Handy Tips

- **className** altijd gebruiken in plaats van class
- **CSS bestanden importeren** in je components
- **camelCase** voor inline style properties
- **Browser Developer Tools** om styling te debuggen
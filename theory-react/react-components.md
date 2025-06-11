# React - Components

## Wat is een Component?

Het idee achter React is dat je **custom HTML tags** maakt, die je vervolgens kan gebruiken om je user interface mee te maken. React noemt zo'n custom HTML tag een **component**.

Een component kan je zien als een stukje LEGO. Met LEGO kan je door verschillende blokken te combineren nieuwe dingen maken:
- Je begint met een klein LEGO blokje
- Die combineer je tot een muur  
- Van 4 muren maak je een kamer
- Van kamers een huis
- Van huizen een woonwijk
- En zo maar door...

Je maakt dus in React componenten, die door samen te werken steeds grotere componenten worden.

## Je Eerste Component Maken

Een component in React maak je aan door een **arrow function** te maken die begint met een **hoofdletter**:

```jsx
const Car = () => {
  return <h1>Hi, I am a Car!</h1>;
}
```

**Handy tip:** Type `sfc` in VS Code en druk op Tab. Dit maakt automatisch een basis component aan die je alleen nog een naam hoeft te geven!

**Belangrijk:** Een component begint altijd met een hoofdletter!

## Component Gebruiken

Vervolgens kunnen we dit component gebruiken, alsof het een HTML tag/element is:

```jsx
function App() {
  return (
    <div>
      <Car />
    </div>
  );
}
```

Dit zet het volgende op het scherm:
**Hi, I am a Car!**

## Wat is JSX?

Nu denk je misschien: hoe is het mogelijk dat je HTML binnen JavaScript kan gebruiken? Dit is inderdaad geen valide JavaScript syntax... hoe kan dit?

Het antwoord is **JSX**: JSX is een "uitbreiding" op JavaScript die het mogelijk maakt HTML te gebruiken in JavaScript.

## Meer Voorbeelden

```jsx
const Welcome = () => {
  return <h2>Welkom op mijn website!</h2>;
}

const Button = () => {
  return <button>Klik hier</button>;
}

// Gebruik beide components:
function App() {
  return (
    <div>
      <Welcome />
      <Button />
    </div>
  );
}

## Belangrijke Regels

1. **Component namen beginnen ALTIJD met hoofdletter**: `Car`, niet `car`
2. **Een component geeft altijd iets terug** met `return`  
3. **Je kunt maar 1 element teruggeven** - gebruik `<div>` om meerdere elementen te groeperen
4. **Components maak je met arrow functions**: `const MijnComponent = () => { }`

## Veelgemaakte Fouten

❌ **Fout - meerdere elementen zonder wrapper:**
```jsx
const MijnComponent = () => {
  return <h1>Titel</h1><p>Tekst</p>;  // 2 elementen!
}
```

✅ **Goed - gebruik een div:**
```jsx
const MijnComponent = () => {
  return (
    <div>
      <h1>Titel</h1>
      <p>Tekst</p>
    </div>
  );
}
```

❌ **Fout - kleine letter:**
```jsx
const myComponent = () => {  // Kleine letter!
  return <h1>Dit werkt niet</h1>;
}
```

✅ **Goed - hoofdletter:**
```jsx
const MyComponent = () => {  // Hoofdletter!
  return <h1>Dit werkt wel</h1>;
}
```

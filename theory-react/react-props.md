# React - Props

## Wat zijn Props?

De Car component uit het vorige hoofdstuk is **statisch**: er staat altijd dezelfde naam. Laten we dit aanpassen zodat we de naam zelf kunnen meegeven!

React geeft aan elk component als eerste parameter een object mee, dit noem je **props**. In dit object staan alle **attributen** die het component meekrijgt.

## Props in Actie

```jsx
const Car = ({ brand }) => {
  return <h1>Hi, I am a {brand}!</h1>;
}
```

Nu we binnen Car gebruik maken van `brand`, moeten we nu een brand attribuut meegeven:

```jsx
function App() {
  return (
    <div>
      <Car brand="Ford" />
    </div>
  );
}
```

Op het scherm verschijnt nu:
**Hi, I am a Ford!**

## Hoe werkt het?

Binnen JSX kan je tussen `{}` (accolades) JavaScript expressies plaatsen. De `{brand}` wordt dus vervangen met de brand die wordt meegegeven als prop/attribuut.

Een component wordt dus een **HTML-tag** en een property wordt een **HTML-attribute**.

## Meerdere Props

```jsx
const Car = ({ brand, color, year }) => {
  return (
    <div>
      <h1>Hi, I am a {brand}!</h1>
      <p>Color: {color}</p>
      <p>Year: {year}</p>
    </div>
  );
}

// Gebruik:
function App() {
  return (
    <div>
      <Car brand="BMW" color="red" year="2023" />
      <Car brand="Audi" color="blue" year="2024" />
    </div>
  );
}
```

## Praktisch Voorbeeld: Button Component

```jsx
const Button = ({ text, color, onClick }) => {
  return (
    <button 
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

// Gebruik:
function App() {
  return (
    <div>
      <Button text="Opslaan" color="green" onClick={() => alert('Opgeslagen!')} />
      <Button text="Verwijderen" color="red" onClick={() => alert('Verwijderd!')} />
    </div>
  );
}
```

## Veelgemaakte Fouten

❌ **Fout - vergeten accolades:**
```jsx
const Car = ({ brand }) => {
  return <h1>Hi, I am a brand!</h1>;  // Geen {} om brand
}
```

✅ **Goed - wel accolades:**
```jsx
const Car = ({ brand }) => {
  return <h1>Hi, I am a {brand}!</h1>;  // Met {} om brand
}
```

❌ **Fout - verkeerde prop naam:**
```jsx
<Car name="Ford" />  // Prop heet "name"

const Car = ({ brand }) => {  // Maar verwacht "brand"
  return <h1>Hi, I am a {brand}!</h1>;
}
```

✅ **Goed - zelfde namen:**
```jsx
<Car brand="Ford" />  // Prop heet "brand"

const Car = ({ brand }) => {  // En verwacht ook "brand"
  return <h1>Hi, I am a {brand}!</h1>;
}
```
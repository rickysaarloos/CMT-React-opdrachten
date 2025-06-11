# React - Forms

## Wat zijn Forms in React?

Een formulier maak je in React **hetzelfde** als in normaal HTML, alleen de input ophalen en verwerken gaat iets anders.

**HTML form:**
```html
<!-- Gewone HTML -->
<form>
  <input type="text" name="name" />
  <button type="submit">Verzenden</button>
</form>
```

**React form:**
```jsx
// React - exact dezelfde HTML structuur
const MyForm = () => {
  return (
    <form>
      <input type="text" name="name" />
      <button type="submit">Verzenden</button>
    </form>
  );
};
```

## Form Handling

**Omgaan met formulieren** gaat over hoe je de gegevens beheert wanneer ze van waarde veranderen of wanneer je het invoert.

**Verschil tussen HTML en React:**
- **In HTML** worden formuliergegevens meestal beheerd door de **DOM** (Document Object Model)
- **In React** worden formuliergegevens meestal beheerd door de **componenten**

Wanneer de gegevens worden beheerd door de componenten, worden alle gegevens opgeslagen in de **staat (useState)** van de component.

## Basis Voorbeeld: Input Field

```jsx
import { useState } from 'react';

const NameForm = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Hallo {name}!</h1>
      <form>
        <label>
          Naam:
          <input 
            type="text" 
            value={name}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};
```

**Uitleg:**
Je kunt veranderingen beheren door **event handlers** toe te voegen in het `onChange` attribuut. Hiermee wordt bedoeld dat de onChange attribute kan zien wat er wordt ingevoerd in een input-tag. Dit sla je op in een useState.

In het voorbeeld hierboven is er een functie gemaakt die de waarde van je input opslaat in de useState met `setName`. Dit gebeurt wanneer er een "verandering" wordt gedetecteerd in je input met `onChange`. Dus wanneer er in de input wordt getypt wordt dit gelijk in de useState opgeslagen.

In de h1-tag wordt dit op het scherm getoond.

## Meerdere Input Fields

```jsx
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form>
      <div>
        <label>
          Naam:
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <div>
        <label>
          Email:
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <div>
        <label>
          Bericht:
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <div>
        <h3>Preview:</h3>
        <p>Naam: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Bericht: {formData.message}</p>
      </div>
    </form>
  );
};
```

## Form Submission

```jsx
const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Voorkomt pagina refresh
    
    // Hier kun je de data verwerken
    console.log("Form data:", formData);
    alert(`Welkom ${formData.username}!`);
    
    // Form resetten na submission
    setFormData({
      username: "",
      password: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Gebruikersnaam:
          <input 
            type="text" 
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      
      <div>
        <label>
          Wachtwoord:
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      
      <button type="submit">Inloggen</button>
    </form>
  );
};
```

## Verschillende Input Types

```jsx
const AllInputsForm = () => {
  const [formData, setFormData] = useState({
    text: "",
    email: "",
    number: "",
    date: "",
    select: "",
    checkbox: false,
    radio: ""
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <form>
      <div>
        <label>
          Tekst:
          <input 
            type="text" 
            name="text"
            value={formData.text}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Nummer:
          <input 
            type="number" 
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Datum:
          <input 
            type="date" 
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Keuze:
          <select 
            name="select"
            value={formData.select}
            onChange={handleChange}
          >
            <option value="">Selecteer...</option>
            <option value="optie1">Optie 1</option>
            <option value="optie2">Optie 2</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          <input 
            type="checkbox" 
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
          Ik ga akkoord
        </label>
      </div>

      <div>
        <label>
          <input 
            type="radio" 
            name="radio"
            value="ja"
            checked={formData.radio === "ja"}
            onChange={handleChange}
          />
          Ja
        </label>
        <label>
          <input 
            type="radio" 
            name="radio"
            value="nee"
            checked={formData.radio === "nee"}
            onChange={handleChange}
          />
          Nee
        </label>
      </div>
    </form>
  );
};
```

## Belangrijke Regels

1. **Altijd value attribute** gebruiken om React de controle te geven
2. **onChange handler** voor elke input die de state update
3. **event.preventDefault()** in onSubmit om pagina refresh te voorkomen
4. **name attribute** moet overeenkomen met de state property naam
5. **Controlled components** - React beheert de input waarde via state

## Veelgemaakte Fouten

❌ **Fout - geen value attribute:**
```jsx
<input 
  type="text" 
  onChange={handleChange}
  // Geen value! React kan input niet controleren
/>
```

✅ **Goed - wel value attribute:**
```jsx
<input 
  type="text" 
  value={formData.name}
  onChange={handleChange}
/>
```

❌ **Fout - vergeten event.preventDefault():**
```jsx
const handleSubmit = (event) => {
  console.log("Form submitted");
  // Pagina refresht nu!
};
```

✅ **Goed - wel preventDefault:**
```jsx
const handleSubmit = (event) => {
  event.preventDefault(); // Voorkomt refresh
  console.log("Form submitted");
};
```

❌ **Fout - verkeerde checkbox handling:**
```jsx
const handleChange = (event) => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value // Voor checkbox gebruik je .checked!
  });
};
```

✅ **Goed - juiste checkbox handling:**
```jsx
const handleChange = (event) => {
  const { name, value, type, checked } = event.target;
  setFormData({
    ...formData,
    [name]: type === 'checkbox' ? checked : value
  });
};
```

❌ **Fout - state direct muteren:**
```jsx
const handleChange = (event) => {
  formData.name = event.target.value; // Direct state wijzigen!
  setFormData(formData);
};
```

✅ **Goed - nieuwe object maken:**
```jsx
const handleChange = (event) => {
  setFormData({
    ...formData, // Spread operator
    [event.target.name]: event.target.value
  });
};
```

## Handy Tips

- **Console.log je form data** om te zien wat er in staat
- **required attribute** voor verplichte velden
- **placeholder** voor hints aan gebruikers
- **defaultValue** voor initial waarden (bij uncontrolled components)
- **Formulier validatie** kun je toevoegen in handleSubmit
- **Spread operator `...`** gebruiken om state te kopiëren
- **name attribute** moet altijd hetzelfde zijn als je state property
# Wat is React?

## React in het Kort

**React** (ook wel React.js genoemd) is een **JavaScript framework** om user interfaces mee te maken. Denk daarbij aan websites, web applicaties, en zelfs mobile apps.

**De relatie tussen JavaScript en React:**
- **JavaScript** = de programmeertaal
- **React** = een framework geschreven IN JavaScript
- Je programmeert dus **in JavaScript** en gebruikt daarin **React**

## Een Simpele Vergelijking

Stel je voor dat je een huis wilt bouwen:

**JavaScript** = de grondstoffen (stenen, cement, hout)
- Je kunt alles zelf maken, maar het kost veel tijd
- Elke builder doet het anders
- Veel herhaling van werk

**React** = een bouwpakket met instructies
- Standaard onderdelen die altijd werken
- Duidelijke instructies hoe alles in elkaar past
- Sneller en consistenter bouwen

## Waarom React en niet gewoon JavaScript?

### Probleem met Vanilla JavaScript

```javascript
// Vanilla JavaScript - veel code voor simpele dingen
const button = document.createElement('button');
button.textContent = 'Klik mij';
button.addEventListener('click', function() {
  const div = document.createElement('div');
  div.textContent = 'Geklikt!';
  document.body.appendChild(div);
});
document.body.appendChild(button);

// En dit is nog maar 1 button...
```

### Oplossing met React

```jsx
// React - veel minder code voor hetzelfde resultaat
const MyButton = () => {
  const [clicked, setClicked] = useState(false);
  
  return (
    <div>
      <button onClick={() => setClicked(true)}>
        Klik mij
      </button>
      {clicked && <div>Geklikt!</div>}
    </div>
  );
};
```

## Voordelen van React

### 1. **Minder Code Schrijven**
React doet veel werk voor je, dus je hoeft minder te typen.

### 2. **Herbruikbare Componenten**
```jsx
// Maak eens, gebruik overal
<Button text="Opslaan" color="green" />
<Button text="Verwijderen" color="red" />
<Button text="Annuleren" color="gray" />
```

### 3. **Consistente Code**
Alle React code lijkt op elkaar. Als je React kent, kun je elke React app begrijpen.

### 4. **Team Samenwerking**
- Iedereen schrijft code op dezelfde manier
- Makkelijker om elkaars code te begrijpen
- Sneller nieuwe teamleden inwerken

### 5. **Automatische Updates**
React zorgt ervoor dat je website automatisch bijwerkt als data verandert.

## React vs JavaScript - Praktisch Voorbeeld

### Vanilla JavaScript (veel werk):
```javascript
// Todo lijst in vanilla JavaScript
let todos = [];

function addTodo(text) {
  todos.push({ id: Date.now(), text: text, done: false });
  renderTodos();
}

function renderTodos() {
  const container = document.getElementById('todos');
  container.innerHTML = ''; // Wis alles
  
  todos.forEach(todo => {
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.done;
    checkbox.addEventListener('change', () => toggleTodo(todo.id));
    
    const span = document.createElement('span');
    span.textContent = todo.text;
    
    div.appendChild(checkbox);
    div.appendChild(span);
    container.appendChild(div);
  });
}

function toggleTodo(id) {
  todos = todos.map(todo => 
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  renderTodos();
}

// En nog veel meer code...
```

### React (veel minder werk):
```jsx
// Dezelfde todo lijst in React
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <input 
            type="checkbox" 
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
          <span>{todo.text}</span>
        </div>
      ))}
    </div>
  );
};
```

## Waarom Bedrijven React Gebruiken

### Voor Developers:
- **Sneller ontwikkelen** - minder code schrijven
- **Minder bugs** - React voorkomt veel fouten
- **Betere samenwerking** - iedereen gebruikt dezelfde aanpak

### Voor Bedrijven:
- **Sneller nieuwe mensen vinden** - veel developers kennen React
- **Makkelijker onderhoud** - consistente codebase
- **Schaalbare applicaties** - React groeit mee met je project

## React Ecosysteem

React is niet alleen een framework, het is een heel ecosysteem:

- **React** - de basis library
- **React Router** - voor navigatie tussen pagina's  
- **React Native** - voor mobile apps
- **Next.js** - voor server-side rendering
- **Veel tools en libraries** die samenwerken

## Nadelen van React?

**Leercurve**: Je moet nieuwe concepten leren (JSX, components, state)

**Maar**: Als je het eenmaal kent, werk je veel sneller dan met vanilla JavaScript.

## Wat Ga Je Leren?

In de komende periode ga je de volgende React concepten leren:

### **Basis Concepten:**
- **Components** - herbruikbare UI stukjes
- **JSX** - HTML-achtige syntax in JavaScript
- **Props** - data doorgeven tussen components

### **State Management:**
- **useState** - data bijhouden in je component
- **useEffect** - code uitvoeren op het juiste moment

### **Interactiviteit:**
- **Events** - reageren op klikken, typen, etc.
- **Forms** - formulieren maken en valideren
- **Conditional rendering** - dingen tonen/verbergen

### **Data & Lijsten:**
- **Lists & Keys** - lijsten van data weergeven
- **Data fetching** - data ophalen van servers

### **Navigatie & Styling:**
- **React Router** - tussen pagina's navigeren
- **Styling** - met CSS en Tailwind CSS

### **Advanced:**
- **Loading states** - feedback tijdens laden
- **Error handling** - omgaan met fouten
- **localStorage** - data opslaan in browser

## Eerste Indruk van React

**Misschien denk je nu:** "Dit lijkt ingewikkeld..."

**Dat is normaal!** Elke developer heeft dit gevoel aan het begin. Maar na een paar weken denk je:

*"Waarom heb ik dit niet eerder geleerd? Dit is zoveel makkelijker!"*

## React in de Praktijk

**Bedrijven die React gebruiken:**
- Meta (Facebook, Instagram, WhatsApp)
- Netflix
- Airbnb  
- Uber
- Dropbox
- En duizenden andere bedrijven

**Waarom zo populair?**
- Grote community - veel hulp online
- Veel job vacatures
- Goed gedocumenteerd
- Constant verbeterd door Meta

## Klaar om te Beginnen?

In de volgende hoofdstukken leer je stap voor stap alle React concepten. We beginnen simpel en bouwen langzaam op naar complexere onderwerpen.

**Tip:** Maak je geen zorgen als het in het begin overweldigend lijkt. Dat is normaal! Focus op één concept tegelijk en oefenen, oefenen, oefenen.

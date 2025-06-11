# React - localStorage

## Wat is localStorage?

**localStorage** is een manier om data op te slaan in de browser van de gebruiker. Deze data blijft bewaard, zelfs als:
- De gebruiker de browser sluit
- De computer wordt herstart
- De internetverbinding wegvalt

Het is perfect voor het opslaan van gebruikersvoorkeuren, ingevulde formulieren, of kleine hoeveelheden data die je wilt bewaren.

## Waarom localStorage Gebruiken?

**Voordelen:**
- ✅ **Data blijft bewaard** tussen browser sessies
- ✅ **Geen server nodig** - werkt offline
- ✅ **Snelle toegang** - geen API calls
- ✅ **Per website gescheiden** - veilig
- ✅ **Eenvoudig te gebruiken**

**Praktische voorbeelden:**
- Gebruikersnaam onthouden voor inloggen
- Winkelwagen bijhouden
- Dark/light mode voorkeur
- Ingevulde formulier data tijdelijk opslaan
- Taal instellingen

## Basis localStorage Syntaxis

### Data Opslaan
```javascript
localStorage.setItem('key', 'value');

// Voorbeelden:
localStorage.setItem('username', 'jan123');
localStorage.setItem('darkMode', 'true');
localStorage.setItem('language', 'nl');
```

### Data Ophalen
```javascript
const value = localStorage.getItem('key');

// Voorbeelden:
const username = localStorage.getItem('username'); // "jan123"
const darkMode = localStorage.getItem('darkMode'); // "true"
const language = localStorage.getItem('language'); // "nl"
```

### Data Verwijderen
```javascript
localStorage.removeItem('key');

// Voorbeeld:
localStorage.removeItem('username');
```

### Alle Data Wissen
```javascript
localStorage.clear();
```

## localStorage met Objecten en Arrays

localStorage kan **alleen strings** opslaan. Voor objecten en arrays gebruik je `JSON.stringify()` en `JSON.parse()`:

### Object Opslaan
```javascript
const user = {
  name: 'Jan',
  age: 25,
  email: 'jan@email.com'
};

// Object omzetten naar string en opslaan
localStorage.setItem('user', JSON.stringify(user));
```

### Object Ophalen
```javascript
// String ophalen en omzetten naar object
const userString = localStorage.getItem('user');
const user = JSON.parse(userString);

console.log(user.name); // "Jan"
```

### Array Opslaan
```javascript
const favorites = ['pizza', 'pasta', 'burger'];

localStorage.setItem('favorites', JSON.stringify(favorites));
```

### Array Ophalen
```javascript
const favoritesString = localStorage.getItem('favorites');
const favorites = JSON.parse(favoritesString);

console.log(favorites); // ['pizza', 'pasta', 'burger']
```

## localStorage in React

### Voorbeeld 1: Username Onthouden

```jsx
import { useState, useEffect } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Ophalen van opgeslagen username bij component mount
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (rememberMe) {
      // Username opslaan in localStorage
      localStorage.setItem('username', username);
    } else {
      // Username verwijderen uit localStorage
      localStorage.removeItem('username');
    }
    
    // Hier zou je normaal inloggen...
    alert(`Inloggen als: ${username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Gebruikersnaam:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
      </div>
      
      <div>
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Onthoud mij
        </label>
      </div>
      
      <button type="submit">Inloggen</button>
    </form>
  );
};
```

### Voorbeeld 2: Dark Mode Toggle

```jsx
import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Ophalen van opgeslagen dark mode voorkeur
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Opslaan in localStorage
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    // CSS class toevoegen/verwijderen
    if (newDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  return (
    <div>
      <h2>Huidige modus: {darkMode ? 'Dark' : 'Light'}</h2>
      <button onClick={toggleDarkMode}>
        Schakel naar {darkMode ? 'Light' : 'Dark'} modus
      </button>
    </div>
  );
};
```

### Voorbeeld 3: Todo List met localStorage

```jsx
import { useState, useEffect } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Todos laden bij component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Todos opslaan elke keer als de todos array verandert
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List (wordt automatisch opgeslagen)</h2>
      
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nieuwe todo..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Toevoegen</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Verwijderen</button>
          </li>
        ))}
      </ul>

      <p>Totaal: {todos.length} todos</p>
    </div>
  );
};
```

## Custom Hook voor localStorage

Voor hergebruik kun je een custom hook maken:

```jsx
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // State initialiseren met waarde uit localStorage of initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return initialValue;
    }
  });

  // Functie om waarde te updaten
  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  };

  return [storedValue, setValue];
};

// Gebruik:
const MyComponent = () => {
  const [name, setName] = useLocalStorage('name', '');
  const [settings, setSettings] = useLocalStorage('settings', { theme: 'light' });

  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Je naam"
      />
      <p>Hallo {name}!</p>
    </div>
  );
};
```

## Veelgemaakte Fouten

❌ **Fout - vergeten JSON.parse/stringify:**
```jsx
const user = { name: 'Jan', age: 25 };
localStorage.setItem('user', user);  // Slaat "[object Object]" op!

const savedUser = localStorage.getItem('user');
console.log(savedUser.name);  // undefined!
```

✅ **Goed - wel JSON gebruiken:**
```jsx
const user = { name: 'Jan', age: 25 };
localStorage.setItem('user', JSON.stringify(user));  // Correcte string

const savedUser = JSON.parse(localStorage.getItem('user'));
console.log(savedUser.name);  // "Jan"
```

❌ **Fout - geen error handling:**
```jsx
const data = JSON.parse(localStorage.getItem('data'));  // Crash als invalid JSON!
```

✅ **Goed - wel error handling:**
```jsx
try {
  const data = JSON.parse(localStorage.getItem('data'));
  setData(data);
} catch (error) {
  console.error('Invalid JSON in localStorage');
  setData(defaultValue);
}
```

❌ **Fout - null check vergeten:**
```jsx
const todos = JSON.parse(localStorage.getItem('todos'));
setTodos(todos);  // Crash als todos null is!
```

✅ **Goed - null check:**
```jsx
const savedTodos = localStorage.getItem('todos');
if (savedTodos) {
  setTodos(JSON.parse(savedTodos));
} else {
  setTodos([]);  // Default waarde
}
```

❌ **Fout - te vaak opslaan:**
```jsx
const handleInputChange = (e) => {
  setInputValue(e.target.value);
  localStorage.setItem('input', e.target.value);  // Bij elke toetsaanslag!
};
```

✅ **Goed - useEffect gebruiken:**
```jsx
const handleInputChange = (e) => {
  setInputValue(e.target.value);
};

useEffect(() => {
  localStorage.setItem('input', inputValue);
}, [inputValue]);  // Alleen als waarde verandert
```

## localStorage Limieten en Beperkingen

### Opslaglimiet
- **~5-10MB** per website (verschilt per browser)
- Test altijd of opslaan gelukt is

### Alleen strings
- Gebruik `JSON.stringify()` en `JSON.parse()` voor objecten
- Numbers worden automatisch strings: `localStorage.setItem('number', 42)` → `"42"`

### Per website gescheiden
- Andere websites kunnen jouw localStorage niet lezen
- Verschillende subdomains hebben verschillende localStorage

### Incognito/Private browsing
- localStorage wordt gewist als private session eindigt
- Test altijd of localStorage beschikbaar is

## Best Practices

### 1. Altijd Error Handling
```jsx
const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('localStorage error:', error);
    return false;
  }
};
```

### 2. Helper Functions Maken
```jsx
const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },
  
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
  
  remove: (key) => {
    localStorage.removeItem(key);
  }
};

// Gebruik:
storage.set('user', { name: 'Jan' });
const user = storage.get('user', {});
```

### 3. Namespace Gebruiken
```jsx
// In plaats van:
localStorage.setItem('username', 'jan');
localStorage.setItem('theme', 'dark');

// Gebruik prefix:
localStorage.setItem('myapp_username', 'jan');
localStorage.setItem('myapp_theme', 'dark');
```

## Handy Tips

- **DevTools gebruiken** om localStorage te inspecteren (Application tab → Local Storage)
- **Niet gevoelige data** opslaan (wachtwoorden, API keys, etc. NOOIT in localStorage!)
- **Small data only** - voor grote data gebruik IndexedDB
- **Cleanup oude data** periodiek om ruimte vrij te maken
- **Backup strategy** hebben voor belangrijke data
- **Cross-browser testing** - gedrag kan verschillen

## Debugging localStorage

### In Browser DevTools:
1. Open **DevTools** (F12)
2. Ga naar **Application** tab
3. Klik **Local Storage** → je website URL
4. Zie alle opgeslagen key-value pairs

### In Code:
```jsx
// Alle localStorage keys tonen
console.log('All localStorage keys:');
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}

// localStorage size checken
const used = JSON.stringify(localStorage).length;
console.log(`localStorage gebruikt: ${used} characters`);
```
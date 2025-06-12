# React - Data Fetching

## Wat is Data Fetching?

**Data fetching** betekent het ophalen van gegevens van een externe bron, zoals een API of database. In React haal je vaak data op van:
- REST API's (zoals een webshop API)
- JSON bestanden op een server
- Externe services (zoals weer-API's)
- Je eigen backend database

## Waarom Data Fetching?

In echte applicaties haal je data meestal op van externe bronnen zoals:
- REST API's (zoals een webshop API)
- JSON bestanden op een server
- Externe services (zoals weer-API's)
- Je eigen backend database

Dit maakt je applicaties veel krachtiger omdat de data altijd actueel kan zijn.

## Fetch API Basics

### Basis Fetch Syntax

```javascript
// Gewone JavaScript fetch
fetch('https://api.example.com/users')
  .then(response => response.json())  // JSON omzetten
  .then(data => console.log(data))    // Data gebruiken
  .catch(error => console.error(error)); // Errors afhandelen
```

### Modern Async/Await Syntax

```javascript
// Moderne manier met async/await
const fetchUsers = async () => {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## Fetching in React

### Basis Voorbeeld

```jsx
import { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch functie binnen useEffect
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Lege dependency array = run eenmalig bij mount

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};
```

### Met Loading en Error States

```jsx
import { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        setError('Er ging iets mis bij het laden van gebruikers');
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Users ({users.length})</h2>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};
```


## Veelgemaakte Fouten

❌ **Fout - fetch niet in useEffect:**
```jsx
const Component = () => {
  const [data, setData] = useState([]);
  
  // Dit veroorzaakt infinite loop!
  fetch('/api/data')
    .then(response => response.json())
    .then(setData);
    
  return <div>{data.length}</div>;
};
```

✅ **Goed - fetch in useEffect:**
```jsx
const Component = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(setData);
  }, []); // Dependency array!
    
  return <div>{data.length}</div>;
};
```

❌ **Fout - response.ok niet checken:**
```jsx
const response = await fetch('/api/data');
const data = await response.json(); // Kan crashen bij 404/500 errors
```

✅ **Goed - response status checken:**
```jsx
const response = await fetch('/api/data');
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}
const data = await response.json();
```

❌ **Fout - geen error handling:**
```jsx
useEffect(() => {
  fetch('/api/data')
    .then(response => response.json())
    .then(setData);
    // Geen .catch() = errors worden niet afgehandeld
}, []);
```

✅ **Goed - wel error handling:**
```jsx
useEffect(() => {
  fetch('/api/data')
    .then(response => response.json())
    .then(setData)
    .catch(error => {
      console.error('Error:', error);
      setError(error.message);
    });
}, []);
```

❌ **Fout - JSON parsing vergeten:**
```jsx
const response = await fetch('/api/data');
setData(response); // Response object, geen data!
```

✅ **Goed - JSON parsing:**
```jsx
const response = await fetch('/api/data');
const data = await response.json(); // Parse JSON
setData(data);
```

❌ **Fout - dependencies vergeten:**
```jsx
const fetchUser = async () => {
  const response = await fetch(`/api/users/${userId}`);
  const user = await response.json();
  setUser(user);
};

useEffect(() => {
  fetchUser();
}, []); // userId dependency mist!
```

✅ **Goed - juiste dependencies:**
```jsx
useEffect(() => {
  if (userId) {
    fetchUser();
  }
}, [userId]); // Re-fetch als userId verandert
```

## Best Practices

### 1. Loading States
Toon altijd feedback tijdens het laden:
```jsx
if (loading) return <div>Loading...</div>;
```

### 2. Error Handling
Vang errors op en toon gebruiksvriendelijke berichten:
```jsx
if (error) return <div>Something went wrong: {error}</div>;
```

### 3. Custom Hooks
Maak herbruikbare fetch logic:
```jsx
const useApi = (url) => {
  // ... fetch logic
  return { data, loading, error, refetch };
};
```

### 4. URL's Consistent Houden
Gebruik variabelen voor herhaalde API URLs:
```jsx
const API_BASE = 'https://jsonplaceholder.typicode.com';

const fetchUsers = () => fetch(`${API_BASE}/users`);
const fetchPosts = () => fetch(`${API_BASE}/posts`);
```

## Debugging Tips

### 1. Network Tab
Gebruik browser DevTools → Network tab om requests te bekijken:
- Status codes (200, 404, 500)
- Request headers
- Response data
- Response tijd

### 2. Console Logging
Log belangrijke stappen:
```jsx
console.log('Fetching data from:', url);
console.log('Response status:', response.status);
console.log('Data received:', data);
```

### 3. Error Details
Log volledige error informatie:
```jsx
catch (error) {
  console.error('Fetch failed:', {
    message: error.message,
    stack: error.stack,
    url: url
  });
}
```

## Handy Tips

- **Start simpel** - begin met GET requests zonder parameters
- **Test in browser** - plak API URLs in adresbalk om response te zien
- **Use Postman** - test API's voordat je ze in React gebruikt
- **Check CORS** - sommige API's werken niet vanuit browser
- **Rate limiting** - wees voorzichtig met te veel requests
- **Cache responses** - sla data op om herhaalde requests te vermijden
- **Loading skeletons** - maak apps professioneler dan "Loading..."

## Quick Reference

```jsx
// Basic fetch template
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('API_URL');
      if (!response.ok) throw new Error('Failed to fetch');
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  fetchData();
}, []);
```
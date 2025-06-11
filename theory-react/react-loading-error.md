# React - Loading States & Error Handling

## Waarom Loading States & Error Handling?

Wanneer je data ophaalt van een API of server, duurt het even voordat de data er is. Gebruikers willen **feedback** krijgen over wat er gebeurt. Zonder loading states en error handling krijg je:

❌ **Slechte user experience:**
- Lege pagina zonder uitleg
- Gebruiker weet niet of het werkt
- Crashes als er iets mis gaat

✅ **Goede user experience:**
- "Loading..." bericht tijdens laden
- Duidelijke foutmeldingen als iets mis gaat
- Professionele uitstraling

## Basis Concept

Voor **elke data fetch** heb je meestal 3 states nodig:

```jsx
const [data, setData] = useState([]);     // De data zelf
const [loading, setLoading] = useState(true);   // Is het aan het laden?
const [error, setError] = useState(null);       // Is er een fout opgetreden?
```

## Eenvoudig Voorbeeld

```jsx
import { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);  // Start loading
        setError(null);    // Reset error
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Er is iets misgegaan bij het ophalen van gebruikers');
        }
        
        const userData = await response.json();
        setUsers(userData);
      } catch (err) {
        setError(err.message);  // Sla error op
      } finally {
        setLoading(false);  // Stop loading (altijd)
      }
    };

    fetchUsers();
  }, []);

  // Loading state
  if (loading) {
    return <div>Loading gebruikers...</div>;
  }

  // Error state
  if (error) {
    return (
      <div style={{ color: 'red' }}>
        <h3>Oops! Er is iets misgegaan:</h3>
        <p>{error}</p>
      </div>
    );
  }

  // Success state - toon de data
  return (
    <div>
      <h2>Gebruikers ({users.length})</h2>
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

## Verschillende Loading States

### 1. Basis Loading Bericht

```jsx
if (loading) {
  return <div>Loading...</div>;
}
```

### 2. Loading Spinner

```jsx
if (loading) {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div>🔄 Bezig met laden...</div>
    </div>
  );
}
```

### 3. Skeleton Loading (met Tailwind)

```jsx
if (loading) {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map(i => (
        <div key={i} className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}
```

## Error Handling Varianten

### 1. Basis Error Display

```jsx
if (error) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <strong>Error:</strong> {error}
    </div>
  );
}
```

### 2. Error met Retry Button

```jsx
const [retryCount, setRetryCount] = useState(0);

const handleRetry = () => {
  setRetryCount(prev => prev + 1);
  // Dit zal useEffect opnieuw triggeren als je retryCount in dependency array zet
};

if (error) {
  return (
    <div className="text-center p-8">
      <h3 className="text-red-600 text-xl mb-4">Er is iets misgegaan</h3>
      <p className="text-gray-600 mb-4">{error}</p>
      <button 
        onClick={handleRetry}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Probeer opnieuw
      </button>
    </div>
  );
}

// In useEffect:
useEffect(() => {
  fetchData();
}, [retryCount]);  // Herlaad als retryCount verandert
```

### 3. Error Boundaries (Advanced)

Voor componenten die crashen:

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Er is iets misgegaan. Probeer de pagina te verversen.</h2>;
    }

    return this.props.children;
  }
}

// Gebruik:
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

## Best Practices

### 1. Loading States
- **Toon altijd feedback** tijdens het laden
- **Disable buttons/inputs** tijdens loading om dubbele requests te voorkomen
- **Use beschrijvende loading teksten**: "Producten laden..." ipv "Loading..."

### 2. Error Handling
- **Vang alle errors op** met try/catch
- **Toon gebruiksvriendelijke berichten** ipv technische errors
- **Bied een retry optie** aan waar mogelijk
- **Log errors naar console** voor debugging

### 3. State Management
- **Reset error state** bij nieuwe requests
- **Use loading state** bij elke async operatie
- **Finally block** gebruiken om loading uit te zetten

## Veelgemaakte Fouten

❌ **Fout - loading niet resetten:**
```jsx
try {
  // setLoading(true);  // Vergeten!
  const data = await fetch('/api');
  setData(data);
} catch (err) {
  setError(err.message);
}
// setLoading(false);  // Ook vergeten!
```

✅ **Goed - altijd loading state beheren:**
```jsx
try {
  setLoading(true);
  setError(null);
  const data = await fetch('/api');
  setData(data);
} catch (err) {
  setError(err.message);
} finally {
  setLoading(false);  // Altijd uitvoeren
}
```

❌ **Fout - technische error tonen:**
```jsx
setError(err.message);  // "NetworkError when attempting to fetch resource."
```

✅ **Goed - gebruiksvriendelijke error:**
```jsx
setError('Er is iets misgegaan bij het laden van de data. Probeer het opnieuw.');
```

❌ **Fout - geen error boundary:**
```jsx
// Component crashed en toont witte pagina
return <div>{data.map(...)}</div>;  // Crash als data undefined is
```

✅ **Goed - defensief programmeren:**
```jsx
if (!data || data.length === 0) {
  return <div>Geen data beschikbaar</div>;
}

return <div>{data.map(...)}</div>;
```

❌ **Fout - loading en error tegelijk:**
```jsx
if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;
// Beide kunnen waar zijn!
```

✅ **Goed - juiste volgorde:**
```jsx
if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;
if (!data) return <div>Geen data</div>;
// Success state
```

## Handy Tips

- **React DevTools** gebruiken om state changes te volgen
- **Console.log je states** om te debuggen
- **Verschillende error types** afhandelen (network, 404, 500, etc.)
- **Loading skeletons** maken apps professioneler
- **Timeout toevoegen** voor lange requests
- **Offline detection** voor betere UX
- **Progressive loading** voor grote datasets

## Quick Reference

```jsx
// Template voor data fetching met loading/error handling
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/data');
      if (!response.ok) throw new Error('Something went wrong');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  fetchData();
}, []);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;
return <div>{/* Render data */}</div>;
```
# React - Conditionals

## Wat zijn Conditionals?

Stel je voor dat je een webpagina bouwt en je wilt dat sommige inhoud alleen wordt weergegeven als aan bepaalde **voorwaarden** is voldaan. Dit is waar React conditionals van pas komen. Je kunt JavaScript-logica gebruiken om te beslissen wat er op de pagina wordt getoond.

In JavaScript ben je gewend om een **if/else-statement** te gebruiken:

```javascript
// Gewone JavaScript
if (user.isLoggedIn) {
  showWelcomeMessage();
} else {
  showLoginButton();
}
```

In React schrijf je het op een **verkorte manier**.

## Twee Manieren in React

### 1. Ternary Operator (? :)

```jsx
const WelcomeMessage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <h1>Welkom terug!</h1> : <h1>Log eerst in</h1>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Uitloggen" : "Inloggen"}
      </button>
    </div>
  );
};
```

**Uitleg:**
- De **vraagteken** `?` staat voor de vraag "is het waar?"
- De **dubbele punt** `:` staat voor de else, dus als het niet waar is

**Leeswijze:** `isLoggedIn ? <h1>Welkom terug!</h1> : <h1>Log eerst in</h1>`
= "Is isLoggedIn waar? Dan toon 'Welkom terug!', anders toon 'Log eerst in'"

### 2. Logical && Operator

```jsx
const AdminPanel = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <h1>Hoofdpagina</h1>
      {isAdmin && <div>🔧 Admin Instellingen</div>}
      <button onClick={() => setIsAdmin(!isAdmin)}>
        {isAdmin ? "Admin uit" : "Admin aan"}
      </button>
    </div>
  );
};
```

**Uitleg:**
Als de voorwaarde waar is, dan wordt het component geladen. Als het niet waar is, wordt er niets getoond.

**Leeswijze:** `{isAdmin && <div>🔧 Admin Instellingen</div>}`
= "Als isAdmin waar is, toon dan 'Admin Instellingen'"

## Praktische Voorbeelden

### Voorbeeld 1: Shopping Cart

```jsx
const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = () => {
    setCartItems([...cartItems, `Item ${cartItems.length + 1}`]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <h2>Winkelwagen</h2>
      
      {/* && Operator - toon alleen als cart leeg is */}
      {cartItems.length === 0 && <p>Je winkelwagen is leeg</p>}
      
      {/* && Operator - toon alleen als cart items heeft */}
      {cartItems.length > 0 && (
        <div>
          <p>Items: {cartItems.length}</p>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      <button onClick={addItem}>Item Toevoegen</button>
      
      {/* Ternary - verschillende button tekst */}
      {cartItems.length > 0 ? (
        <button onClick={clearCart}>Wis Winkelwagen</button>
      ) : (
        <p>Voeg items toe om te wissen</p>
      )}
    </div>
  );
};
```

### Voorbeeld 2: Age Verification

```jsx
const AgeCheck = () => {
  const [age, setAge] = useState(0);

  return (
    <div>
      <h2>Leeftijd Controle</h2>
      <input 
        type="number" 
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Vul je leeftijd in"
      />
      
      {/* Ternary met meerdere condities */}
      {age === 0 ? (
        <p>Vul je leeftijd in</p>
      ) : age >= 18 ? (
        <div>
          <h3>✅ Welkom!</h3>
          <p>Je bent oud genoeg</p>
        </div>
      ) : (
        <div>
          <h3>❌ Sorry</h3>
          <p>Je bent te jong ({age} jaar)</p>
        </div>
      )}
      
      {/* && Operator voor bonus bericht */}
      {age >= 65 && <p>🎉 Senior korting beschikbaar!</p>}
    </div>
  );
};
```

## Wanneer Welke Gebruiken?

### Gebruik Ternary (? :) wanneer:
- Je **twee verschillende** dingen wilt tonen
- Je een "if-else" situatie hebt
- Je button tekst wilt wijzigen

### Gebruik && wanneer:
- Je iets **alleen wilt tonen** onder bepaalde voorwaarden
- Je geen "else" nodig hebt
- Je componenten wilt verbergen/tonen

## Veelgemaakte Fouten

❌ **Fout - if/else in return:**
```jsx
return (
  <div>
    if (isLoggedIn) {  // Dit werkt niet in JSX!
      <h1>Welkom</h1>
    }
  </div>
);
```

✅ **Goed - ternary of && gebruiken:**
```jsx
return (
  <div>
    {isLoggedIn && <h1>Welkom</h1>}
  </div>
);
```

❌ **Fout - vergeten accolades:**
```jsx
return (
  <div>
    isLoggedIn ? <h1>Welkom</h1> : <h1>Login</h1>  // Geen {} om conditie
  </div>
);
```

✅ **Goed - wel accolades:**
```jsx
return (
  <div>
    {isLoggedIn ? <h1>Welkom</h1> : <h1>Login</h1>}
  </div>
);
```

❌ **Fout - && met falsy waarden:**
```jsx
{items.length && <div>Items: {items.length}</div>}  // Toont "0" als leeg!
```

✅ **Goed - expliciete check:**
```jsx
{items.length > 0 && <div>Items: {items.length}</div>}  // Toont niks als leeg
```

## Handy Tips

- **Accolades `{}` niet vergeten** rond je conditionals in JSX
- **Expliciete vergelijkingen** gebruiken: `length > 0` in plaats van `length`
- **Ternary voor if-else**, **&& voor if-only**
- **Haakjes gebruiken** bij complexe conditionals voor leesbaarheid
- **Console.log je voorwaarden** om te zien wat er gebeurt
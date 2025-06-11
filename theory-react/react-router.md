# React - Router

## Waarom React Router?

Naast componenten ga je uiteraard ook **pagina's** maken in React en deze pagina's moeten met elkaar verbonden worden zodat je een volledige website hebt.

In normaal HTML ben je gewend om de **a-tag** daarvoor te gebruiken om pagina's aan de navigatiebar te verbinden:

```html
<!-- Gewone HTML -->
<a href="about.html">Over Ons</a>
```

**In React werkt dat niet!** Daarvoor gebruik je **React Router**.

## Installeren

Om React Router te gebruiken, moet je dit eerst installeren via je terminal:

```bash
npm i react-router-dom
```

## Stap 1: Pages Maken

Om pagina's aan te maken, maak je in de **src-folder** een nieuwe folder aan genaamd `Pages` (ja met een hoofdletter).

```
src/
├── components/
├── Pages/          ← Nieuwe folder
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── NoPage.jsx
└── App.jsx
```

Hier maak je een **Home.jsx** file aan en als je het nodig hebt een **About.jsx**. React ziet dit ook gewoon als een component dus met de shortcut `sfc` zet je de code klaar. Zet er een titel in om zo te testen of het werkt.

**Home.jsx:**
```jsx
const Home = () => {
  return (
    <div>
      <h1>Home Pagina</h1>
      <p>Welkom op onze website!</p>
    </div>
  );
};

export default Home;
```

**About.jsx:**
```jsx
const About = () => {
  return (
    <div>
      <h1>Over Ons</h1>
      <p>Hier staat informatie over ons bedrijf.</p>
    </div>
  );
};

export default About;
```

**NoPage.jsx:**
```jsx
const NoPage = () => {
  return (
    <div>
      <h1>404 - Pagina niet gevonden</h1>
      <p>Sorry, de pagina die je zoekt bestaat niet.</p>
    </div>
  );
};

export default NoPage;
```

## Stap 2: Router Opzetten in App.jsx

Om de router op te zetten ga je naar **App.jsx**, hier importeer je alles wat we nodig hebben:

```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
```

Je begint daarna eerst met de `<BrowserRouter>` en daarna definiëren we de `<Routes>`. In de Routes zit de `<Route>` wat aangeeft in welke **path** de pagina's komen.

```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import NoPage from './Pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**Uitleg:**
- De **home pagina** is altijd de index pagina daarom krijgt het de `index` attribute
- Als laatst heb je nog de `path="*"`, dit vangt alle paden die nog niet zijn gemaakt waardoor je een **404** voor je scherm te zien krijgt

## Stap 3: Navigation Maken

Als laatst maak je een **Navigation.jsx** pagina aan (in je Pages folder).

```jsx
// Pages/Navigation.jsx
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Over Ons</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
      <Outlet />
    </div>
  );
};

export default Navigation;
```

**Belangrijke punten:**
- In plaats van een **a-tag** gebruik je hier de **Link-tag** van React Router
- Je geeft de route aan naar de pagina met `to="/about"`
- **Outlet tag** wordt gebruikt om de content van je pagina onder de navbar te tonen
- Als je de `<Outlet />` tag niet gebruikt zul je onder je navbar ook niets zien!

## Stap 4: Navigation Integreren

De navigatie moet op **elke pagina** gebruikt worden, hiervoor wrap je ALLE Routes IN de Route naar navigation:

```jsx
// App.jsx - Finale versie
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Pages/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import NoPage from './Pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## Nieuwe Pagina Toevoegen

Elke keer wanneer je een **nieuwe pagina** maakt, doe je dit:

### 1. Maak de pagina component:
```jsx
// Pages/Contact.jsx
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>Neem contact met ons op!</p>
    </div>
  );
};

export default Contact;
```

### 2. Voeg Route toe in App.jsx:
```jsx
import Contact from './Pages/Contact';

// In de Routes:
<Route path="contact" element={<Contact />} />
```

### 3. Voeg Link toe in Navigation.jsx:
```jsx
<li><Link to="/contact">Contact</Link></li>
```

## Veelgemaakte Fouten

❌ **Fout - a-tags gebruiken:**
```jsx
<nav>
  <a href="/about">Over Ons</a>  {/* Pagina refresht! */}
</nav>
```

✅ **Goed - Link gebruiken:**
```jsx
<nav>
  <Link to="/about">Over Ons</Link>  {/* Smooth navigation */}
</nav>
```

❌ **Fout - Outlet vergeten:**
```jsx
const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* Geen Outlet! Content wordt niet getoond */}
    </nav>
  );
};
```

✅ **Goed - Outlet toevoegen:**
```jsx
const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />  {/* Content wordt hier getoond */}
    </div>
  );
};
```

❌ **Fout - verkeerde path:**
```jsx
<Route path="/home" element={<Home />} />  {/* /home */}
<Link to="/">Home</Link>                   {/* / */}
// Paths komen niet overeen!
```

✅ **Goed - zelfde paths:**
```jsx
<Route index element={<Home />} />  {/* / */}
<Link to="/">Home</Link>           {/* / */}
// Paths komen overeen!
```

❌ **Fout - import vergeten:**
```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Link vergeten te importeren!

<Link to="/about">About</Link>  // Error!
```

✅ **Goed - alle imports:**
```jsx
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
```

## Handy Tips

- **Altijd Outlet gebruiken** in je layout component
- **index attribute** voor de home pagina (geen path nodig)
- **path="*"** altijd als laatste voor 404 handling
- **Link in plaats van a-tags** - anders refresht je pagina
- **Nested routes** door Routes in Route te zetten
- **Browser Developer Tools** gebruiken om routing te debuggen

## Basis Template voor Nieuwe Projecten

```jsx
// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Pages/Navigation';
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
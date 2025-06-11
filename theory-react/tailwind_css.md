# Tailwind CSS

## Bootstrap vs Tailwind CSS

In het eerste leerjaar heb je gewerkt met **Bootstrap**. Dit jaar ga je aan de slag met **Tailwind CSS**. Beide zijn populaire CSS-frameworks, maar ze hanteren verschillende benaderingen voor het stylen van websites.

### Designfilosofie

**Bootstrap**: Bootstrap is een **component-gebaseerd** framework. Het biedt een reeks vooraf ontworpen en gestileerde componenten zoals knoppen, navigatiebalken, modals, en meer. Dit maakt het eenvoudig om snel een consistente en professionele uitstraling te bereiken zonder veel aangepaste CSS te schrijven.

**Tailwind CSS**: Tailwind is een **utility-first** CSS-framework. In plaats van vooraf ontworpen componenten te bieden, geeft Tailwind je utility-klassen die je kunt combineren om je eigen unieke ontwerpen te creëren. Dit biedt meer flexibiliteit en controle, maar vereist wellicht meer tijd voor het initial ontwerp.

### Vergelijking

| Aspect | Bootstrap | Tailwind CSS |
|--------|-----------|--------------|
| **Customization** | Beperkt door vooraf bepaalde stijlen | Bijna elk aspect aanpasbaar |
| **Leercurve** | Makkelijker voor beginners | Steilere leercurve, maar sneller als je het kent |
| **Bestandsgrootte** | Kan groot zijn als je veel niet gebruikt | Tools om ongebruikte stijlen te verwijderen |
| **Flexibiliteit** | Minder flexibel | Zeer flexibel en aangepast |

## Tailwind CSS Installeren in React

Wanneer je een nieuw framework gaat leren is het belangrijk dat je hun **website bekijkt**. Dat kan zijn om te zien hoe je het installeert, maar ook hoe je het kunt gebruiken. Er staan namelijk meer dan genoeg voorbeelden.

Om Tailwind CSS te installeren in React ga je naar hun website: **https://tailwindcss.com/docs/guides/vite**

### Stap-voor-stap Installatie

**Let op:** Deze stappen zijn voor het installeren van Tailwind CSS in een **bestaand React project**.

**Het is belangrijk dat je goed LEEST wat er staat!**

**Stap 1: Tailwind CSS installeren**
```bash
npm install -D tailwindcss postcss autoprefixer
```

**Stap 2: Configuratie bestanden genereren**
```bash
npx tailwindcss init -p
```

**Stap 3: Tailwind configureren**
Voeg de paths toe in je `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Stap 4: Tailwind directives toevoegen**
Vervang de inhoud van `src/index.css` met:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Stap 5: Testen**
Test of het werkt in je `App.jsx`:
```jsx
function App() {
  return (
    <h1 className="text-3xl font-bold underline text-blue-500">
      Hello Tailwind!
    </h1>
  );
}
```

**Let op!** Indien je geen `index.css` meer hebt in je src-folder, maak die dan opnieuw aan en plaats deze in je `main.jsx` (niet in App.jsx):
```jsx
// main.jsx
import './index.css'  // Importeer hier!
```

## Tailwind Gebruiken

Het is logisch dat je nog niet weet welke classes je moet gebruiken. Gebruik hiervoor de **Tailwind-documentatie** (te vinden op tailwindcss.com). Het heeft een **zoekfunctie** waarmee je snel classes en hun effecten kunt vinden.

### Basis Voorbeelden

```jsx
const TailwindExamples = () => {
  return (
    <div className="p-8">
      {/* Tekstkleur en -grootte */}
      <h1 className="text-blue-500 text-xl font-bold">
        Blauwe grote tekst
      </h1>
      
      {/* Flexbox */}
      <div className="flex justify-center items-center h-32 bg-gray-100">
        <p>Gecentreerde tekst</p>
      </div>
      
      {/* Padding en Margin */}
      <div className="p-4 m-5 bg-green-200">
        Padding 4, Margin 5
      </div>
      
      {/* Responsiviteit */}
      <div className="block md:flex">
        <div className="bg-red-200 p-4">Eerste div</div>
        <div className="bg-blue-200 p-4">Tweede div</div>
      </div>
    </div>
  );
};
```

### Veel Gebruikte Classes

- **Tekstkleur**: `text-red-500`, `text-blue-700`, `text-gray-900`
- **Achtergrondkleur**: `bg-red-500`, `bg-blue-700`, `bg-gray-100`
- **Tekstgrootte**: `text-sm`, `text-lg`, `text-xl`, `text-2xl`
- **Padding**: `p-2`, `px-4`, `py-6`, `pt-8`
- **Margin**: `m-2`, `mx-4`, `my-6`, `mt-8`
- **Flexbox**: `flex`, `justify-center`, `items-center`
- **Responsiviteit**: `sm:`, `md:`, `lg:`, `xl:`

## VSCode Extension

Installeer in VSCode de volgende extension: **https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss**

Deze extension geeft je:
- **Autocomplete** voor Tailwind classes
- **Hover previews** om te zien welke CSS een class genereert
- **Syntax highlighting** voor Tailwind directives
- **Linting** om fouten te vinden

## Styling Aanpassen

Als je een styling wilt toepassen wat ontbreekt in Tailwind of aanpassen, kun je de **configuratie aanpassen**.

### Custom Kleuren Toevoegen

**Stap 1**: Open je `tailwind.config.js` bestand

**Stap 2**: Voeg je aangepaste kleur toe in de theme sectie:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1c92d2',
        'brand-green': '#10B981',
        'my-purple': {
          100: '#E6E6FA',
          500: '#8A2BE2',
          900: '#4B0082'
        }
      }
    },
  },
  plugins: [],
}
```

**Stap 3**: Gebruik je aangepaste kleur in je componenten:
```jsx
const CustomColors = () => {
  return (
    <div>
      <h1 className="text-custom-blue">Custom blauwe tekst</h1>
      <div className="bg-brand-green p-4">Brand groene achtergrond</div>
      <p className="text-my-purple-500">Paarse tekst</p>
    </div>
  );
};
```

Meer voorbeelden hoe je styling kunt toevoegen/aanpassen: **https://tailwindcss.com/docs/configuration**

## Custom Values (Arbitrary Values)

Indien je zelf de waardes aan je padding/margin etc wilt toevoegen kun je **arbitrary values** gebruiken:

```jsx
const CustomValues = () => {
  return (
    <div>
      {/* Custom margins en padding */}
      <div className="mt-[35px] mx-[12vw] p-[1.5rem]">
        Custom spacing
      </div>
      
      {/* Custom kleuren */}
      <div className="bg-[#ff6b6b] text-[#ffffff]">
        Custom kleuren
      </div>
      
      {/* Custom afmetingen */}
      <div className="w-[350px] h-[200px]">
        Custom afmetingen
      </div>
    </div>
  );
};
```

**Syntax**: Zet je custom waarde tussen **vierkante haakjes** `[]`

Meer info: **https://www.kindacode.com/snippet/tailwind-css-use-margin-and-padding-with-custom-values/**

## Praktisch Voorbeeld: Card Component

```jsx
const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden">
      <img 
        className="w-full h-48 object-cover" 
        src={product.image} 
        alt={product.name}
      />
      
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {product.name}
        </h2>
        
        <p className="text-gray-600 text-sm mb-4">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">
            €{product.price}
          </span>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Koop Nu
          </button>
        </div>
      </div>
    </div>
  );
};
```

## Veelgemaakte Fouten

❌ **Fout - Tailwind niet geïmporteerd:**
```jsx
// index.css niet geïmporteerd in main.jsx
<div className="text-blue-500">Blauw</div>  // Werkt niet!
```

✅ **Goed - Tailwind correct geïmporteerd:**
```jsx
// main.jsx
import './index.css'  // Met @tailwind directives

<div className="text-blue-500">Blauw</div>  // Werkt wel!
```

❌ **Fout - verkeerde class namen:**
```jsx
<div className="text-blue">Blauw</div>  // Geen intensiteit!
<div className="padding-4">Padding</div>  // Verkeerde syntax!
```

✅ **Goed - correcte class namen:**
```jsx
<div className="text-blue-500">Blauw</div>  // Met intensiteit
<div className="p-4">Padding</div>  // Correcte syntax
```

❌ **Fout - content paths niet correct:**
```javascript
// tailwind.config.js
content: ["./src/*.jsx"],  // Mist subdirectories!
```

✅ **Goed - alle paths includeren:**
```javascript
// tailwind.config.js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],  // Alle bestanden
```

❌ **Fout - spaties in class names:**
```jsx
<div className="text-blue-500 bg-red 500">Text</div>  // Spatie in bg-red 500!
```

✅ **Goed - geen spaties in class names:**
```jsx
<div className="text-blue-500 bg-red-500">Text</div>  // Correct
```

## Handy Tips

- **Tailwind documentatie bookmarken** - je gaat het veel gebruiken
- **VSCode extension installeren** - autocomplete bespaart veel tijd
- **Hover over classes** om te zien welke CSS ze genereren
- **Browser DevTools gebruiken** om Tailwind classes te inspecteren
- **Responsive design** testen met verschillende screen sizes
- **Custom configuratie** pas toevoegen als je het echt nodig hebt
- **Class namen samenstellen**: `bg-blue-500 hover:bg-blue-600 transition-colors`
- **Production build** maken om file size te optimaliseren

## Responsive Design Voorbeeld

```jsx
const ResponsiveCard = () => {
  return (
    <div className="
      w-full 
      sm:w-1/2 
      md:w-1/3 
      lg:w-1/4 
      p-4
    ">
      <div className="
        bg-white 
        rounded-lg 
        shadow-md 
        p-6
        text-center
        sm:text-left
      ">
        <h3 className="
          text-lg 
          md:text-xl 
          lg:text-2xl 
          font-bold 
          mb-2
        ">
          Responsive Card
        </h3>
        <p className="text-gray-600 text-sm md:text-base">
          Dit past zich aan aan je schermgrootte!
        </p>
      </div>
    </div>
  );
};
```

**Breakpoints:**
- `sm:` - vanaf 640px (tablet portrait)
- `md:` - vanaf 768px (tablet landscape)  
- `lg:` - vanaf 1024px (desktop)
- `xl:` - vanaf 1280px (large desktop)
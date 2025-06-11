# React Project Aanmaken met Vite

## Wanneer Gebruik Je Dit?

Deze instructies zijn voor wanneer je **zelf een nieuw React project** moet aanmaken. Voor de meeste opdrachten staat het project al klaar in de repository, maar soms moet je het zelf doen.

## Stap 1: Repository Aanmaken en Clonen

### Repository Aanmaken
Maak in **GitHub** (of GitLab) een **eigen** repository aan:
- Zet deze op **public**
- Geef de repository de naam van je project

### Repository Clonen
1. Clone de repository met **GitHub Desktop**
2. Open de repository folder in **VSCode**
3. Je gaat nu een React project maken IN deze folder

## Stap 2: Nieuw React Project Maken

**Let op:** Op de website van **ViteJs** kun je zien hoe je een nieuw project kunt aanmaken.

### Terminal Commando's

Open je **terminal in VSCode** en doe het volgende:

```bash
npm create vite@latest
```

### Stappen Doorlopen

Doorloop alle stappen en zorg dat dit de uitkomst is:

1. **Project naam**: Type een **punt** (.) om het project in de huidige folder te maken
2. **Framework**: Selecteer **React** (wil je een ander framework uitproberen dan mag dat ook)
3. **Taal**: Kies **JavaScript** (wil je liever met TypeScript dan mag dat ook)

### Voorbeeld in Terminal

```
✔ Project name: … .
✔ Select a framework: › React
✔ Select a variant: › JavaScript

Scaffolding project in /current-directory...

Done. Now run:

  npm install
  npm run dev
```

## Stap 3: Project Installeren en Starten

Als de installatie klaar is, volg je de onderstaande stappen die in de terminal staan:

### 1. Dependencies Installeren
```bash
npm install
```
**npm install** zorgt ervoor dat de **node_modules** folder wordt geïnstalleerd zodat je alle library's kunt installeren indien dat nodig is en om het project te starten. **Zonder de node_modules folder werkt het niet!**

### 2. Development Server Starten
```bash
npm run dev
```
Met **npm run dev** start je het project op (bouwt hij als het ware de code om in normaal HTML/CSS en Javascript).

**Elke keer als je gaat beginnen met React, type je `npm run dev` in je terminal.**

### Resultaat

Je terminal laat iets zoals dit zien:
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Open **http://localhost:5173/** in je browser om je React app te zien!

## Stap 4: Mappenstructuur

Na installatie heb je de volgende mappenstructuur in je repository:

```
my-repository/
├── node_modules/     ← Nooit verwijderen!
├── public/           ← Images, favicons, fonts
├── src/              ← Hier ga je werken!
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md         ← GitHub repository README
```

### Belangrijke Folders

**node_modules**: 
- **Nooit verwijderen** anders start React niet
- Is een library waar we allerlei handige tools mee kunnen installeren

**public**: 
- In deze folder komen de **images, favicons en fonts**
- Bestanden hier zijn direct toegankelijk via URL

**src**: 
- **Belangrijkste folder**, in deze folder ga je werken
- Hier staan al je React componenten
- **App.jsx** is je hoofd component
- **main.jsx** is het startpunt van je app

## Belangrijk!

**Let op! Voor elke nieuwe React opdracht moet je de bovenstaande stappen opnieuw volgen, zolang het IN de 'React-exercises' folder is. Dus al je React projecten/opdrachten staan in die folder.**

### Voorbeeld Workflow

```bash
# In je repository folder
npm create vite@latest .
# Selecteer React + JavaScript
npm install
npm run dev
```

## Veelgemaakte Fouten

❌ **Fout - project naam in plaats van punt:**
```bash
✔ Project name: … my-project-name  # Maakt sub-folder!
```

✅ **Goed - punt gebruiken:**
```bash
✔ Project name: … .  # Installeert in huidige folder
```

❌ **Fout - npm install vergeten:**
```bash
npm run dev  # Error! node_modules niet geïnstalleerd
```

✅ **Goed - npm install eerst:**
```bash
npm install   # Eerst installeren
npm run dev   # Dan starten
```

❌ **Fout - verkeerde poort:**
```
Project draait op localhost:3000  # Dit is Create React App
```

✅ **Goed - Vite poort:**
```
Project draait op localhost:5173  # Dit is Vite
```

❌ **Fout - node_modules verwijderd:**
```bash
# node_modules folder verwijderd
npm run dev  # Error!
```

✅ **Goed - opnieuw installeren:**
```bash
npm install  # node_modules opnieuw installeren
npm run dev  # Nu werkt het weer
```

## Handy Tips

- **Terminal altijd open houden** tijdens development
- **Ctrl+C** om development server te stoppen
- **npm run dev** om server opnieuw te starten
- **Browser refresht automatisch** bij code wijzigingen
- **Git repository** aanmaken in je project folder
- **README.md** bijwerken met project informatie
- **package.json** bevat alle project info en dependencies


## Troubleshooting

**Server start niet?**
- Check of je in de juiste repository folder zit
- Run `npm install` opnieuw
- Check of poort 5173 vrij is

**Module not found errors?**
- Run `npm install` opnieuw
- Check of node_modules folder bestaat
- Restart VSCode

**Port already in use?**
- Stop andere React projecten (Ctrl+C)
- Of gebruik andere poort: `npm run dev -- --port 3000`
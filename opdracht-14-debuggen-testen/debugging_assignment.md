# Opdracht: Debuggen en Testen

## 🎯 Doel

In deze opdracht ga je een bestaande React-applicatie debuggen en testen. De applicatie heeft enkele fouten die je moet vinden en oplossen. Vervolgens gebruik je de onderstaande acceptatiecriteria om te controleren of de applicatie correct werkt.


## 📋 Wat ga je doen?

Je krijgt een React movie applicatie die niet goed werkt. Er zitten bugs in de code die je moet vinden en oplossen. Na het debuggen test je of alle functionaliteit werkt volgens de user stories.

**Applicatie:** Favorite Movies List
- Films toevoegen aan favorieten lijst
- Films verwijderen uit lijst  
- Dubbele films voorkomen
- Lege lijst melding tonen

## 🔧 Stappen

### **Stap 1: Applicatie Starten**
1. Open de movie applicatie in je development omgeving
2. Installeer de dependencies met `npm install`
3. Start de applicatie met `npm run dev`
4. Open de applicatie in je browser

### **Stap 2: Debuggen**
1. **Test de basisfunctionaliteit:**
   - Probeer films toe te voegen
   - Probeer films te verwijderen  
   - Probeer dubbele films toe te voegen

2. **Gebruik browser developer tools:**
   - Open Chrome DevTools (F12)
   - Check de **Console** tab voor JavaScript errors

3. **Debug systematisch:**
   - Lees error messages zorgvuldig
   - Use `console.log()` om variabelen te checken
   - Test één functie tegelijk
   - Fix één bug tegelijk

4. **Los de fouten op:**
   - Repareer alle console errors
   - Zorg dat alle functionaliteit werkt
   - Test na elke fix

### **Stap 3: Testen met Acceptatiecriteria**
Nadat je de bugs hebt opgelost, ga je de applicatie testen aan de hand van de gegeven acceptatiecriteria.

### **Stap 4: Rapportage Maken**
Maak een nieuw bestand `RAPPORTAGE.md` in je project folder en documenteer:
- Alle bugs die je hebt gevonden en opgelost
- Test resultaten van alle acceptatiecriteria
- Use de templates uit de oplevering sectie als voorbeeld

## 📝 User Stories & Acceptatiecriteria

### **User Story 1: Movies toevoegen aan favorietenlijst**

**Als gebruiker wil ik films kunnen toevoegen aan mijn favorietenlijst, zodat ik een lijst van mijn favoriete films kan bijhouden.**

#### Acceptatiecriteria:
- ✅ Er is een invoerveld aanwezig waar ik de titel van een film kan typen
- ✅ Er is een knop aanwezig om de ingevoerde film toe te voegen aan de lijst
- ✅ Wanneer ik op de knop klik, wordt de film aan de lijst toegevoegd
- ✅ De ingevoerde film wordt onder de bestaande favorieten getoond
- ✅ Als ik een lege titel probeer toe te voegen, krijg ik een foutmelding dat de filmnaam niet leeg mag zijn
- ✅ Het invoerveld moet na het toevoegen van een film automatisch leeg worden gemaakt

### **User Story 2: Films verwijderen uit favorietenlijst**

**Als gebruiker wil ik films uit mijn favorietenlijst kunnen verwijderen, zodat ik mijn lijst kan beheren en ongewenste films kan verwijderen.**

#### Acceptatiecriteria:
- ✅ Elke film in de lijst heeft een verwijderknop naast de filmtitel
- ✅ Wanneer ik op de verwijderknop klik, wordt de bijbehorende film uit de lijst verwijderd
- ✅ Na het verwijderen moet de film direct uit de lijst verdwijnen
- ✅ Er verschijnt geen foutmelding wanneer een film succesvol verwijderd is

### **User Story 3: Duplicate films voorkomen**

**Als gebruiker wil ik niet dat dezelfde film meerdere keren kan worden toegevoegd aan de favorietenlijst, zodat mijn lijst geen dubbele films bevat.**

#### Acceptatiecriteria:
- ✅ Wanneer ik probeer een film toe te voegen die al in de lijst staat, krijg ik een foutmelding dat de film al bestaat
- ✅ De film wordt niet toegevoegd als deze al in de lijst voorkomt
- ✅ De lijst bevat nooit duplicaten van dezelfde filmtitel

### **User Story 4: Lege lijstmelding tonen**

**Als gebruiker wil ik een melding zien wanneer mijn favorietenlijst leeg is, zodat ik weet dat ik films moet toevoegen.**

#### Acceptatiecriteria:
- ✅ Wanneer er geen films in de lijst staan, verschijnt er een bericht met de tekst "No favorite movies yet. Add some!"
- ✅ Zodra de eerste film wordt toegevoegd, verdwijnt dit bericht
- ✅ Als alle films verwijderd zijn, verschijnt het bericht opnieuw

## 🧪 Test Scenario's

### **Test Scenario 1: Happy Path**
1. Open de applicatie
2. Voeg film "Inception" toe
3. Voeg film "The Matrix" toe
4. Check dat beide films in de lijst staan
5. Verwijder "Inception"
6. Check dat alleen "The Matrix" overblijft
7. Verwijder "The Matrix"
8. Check dat lege lijst melding verschijnt

### **Test Scenario 2: Error Handling**
1. Probeer lege film toe te voegen → Check error message
2. Voeg "Avatar" toe
3. Probeer "Avatar" opnieuw toe te voegen → Check duplicate error
4. Check dat er maar één "Avatar" in lijst staat

### **Test Scenario 3: Edge Cases**
1. Voeg film toe met alleen spaties → Check error handling
2. Voeg zeer lange filmnaam toe → Check UI handling
3. Voeg film toe met speciale karakters → Check of het werkt


## 📝 Oplevering

### **Wat moet je inleveren:**

1. **Werkende applicatie** - alle bugs gefixed
2. **Debug report** - welke bugs je gevonden hebt en hoe je ze opgelost hebt
3. **Test report** - resultaten van alle acceptatiecriteria tests
4. **Git commits** - met duidelijke messages voor elke fix

### **Debug Report Template:**
```markdown
## Bug Fixes

### Bug 1: [Beschrijving]
- **Probleem:** [Wat ging er mis?]
- **Oorzaak:** [Waarom ging het mis?]  
- **Oplossing:** [Hoe heb je het opgelost?]

### Bug 2: [Beschrijving]
- **Probleem:** [Wat ging er mis?]
- **Oorzaak:** [Waarom ging het mis?]
- **Oplossing:** [Hoe heb je het opgelost?]
```

### **Test Report Template:**
```markdown
## Test Results

### User Story 1: ✅ PASSED
- Criterium 1: ✅ PASSED
- Criterium 2: ✅ PASSED
- etc.

### User Story 2: ❌ FAILED
- Criterium 1: ✅ PASSED
- Criterium 2: ❌ FAILED - [Reden waarom]
```

## 💡 Hints

- **Start met de console** - los eerst alle JavaScript errors op
- **Test één functie tegelijk** - debuggen is makkelijker in kleine stappen  
- **Use React DevTools** - inspecteer component state en props
- **Console.log is je vriend** - log variabelen om te zien wat er gebeurt
- **Read error messages** - ze vertellen je vaak precies wat er mis is
- **Google error messages** - als je niet weet wat ze betekenen


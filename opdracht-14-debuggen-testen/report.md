RAPPORTAGE
Bug Fixes
Bug 1  useState & verkeerde setter

Probleem: useState ontbrak en er werd setMovie gebruikt inplaats van setMovies.

Oorzaak: Vergeten import en typefout.

Oplossing: useState toegevoegd en juiste setter gebruikt.

Bug 2  Duplicate check fout

Probleem: Duplicate logica stond verkeerd.

Oorzaak: Verkeerde voorwaarde.

Oplossing: Check gecorrigeerd + case insensitive vergelijking toegevoegd.

Bug 3  Lege input toegestaan

Probleem: Alleen spaties werden geaccepteerd, input werd niet geleegd.

Oorzaak: Geen trim() en verkeerde plaats van setMovie("").

Oplossing: trim() toegevoegd en input wordt na toevoegen leeggemaakt.

Bug 4  MovieList fouten

Probleem: .map zonder key, foute imports.

Oorzaak: Corrupt / incorrect bestand.

Oplossing: MovieList herschreven en key toegevoegd.

 Testresultaten
User Story 1  Films toevoegen

 PASSED

User Story 2  Films verwijderen

 PASSED

User Story 3  Geen duplicates

PASSED

User Story 4  Lege lijst melding

 PASSED

 Testscenario’s

Films toevoegen en verwijderen werken correct

Duplicate melding verschijnt

Lege input geeft foutmelding

Lege lijst melding werkt goed

Edge cases (spaties / lange namen / speciale tekens) werken correct
# How to sideprosjekt

Velkommen til "How to sideprosjekt"!
test
Dette repoet tilhører en workshop/arrangement som handler om å lage sitt eget sideprosjekt. Du behøver ikke å ha deltatt for å bruke dette git-repoet.

- [How to sideprosjekt](#how-to-sideprosjekt)
  - [Forutsetninger](#forutsetninger)
  - [Hvordan starte?](#hvordan-starte)
  - [Nyttige lenker](#nyttige-lenker)
  - [Oppgaver](#oppgaver)

## Forutsetninger

Vi forventer at du har `node` og `npm` installert. For å laste ned til ditt operativsystem sjekk innstruksene her:

- **På Mac**: `node` og `npm` kan enkelt installeres ved å bruke [Homebrew](https://brew.sh). Åpne terminalen og kjør kommandoen `brew install node`. Om du ikke Homebrew, kan du laste ned `node` fra [Node.js sin offisielle nettside](https://nodejs.org/en/download).
- **Windows-brukere**: Besøk [Node.js sin offisielle nettside](https://nodejs.org/en/download) og last ned den relevante installasjonsfilen for ditt system.
- **Linux-brukere**: Sjekk ut pakkehåndteringssystemet som følger med din distro for å installere `node` og `npm`.

## Hvordan starte?

Du kan enten starte ved å forke dette repoet og hoppe til steg 3, eller du kan følge stegene under.

1. Lag et nytt Next.js-prosjekt ved å kjøre `npx create-next-app@latest` i terminalen.

```bash
npx create-next-app@latest
```

2. Følg deretter den interaktive installasjonen. Vi anbefaler å velge TypeScript som språk, bruke ESLint og Tailwind CSS, samt også å velge "App Router".

3. Når prosjektet er ferdig installert, må du først navigere til prosjektmappen, og deretter installere avhengigheter.

```bash
cd <prosjektnavn>
npm install
```

4. Start prosjektet ved å kjøre `npm run dev`.

```bash
npm run dev
```

Dette vil starte en lokal server på `http://localhost:3000`. Når du endrer filer, vil nettsiden automatisk oppdatere seg selv.

## Nyttige lenker

- [Next.js sin dokumentasjon](https://nextjs.org/docs)
- [React sin dokumentasjon](https://react.dev)
- [Tailwind CSS sin dokumentasjon](https://tailwindcss.com/docs)
- [ChatGPT](https://chat.openai.com) eller [Chat UiB](https://chat.uib.no) (her får man og GPT-4)

Om du bruker VSCode anbefaler vi å laste ned [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

## Oppgaver

_(Valgfritt! Gjerne lag noe eget.):_

Vi har laget noen oppgaver for deg som du kan prøve å løse. Disse oppgavene kommer til å ta deg gjennom grunnleggende React og Next.js. Målet kommer til å være å lage en enkel portefølje/blogg-side.

Det kommer til å være noen eksempler til kode på hvordan du kan "løse" oppgavene, men de er ikke nødvendigvis en fasit. Om du har lyst til å gjøre noe annerledes, er det bare å kjøre på! Oppgavene er laget for å gi deg en pekepinn på hva du kan gjøre.

Før du starter på oppgavene anbefaler vi å forke dette repoet til din egen GitHub-konto. Om du gjør det kan du også følge [how-to-deploy](./oppgaver/how-to-deploy.md) for å lære hvordan du kan deploye prosjektet ditt til Vercel.

1. [Oppgave 1](./oppgaver/oppgave-1.md)
2. [Oppgave 2](./oppgaver/oppgave-2.md) 
3. [Oppgave 3](./oppgaver/oppgave-3.md)
4. [Oppgave 4](./oppgaver/oppgave-4.md)
5. [Oppgave 5](./oppgaver/oppgave-5.md)

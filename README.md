# Portfolio - Loic Muller

Portfolio web personnel, SPA React + Express API.

## Stack

- **Client** : React 18+, TypeScript, Vite, Tailwind CSS
- **Server** : Express.js, TypeScript

## Installation

```bash
# Server
cd server
npm install

# Client
cd ../client
npm install
```

## Developpement

Lancer les deux en parallele :

```bash
# Terminal 1 - Server (port 3001)
cd server
npm run dev

# Terminal 2 - Client (port 5173)
cd client
npm run dev
```

Le client proxy automatiquement les appels `/api` vers le serveur.

## Build

```bash
# Server
cd server
npm run build

# Client
cd client
npm run build
```

## API

- `GET /api/projects?lang=fr` - Liste des projets

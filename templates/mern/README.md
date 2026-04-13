# {{PROJECT_NAME}}

A full-stack MERN application (MongoDB, Express, React, Node.js).

## Structure

```
├── client/          React frontend (Vite)
└── server/          Express API server
```

## Getting Started

```bash
cd {{PROJECT_NAME}}

# Install root tooling
npm install

# Install client + server dependencies
npm run setup

# Copy environment variables
cp server/.env.example server/.env

# Run frontend and backend together
npm run dev
```

## Environment Variables

Copy `server/.env.example` to `server/.env` and update the values.

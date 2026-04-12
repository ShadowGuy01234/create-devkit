# {{PROJECT_NAME}}

A full-stack MERN application (MongoDB, Express, React, Node.js).

## Structure

```
├── client/          React frontend (Vite)
└── server/          Express API server
```

## Getting Started

```bash
# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install

# Copy environment variables
cp server/.env.example server/.env

# Run both in development
# Terminal 1:
cd client && npm run dev

# Terminal 2:
cd server && npm run dev
```

## Environment Variables

Copy `server/.env.example` to `server/.env` and update the values.

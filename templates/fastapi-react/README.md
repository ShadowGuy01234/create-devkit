# {{PROJECT_NAME}}

A full-stack application with FastAPI backend and React frontend.

## Structure

```
├── frontend/        React app (Vite)
└── backend/         FastAPI server (Python)
```

## Getting Started

```bash
cd {{PROJECT_NAME}}

# Recommended: create and activate backend virtual environment
python -m venv backend/venv
source backend/venv/bin/activate   # Windows: backend\venv\Scripts\activate

# Install root tooling
npm install

# Install frontend deps + backend Python deps
npm run setup

# Copy environment variables
cp backend/.env.example backend/.env

# Run frontend and backend together
npm run dev
```

## Environment Variables

Copy `backend/.env.example` to `backend/.env` and update the values.

# {{PROJECT_NAME}}

A full-stack application with FastAPI backend and React frontend.

## Structure

```
├── frontend/        React app (Vite)
└── backend/         FastAPI server (Python)
```

## Getting Started

```bash
# Frontend
cd frontend && npm install && npm run dev

# Backend
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

## Environment Variables

Copy `backend/.env.example` to `backend/.env` and update the values.

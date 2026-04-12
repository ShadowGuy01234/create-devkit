# {{PROJECT_NAME}}

A Next.js application with Prisma ORM.

## Getting Started

```bash
npm install
npx prisma generate
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Database

This project uses Prisma with SQLite by default. Update the `DATABASE_URL` in `.env`
to use PostgreSQL or MySQL in production.

```bash
npx prisma db push      # sync schema to database
npx prisma studio       # open database GUI
```

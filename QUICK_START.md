# Quick Start

## 1. Install everything

From `/home/runner/work/aiinvoiices/aiinvoiices`:

```bash
npm run install:all
```

## 2. Create env files

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

Fill in:
- `backend/.env`
  - `MONGODB_URI`
  - `CLERK_SECRET_KEY`
  - `GEMINI_API_KEY`
- `frontend/.env.local`
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
  - `NEXT_PUBLIC_API_BASE=http://localhost:4000`

## 3. Start both apps

```bash
npm run dev
```

Open:
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## Helpful commands

```bash
npm run dev:backend
npm run dev:frontend
npm run build
npm run lint:frontend
```

## Current known blockers

- No Clerk auth without real Clerk keys
- No AI invoice generation without `GEMINI_API_KEY`
- No database-backed CRUD without `MONGODB_URI`
- `npm run lint:frontend` currently reports pre-existing frontend lint issues

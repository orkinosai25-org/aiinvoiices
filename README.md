# PromptToInvoice

PromptToInvoice is an AI-assisted invoice application with a Next.js frontend and an Express/MongoDB backend.

## Repository status

The repository now contains the extracted contents of `frontend.zip` and `backend.zip` in:

- `/home/runner/work/aiinvoiices/aiinvoiices/frontend`
- `/home/runner/work/aiinvoiices/aiinvoiices/backend`

The uploaded archives also contained environment files and dependency artifacts. Those were intentionally **not committed**; use the included `.env.example` files instead.

## Stack

### Frontend
- Next.js 16
- React 19
- Clerk
- Tailwind CSS

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Clerk middleware
- Google Gemini API

## Project structure

```text
aiinvoiices/
├── backend/
│   ├── .env.example
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── .env.example
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── next.config.mjs
├── package.json
└── README.md
```

## Requirements

- Node.js 20+
- npm 10+
- MongoDB connection string
- Clerk keys
- Google Gemini API key

Validated in this repo with:
- Node.js `v24.18.0`
- npm `11.16.0`

## Setup

### 1. Install dependencies

From `/home/runner/work/aiinvoiices/aiinvoiices`:

```bash
npm run install:all
```

### 2. Configure environment variables

#### Backend

Copy the example file and fill in the real values:

```bash
cp backend/.env.example backend/.env
```

Required backend values:

```env
PORT=4000
FRONTEND_URL=http://localhost:3000
BACKEND_PUBLIC_URL=http://localhost:4000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
```

#### Frontend

Copy the example file and fill in the real values:

```bash
cp frontend/.env.example frontend/.env.local
```

Required frontend values:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
NEXT_PUBLIC_API_BASE=http://localhost:4000
```

## Run the project

### Run frontend and backend together

From `/home/runner/work/aiinvoiices/aiinvoiices`:

```bash
npm run dev
```

This starts:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:4000`

### Run each app separately

```bash
cd /home/runner/work/aiinvoiices/aiinvoiices/backend
npm start
```

```bash
cd /home/runner/work/aiinvoiices/aiinvoiices/frontend
npm run dev
```

## Useful commands

```bash
# install everything
npm run install:all

# run both apps
npm run dev

# run backend only
npm run dev:backend

# run frontend only
npm run dev:frontend

# build frontend production bundle
npm run build

# run frontend lint checks
npm run lint:frontend
```

## Validation performed

The following commands were run successfully during repository recovery and the July 2026 stabilization pass:

```bash
npm install
npm run install:all
npm run build
npm run dev
curl http://127.0.0.1:4000/
curl http://127.0.0.1:3000/
curl http://127.0.0.1:3000/app
```

Confirmed results:
- Frontend production build succeeds.
- Backend starts and responds with `API WORKING`.
- Root `npm run dev` starts the frontend and backend commands together.
- The frontend home page now boots without Clerk keys instead of failing with HTTP 500.
- Protected frontend routes now render a configuration notice when Clerk is not configured.

## Known blockers / follow-up work

These are not extraction problems anymore, but they still affect full local use:

1. **Runtime integrations still need real credentials**
   - Clerk auth will not function without valid Clerk keys.
   - AI invoice generation will not work without `GEMINI_API_KEY`.
   - Invoice/profile persistence requires a working `MONGODB_URI`.

2. **Backend now starts without MongoDB, but DB-backed routes still need a real database**
   - Without `MONGODB_URI`, the server stays up for local bootstrapping and health checks.
   - Create/update/read invoice and business-profile flows still require MongoDB.

3. **Frontend lint still fails on pre-existing component issues**
   - `npm run lint:frontend` currently reports 40 problems (27 errors, 13 warnings) in application code.
   - High-signal failures remain in files such as:
     - `frontend/src/components/AiInvoiceModal.jsx`
     - `frontend/src/components/AppShell.jsx`
     - `frontend/src/screens/CreateInvoice.jsx`
   - These include React compiler warnings, unescaped entities, and legacy `<img>` usage.

4. **Frontend dependencies currently have high-severity audit findings**
   - `npm audit` in `frontend/` reports 3 high-severity vulnerabilities through the current `next` dependency chain (`next`, nested `postcss`, and `sharp`).
   - This pass did not force a framework downgrade or speculative dependency migration; upgrade planning is still needed.

## Notes on fixes applied

During extraction/bootstrap, the following structural fixes were made:
- excluded `node_modules` and uploaded env files from the extracted archives
- added root `.gitignore`
- added `backend/.env.example` and `frontend/.env.example`
- changed backend DB setup to use `MONGODB_URI` instead of a baked-in connection string
- allowed backend startup even when MongoDB is not configured yet
- ensured `backend/uploads/` exists in the repo
- aligned business-profile upload fields with the names the frontend actually sends
- updated frontend lint wiring for the installed Next.js/ESLint toolchain

During the stabilization pass, the following additional fixes were made:
- made frontend runtime boot without Clerk keys by falling back to an unauthenticated mode for public pages
- changed protected frontend routes to show an explicit Clerk configuration notice instead of crashing
- stopped Gemini client initialization from emitting extra startup warnings when no API key is configured
- fixed business-profile response/storage mismatches for `signatureOwnerName`, `signatureOwnerTitle`, and `notes`
- fixed the broken `success:false.valueOf` 404 response in the business-profile update controller
- added the missing invoice `notes` field to the backend schema so AI/manual notes are preserved

## Recommended next steps

1. Add real environment values.
2. Verify Clerk sign-in flow end-to-end now that public pages boot without auth.
3. Verify MongoDB-backed invoice and business-profile CRUD, especially legacy records created before the profile-field fix.
4. Verify Gemini-powered invoice generation with a live API key.
5. Clean up the remaining frontend lint violations and React compiler warnings.
6. Upgrade the frontend dependency stack to clear the current high-severity audit findings.

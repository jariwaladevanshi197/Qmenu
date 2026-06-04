# Q-Menu — New Stack Setup Guide

## Prerequisites
- Node.js 18+
- MySQL (or keep using the InfinityFree DB)

---

## Backend Setup

```bash
cd backend

# 1. Install dependencies (already done)
npm install

# 2. Configure .env (already created — edit DATABASE_URL if needed)
# The current .env points to your InfinityFree DB

# 3. Generate Prisma client
npm run db:generate

# 4. Push schema to DB (creates new tables alongside old ones)
npm run db:push

# 5. Start dev server
npm run dev
# → API running at http://localhost:5000
```

---

## Frontend Setup

```bash
cd frontend

# 1. Install dependencies (already done)
npm install

# 2. .env is already configured to point to localhost:5000

# 3. Start dev server
npm run dev
# → App running at http://localhost:5173
```

---

## URLs

| Panel | URL |
|---|---|
| Super Admin Login | http://localhost:5173/admin/login |
| Restaurant Login | http://localhost:5173/restro/login |
| Customer Menu | http://localhost:5173/menu/{restaurant-slug} |

---

## First Login

**Super Admin** — You need to hash the existing plain MD5 password. Run this once:

```js
// In a node REPL:
import bcrypt from 'bcryptjs';
const hash = await bcrypt.hash('yourpassword', 10);
// UPDATE admin SET password = hash WHERE username = 'suratbest';
```

Or use the old PHP system to log in and then switch over.

**Restaurant** — Same: hash the restaurant passwords in the new `restro` table.

---

## Important Notes

1. **Schema migration**: Run `npm run db:push` — Prisma will create the new tables. The old PHP tables remain untouched.
2. **Passwords**: Old passwords are MD5 hashed. New system uses bcrypt. You'll need to reset passwords for existing restaurants.
3. **QR codes**: New QR codes will be generated pointing to `/menu/{slug}` (the new frontend URL).
4. **Uploads**: Images/PDFs now stored in `backend/uploads/`. Old images in `download/` need to be moved over.

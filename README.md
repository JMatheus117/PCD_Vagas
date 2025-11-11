Se atentar as versoes ou na instalação ou na package



Produção: npm i express cors dotenv jsonwebtoken bcrypt zod

Dev: npm i -D typescript ts-node nodemon @types/node @types/express @types/jsonwebtoken @types/bcrypt prisma

Init TypeScript: npx tsc --init

Init Prisma: npx prisma init

Configure .env com DATABASE_URL do PostgreSQL e JWT_SECRET.

Rodar migrações após schema: npx prisma migrate dev --name init

Front

npm create vite@latest frontend -- --template react-ts

Instalar deps: cd frontend && npm i axios react-router-dom

Instalar Tailwind: npm i -D tailwindcss postcss autoprefixer && npx tailwindcss init -p

Configurar Tailwind no tailwind.config.js e estilos globais.

Rodar: npm run dev

Se atentar as versoes.


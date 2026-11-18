# Monster Fighters - Frontend

Frontend React + Vite del proyecto académico Monster Fighters.

## Requisitos
- Node.js instalado.
- Backend Node.js ejecutándose en `http://localhost:3000`.

## Instalación
Desde esta carpeta:

```bash
npm install
```

## Configuración local
Crea un archivo `.env` en esta carpeta con:

```env
VITE_API_URL=http://localhost:3000/api
```

## Ejecutar
```bash
npm run dev
```

Abre la dirección local que muestre Vite (normalmente `http://localhost:5173`).

## Publicación en Vercel
- Root Directory: `mi-frontend`
- Build Command: `npm run build`
- Output Directory: `dist`
- Variable de entorno: `VITE_API_URL=https://TU-BACKEND-EN-RENDER/api`

El archivo `vercel.json` permite que las rutas de React funcionen al recargar una página.

## Notas
- El inicio de sesión, registro y perfil utilizan `/api/auth`.
- El catálogo consulta `GET /api/criatura`. Confirma que esa ruta exista en el backend.
- Objetos/equipamientos y equipo están presentados como secciones en desarrollo.
- Batallas muestra que todavía no está disponible.

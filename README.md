# My News App

Este es un proyecto de ejemplo utilizando Next.js 14 con App Router, MUI (Material-UI) y TypeScript. La aplicación muestra una lista de noticias bolivianas recientes con páginas de detalle para cada noticia. Las imágenes de las noticias se obtienen de [https://picsum.photos](https://picsum.photos).

## Características

- Next.js 14 con App Router
- TypeScript
- MUI (Material-UI) para componentes de UI
- Páginas estáticas y responsivas
- API de noticias mock
- Despliegue en Vercel

## Instalación

1. Clona el repositorio:

   ```bash
   git clone git@github.com:IonVillarreal/my-news-app-nextjs-api-routes.git
   cd my-news-app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno:

   Crea un archivo `.env.local` en la raíz del proyecto y añade la siguiente variable:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8080
   ```

## Uso

1. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

2. Abre [http://localhost:8080](http://localhost:8080) en tu navegador para ver la aplicación.


## Estructura del Proyecto

```plaintext
my-news-app/
├── app/
│   ├── api/
│   │   └── news/
│   │       └── route.ts
│   ├── components/
│   │   └── NewsList.tsx
│   ├── news/
│   │   └── [id]/
│   │       └── page.tsx
│   └── page.tsx
├── public/
│   ├── ...
├── styles/
│   ├── ...
├── .env.local
├── package.json
└── README.md
```

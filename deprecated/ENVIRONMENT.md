# Environment Configuration

This project uses environment variables to configure different deployment scenarios.

## Environment Files

The project includes three environment files:

- `.env` - Default environment (loaded in all modes)
- `.env.development` - Development environment (loaded in dev mode)
- `.env.production` - Production environment (loaded in build mode)

## Environment Variables

### Required Variables

- `VITE_API_URL`: The base URL for the API
- `VITE_BASE_PATH`: The base path for the application routing

## Configuration Examples

### Development Environment (`.env.development`)

```env
VITE_API_URL=http://localhost:3000
VITE_BASE_PATH=/
```

### Production Environment (`.env.production`)

```env
VITE_API_URL=https://your-api-url.com
VITE_BASE_PATH=/school_route_manager_app/
```

### Default Environment (`.env`)

```env
VITE_API_URL=http://localhost:3000
VITE_BASE_PATH=/
```

## How Vite Loads Environment Files

Vite automatically loads environment files based on the current mode:

1. **Development Mode** (`yarn dev`):

    - Loads `.env`
    - Loads `.env.development`
    - `.env.development` overrides `.env`

2. **Production Mode** (`yarn build`):
    - Loads `.env`
    - Loads `.env.production`
    - `.env.production` overrides `.env`

## How It Works

1. **Vite Configuration**: The `base` option in `vite.config.ts` uses `VITE_BASE_PATH`
2. **React Router**: The `basename` prop in `BrowserRouter` uses `VITE_BASE_PATH`
3. **Environment Validation**: The `env.ts` file validates all required environment variables

## Deployment Scenarios

### Local Development

- Base path: `/`
- URL: `http://localhost:5173/`
- Uses: `.env.development`

### GitHub Pages

- Base path: `/school_route_manager_app/`
- URL: `https://username.github.io/school_route_manager_app/`
- Uses: `.env.production`

### Custom Domain

- Base path: `/`
- URL: `https://yourdomain.com/`
- Uses: `.env.production` (with modified VITE_BASE_PATH)

## Commands

- `yarn dev` - Uses development environment
- `yarn build` - Uses production environment
- `yarn preview` - Uses production environment

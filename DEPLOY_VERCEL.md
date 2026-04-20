# Despliegue en Vercel

## 1. Preparar el proyecto

Asegúrate de tener todo commiteado y subido a GitHub:
```bash
git add .
git commit -m "Agregar configuración para Vercel"
git push origin main
```

## 2. Configuración mínima

Tu proyecto ya está listo para Vercel con estos archivos:
- `package.json` con el script `build` = `vite build`
- `vercel.json` para indicar `dist/public`
- `netlify.toml` no afecta en Vercel

## 3. Conectar en Vercel

1. Entra a https://vercel.com
2. Haz login con GitHub
3. Selecciona `Import Project`
4. Elige tu repositorio `JL-SOLUTION`
5. En la pantalla de configuración de deploy:
   - Build command: `pnpm run build`
   - Output directory: `dist/public`
6. Haz clic en `Deploy`

## 4. Variables de Entorno

Si tu app necesita valores de entorno, configúralos en Vercel:
- `VITE_FRONTEND_FORGE_API_KEY` = tu API key de Google Maps
- `VITE_BACKEND_URL` = tu backend en Render (si lo usas)

## 5. Detalles importantes

- `vercel.json` fuerza la construcción estática y el `dist/public`
- La ruta SPA redirige todo a `index.html`
- Si ya usas `pnpm`, Vercel detectará `pnpm install`

## 6. Probar y actualizar

- Si el deploy falla, revisa los logs en Vercel
- Luego de cada cambio, haz push a `main` y Vercel redeployará automáticamente

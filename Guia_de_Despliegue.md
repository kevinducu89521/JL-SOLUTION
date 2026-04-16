# Guía de Despliegue: Hostinger + Render

Esta es la guía paso a paso para lanzar tu página **Hostinger** (donde vivirá tu dominio y diseño) y **Render** (el motor seguro que procesará y enviará los correos 24/7). 

---

## FASE 1: El Servidor de Correos (Backend)

Vamos a encender el motor primero para saber qué dirección tomará en internet y así poder conectar tu diseño con él.

1. Entra a [Render.com](https://render.com) y selecciona **"Get Started"** (Regístrate con tu GitHub).
2. Haz clic en **"New +"** y selecciona **"Web Service"**.
3. Selecciona la opción de conectar un repositorio y escoge tu proyecto `JL-SOLUTION`.
4. En la pantalla de configuración, llena esto:
   *   **Name:** `jlsolution-backend` (o como gustes)
   *   **Environment:** Node
   *   **Build Command:** `npm run build`
   *   **Start Command:** `npm run start`
   *   Elige el plan **Starter ($7/mes)** para que los correos nunca reboten por inactividad.
5. Haz scroll abajo hasta **Environment Variables** y añade las claves de tu correo:
   *   **Key:** `GMAIL_APP_PASSWORD` | **Value:** *(Tu contraseña de aplicación de Gmail que usabas en las pruebas)*
   *   **Key:** `NODE_ENV`          | **Value:** `production`
6. Haz clic en **"Create Web Service"**.
7. **⚠️ MUY IMPORTANTE:** Al terminar de cargar, Render te dará un enlace propio en la esquina superior izquierda (algo como `https://jlsolution-backend.onrender.com`). Lo necesitaremos para el siguiente paso.

---

## FASE 2: Preparativos Locales (Logos y Conexión)

Antes de subir tu diseño a Hostinger, necesitamos hacer unos ajustes finales en tu computadora.

1. Añade los logos reales de tu empresa, ajusta textos y haz los cambios que desees localmente usando `npm run dev` para verlos.
2. Cuando me pases el enlace de Render (de la Fase 1), yo actualizaré el código de tu formulario para que sepa enviar la información a esa dirección en internet.
3. Luego, correremos el comando mágico final: `npm run build`.
4. Esto creará una versión comprimida y lista en la carpeta `dist/public` de tu computadora. ¡Esos son los archivos que subiremos a Hostinger!

---

## FASE 3: Hostinger (Lanzamiento Final)

1. Ve a **Hostinger**
2. Ve al **hPanel** (tu panel de control en Hostinger) y busca el **"Administrador de Archivos"** (File Manager).
3. Entra a la carpeta llamada `public_html`. (Aquí es donde el mundo ve tus archivos).
4. Borra cualquier archivo temporal que tenga Hostinger allí (como `default.php`).
5. **Sube (arrastra y suelta)** absolutamente todo lo que esté *DENTRO* de tu carpeta local `dist/public`.
6. Toca configurar tus correos corporativos en Hostinger (ej: `info@jlsolution.com`), pero la página principal **¡ya estará viva en internet!**

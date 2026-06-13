# Vida — Sociedad Americana de Laboratorios y Policlínicos

Demo de web para **Vida** (laboratorio clínico y policlínicos).
**Multipágina** (vistas separadas con su propia URL) en React + Vite + TypeScript +
Tailwind + Framer Motion + React Router (HashRouter), con efecto **3D sutil** en las tarjetas
y **portal de resultados simulado**.

> ⚠️ Como no se tuvo la web original, el **contenido (servicios, exámenes, contacto,
> testimonios) es PLACEHOLDER inventado** para la demo, marcado en el código. El cliente
> debe reemplazarlo por sus datos reales. **El logo es temporal** (un SVG de texto) hasta
> recibir el archivo original de Vida.

---

## 🚀 Comandos

```bash
npm install      # solo la primera vez
npm run dev      # desarrollo: http://localhost:5173
npm run build    # compila a /dist
npm run preview  # previsualiza el build
```

---

## 🌐 Despliegue manual a GitHub Pages (sin GitHub Actions)

Rutas relativas (`base: './'`) + HashRouter → funciona en cualquier repo sin reconfigurar.

```bash
npm run deploy
```
Publica `dist` en la rama **`gh-pages`**.
Luego en GitHub: **Settings → Pages → Source: rama `gh-pages` / `/(root)`**.

> `public/.nojekyll` incluido. Subir el código a `main` NO publica la web: hay que
> correr `npm run deploy` para publicar la versión construida en `gh-pages`.

---

## 🧩 Vistas (cada una con su URL)

| Ruta                    | Contenido                                                  |
| ----------------------- | ---------------------------------------------------------- |
| `/`                     | Home: hero, servicios y análisis destacados, resultados, testimonios |
| `/especialidades`       | Servicios médicos (consulta, ocupacional, chequeos, domicilio) |
| `/examenes`             | Análisis de laboratorio (clínicos, hematología, microbiología, molecular...) |
| `/servicio/:slug`       | Detalle de cada servicio/análisis (su propia URL)          |
| `/resultados`           | Página de resultados en línea + acceso al portal           |
| `/portal`               | **Portal del paciente SIMULADO**: login → dashboard        |
| `/portal/resultado/:id` | Detalle de cada análisis (valores, rangos, estado, PDF)    |
| `/nosotros`             | Quiénes somos, ventajas, stats, testimonios                |
| `/contacto`             | Formulario + datos + mapa                                  |

Más **WhatsApp flotante** siempre visible.

**Portal demo:** DNI `12345678` · código `VIDA-2026`.

---

## ⚙️ Pendiente del cliente

| Qué | Dónde |
| --- | ----- |
| Datos de contacto reales (tel, email, dirección, redes) | `src/lib/constants.ts` |
| Logo real de Vida (reemplazar el SVG temporal) | `public/images/reciclada/logo.svg` |
| Servicios y exámenes reales | `src/data/services.ts` |
| Testimonios reales | `src/data/content.ts` |
| URL del portal de resultados | `RESULTS_PORTAL_URL` en `constants.ts` |
| ID de Formspree (form de contacto) | `FORMSPREE_ENDPOINT` en `constants.ts` |
| Dirección del mapa | iframe en `src/components/sections/Contacto.tsx` |

Si Formspree no se configura, el formulario deriva el mensaje a **WhatsApp**.

---

## 🎨 Paleta (derivada del logo de Vida)

| Color           | Hex       | Uso                     |
| --------------- | --------- | ----------------------- |
| Azul eléctrico  | `#1E6FD9` | Acento, CTAs            |
| Azul marino     | `#1B3A6B` | Texto, headers, footer  |
| Cian            | `#039BCB` | Apoyo                   |
| Blanco azulado  | `#F5F8FD` | Fondo base              |
```

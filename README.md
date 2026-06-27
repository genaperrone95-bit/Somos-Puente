# Somos Puente — Sitio Web

Sitio **multi-página** construido siguiendo el **Manual de Marca v.1 2026**:
paleta de colores, tipografías (Caveat como reemplazo web de "Handsome Pro" + Helvetica),
tono de voz y elementos gráficos manuscritos (círculos, asteriscos, flechas) de la marca.

Cada sección del menú abre su propia página HTML independiente (no son anclas dentro
de un mismo `index.html`). Los estilos están escritos en **Sass** (`scss/`), organizados
por sección, y se compilan a un único `css/style.css` que es lo que cargan los HTML.

## Estructura

```
somos-puente/
├── index.html               → Inicio: hero + tarjetas para ir a las otras páginas
├── pages/
│   ├── quienes-somos.html      → Historia, Misión/Visión/Valores y Equipo
│   ├── portfolio.html          → Las 3 líneas de trabajo
│   └── contacto.html           → Formulario + datos de contacto
├── css/
│   └── style.css               → ⚠️ GENERADO. No editar a mano, se sobreescribe al compilar.
├── scss/                       → ✅ Editar acá. Partials organizados por sección.
│   ├── main.scss                  → Punto de entrada: importa todo en orden
│   ├── abstracts/
│   │   └── _variables.scss          → Colores, tipografías y breakpoints
│   ├── base/
│   │   ├── _reset.scss               → Reset + body + .container
│   │   ├── _typography.scss          → .eyebrow, .section-title, .section-lead
│   │   ├── _buttons.scss             → .btn y variantes
│   │   └── _doodles.scss             → Círculos, asteriscos y flechas a mano
│   ├── layout/
│   │   ├── _header.scss              → Header, logo, nav y menú móvil
│   │   └── _footer.scss              → Footer
│   └── sections/
│       ├── _hero.scss                → Sección hero (index.html)
│       ├── _explore.scss             → Tarjetas "Recorré el sitio" (index.html)
│       ├── _about.scss               → Historia + Misión/Visión/Valores (Quiénes Somos)
│       ├── _team.scss                → Sección Equipo (Quiénes Somos)
│       ├── _portfolio.scss           → Portfolio
│       └── _contact.scss             → Contacto + formulario
├── js/
│   └── script.js               → Menú móvil + validación del formulario de contacto
├── assets/img/                  → Carpeta vacía lista para tus fotos reales
├── package.json                 → Scripts npm para compilar el Sass (opcional, ver abajo)
└── .gitignore
```

> **Nota sobre rutas:** `index.html` está en la raíz, así que sus links a las demás
> páginas usan `pages/quienes-somos.html`, etc. Los archivos dentro de `pages/` están un
> nivel más abajo, así que vuelven a la raíz con `../` (por ejemplo `../css/style.css` o
> `../index.html`). Si alguna vez movés o renombrás un archivo, esas rutas relativas son
> lo primero que hay que revisar.

## Cómo editar los estilos (Sass)

**Regla simple: para cambiar un color, una tipografía o el estilo de una sección, editá
el archivo dentro de `scss/`, nunca `css/style.css` directamente** (ese archivo se
regenera y vas a perder tus cambios).

¿Dónde buscar según lo que querés cambiar?

| Quiero cambiar... | Editá este archivo |
|---|---|
| Un color de marca o una tipografía | `scss/abstracts/_variables.scss` |
| El header, el logo o el menú | `scss/layout/_header.scss` |
| El footer | `scss/layout/_footer.scss` |
| Botones (`.btn`) | `scss/base/_buttons.scss` |
| El hero de Inicio | `scss/sections/_hero.scss` |
| Las tarjetas "Recorré el sitio" en Inicio | `scss/sections/_explore.scss` |
| La historia / Misión / Visión / Valores | `scss/sections/_about.scss` |
| Las tarjetas del Equipo | `scss/sections/_team.scss` |
| Las tarjetas del Portfolio | `scss/sections/_portfolio.scss` |
| El formulario de Contacto | `scss/sections/_contact.scss` |

Cada media query (responsive) está anidada dentro de su propio selector en el mismo
archivo de la sección — no hay un archivo "responsive" separado donde buscar.

### Cómo compilar (elegí una opción)

**Opción A — Extensión de VS Code (recomendada, sin terminal):**

1. Instalá la extensión **Live Sass Compiler** (buscá "Live Sass Compiler" en el panel
   de Extensiones de VS Code).
2. Abrí `scss/main.scss` y click en **"Watch Sass"** en la barra inferior de VS Code.
3. Cada vez que guardés cualquier partial dentro de `scss/`, se va a regenerar
   automáticamente `css/style.css`.

> Si la extensión te pregunta por la configuración, asegurate de que el archivo de
> salida sea `css/style.css`.

**Opción B — npm (si ya tenés Node.js instalado):**

```bash
npm install        # instala Sass como dependencia de desarrollo (una sola vez)
npm run build:css  # compila scss/main.scss → css/style.css una vez
npm run watch:css  # o: recompila automáticamente cada vez que guardés un cambio
```

## Cómo abrirlo en VS Code

1. Descomprimí la carpeta y abrila en VS Code (`File > Open Folder`).
2. Instalá **Live Server** (para ver el sitio) y, si vas a tocar estilos, **Live Sass
   Compiler** (para compilar el Sass) — ambas desde el panel de Extensiones.
3. Click derecho sobre `index.html` → **Open with Live Server**.
4. Navegá entre páginas con el menú — cada link apunta a su propio archivo `.html`.

## Cosas que tenés que reemplazar antes de publicar

- **Equipo** (`pages/quienes-somos.html`): hay una tarjeta real para "Jaz" (fundadora, según
  el manual) y **dos tarjetas de ejemplo** con borde punteado naranja y la etiqueta
  "Editar ✎" — "Mara Quiroga" (Diseñadora gráfica) y "Sol Ibáñez" (Community Manager).
  Los nombres son inventados a modo de muestra: reemplazalos por los nombres reales,
  ajustá el rol y la bio si hace falta, y quitá el `<span class="edit-badge">` y el
  `<span class="example-tag">(ejemplo)</span>` una vez que pongas los datos reales.
  Buscá el comentario `EDITAR` en el HTML.
- **Contacto** (`pages/contacto.html`): el email, WhatsApp e Instagram son placeholders
  (`hola@somospuente.com.ar`, `@somospuente.estudio`).
- **Portfolio** (`pages/portfolio.html`): las tres tarjetas usan íconos dibujados, no fotos.
  Cuando tengas casos reales, reemplazá el bloque `.port-visual` de cada tarjeta por una
  `<img>` con la foto del proyecto (guardá las imágenes en `assets/img/`).
- **Formulario de contacto**: hoy es una demo visual (no envía mails de verdad). Para que
  funcione necesitás conectarlo a un servicio como Formspree, EmailJS o Netlify Forms, o a
  tu propio backend.

## Cómo agregar una tarjeta de equipo nueva

Copiá un bloque `<article class="team-card">...</article>` dentro de `.team-grid` en
`pages/quienes-somos.html`, cambiá el texto y elegí un color de foto: `team-photo-forest`,
`team-photo-blue` o `team-photo-grosella` (rotalos para no repetir el mismo color seguido,
como indica el manual). No hace falta tocar el Sass para esto.

## Sistema de diseño (resumen)

Definido en `scss/abstracts/_variables.scss`:

| Token | Valor | Uso según el manual |
|---|---|---|
| `--cream` | `#f7dfb9` | Color primario (60%) — fondos de Header/Inicio |
| `--forest` | `#68640d` | Color primario — títulos sobre crema, fondo de "Quiénes Somos" |
| `--tangerine` | `#d8491d` | Color de acento (10%) — CTAs, doodles, ribbons |
| `--blue` | `#7fb5d3` | Color secundario — fondo de "Contacto" |
| `--grosella` | `#471010` | Color secundario — fondo del footer |

Breakpoints (`$bp-tablet`, `$bp-mobile`, `$bp-scribble-show`) también están en ese mismo
archivo si necesitás ajustar a qué ancho de pantalla cambia el diseño.

Tipografías: **Caveat** (script, títulos) + **Helvetica** (texto y nav), igual que el manual.

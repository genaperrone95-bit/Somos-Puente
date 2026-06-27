# Somos Puente — Sitio Web

Sitio **multi-página** construido siguiendo el **Manual de Marca v.1 2026**:
paleta de colores, tipografías (Caveat como reemplazo web de "Handsome Pro" + Helvetica),
tono de voz y elementos gráficos manuscritos (círculos, asteriscos, flechas) de la marca.

Cada sección del menú abre su propia página HTML independiente (no son anclas dentro
de un mismo `index.html`).

## Estructura

```
somos-puente/
├── index.html             → Inicio: hero + tarjetas para ir a las otras páginas
├── css/
│   └── style.css            → Todos los estilos (variables de marca al inicio del archivo)
├── js/
│   └── script.js             → Menú móvil + validación del formulario de contacto
├── assets/img/                → Carpeta vacía lista para tus fotos reales
└── pages/
    ├── quienes-somos.html      → Historia, Misión/Visión/Valores y Equipo
    ├── portfolio.html          → Las 3 líneas de trabajo
    └── contacto.html           → Formulario + datos de contacto
```

> Nota sobre rutas: `index.html` está en la raíz, así que sus links a las demás páginas
> usan `pages/quienes-somos.html`, etc. Los archivos dentro de `pages/` están un nivel
> más abajo, así que vuelven a la raíz con `../` (por ejemplo `../css/style.css` o
> `../index.html`). Si alguna vez movés o renombrás un archivo, esas rutas relativas son
> lo primero que hay que revisar.

## Cómo abrirlo en VS Code

1. Descomprimí la carpeta y abrila en VS Code (`File > Open Folder`).
2. Instalá la extensión **Live Server** (Ritwick Dey) si querés ver cambios en vivo.
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
como indica el manual).

## Sistema de diseño (resumen)

| Token | Valor | Uso según el manual |
|---|---|---|
| `--cream` | `#f7dfb9` | Color primario (60%) — fondos de Header/Inicio |
| `--forest` | `#68640d` | Color primario — títulos sobre crema, fondo de "Quiénes Somos" |
| `--tangerine` | `#d8491d` | Color de acento (10%) — CTAs, doodles, ribbons |
| `--blue` | `#7fb5d3` | Color secundario — fondo de "Contacto" |
| `--grosella` | `#471010` | Color secundario — fondo del footer |

Tipografías: **Caveat** (script, títulos) + **Helvetica** (texto y nav), igual que el manual.


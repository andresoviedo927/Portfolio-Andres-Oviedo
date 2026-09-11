# Portafolio de Andres Oviedo

Prototipo frontend creado con React, TypeScript, Vite y Tailwind CSS 4.

## Desarrollo local

```bash
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:3000/`.

Comandos de validación:

```bash
npm run lint
npm run typecheck
npm run build
npm run format:check
```

## Sistema de diseño

- **Tipografía oficial:** Lexend. Las escalas de display, headline, title, body, body
  strong, label y link se declaran en `src/styles/global.css`.
- **Colores:** los valores y roles semánticos viven en `src/styles/colors.css`. Los
  componentes deben usar los nombres semánticos de Tailwind o variables CSS, nunca
  valores hexadecimales o `rgba()` aislados.
- **Espaciado y elevación:** sus tokens viven en `src/styles/global.css` y se exponen
  también desde `src/styles/theme.ts` para los casos que requieren valores desde TypeScript.
- **Iconografía oficial:** Flaticon UIcons / Interface Icons. Los componentes deben usar
  `src/components/ui/Icon` para mantener una única familia y un mapeo verificable.

## Contenido centralizado

### Agregar o editar textos

Añade el texto a `src/constants/texts.ts` y consúmelo desde `src/constants`. Los textos
visibles no deben duplicarse dentro de los componentes.

### Agregar colores

Declara primero el rol semántico en `src/styles/colors.css`. Si debe utilizarse como clase
de Tailwind, expón el alias correspondiente dentro de `@theme inline` en
`src/styles/global.css`. No agregues colores sueltos en JSX.

### Agregar imágenes

1. Toma el archivo fuente desde:
   `E:\DISEÑO (esto ya se queda)\2026\AO_2026-09-11_Portfolio\Contenido`.
2. Cópialo a `src/assets/images/` con un nombre descriptivo.
3. Impórtalo y expórtalo desde `src/assets/images/index.ts`.
4. Consúmelo mediante ese índice; nunca uses la ruta `E:\...` durante la ejecución.

## Regla base

Textos, colores, tipografía, espaciado, elevaciones, iconos e imágenes tienen una única
fuente de verdad. Se mantiene la arquitectura existente y solo se crean abstracciones
cuando existe reutilización real.

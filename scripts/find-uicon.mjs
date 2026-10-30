import { readdirSync, readFileSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const cssRoot = join(projectRoot, 'node_modules', '@flaticon', 'flaticon-uicons', 'css');
const input = process.argv.slice(2).join(' ').trim();

if (!input) {
  console.error('Uso: npm run icons:find -- <nombre, clase o URL de Flaticon>');
  process.exit(1);
}

const urlSlug = input.match(/\/([^/?#]+?)(?:_\d+)?(?:[?#]|$)/)?.[1] ?? input;
const normalizedQuery = decodeURIComponent(urlSlug)
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/^fi-[a-z]+-/, '')
  .replace(/[^a-z0-9]+/g, '-');

const aliases = new Map([
  ['alineacion-de-graficos', 'chart-line-up'],
  ['buscar-ubicacion', 'search-location'],
  ['calendario-lineas-boligrafo', 'calendar-lines-pen'],
  ['comprobacion-de-usuario', 'user-check'],
  ['cuadrado-a', 'square-a'],
  ['dejar', 'sign-out-alt'],
  ['exclamacion-de-diamante', 'diamond-exclamation'],
  ['hogar', 'house'],
  ['libro-alt', 'book-alt'],
  ['practica', 'practice'],
  ['seleccione', 'select'],
  ['sonido-de-timbre', 'bell-ring'],
  ['telefono-inteligente', 'smartphone'],
  ['usuario', 'user'],
]);

const search = aliases.get(normalizedQuery) ?? normalizedQuery;
const terms = search.split('-').filter(Boolean);

function collectCssFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return collectCssFiles(path);
    return extname(entry.name) === '.css' ? [path] : [];
  });
}

const matches = [];
for (const cssFile of collectCssFiles(cssRoot)) {
  const css = readFileSync(cssFile, 'utf8');
  const classPattern = /\.(fi-[a-z]+-[a-z0-9-]+):before/g;
  let match;

  while ((match = classPattern.exec(css)) !== null) {
    const className = match[1];
    const iconName = className.replace(/^fi-[a-z]+-/, '');
    const exact = iconName === search || className === input;
    const contains = iconName.includes(search);
    const termHits = terms.filter((term) => iconName.includes(term)).length;
    if (!exact && !contains && termHits === 0) continue;

    matches.push({
      className,
      pack: relative(cssRoot, cssFile).replaceAll('\\', '/'),
      score: exact ? 1000 : contains ? 500 : termHits,
    });
  }
}

const unique = [...new Map(matches.map((item) => [item.className, item])).values()]
  .sort((a, b) => b.score - a.score || a.className.localeCompare(b.className))
  .slice(0, 40);

if (unique.length === 0) {
  console.error(`No se encontraron clases Uicons para “${search}”.`);
  process.exit(2);
}

for (const result of unique) {
  console.log(`${result.className.padEnd(42)} ${result.pack}`);
}

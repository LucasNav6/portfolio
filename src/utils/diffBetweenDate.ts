/**
 * Calcula la diferencia entre dos fechas y devuelve una cadena legible con años y meses.
 *
 * @param start - Fecha inicial
 * @param end   - Fecha final o la cadena literal `"Present"` para usar la fecha actual
 * @param lang  - Idioma de salida: `"en"` (por defecto) o `"es"`
 *
 * @returns Ejemplo: `"2 years, 3 months"` / `"2 años, 3 meses"`
 *
 * @throws {TypeError} Si alguna fecha no es válida
 *
 * @example
 * diffBetweenDate(new Date('2020-01-15'), new Date('2023-04-10'));
 * // → "3 years, 3 months"
 *
 * @example
 * diffBetweenDate(new Date('2021-03-01'), 'Present', 'es');
 * // → "x años, y meses"
 */
export function diffBetweenDate(
  start: Date,
  end: Date | 'Present',
  lang: 'en' | 'es' = 'en'
): string {
  assertDate(start, 'start');
  const endDate = end === 'Present' ? new Date() : end;
  assertDate(endDate, 'end');

  if (endDate < start) {
    throw new RangeError('End date must be after start date.');
  }

  let years = endDate.getFullYear() - start.getFullYear();
  let months = endDate.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const labels = {
    en: { y: 'year', ys: 'years', m: 'month', ms: 'months' },
    es: { y: 'año', ys: 'años', m: 'mes', ms: 'meses' },
  }[lang];

  const parts: string[] = [];
  if (years) parts.push(`${years} ${years === 1 ? labels.y : labels.ys}`);
  if (months) parts.push(`${months} ${months === 1 ? labels.m : labels.ms}`);

  return parts.length ? parts.join(', ') : `0 ${labels.ms}`;
}

/* ---------- utilidad interna ---------- */
function assertDate(value: unknown, name: string): asserts value is Date {
  if (!(value instanceof Date) || isNaN(value.getTime())) {
    throw new TypeError(`Invalid Date provided for parameter "${name}".`);
  }
}